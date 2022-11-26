"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2687],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(4334),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(3117),a=r(7294),o=r(4334),i=r(2389),l=r(7392),u=r(7094),c=r(2466),s="tabList__CuJ",m="tabItem_LNqP";function p(e){var t,r,i=e.lazy,p=e.block,d=e.defaultValue,f=e.values,b=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:h[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var j=(0,u.U)(),w=j.tabGroupChoices,N=j.setTabGroupChoices,O=(0,a.useState)(g),E=O[0],T=O[1],x=[],D=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var I=w[b];null!=I&&I!==E&&k.some((function(e){return e.value===I}))&&T(I)}var P=function(e){var t=e.currentTarget,r=x.indexOf(t),n=k[r].value;n!==E&&(D(t),T(n),null!=b&&N(b,String(n)))},S=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=x.indexOf(e.currentTarget)+1;r=null!=(n=x[a])?n:x[0];break;case"ArrowLeft":var o,i=x.indexOf(e.currentTarget)-1;r=null!=(o=x[i])?o:x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},k.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function d(e){var t=(0,i.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},136:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=r(5488),l=r(5162),u=["components"],c={sidebar_position:4,title:"Get started"},s=void 0,m={unversionedId:"get-started",id:"get-started",title:"Get started",description:"Youtube video",source:"@site/docs/get-started.mdx",sourceDirName:".",slug:"/get-started",permalink:"/jimmer/docs/get-started",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/get-started.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Get started"},sidebar:"tutorialSidebar",previous:{title:"Benchmark",permalink:"/jimmer/docs/benchmark"},next:{title:"jimmer-core subproject",permalink:"/jimmer/docs/jimmer-core/"}},p={},d=[{value:"Youtube video",id:"youtube-video",level:2},{value:"Tutorual pages",id:"tutorual-pages",level:2},{value:"Quick experience",id:"quick-experience",level:2},{value:"Note",id:"note",level:2},{value:"Serialization of Jimmer objects",id:"serialization-of-jimmer-objects",level:3},{value:"Open Demo with IDE",id:"open-demo-with-ide",level:3}],f={toc:d};function b(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"youtube-video"},"Youtube video"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Rt5zNv0YR2E"},"https://www.youtube.com/watch?v=Rt5zNv0YR2E")),(0,o.kt)("h2",{id:"tutorual-pages"},"Tutorual pages"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/jimmer/docs/jimmer-core/usage"},"jimmer-core")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/jimmer/docs/jimmer-sql/basic/usage"},"jimmer-sql"))),(0,o.kt)("h2",{id:"quick-experience"},"Quick experience"),(0,o.kt)("p",null,"Use intellij to open ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/java/jimmer-sql/"},"<","jimmer-home",">","/example/java/java-sql")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/example/kotlin/jimmer-sql-kt/"},"<","jimmer-home",">","/example/kotlin/java-sql-kt"),", "),(0,o.kt)("p",null,"After opening it for the first time, compilation errors will appear in the IDE, please refer to ",(0,o.kt)("a",{parentName:"p",href:"#open-demo-with-ide"},"Open Demo with IDE")),(0,o.kt)("p",null,"Start it, Access http://localhost:8080/ui"),(0,o.kt)("p",null,"For more information, please view ",(0,o.kt)("a",{parentName:"p",href:"./demo"},"Demos")),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("h3",{id:"serialization-of-jimmer-objects"},"Serialization of Jimmer objects"),(0,o.kt)("p",null,"If you use Spring REST, not Spring GraphQL, you need to enable Jackson to support serialization and deserialization of Jimmer objects, like this, "),(0,o.kt)(i.Z,{groupId:"buildScript",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic ImmutableModule immutableModule() {\n    return new ImmutableModule();\n}\n"))),(0,o.kt)(l.Z,{value:"kotlin",label:"Kotin",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun immutableModule() = ImmutableModule()\n")))),(0,o.kt)("p",null,"please view ",(0,o.kt)("a",{parentName:"p",href:"jimmer-core/dynamic/#jimmer-and-jackson"},"Jimmer and Jackson")),(0,o.kt)("h3",{id:"open-demo-with-ide"},"Open Demo with IDE"),(0,o.kt)("p",null,"This framework uses a code generator, which is AnnotationProcessor for Java and KSP for Kotlin."),(0,o.kt)("p",null,"Therefore, when you open any project in the demo with the framework attached to the IDE for the first time, compilation errors will be reported because the code that should be automatically generated does not exist temporarily."),(0,o.kt)("p",null,'Don\'t be afraid, click the "Run" button with confidence, and all problems will disappear automatically and immediately.'))}b.isMDXComponent=!0}}]);