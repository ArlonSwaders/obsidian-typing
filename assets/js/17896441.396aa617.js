"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{3056:(e,n,s)=>{s.d(n,{Z:()=>l});var t=s(9325),r=s(4368);const c={nofill:"nofill_JASL"};var i=s(5893);function l(e){return"success"===e.type?(0,i.jsx)(t.Z,{icon:(0,i.jsx)(r.Z,{className:c.nofill}),...e}):(0,i.jsx)(t.Z,{...e})}},9730:(e,n,s)=>{s.d(n,{Z:()=>d});var t=s(3699),r=s(9319),c=s(5935),i=s(7294),l=s(5893);const o=function(e){const{links:n}=e,s=(0,i.useRef)(null),[o,a]=(0,i.useState)(null);return(0,i.useEffect)((()=>{if(s.current){const e=s.current.innerHTML,r=(0,c.ZP)(e,{replace:e=>{if("text"===e.type&&e.data)for(const s in n){const r="#"+s;if(e.data.includes(r)){const c=e.data.split(r);return(0,l.jsxs)(l.Fragment,{children:[c[0],(0,l.jsx)(t.Z,{to:n[s],children:s}),c.slice(1).join(r)]})}}}});a(r)}}),[]),(0,l.jsx)("div",{ref:s,children:o||(0,l.jsx)(r.Z,{...e})})},a={LOOSE_IDENTIFIER:"#loose-identifier",IDENTIFIER:"#identifier",EXPR:"#expr",CSS:"#css",MARKDOWN:"#markdown",FIELD_TYPE:"#field-type",STRING:"#string",FUNCTION:"#function",ARRAY:"#array",LITERAL:"#literal"};let u={};for(let x in a)u[x]="/docs/reference/language"+a[x];const f=e=>{let{children:n}=e;return(0,l.jsx)(o,{language:"otl",links:u,children:n})};const d={...s(923).Z,OTLSyntaxCodeBlock:f}}}]);