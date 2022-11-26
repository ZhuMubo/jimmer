"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8829],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(4334),r="tabItem_Ymn6";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(3117),o=n(7294),r=n(4334),l=n(2389),i=n(7392),s=n(7094),d=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t,n,l=e.lazy,u=e.block,m=e.defaultValue,h=e.values,b=e.groupId,f=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,j=N.setTabGroupChoices,T=(0,o.useState)(y),x=T[0],I=T[1],O=[],C=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var S=w[b];null!=S&&S!==x&&g.some((function(e){return e.value===S}))&&I(S)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==x&&(C(t),I(a),null!=b&&j(b,String(a)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,o=O.indexOf(e.currentTarget)+1;n=null!=(a=O[o])?a:O[0];break;case"ArrowLeft":var r,l=O.indexOf(e.currentTarget)-1;n=null!=(r=O[l])?r:O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,l.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}},6634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),l=n(5488),i=n(5162),s=["components"],d={sidebar_position:1,title:"Problems and Solutions"},c=void 0,p={unversionedId:"jimmer-core/existing-problems",id:"jimmer-core/existing-problems",title:"Problems and Solutions",description:"This article discusses why jimmer defined a new way of developing immutable objects and let it be the cornerstone of the entire project. Although the reader is advised to read this article, it can be ignored if the focus is only on usage and not on design motives.",source:"@site/docs/jimmer-core/existing-problems.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/existing-problems",permalink:"/jimmer/docs/jimmer-core/existing-problems",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/existing-problems.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Problems and Solutions"},sidebar:"tutorialSidebar",previous:{title:"jimmer-core subproject",permalink:"/jimmer/docs/jimmer-core/"},next:{title:"Get started",permalink:"/jimmer/docs/jimmer-core/usage"}},u={},m=[{value:"The problems of java record",id:"the-problems-of-java-record",level:2},{value:"1. Long and strictly ordered constructor parameter list",id:"1-long-and-strictly-ordered-constructor-parameter-list",level:3},{value:"2. Copy construction is cumbersome",id:"2-copy-construction-is-cumbersome",level:3},{value:"3. Difficult to handle when the object tree is deep",id:"3-difficult-to-handle-when-the-object-tree-is-deep",level:3},{value:"4. Lack of necessary dynamism",id:"4-lack-of-necessary-dynamism",level:3},{value:"Solution",id:"solution",level:2}],h={toc:m};function b(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This article discusses why jimmer defined a new way of developing immutable objects and let it be the cornerstone of the entire project. Although the reader is advised to read this article, it can be ignored if the focus is only on usage and not on design motives.")),(0,r.kt)("h2",{id:"the-problems-of-java-record"},"The problems of java record"),(0,r.kt)("p",null,"Java has supported the Record type since 14, which is very convenient when used to support simple tuples, but there are still some problems, and it is not enough to act as entity types in a project."),(0,r.kt)("h3",{id:"1-long-and-strictly-ordered-constructor-parameter-list"},"1. Long and strictly ordered constructor parameter list"),(0,r.kt)("p",null,"Entity objects are usually of a certain complexity and have many fields (eg 50 fields), and implementing it using java records results in a constructor with a long parameter list. Unlike kotlin and C#, as of now, java supports neither default parameters nor named parameters, when a method has too many parameters, it still needs to give all parameters in strict order, which makes the task heavy and hard to read."),(0,r.kt)("h3",{id:"2-copy-construction-is-cumbersome"},"2. Copy construction is cumbersome"),(0,r.kt)("p",null,"In practice, developers don't always build entirely new immutable objects from scratch. Many times, we need to create a new mutable object based on an existing immutable object. Most of the fields of the new object have the same values as the old object, only a few have changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'var oldData = ...\n\nvar newData = new MyData(\n\n    "NewValue_ForProp1",\n\n    oldData.prop2(), \n    oldData.prop3(),\n    ... ...\n    oldData.propN()\n);\n')),(0,r.kt)("p",null,"Comparing the old and new objects, only the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"prop1")," is different. From ",(0,r.kt)("inlineCode",{parentName:"p"},"prop2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"propN"),", they are all values that we don't care about, but we still have to write code to copy them one by one."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In kotlin language, data classes support ",(0,r.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/data-classes.html#copying"},"copy function")," to solve this problem. However, kotlin's solution cannot be used in java language, because as of now, java supports neither default parameters nor named parameters.")),(0,r.kt)("p",null,"Java designers are also thinking about making Java support default parameters and named parameters, you can check their ","[design draft]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openjdk/amber-docs/blob/master/eg-drafts/reconstruction-records-and"},"https://github.com/openjdk/amber-docs/blob/master/eg-drafts/reconstruction-records-and")," -classes.md) to learn more."),(0,r.kt)("p",null,"If one day this design draft is implemented, the java language has default parameters and named parameters, then the two problems discussed above will no longer exist."),(0,r.kt)("p",null,"However, both of these issues are minor issues. Next, let's discuss two more serious problems."),(0,r.kt)("h3",{id:"3-difficult-to-handle-when-the-object-tree-is-deep"},"3. Difficult to handle when the object tree is deep"),(0,r.kt)("p",null,"First define an immutable tree node"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"record TreeNode(String name, List<TreeNode> childNodes) {}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"data class TreeNode(val name: String, val childNodes: List<TreeNode>)\n")))),(0,r.kt)("p",null,"Prepare an old object"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"var oldTreeNode = ...blabla...\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val oldTreeNode = ...blabla...\n")))),(0,r.kt)("p",null,"Let's implement three data-changing operations in order from simple to complex"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the root node"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",lable:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    // highlight-next-line\n    "Hello", // Set name of root node\n    oldTreeNode.childNodes()\n);\n'))),(0,r.kt)(i.Z,{value:"kotlin",lable:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    // highlight-next-line\n    name = "Hello" // Set name of root node\n);\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of a first-level child node"),(0,r.kt)("p",{parentName:"li"},"The breadcrumb conditions are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the position of the first level child node: pos1")),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                // highlight-next-line\n                "Hello", // Set name of level-1 node\n                oldChild1.childNodes()\n            );\n        })\n        .toList()\n);\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    // highlight-next-line\n                    name = "Hello" // Set name of level-1 node\n                )\n            } else {\n                child1\n            }\n        }\n)\n'))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change the property ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," of the second-level child node"),(0,r.kt)("p",{parentName:"li"},"The breadcrumb conditions are as follows:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the position of the first level child node: pos1"),(0,r.kt)("li",{parentName:"ul"},"the position of the second-level child node: pos2")),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                oldChild1.name(),\n                IntStream\n                    .range(0, oldChild1.childNodes().size())\n                    .mapToObj(index2 -> {\n                        TreeNode oldChild2 = oldChild1.childNodes().get(index2);\n                        if (index2 != pos2) {\n                            return oldChild2;\n                        } else {\n                            return new TreeNode(\n                                // highlight-next-line\n                                "Hello", // Set name of level-2 node\n                                oldChild2.childNodes()\n                            );\n                        }\n                    })\n                    .toList()\n            );\n        })\n        .toList()\n);\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    childNodes = child1\n                        .childNodes\n                        .mapIndexed { index2, child2 -> \n                            if (index2 == pos2) {\n                                child2.copy(\n                                    // highlight-next-line\n                                    name = "Hello" // Set name of level-2 node\n                                )\n                            } else {\n                                child2\n                            }\n                        }\n                )\n            } else {\n                child1\n            }\n        }\n)\n')))),(0,r.kt)("p",{parentName:"li"},"So creating a new immutable object based on another immutable object will be a ",(0,r.kt)("strong",{parentName:"p"},"nightmare"),", as long as the object tree has a little depth."))),(0,r.kt)("h3",{id:"4-lack-of-necessary-dynamism"},"4. Lack of necessary dynamism"),(0,r.kt)("p",null,"Entity objects need to be dynamic, not all properties of the object need to be initialized, it allows some missing properties."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note: The missing discussed here is not null, but unknown.")),(0,r.kt)("p",null,"Taking an ORM as an example, one entity type can navigate to other entity types through associated properties (whether one-to-one, many-to-one, one-to-many, or many-to-many). If all properties of  object must be initailized, then querying an entity object will cause all associated objects to be queried recursively and unconditionally, which is unacceptable."),(0,r.kt)("p",null,"If you've ever worked with JPA/Hibernate, you must have heard of the concept of lazy loading. Objects allow certain properties not to be initialized."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When accessing these unknown properties for the first time, if the object still maintains a database connection (common in monolithic applications), load data from the database.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Otherwise (common in distributed applications), an exception will be thrown (such as Hibernate's classic exception: org.hibernate.LazyInitializationException)."))),(0,r.kt)("p",null,"Of course, there are many technical solutions in the field of data access, not limited to JPA/Hibernate, so not all readers have used JPA/Hibernate. However, the number of people who have used JPA/Hibernate before should be the most, so I still use this example to illustrate."),(0,r.kt)("p",null,"In conclusion, entity objects need to be dynamic and not all properties need to be specified."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unspecified properties cause exceptions when accessed directly by code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Unspecified properties are automatically ignored in JSON serialization without exception."))),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Is it possible to make immutable objects powerful enough to solve all of the above problems?"),(0,r.kt)("p",null,"certainly! In the JavaScript/TypeScript space, there is a well-known open source project ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),' that addresses the first three of the above problems. It is the inner of the "Breakthrough of the year" React open source award and "Most impactful contribution" JavaScript open source award in 2019.'),(0,r.kt)("p",null,"immer uses a mutable object proxy (based on a copy-on-write strategy) to let developers modify directly, and then automatically creates new immutable objects based on old data and the developer's modification behavior."),(0,r.kt)("p",null,"jimmer-core ported it to Java to solve the first three of the above problems; at the same time, it solved the fourth problem based on this. In this way, immutable objects solve all of the above problems and are powerful enough to be the cornerstone of an entire project."),(0,r.kt)("p",null,"Subsequent articles will discuss in detail how jimmer-core solves these problems."))}b.isMDXComponent=!0}}]);