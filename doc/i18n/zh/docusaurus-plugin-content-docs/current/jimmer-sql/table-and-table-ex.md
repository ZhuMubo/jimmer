---
sidebar_position: 4
title: Table和TableEx
---

## 集合关联的问题

让我们来看这个实体定义

```java title="Book.java"

package org.babyfish.jimmer.sql.example.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Entity
public interface Book {

    @Id
    UUID id();

    String name();

    int edition();

    BigDecimal price();

    @ManyToOne
    // highlight-next-line
    BookStore store();

    @ManyToMany
    @JoinTable(
            name = "BOOK_AUTHOR_MAPPING",
            joinColumns = @JoinColumn(name = "BOOK_ID"),
            inverseJoinColumns = @JoinColumn(name = "AUTHOR_ID")
    )
    // highlight-next-line
    List<Author> authors();
}
```

上面的代码中
- `store`是一个多对一关联
- `authors`是一个多对多关联

one-to-one关联和many-to-one关联统称引用关联，one-to-many关联和many-to-many关联统称集合关联。

引用关联和集合关联之间有如下差异

- 查询一个对象，通过引用关联进行table join，在SQL查询结果中，当前主对象不会出现重复记录。
- 查询一个对象，通过集合关联进行table join，在SQL查询结果中，当前主对象会出现重复记录。

基于集合关联的table join会导致重复数据，进而引发以下问题：

1. 如果开发者忘记去重，就会引入bug。

2. 即便开发者没有忘记去重，也不是一个好的选择。开发人员通常会选择在客户端使用`java.util.LinkedHashSet`进行去重。这种做法耗费硬件资源去处理重复数据，对网络和JVM内存而言都是不必要压力。

3. **最重要的一点，对分页查询不友好**。

    在SQL层面对table join连接结果进行分页，往往不是人们所需；更多的场景下，人们希望分页操作被应用在主对象 *（即聚合根对象）*上。

    以Hibernate为例，在这种情况下，Hibernate不得不放弃SQL层面的分页策略，而采用内存层面的分页策略。这样做性能非常低下，为了引起开发人员的重视，Hibernate会在日志中进行告警。如果读者你有Hibernate使用经验，相信下面这条日志会让你感到非常头疼。

    [firstResult/maxResults specified with collection fetch; applying in memory](https://tech.asimio.net/2021/05/19/Fixing-Hibernate-HHH000104-firstResult-maxResults-warning-using-Spring-Data-JPA.html)

    事实上，jimmer-sql提供非常强大的关联对象fetch功能，[Object Fetcher](./query/fetcher)。而正是因为这个原因，Object Fetcher并不使用table join。

综上，在顶级查询中使用集合连接的缺点非常明显，但不可否认，在子查询中使用集合连接仍然有客观的价值。

所以，jimmer-sql有一个重要的设计目标

:::info
1. 基于集合关联的table join，在**顶级**查询中需要被禁止。
2. 基于集合关联的table join，在子查询、update语句和delete语句中仍然可用。
:::

## Table和TableEx

为了支持强类型查询，Annotation processor会根据用户定义的实体接口生成一些源代码。

还是以文章开头的Book实体接口为例，如下两个类型会被自动生成

```java title="BookTable.java（自动生成）"
package org.babyfish.jimmer.sql.example.model;

import java.lang.Integer;
import java.math.BigDecimal;
import java.util.UUID;
import javax.persistence.criteria.JoinType;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.PropExpression;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.ast.table.spi.AbstractTableWrapper;

public class BookTable extends AbstractTableWrapper<Book> {
    public BookTable(Table<Book> table) {
        super(table);
    }

    public Expression<UUID> id() {
        return get("id");
    }

    public PropExpression.Str name() {
        return get("name");
    }

    public PropExpression.Num<Integer> edition() {
        return get("edition");
    }

    public PropExpression.Num<BigDecimal> price() {
        return get("price");
    }

    public BookStoreTable store() {
        return join("store");
    }

    public BookStoreTable store(JoinType joinType) {
        return join("store", joinType);
    }
}
```

```java title="BookTableEx.java（自动生成）"
package org.babyfish.jimmer.sql.example.model;

import javax.persistence.criteria.JoinType;
import org.babyfish.jimmer.sql.ast.table.TableEx;

public class BookTableEx extends BookTable implements TableEx<Book> {
    public BookTableEx(TableEx<Book> table) {
        super(table);
    }

    public AuthorTableEx authors() {
        return join("authors");
    }

    public AuthorTableEx authors(JoinType joinType) {
        return join("authors", joinType);
    }
}
```

观察这两个自动生成的类型，不难看出

- `BookTableEx`继承了`BookTable`。
- `BookTable`不支持集合关联，但支持普通字段和引用关联(本例中为`store`)。
- `BookTableEx`增加了对集合关联的支持（本例中为`authors`）。

因此jimmer-sql的API遵循如下的模式
- 顶级查询只能基于`Table`创建。
- 子查询、update语句和delete语句既可基于`Table`创建，也可基于`TableEx`创建。

接下来，以顶层查询和子查询为例，做对比性示范。

### 只能基于Table创建的顶层查询

顶层查询只能基于Table创建
```java
sqlClient.createQuery(BookTable.class, (q, book) -> ...);
```

如果以TableEx作为其参数
```java
sqlClient.createQuery(BookTableEx.class, (q, book) -> ...);
```
将会导致异常
:::caution
Top-level query does not support TableEx
:::

```java
List<Book> books = sqlClient
    .createQuery(BookTable.class, (q, book) -> {
        return q
            .where(
                book
                    // highlight-next-line
                    .name() // 可以访问普通字段name
                    .eq("Book Name")
            )
            .where(
                book
                    // highlight-next-line
                    .store() // 也可以对引用关联store进行join
                    .name()
                    .eq("Store Name")
            )
            /* 
             * 然而，无法使用"book.authors()"，因为authors()
             * 方法被定义在了BookTableEx中，而非BookTable中。
             * 
             * 即，编译时禁止了用户在顶级查询中对集合关联进行join
             */
            .select(book);
    })
    .execute();
books.stream().forEach(System.out::println);
```

最终生成的SQL如下

```sql
select 
    tb_1_.ID, 
    tb_1_.NAME, 
    tb_1_.EDITION, 
    tb_1_.PRICE, 
    tb_1_.STORE_ID 
from BOOK as tb_1_ 
inner join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID 
where 
    tb_1_.NAME = ? 
and 
    tb_2_.NAME = ?
```
### 允许基于TableEx创建的子查询

和顶级查询不同，子查询、update语句和delete语句允许使用TableEx

```java
List<Author> authors = sqlClient
    .createQuery(AuthorTable.class, (q, author) -> {
        return q
                .where(author.firstName().eq("Author Name"))
                .where(
                    q.createWildSubQuery(
                        // highlight-next-line
                        BookTableEx.class, // 子查询允许使用TableEx
                        (sq, book) -> {
                            sq.where(
                                book.name().eq("Book name"),
                                book
                                    // highlight-next-line
                                    .authors() // 对集合关联进行join
                                    .eq(author)
                            );
                        }
                    ).exists()
                )
                .select(author);
    })
    .execute();
authors.stream().forEach(System.out::println);
```

最终生成的SQL如下

```sql
select 
    tb_1_.ID, 
    tb_1_.FIRST_NAME, 
    tb_1_.LAST_NAME, 
    tb_1_.GENDER 
from AUTHOR as tb_1_ 
where 
    tb_1_.FIRST_NAME = ? 
    and exists (
        select 1 
        from BOOK as tb_2_ 
        /* highlight-start */
        inner join BOOK_AUTHOR_MAPPING as tb_3_ 
            on tb_2_.ID = tb_3_.BOOK_ID 
        /* highlight-end */
        where 
            tb_2_.NAME = ? 
        and 
            tb_3_.AUTHOR_ID = tb_1_.ID
    )
```

## 突破软性限制

禁止在顶级查询中使用集合关联，绝大部分情况下都是合理的，但并非所有情况都合理。

比如，用户并不查询整个对象，而且查询个别字段，并使用SQL关键字`distinct`来抵消对集合关联join所带来的副作用。这种场景是完全合理的。

所以，禁止在顶级查询中使用集合关联是一个软性限制，而非刚性限制。可以轻松突破。

有两种突破方法

1. 使用弱类型API *(不推荐)*

    ```java
    List<UUID> bookIds = sqlClient
        .createQuery(BookTable.class, (q, book) -> {
            return q
                .where(
                    book
                        // highlight-next-line
                        .<AuthorTable>join("authors")
                        .firstName()
                        .ilike("%")
                )
                .select(book.id());
        })
        .distinct()
        .execute();
    bookIds.stream().forEach(System.out::println);
    ```

2. 把Table强制转换为TableEx *(推荐)*

    ```java
    List<UUID> bookIds = sqlClient
        .createQuery(BookTable.class, (q, book) -> {
            return q
                .where(
                    // highlight-next-line
                    ((BookTableEx)book)
                        // highlight-next-line
                        .authors()
                        .firstName()
                        .ilike("%")
                )
                .select(book.id());
        })
        .distinct()
        .execute();
    bookIds.stream().forEach(System.out::println);
    ```

无论采用何种方法，都能突破这个软性限制，在顶级查询中使用集合关联。最终生成的SQL如下

```sql
select 
    distinct tb_1_.ID 
from BOOK as tb_1_ 
/* highlight-start */
inner join BOOK_AUTHOR_MAPPING as tb_2_ 
    on tb_1_.ID = tb_2_.BOOK_ID 
inner join AUTHOR as tb_3_ 
    on tb_2_.AUTHOR_ID = tb_3_.ID 
/* highlight-end */
where lower(tb_3_.FIRST_NAME) like ?
```

:::note
加上这个限制，又让这个限制可以轻松突破。如此看似矛盾的做法目的何在？

当开发人员真要这么做时，确保他明白自己在干什么。
:::