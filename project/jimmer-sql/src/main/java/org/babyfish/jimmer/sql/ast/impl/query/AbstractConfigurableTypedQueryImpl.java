package org.babyfish.jimmer.sql.ast.impl.query;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.sql.ast.Selection;
import org.babyfish.jimmer.sql.ast.impl.Ast;
import org.babyfish.jimmer.sql.ast.impl.AstVisitor;
import org.babyfish.jimmer.sql.ast.impl.table.TableSelection;
import org.babyfish.jimmer.sql.ast.impl.table.TableWrappers;
import org.babyfish.jimmer.sql.ast.table.Table;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;
import org.jetbrains.annotations.NotNull;

import java.util.List;
import java.util.Map;

class AbstractConfigurableTypedQueryImpl<R> implements TypedQueryImplementor {

    private TypedQueryData data;

    private AbstractMutableQueryImpl baseQuery;

    public AbstractConfigurableTypedQueryImpl(
            TypedQueryData data,
            AbstractMutableQueryImpl baseQuery
    ) {
        baseQuery.freeze();
        this.data = data;
        this.baseQuery = baseQuery;
    }

    public AbstractMutableQueryImpl getBaseQuery() {
        return baseQuery;
    }

    public TypedQueryData getData() {
        return data;
    }

    @Override
    public List<Selection<?>> getSelections() {
        return data.getSelections();
    }

    @Override
    public void accept(@NotNull AstVisitor visitor) {
        for (Selection<?> selection : data.getSelections()) {
            Ast.from(selection).accept(visitor);
        }
        baseQuery.accept(visitor, data.getOldSelections(), data.isWithoutSortingAndPaging());
    }

    @Override
    public void renderTo(@NotNull SqlBuilder builder) {
        if (data.isWithoutSortingAndPaging() || data.getLimit() == Integer.MAX_VALUE) {
            renderWithoutPaging(builder);
        } else {
            SqlBuilder subBuilder = builder.createChildBuilder();
            renderWithoutPaging(subBuilder);
            subBuilder.build(result -> {
                PaginationContextImpl ctx = new PaginationContextImpl(
                        data.getLimit(),
                        data.getOffset(),
                        result.get_1(),
                        result.get_2()
                );
                baseQuery.getSqlClient().getDialect().paginate(ctx);
                return ctx.build();
            });
        }
        if (data.isForUpdate()) {
            builder.sql(" for update");
        }
    }

    private void renderWithoutPaging(SqlBuilder builder) {
        builder.sql("select ");
        if (data.isDistinct()) {
            builder.sql("distinct ");
        }
        String separator = "";
        for (Selection<?> selection : data.getSelections()) {
            builder.sql(separator);
            if (selection instanceof TableSelection<?>) {
                TableSelection<?> tableSelection = (TableSelection<?>) selection;
                renderAllProps(tableSelection, builder);
            } else if (selection instanceof Table<?>) {
                TableSelection<?> tableSelection = TableWrappers.unwrap((Table<?>)selection);
                renderAllProps(tableSelection, builder);
            } else {
                Ast.from(selection).renderTo(builder);
            }
            separator = ", ";
        }
        baseQuery.renderTo(builder, data.isWithoutSortingAndPaging());
    }

    private static void renderAllProps(TableSelection<?> table, SqlBuilder builder) {
        String separator = "";
        Map<String, ImmutableProp> selectableProps = table
                .getImmutableType()
                .getSelectableProps();
        for (ImmutableProp prop : selectableProps.values()) {
            builder.sql(separator);
            table.renderSelection(prop, builder);
            separator = ", ";
        }
    }
}
