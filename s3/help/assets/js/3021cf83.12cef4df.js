"use strict";(self.webpackChunkscriptureforge_help=self.webpackChunkscriptureforge_help||[]).push([[538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>j,contentTitle:()=>E,default:()=>P,frontMatter:()=>v,metadata:()=>w,toc:()=>x});var n=r(7462),i=r(7294),o=r(3905),c=r(6010),a=r(2802),s=r(9960),l=r(3919),u=r(5999);const p="cardContainer_fWXF",m="cardTitle_rnsV",f="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return i.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",p)},r)}function g(e){let{href:t,icon:r,title:n,description:o}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,c.Z)("text--truncate",m),title:n},r," ",n),o&&i.createElement("p",{className:(0,c.Z)("text--truncate",f),title:o},o))}function y(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?i.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(t.docId??void 0);return i.createElement(g,{href:t.href,icon:r,title:t.label,description:n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(h,{item:t});case"category":return i.createElement(y,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function O(e){let{className:t}=e;const r=(0,a.jA)();return i.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return i.createElement(O,e);const n=(0,a.MN)(t);return i.createElement("section",{className:(0,c.Z)("row",r)},n.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(b,{item:e})))))}const v={slug:"/",sidebar_position:-1},E="Getting started",w={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"<DocCardList",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/",permalink:"/help/",draft:!1,tags:[],version:"current",sidebarPosition:-1,frontMatter:{slug:"/",sidebar_position:-1},sidebar:"tutorialSidebar",next:{title:"Log in to Scripture Forge",permalink:"/help/log-in"}},j={},x=[{value:"More resources",id:"more-resources",level:2}],C={toc:x};function P(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)(k,{items:[{type:"link",href:"/connect-paratext-project",label:"Connect a project"},{type:"link",href:"/community-checking",label:"Community checking"},{type:"link",href:"/translation-suggestions",label:"Translation suggestions"}],mdxType:"DocCardList"}),(0,o.kt)("h2",{id:"more-resources"},"More resources"),(0,o.kt)(k,{items:[{type:"link",href:"https://help.scriptureforge.org/en",label:"Read the manual"},{type:"link",href:"https://community.scripture.software.sil.org/c/scripture-forge/19",label:"Community support site"},{type:"link",href:"mailto:scriptureforgeissues@sil.org",label:"Email support"},{type:"link",href:"https://community.scripture.software.sil.org/t/scripture-forge-announcements/1776",label:"Change log"}],mdxType:"DocCardList"}))}P.isMDXComponent=!0}}]);