(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[192],{9319:(e,t,n)=>{"use strict";n.d(t,{Z:()=>V});var o=n(7294),s=n(1048),r=n(6010),c=n(9200),a=n(107);function l(){const{prism:e}=(0,a.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var i=n(3702),u=n(7594),d=n.n(u);const p=/title=(?<quote>["'])(?<title>.*?)\1/,m=/\{(?<range>[\d,-]+)\}/,h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:o}=h[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function f(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:r}=t;if(r&&m.test(r)){const e=r.match(m).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${r}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(h),t)}}(o,s),a=n.split("\n"),l=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<a.length;){const e=a[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?l[i[t]].range+=`${d},`:u[t]?l[u[t]].start=d:p[t]&&(l[p[t]].range+=`${l[p[t]].start}-${d-1},`),a.splice(d,1)}n=a.join("\n");const f={};return Object.entries(l).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{f[e]??=[],f[e].push(t)}))})),{lineClassNames:f,code:n}}const y={codeBlockContainer:"codeBlockContainer_Ckt0"};var b=n(5893);function k(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const r=t[o];r&&"string"==typeof s&&(n[r]=s)})),n}(l());return(0,b.jsx)(t,{...n,style:o,className:(0,r.Z)(n.className,y.codeBlockContainer,i.k.common.codeBlock)})}const v={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function j(e){let{children:t,className:n}=e;return(0,b.jsx)(k,{as:"pre",tabIndex:0,className:(0,r.Z)(v.codeBlockStandalone,"thin-scrollbar",n),children:(0,b.jsx)("code",{className:v.codeBlockLines,children:t})})}var N=n(3768);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function x(e,t){const[n,s]=(0,o.useState)(),r=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{r()}),[r]),function(e,t,n){void 0===n&&(n=B);const s=(0,N.zX)(t),r=(0,N.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,r),()=>t.disconnect()}),[e,s,r])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),r())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const L={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var C={Prism:n(7410).Z,theme:L};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},E.apply(this,arguments)}var S=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},_=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function I(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var O=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),s=e.styles.reduce((function(e,n){var o=n.languages,s=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=E({},e[t],s);e[t]=n})),e}),o);return s.root=n,s.plain=E({},n,{backgroundColor:null}),s}(e.theme,e.language):void 0;return t.themeDict=n})),w(this,"getLineProps",(function(e){var n=e.key,o=e.className,s=e.style,r=E({},I(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(r.style=c.plain),void 0!==s&&(r.style=void 0!==r.style?E({},r.style,s):s),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),w(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,s=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===s&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===s&&!o)return r[n[0]];var c=o?{display:"inline-block"}:{},a=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[c].concat(a))}})),w(this,"getTokenProps",(function(e){var n=e.key,o=e.className,s=e.style,r=e.token,c=E({},I(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==s&&(c.style=void 0!==c.style?E({},c.style,s):s),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),w(this,"tokenize",(function(e,t,n,o){var s={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",s);var r=s.tokens=e.tokenize(s.code,s.grammar,s.language);return e.hooks.run("after-tokenize",s),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,s=e.children,r=this.getThemeDict(this.props),c=t.languages[n];return s({tokens:function(e){for(var t=[[]],n=[e],o=[0],s=[e.length],r=0,c=0,a=[],l=[a];c>-1;){for(;(r=o[c]++)<s[c];){var i=void 0,u=t[c],d=n[c][r];if("string"==typeof d?(u=c>0?u:["plain"],i=d):(u=_(u,d.type),d.alias&&(u=_(u,d.alias)),i=d.content),"string"==typeof i){var p=i.split(S),m=p.length;a.push({types:u,content:p[0]});for(var h=1;h<m;h++)T(a),l.push(a=[]),a.push({types:u,content:p[h]})}else c++,t.push(u),n.push(i),o.push(0),s.push(i.length)}c--,t.pop(),n.pop(),o.pop(),s.pop()}return T(a),l}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const W=O,P={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function A(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=s({line:t,className:(0,r.Z)(n,o&&P.codeLine)}),l=t.map(((e,t)=>(0,b.jsx)("span",{...c({token:e,key:t})},t)));return(0,b.jsxs)("span",{...a,children:[o?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{className:P.codeLineNumber}),(0,b.jsx)("span",{className:P.codeLineContent,children:l})]}):l,(0,b.jsx)("br",{})]})}var Z=n(7325);const $={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function H(e){let{code:t,className:n}=e;const[s,c]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const r=document.getSelection(),c=r.rangeCount>0&&r.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),c&&(r.removeAllRanges(),r.addRange(c)),s&&s.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,b.jsx)("button",{type:"button","aria-label":s?(0,Z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,$.copyButton,s&&$.copyButtonCopied),onClick:l,children:(0,b.jsxs)("span",{className:$.copyButtonIcons,"aria-hidden":"true",children:[(0,b.jsx)("svg",{className:$.copyButtonIcon,viewBox:"0 0 24 24",children:(0,b.jsx)("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}),(0,b.jsx)("svg",{className:$.copyButtonSuccessIcon,viewBox:"0 0 24 24",children:(0,b.jsx)("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})]})})}const D={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function z(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,Z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,b.jsx)("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,o&&D.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,b.jsx)("svg",{className:D.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true",children:(0,b.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})})}function M(e){let{children:t,className:n="",metastring:s,title:c,showLineNumbers:i,language:u}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,a.L)(),h=u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d,g=l(),y=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),r=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=r.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[r,e]),a=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=r.current,n=e>t||r.current.querySelector("code").hasAttribute("style");s(n)}),[r]);return x(r,a),(0,o.useEffect)((()=>{a()}),[e,a]),(0,o.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:r,isEnabled:e,isCodeScrollable:n,toggle:c}}(),j=function(e){return e?.match(p)?.groups.title??""}(s)||c,{lineClassNames:N,code:B}=f(t,{metastring:s,language:h,magicComments:m}),L=i??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,b.jsxs)(k,{as:"div",className:(0,r.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[j&&(0,b.jsx)("div",{className:v.codeBlockTitle,children:j}),(0,b.jsxs)("div",{className:v.codeBlockContent,children:[(0,b.jsx)(W,{...C,theme:g,code:B,language:h??"text",children:e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:s}=e;return(0,b.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,r.Z)(t,v.codeBlock,"thin-scrollbar"),children:(0,b.jsx)("code",{className:(0,r.Z)(v.codeBlockLines,L&&v.codeBlockLinesWithNumbering),children:n.map(((e,t)=>(0,b.jsx)(A,{line:e,getLineProps:o,getTokenProps:s,classNames:N[t],showLineNumbers:L},t)))})})}}),(0,b.jsxs)("div",{className:v.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,b.jsx)(z,{className:v.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),(0,b.jsx)(H,{className:v.codeButton,code:B})]})]})]})}function V(e){let{children:t,...n}=e;const r=(0,s.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof c?M:j;return(0,b.jsx)(a,{...n,children:c},String(r))}},8207:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(7294);var o=n(6010),s=n(7325),r=n(107),c=n(3699);const a={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var l=n(5893);function i(e){let{as:t,id:n,...i}=e;const{navbar:{hideOnScroll:u}}=(0,r.L)();if("h1"===t||!n)return(0,l.jsx)(t,{...i,id:void 0});const d=(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof i.children?i.children:n});return(0,l.jsxs)(t,{...i,className:(0,o.Z)("anchor",u?a.anchorWithHideOnScrollNavbar:a.anchorWithStickyNavbar,i.className),id:n,children:[i.children,(0,l.jsx)(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":d,title:d,children:"\u200b"})]})}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,r]=t;if(o&&r){o=parseInt(o),r=parseInt(r);const e=o<r?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(r+=e);for(let t=o;t!==r;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);