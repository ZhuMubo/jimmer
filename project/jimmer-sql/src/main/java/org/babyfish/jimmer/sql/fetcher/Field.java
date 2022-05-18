package org.babyfish.jimmer.sql.fetcher;

import org.babyfish.jimmer.meta.ImmutableProp;

public interface Field {

    ImmutableProp getProp();

    int getBatchSize();

    int getLimit();

    int getDepth();

    Fetcher<?> getChildFetcher();

    boolean isSimpleField();
}