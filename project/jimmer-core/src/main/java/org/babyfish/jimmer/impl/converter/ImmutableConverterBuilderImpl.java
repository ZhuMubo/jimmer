package org.babyfish.jimmer.impl.converter;

import org.babyfish.jimmer.Draft;
import org.babyfish.jimmer.ImmutableConverter;
import org.babyfish.jimmer.impl.util.PropName;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.TargetLevel;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.*;
import java.util.function.*;
import java.util.stream.Collectors;

public class ImmutableConverterBuilderImpl<Dynamic, Static> implements ImmutableConverter.Builder<Dynamic, Static> {

    private final ImmutableType immutableType;

    private final Class<Static> staticType;

    private final Map<String, StaticProp> staticPropMap;

    private BiConsumer<Draft, Static> draftModifier;

    private Map<ImmutableProp, ImmutableConverterImpl.Field> mappingMap = new HashMap<>();

    public ImmutableConverterBuilderImpl(Class<Dynamic> immutableType, Class<Static> staticType, boolean byField) {
        this.immutableType = ImmutableType.get(immutableType);
        this.staticType = staticType;
        this.staticPropMap = staticProps(staticType, byField);
        if (staticPropMap.isEmpty()) {
            throw new IllegalArgumentException(
                    "Cannot map the static type \"" +
                            staticType.getName() +
                            "\" by " +
                            (byField ? "FIELDS" : "METHODS") +
                            ", not static properties has been found"
            );
        }
    }

    @Override
    public ImmutableConverter.Builder<Dynamic, Static> map(
            ImmutableProp prop,
            String staticPropName,
            Consumer<ImmutableConverter.Mapping<Static, ?>> block
    ) {
        validateProp(prop);
        mapImpl(prop, staticPropName, block, false, false);
        return this;
    }

    @Override
    public ImmutableConverter.Builder<Dynamic, Static> mapList(
            ImmutableProp prop,
            String staticPropName,
            Consumer<ImmutableConverter.ListMapping<Static, ?>> block
    ) {
        validateProp(prop);
        if (!prop.isReferenceList(TargetLevel.OBJECT) && !prop.isScalarList()) {
            throw new IllegalArgumentException(
                    "\"" +
                            prop +
                            "\" is not list property"
            );
        }
        mapImpl(prop, staticPropName, block, true, false);
        return this;
    }

    @Override
    public ImmutableConverter.Builder<Dynamic, Static> unmapStaticProps(Collection<String> staticPropNames) {
        for (String staticPropName : staticPropNames) {
            staticProp(staticPropName, false).mapped = true;
        }
        return this;
    }

    @Override
    public ImmutableConverter.Builder<Dynamic, Static> setDraftModifier(BiConsumer<Draft, Static> draftModifier) {
        this.draftModifier = draftModifier;
        return this;
    }

    @Override
    public ImmutableConverter<Dynamic, Static> build() {
        for (ImmutableProp prop : immutableType.getProps().values()) {
            if (!prop.isAssociation(TargetLevel.ENTITY) && !mappingMap.containsKey(prop)) {
                mapImpl(
                        prop,
                        prop.getName(),
                        null,
                        prop.isScalarList() || prop.isReferenceList(TargetLevel.OBJECT),
                        true
                );
            }
        }
        List<StaticProp> unmappedStaticProps = staticPropMap
                .values()
                .stream()
                .filter(it -> !it.mapped)
                .collect(Collectors.toList());
        if (!unmappedStaticProps.isEmpty()) {
            throw new IllegalArgumentException(
                    unmappedStaticProps + " has not not been mapped"
            );
        }
        return new ImmutableConverterImpl<>(
                immutableType,
                staticType,
                mappingMap.values().stream().filter(Objects::nonNull).collect(Collectors.toList()),
                draftModifier
        );
    }

    private void validateProp(ImmutableProp prop) {
        ImmutableType declaringType = prop.getDeclaringType();
        for (ImmutableType type = immutableType; type != null; type = type.getSuperType()) {
            if (declaringType == type) {
                return;
            }
        }
        throw new IllegalArgumentException(
                "\"" +
                        prop +
                        "\" is not property of \"" +
                        immutableType +
                        "\""
        );
    }

    @SuppressWarnings("unchecked")
    private void mapImpl(
            ImmutableProp prop,
            String staticPropName,
            Consumer<?> mappingBuilderConsumer,
            boolean treatAsList,
            boolean autoMapping
    ) {
        StaticProp staticProp = staticProp(staticPropName, autoMapping);
        if (staticProp == null) {
            return;
        }
        staticProp.mapped = true;
        FieldBuilder builder = treatAsList ?
                new ListMappingImpl<>(prop, staticProp.method, staticProp.field, autoMapping) :
                new MappingImpl<>(prop, staticProp.method, staticProp.field, autoMapping);
        if (mappingBuilderConsumer != null) {
            ((Consumer<FieldBuilder>) mappingBuilderConsumer).accept(builder);
        }
        mappingMap.put(prop, builder.build());
    }

    private StaticProp staticProp(String staticPropName, boolean nullable) {
        StaticProp staticProp = staticPropMap.get(staticPropName);
        if (nullable || staticProp != null) {
            return staticProp;
        }
        throw new IllegalArgumentException(
                "Illegal static property name \"" +
                        staticPropName +
                        "\", available choices are " +
                        staticPropMap.keySet()
        );
    }

    private static Map<String, StaticProp> staticProps(Class<?> staticType, boolean byField) {
        Map<String, StaticProp> possiblePropMap = new HashMap<>();
        possibleStaticProps(staticType, byField, possiblePropMap);
        Map<String, StaticProp> map = new TreeMap<>();
        for (Map.Entry<String, StaticProp> e : possiblePropMap.entrySet()) {
            if (e.getValue().use()) {
                map.put(e.getKey(), e.getValue());
            }
        }
        return map;
    }

    private static void possibleStaticProps(Class<?> staticType, boolean byField, Map<String, StaticProp> map) {
        if (staticType == null || staticType == Object.class) {
            return;
        }
        if (!byField) {
            for (Method method : staticType.getDeclaredMethods()) {
                PropName propName = PropName.fromBeanGetter(method);
                if (propName != null) {
                    StaticProp staticProp = map.get(propName.getText());
                    if (staticProp == null) {
                        staticProp = new StaticProp(propName.getText(), propName.isRecordStyle());
                        staticProp.method = method;
                        map.put(propName.getText(), staticProp);
                    } else if (staticProp.mayBe) {
                        staticProp.method = method;
                        staticProp.mayBe = propName.isRecordStyle();
                    }
                }
            }
        }
        for (Field field : staticType.getDeclaredFields()) {
            if (Modifier.isStatic(field.getModifiers())) {
                continue;
            }
            StaticProp staticProp = map.get(field.getName());
            if (staticProp == null) {
                staticProp = new StaticProp(field.getName(), !byField);
                staticProp.field = field;
                map.put(field.getName(), staticProp);
            } else if (staticProp.mayBe) {
                staticProp.field = field;
                staticProp.mayBe = !byField;
            }
        }
        possibleStaticProps(staticType.getSuperclass(), byField, map);
        for (Class<?> itfType : staticType.getInterfaces()) {
            possibleStaticProps(itfType, byField, map);
        }
    }

    private static class StaticProp {
        final String name;
        boolean mayBe;
        Method method;
        Field field;
        boolean mapped;

        StaticProp(String name, boolean mayBe) {
            this.name = name;
            this.mayBe = mayBe;
        }

        boolean use() {
            if (!mayBe) {
                prepare();
                return true;
            }
            if (method != null && field != null) {
                Class<?> methodType = method.getReturnType();
                if (methodType == field.getType()) {
                    prepare();
                    return true;
                }
            }
            return false;
        }

        private void prepare() {
            if (method != null) {
                method.setAccessible(true);
            }
            if (field != null) {
                field.setAccessible(true);
            }
        }

        @Override
        public String toString() {
            return method != null ? method.toString() : field.toString();
        }
    }
    
    private interface FieldBuilder {
        ImmutableConverterImpl.Field build();
    }

    private static class MappingImpl<Static, DynamicProp> implements ImmutableConverter.Mapping<Static, DynamicProp>, FieldBuilder {

        private final ImmutableProp prop;

        private final Method method;

        private final Field field;

        private final boolean autoMapping;

        private Predicate<?> cond;
        
        protected Function<?, ?> valueConverter;

        private Supplier<?> defaultValueSupplier;

        private MappingImpl(ImmutableProp prop, Method method, Field field, boolean autoMapping) {
            this.prop = prop;
            this.method = method;
            this.field = field;
            this.autoMapping = autoMapping;
        }

        @Override
        public ImmutableConverter.Mapping<Static, DynamicProp> useIf(Predicate<Static> cond) {
            this.cond = cond;
            return this;
        }

        @Override
        public ImmutableConverter.Mapping<Static, DynamicProp> valueConverter(Function<?, DynamicProp> valueConverter) {
            this.valueConverter = valueConverter;
            return this;
        }

        @SuppressWarnings("unchecked")
        @Override
        public ImmutableConverter.Mapping<Static, DynamicProp> nestedConverter(ImmutableConverter<DynamicProp, ?> nestedValueConverter) {
            valueConverter(value -> ((ImmutableConverter<DynamicProp, Object>)nestedValueConverter).convert(value));
            return this;
        }

        @Override
        public ImmutableConverter.Mapping<Static, DynamicProp> defaultValue(DynamicProp defaultValue) {
            this.defaultValueSupplier = () -> defaultValue;
            return this;
        }

        @Override
        public ImmutableConverter.Mapping<Static, DynamicProp> defaultValue(Supplier<DynamicProp> defaultValueSupplier) {
            this.defaultValueSupplier = defaultValueSupplier;
            return this;
        }

        @Override
        public ImmutableConverterImpl.Field build() {
            return ImmutableConverterImpl.Field.create(
                    cond,
                    prop,
                    method,
                    field,
                    valueConverter,
                    defaultValueSupplier,
                    autoMapping
            );
        }
    }

    private static class ListMappingImpl<Static, DynamicProp> implements ImmutableConverter.ListMapping<Static, DynamicProp>, FieldBuilder {

        private final ImmutableProp prop;

        private final Method method;

        private final Field field;

        private final boolean autoMapping;

        private Predicate<?> cond;

        protected Function<?, ?> elementConverter;

        private Supplier<?> defaultElementSupplier;

        private ListMappingImpl(ImmutableProp prop, Method method, Field field, boolean autoMapping) {
            this.prop = prop;
            this.method = method;
            this.field = field;
            this.autoMapping = autoMapping;
        }

        @Override
        public ImmutableConverter.ListMapping<Static, DynamicProp> useIf(Predicate<Static> cond) {
            this.cond = cond;
            return this;
        }

        @Override
        public ImmutableConverter.ListMapping<Static, DynamicProp> elementConverter(Function<?, DynamicProp> elementConverter) {
            this.elementConverter = new ListConverter<>(elementConverter);
            return this;
        }

        @SuppressWarnings("unchecked")
        @Override
        public ImmutableConverter.ListMapping<Static, DynamicProp> nestedConverter(
                ImmutableConverter<DynamicProp, ?> nestedElementConverter
        ) {
            elementConverter(element -> ((ImmutableConverter<DynamicProp, Object>)nestedElementConverter).convert(element));
            return this;
        }

        @Override
        public ImmutableConverter.ListMapping<Static, DynamicProp> defaultElement(DynamicProp defaultElement) {
            this.defaultElementSupplier = () -> defaultElement;
            return this;
        }

        @Override
        public ImmutableConverter.ListMapping<Static, DynamicProp> defaultElement(Supplier<DynamicProp> defaultElementSupplier) {
            this.defaultElementSupplier = defaultElementSupplier;
            return this;
        }

        @Override
        public ImmutableConverterImpl.Field build() {
            return ImmutableConverterImpl.Field.create(
                    cond,
                    prop,
                    method,
                    field,
                    elementConverter,
                    defaultElementSupplier,
                    autoMapping
            );
        }

        private class ListConverter<DynamicProp> implements Function<List<?>, List<DynamicProp>> {

            private final Function<?, DynamicProp> elementConverter;

            private ListConverter(Function<?, DynamicProp> elementConverter) {
                this.elementConverter = elementConverter;
            }

            @SuppressWarnings("unchecked")
            @Override
            public List<DynamicProp> apply(List<?> list) {
                List<DynamicProp> newList = new ArrayList<>(list.size());
                for (Object staticElement : list) {
                    DynamicProp dynamicElement;
                    if (staticElement == null) {
                        if (defaultElementSupplier == null) {
                            dynamicElement = null;
                        } else {
                            dynamicElement = (DynamicProp) defaultElementSupplier.get();
                        }
                    } else {
                        if (elementConverter == null) {
                            dynamicElement = (DynamicProp)staticElement;
                        } else {
                            dynamicElement = ((Function<Object, DynamicProp>)elementConverter).apply(staticElement);
                        }
                    }
                    newList.add(dynamicElement);
                }
                return newList;
            }
        }
    }
}
