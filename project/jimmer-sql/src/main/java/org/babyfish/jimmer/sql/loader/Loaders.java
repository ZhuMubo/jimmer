package org.babyfish.jimmer.sql.loader;

import org.babyfish.jimmer.meta.TypedProp;
import org.babyfish.jimmer.sql.ast.table.Table;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

/**
 * This interface is designed for Spring-GraphQL;
 *
 * - If you use GraphQL, please use this interface, not ObjectFetcher
 * - If you do not use GraphQL, please use Object Fetcher, not this interface
 */
public interface Loaders {

    <S, T> Map<S, T> batchLoad(Collection<S> sources, TypedProp.Scalar<S, T> prop);

    <S, T> Map<S, T> batchLoad(Collection<S> sources, TypedProp.Reference<S, T> prop);

    <S, T> Map<S, List<T>> batchLoad(Collection<S> sources, TypedProp.ReferenceList<S, T> prop);

    <S, T> ValueLoader<S, T> value(TypedProp.Scalar<S, T> prop);

    <SE, ST extends Table<SE>, TE, TT extends Table<TE>>
    ReferenceLoader<SE, TE, TT> reference(
            Class<ST> sourceTableType,
            Function<ST, TT> block
    );

    <SE, ST extends Table<SE>, TE, TT extends Table<TE>>
    ListLoader<SE, TE, TT> list(
            Class<ST> sourceTableType,
            Function<ST, TT> block
    );
}
