"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[931],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const l={},i="File",o={unversionedId:"reference/field-types/file",id:"reference/field-types/file",title:"File",description:"A file to either choose from vault or upload.",source:"@site/docs/reference/field-types/file.md",sourceDirName:"reference/field-types",slug:"/reference/field-types/file",permalink:"/obsidian-typing/docs/reference/field-types/file",draft:!1,editUrl:"https://github.com/konodyuk/obsidian-typing/tree/main/docs/docs/reference/field-types/file.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Note",permalink:"/obsidian-typing/docs/reference/field-types/note"},next:{title:"List",permalink:"/obsidian-typing/docs/reference/field-types/list"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Picker",id:"picker",level:2}],c={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file"},"File"),(0,a.kt)("p",null,"A file to either choose from vault or upload."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ext")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../language#string"},"STRING")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"../language#array"},"ARRAY"),"<",(0,a.kt)("a",{parentName:"td",href:"../language#string"},"STRING"),">"),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed file extensions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"image"'),"|",(0,a.kt)("inlineCode",{parentName:"td"},'"video"'),"|",(0,a.kt)("inlineCode",{parentName:"td"},'"audio"'),"|",(0,a.kt)("inlineCode",{parentName:"td"},'"document"')),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed file kinds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"search")," (default ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../language#boolean"},"BOOLEAN")),(0,a.kt)("td",{parentName:"tr",align:null},"Enables or disables search for existing files")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"upload")," (default ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),")"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../language#boolean"},"BOOLEAN")),(0,a.kt)("td",{parentName:"tr",align:null},"Enables or disables new file upload")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-otl"},'type A {\n    fields {\n        photo: File[type="image"]\n        docs: List[File[ext=["pdf", "epub"]]]\n    }\n}\n')),(0,a.kt)("h2",{id:"picker"},"Picker"),(0,a.kt)("p",null,(0,a.kt)("div",{parentName:"p",className:"alert alert--warning"},"TODO")))}u.isMDXComponent=!0}}]);