"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5907],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=a,g=m["".concat(d,".").concat(p)]||m[p]||s[p]||o;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),a=t(4334),o="tabItem_Ymn6";function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(3117),a=t(7294),o=t(4334),i=t(2389),l=t(7392),d=t(7094),c=t(2466),u="tabList__CuJ",s="tabItem_LNqP";function m(e){var n,t,i=e.lazy,m=e.block,p=e.defaultValue,g=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,l.l)(N,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==h&&!N.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,d.U)(),j=y.tabGroupChoices,T=y.setTabGroupChoices,I=(0,a.useState)(h),x=I[0],w=I[1],D=[],O=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=j[f];null!=P&&P!==x&&N.some((function(e){return e.value===P}))&&w(P)}var C=function(e){var n=e.currentTarget,t=D.indexOf(n),r=N[t].value;r!==x&&(O(n),w(r),null!=f&&T(f,String(r)))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=D.indexOf(e.currentTarget)+1;t=null!=(r=D[a])?r:D[0];break;case"ArrowLeft":var o,i=D.indexOf(e.currentTarget)-1;t=null!=(o=D[i])?o:D[D.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},v)},N.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return D.push(e)},onKeyDown:E,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function p(e){var n=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},2990:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),i=t(5488),l=t(5162),d=["components"],c={sidebar_position:2,title:"\u5feb\u901f\u4e0a\u624b"},u=void 0,s={unversionedId:"jimmer-core/usage",id:"jimmer-core/usage",title:"\u5feb\u901f\u4e0a\u624b",description:"\u5f15\u5165\u4f9d\u8d56",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/jimmer-core/usage.mdx",sourceDirName:"jimmer-core",slug:"/jimmer-core/usage",permalink:"/jimmer/zh/docs/jimmer-core/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/jimmer-core/usage.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5feb\u901f\u4e0a\u624b"},sidebar:"tutorialSidebar",previous:{title:"\u73b0\u6709\u95ee\u9898\u548c\u89e3\u51b3\u65b9\u6848",permalink:"/jimmer/zh/docs/jimmer-core/existing-problems"},next:{title:"Draft\u4ee3\u7406",permalink:"/jimmer/zh/docs/jimmer-core/draft"}},m={},p=[{value:"\u5f15\u5165\u4f9d\u8d56",id:"\u5f15\u5165\u4f9d\u8d56",level:2},{value:"\u58f0\u660e\u4e0d\u53ef\u53d8\u6a21\u578b",id:"\u58f0\u660e\u4e0d\u53ef\u53d8\u6a21\u578b",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],g={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,d);return(0,o.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5f15\u5165\u4f9d\u8d56"},"\u5f15\u5165\u4f9d\u8d56"),(0,o.kt)(i.Z,{groupId:"buildScript",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java(Gradle)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-groovy",metastring:'title="build.gradle"',title:'"build.gradle"'},"depdencies {\n    \n    implementation 'org.babyfish.jimmer:jimmer-core:0.5.10'\n    annotationProcessor 'org.babyfish.jimmer:jimmer-apt:0.5.10'\n\n    runtimeOnly 'com.h2database:h2:2.1.212'\n}\n"))),(0,o.kt)(l.Z,{value:"java-maven",label:"Java(Maven)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.babyfish.jimmer</groupId>\n        <artifactId>jimmer-core</artifactId>\n        <version>0.5.10</version>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.10.1</version>\n            <configuration>\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.babyfish.jimmer</groupId>\n                        <artifactId>jimmer-apt</artifactId>\n                        <version>0.5.10</version>\n                    </path>\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin(Gradle)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="build.gradle.kts"',title:'"build.gradle.kts"'},'plugins {\n    // \u7b2c\u4e00\u6b65: \u6dfb\u52a0ksp\u63d2\u4ef6\n    id("com.google.devtools.ksp") version "1.7.10-1.0.6"\n\n    ...\u7701\u7565\u5176\u4ed6\u63d2\u4ef6...\n}\ndepdencies {\n    \n    // \u7b2c\u4e8c\u6b65: \u6dfb\u52a0jimmer-core-kotlin\n    implementation("org.babyfish.jimmer:jimmer-core-kotlin:0.5.10")\n\n    // \u7b2c\u4e09\u6b65: \u5e94\u7528ksp\u63d2\u4ef6\n    ksp("org.babyfish.jimmer:jimmer-ksp:0.5.10")\n\n    ...ommit other dependency...\n}\n\n// \u7b2c\u56db\u6b65: \u8bb2\u751f\u6210\u7684\u4ee3\u7801\u6dfb\u52a0\u5230\u7f16\u8bd1\u76ee\u5f55\u4e2d\u3002\n// \u6ca1\u6709\u8fd9\u4e2a\u914d\u7f6e\uff0cgradle\u547d\u4ee4\u4ecd\u7136\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\uff0c\n// \u4f46\u662f, Intellij\u65e0\u6cd5\u627e\u5230\u751f\u6210\u7684\u6e90\u7801\u3002\nkotlin {\n    sourceSets.main {\n        kotlin.srcDir("build/generated/ksp/main/kotlin")\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"kotlin-maven",label:"Kotlin(Maven)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependency>\n    <groupId>org.babyfish.jimmer</groupId>\n    <artifactId>jimmer-core-kotlin</artifactId>\n    <version>0.5.10</version>\n</dependency>\n\n<build>\n    <sourceDirectory>src/main/kotlin</sourceDirectory>\n    <testSourceDirectory>src/test/kotlin</testSourceDirectory>\n\n    <plugins>\n        <plugin>\n            <groupId>org.jetbrains.kotlin</groupId>\n            <artifactId>kotlin-maven-plugin</artifactId>\n            <version>${kotlin.version}</version>\n            <executions>\n                <execution>\n                    <id>compile</id>\n                    <phase>compile</phase>\n                    <goals>\n                        <goal>compile</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>test-compile</id>\n                    <phase>test-compile</phase>\n                    <goals>\n                        <goal>test-compile</goal>\n                    </goals>\n                </execution>\n            </executions>\n            <configuration>\n                <compilerPlugins>\n                    <compilerPlugin>ksp</compilerPlugin>\n                </compilerPlugins>\n            </configuration>\n            <dependencies>\n                <dependency>\n                    <groupId>com.dyescape</groupId>\n                    <artifactId>kotlin-maven-symbol-processing</artifactId>\n                    <version>1.3</version>\n                </dependency>\n                <dependency>\n                    <groupId>org.babyfish.jimmer</groupId>\n                    <artifactId>jimmer-ksp</artifactId>\n                    <version>0.5.10</version>\n                </dependency>\n            </dependencies>\n        </plugin>\n    </plugins>\n</build>\n")))),(0,o.kt)("h2",{id:"\u58f0\u660e\u4e0d\u53ef\u53d8\u6a21\u578b"},"\u58f0\u660e\u4e0d\u53ef\u53d8\u6a21\u578b"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"package yourpackage;\n\nimport javax.validation.constraints.Null;\nimport java.util.List;\n\nimport org.babyfish.jimmer.Immutable;\n\n@Immutable\npublic interface TreeNode {\n    \n    String name();\n\n    @Null // Nullable property, Java-API needs it, but kotlin-API does not.\n    TreeNode parent();\n\n    List<TreeNode> childNodes();\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\uff0c\u5c5e\u6027name, parent\u548cchildNodes\u91c7\u7528\u4e86java record\u7684\u547d\u540d\u89c4\u5219\uff0c\u4e0d\u4ee5get\u5f00\u5934\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f60\u4e5f\u53ef\u91c7\u7528\u4f20\u7edfjava bean\u7684\u547d\u540d\u89c4\u5219\uff0c\u4ee5get\u5f00\u5934\u3002\u8bf8\u5982\uff1agetName, getParent, getChildNodes\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u4f60\u91c7\u7528\u90a3\u79cd\u98ce\u683c\uff0cjimmer-core\u90fd\u63a5\u53d7\u3002\u5efa\u8bae\u91c7\u7528java record\u90a3\u79cd\u4e0d\u4ee5get\u5f00\u5934\u7684\u547d\u540d\u98ce\u683c\uff0c\u56e0\u4e3a\u6ca1\u6709\u4e86set\uff0cget\u81ea\u7136\u5c31\u6ca1\u4e86\u610f\u4e49\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u65e0\u8bba\u91c7\u7528\u54ea\u79cd\u98ce\u683c\uff0c\u90fd\u5e94\u8be5\u4fdd\u8bc1\u5355\u4e2a\u9879\u76ee\u5185\u90e8\u98ce\u683c\u4e00\u81f4\u3002"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},"package yourpackage\n\nimport org.babyfish.jimmer.Immutable\n\n@Immutable\ninterface TreeNode {\n\n    val name: String\n\n    val parent: TreeNode?\n\n    val childNodes: List<TreeNode>\n}\n")))),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"jimmer-core\u4f7f\u7528java annotation processor\u751f\u6210\u53ef\u53d8\u4ee3\u7406\uff08\u4e0b\u9762\u4ee3\u7801\u4e2d\u7684TreeNodeDraft\uff09\u3002\u5229\u7528\u53ef\u53d8\u4ee3\u7406\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u5f0f\u7684\u4ee3\u7801\u7b80\u5355\u5730\u201c\u4fee\u6539\u201d\u4e0d\u53ef\u53d8\u5bf9\u8c61\u3002"),(0,o.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// \u7b2c\u4e00\u6b65\uff0c\u4ece\u5934\u6784\u5efa\u5168\u65b0\u7684\u6570\u636e\nTreeNode treeNode = TreeNodeDraft.$.produce(root -> {\n    root.setName("Root").addIntoChildNodes(food -> {\n        food\n            .setName("Food")\n            .addIntoChildNodes(drink -> {\n                drink\n                    .setName("Drink")\n                    .addIntoChildNodes(cococola -> {\n                        cococola.setName("Cococola");\n                    })\n                    .addIntoChildNodes(fanta -> {\n                        fanta.setName("Fanta");\n                    });\n                ;\n            });\n        ;\n    });\n});\n\n// \u7b2c\u4e8c\u6b65\uff0c\u57fa\u4e8e\u73b0\u6709\u6570\u636e\u5bf9\u8c61\uff0c\u505a\u67d0\u4e9b\u201c\u53d8\u66f4\u201d\uff0c\u521b\u5efa\u65b0\u7684\u6570\u636e\u5bf9\u8c61\u3002\nTreeNode newTreeNode = TreeNodeDraft.$.produce(\n        // highlight-next-line\n        treeNode, // existing data\n        root -> {\n            root\n                .childNodes(false).get(0) // Food\n                .childNodes(false).get(0) // Drink\n                .childNodes(false).get(0) // Cococola\n                .setName("Cococola plus");\n        }\n);\n\nSystem.out.println("treeNode:" + treeNode);\nSystem.out.println("newTreeNode:" + newTreeNode);\n'))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u7b2c\u4e00\u6b65\uff0c\u4ece\u5934\u6784\u5efa\u5168\u65b0\u7684\u6570\u636e\nval treeNode = new(TreeNode::class).by {\n    name = "Root"\n    childNodes().addBy {\n        name = "Food"\n        childNodes().addBy {\n            name = "Drinks"\n            childNodes().addBy {\n                name = "Cococola"\n            }\n            childNodes().addBy {\n                name = "Fanta"\n            }\n        }\n    }\n}\n\n// \u7b2c\u4e8c\u6b65\uff0c\u57fa\u4e8e\u73b0\u6709\u6570\u636e\u5bf9\u8c61\uff0c\u505a\u67d0\u4e9b\u201c\u53d8\u66f4\u201d\uff0c\u521b\u5efa\u65b0\u7684\u6570\u636e\u5bf9\u8c61\u3002\nval newTreeNode = new(TreeNode::class).by(\n    // highlight-next-line\n    treeNode // existing data\n) {\n    childNodes()[0] // Food\n        .childNodes()[0] // Drinks\n        .childNodes()[0] // Cococola\n        .name += " plus"\n}\n\nprintln("treeNode: $treeNode")\nprintln("newTreeNode: $newTreeNode")\n')))),(0,o.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff08\u5b9e\u9645\u6253\u5370\u7ed3\u679c\u662f\u7d27\u51d1\u7684\uff0c\u4f46\u4e3a\u4e86\u65b9\u4fbf\u9605\u8bfb\uff0c\u8fd9\u91cc\u8fdb\u884c\u4e86\u683c\u5f0f\u5316\uff09"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'treeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Coco Cola"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\nnewTreeNode: {\n    "name":"Root",\n    "childNodes":[\n        {\n            "name":"Food",\n            "childNodes":[\n                {\n                    "name":"Drink",\n                    "childNodes":[\n                        // highlight-next-line\n                        {"name":"Coco Cola plus"},\n                        {"name":"Fanta"}\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')),(0,o.kt)("p",null,"\u7528\u6237\u5b9a\u4e49\u7684\u7c7b\u578bTreeNode\u662f\u4e0d\u53ef\u53d8\u7c7b\u578b\uff1b \u4f46\u662fAnnotationProcessor\u81ea\u52a8\u751f\u6210\u7684\u7c7b\u578bTreeNodeDraft\u662f\u53ef\u53d8\u7c7b\u578b\uff0c\u7528\u6237\u53ef\u4ee5\u975e\u5e38\u7b80\u5355\u5730\u4fee\u6539\u5b83\u4eec\uff08\u8fd9\u4e9b\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u7684Draft\u5bf9\u8c61\u5c31\u662f\u793a\u4f8b\u4e2d\u5404lambda\u8868\u8fbe\u5f0f\u7684\u53c2\u6570\uff09\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Draft\u5bf9\u8c61\u975e\u5e38\u8f7b\u91cf\uff0c\u4ec5\u4ec5\u662f\u4e00\u4e2a\u4ee3\u7406\u3002\u5b83\u4f7f\u7528copy-on-write\u7b56\u7565\uff0c\u6240\u4ee5\u5e76\u4e0d\u4f1a\u65e0\u6761\u4ef6\u5730\u590d\u5236\u65e7\u5bf9\u8c61\u7684\u6570\u636e\uff0c\u800c\u662f\u53ea\u6709\u7b2c\u4e00\u6b21\u88ab\u4fee\u6539\u65f6\u624d\u4f1a\u590d\u5236\u65e7\u5bf9\u8c61\u7684\u6570\u636e\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u4e00\u4e2a\u5de8\u5927\u7684\u5bf9\u8c61\u6811\uff0c\u53ea\u6709\u6839\u5bf9\u8c61\u7684\u4ee3\u7406\u624d\u662f\u4e00\u5b9a\u4f1a\u88ab\u521b\u5efa\u7684\uff0c\u5176\u4ed6\u7684\u5b50\u4ee3\u7406\u5bf9\u8c61\u6839\u636e\u7528\u6237\u4ee3\u7801\u7684\u8bfb\u53d6\u64cd\u4f5c\u6309\u9700\u521b\u5efa\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6700\u7ec8\uff0c\u53ea\u6709\u88ab\u4fee\u6539\u8fc7\u4e14\u4fee\u6539\u524d\u540e\u65b0\u65e7\u503c\u4e0d\u7b49\u7684\u4ee3\u7406\u53ca\u5176\u7236\u4ee3\u7406\u94fe\uff0c\u4f1a\u88ab\u7528\u4e8e\u91cd\u65b0\u521b\u5efa\u65b0\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff1b\u672a\u88ab\u4fee\u6539\u7684\u4ee3\u7406\u53ea\u662f\u7b80\u5355\u5730\u8fd4\u56de\u5176\u6301\u6709\u5bf9\u65e7\u5bf9\u8c61\u7684\u5f15\u7528\u3002 \u4e5f\u5c31\u662f\u8bf4\uff0c\u672a\u66f4\u6539\u7684\u5b50\u6811\u4e0e\u539f\u59cb\u5b50\u6811\u5b8c\u5168\u5171\u4eab\u590d\u7528\u3002")))))}f.isMDXComponent=!0}}]);