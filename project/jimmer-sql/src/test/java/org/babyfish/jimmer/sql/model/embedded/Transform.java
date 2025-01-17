package org.babyfish.jimmer.sql.model.embedded;

import org.babyfish.jimmer.pojo.StaticType;
import org.babyfish.jimmer.sql.Entity;
import org.babyfish.jimmer.sql.Id;
import org.babyfish.jimmer.sql.PropOverride;
import org.jetbrains.annotations.Nullable;

@Entity
@StaticType(alias = "default", topLevelName = "TransformInput")
public interface Transform {

    @Id
    long id();

    Rect source();

    @PropOverride(prop = "leftTop.x", columnName = "TARGET_LEFT")
    @PropOverride(prop = "leftTop.y", columnName = "TARGET_TOP")
    @PropOverride(prop = "rightBottom.x", columnName = "TARGET_RIGHT")
    @PropOverride(prop = "rightBottom.y", columnName = "TARGET_BOTTOM")
    @Nullable
    Rect target();
}
