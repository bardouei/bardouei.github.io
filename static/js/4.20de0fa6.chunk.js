(this["webpackJsonpbardouei.github.io"]=this["webpackJsonpbardouei.github.io"]||[]).push([[4,10],{137:function(e,t,i){},67:function(e,t,i){"use strict";i.r(t);i(0),i(69);var o=i(1);t.default=function(e){const{title:t}=e;return Object(o.jsx)("div",{className:"header",children:t})}},72:function(e,t,i){"use strict";i.r(t);var o=i(0),n=i(123),c=i(116),r=i(50),d=i.n(r),a=i(15),l=i(21),s=i(67),h=i(25),u=(i(137),i(1));t.default=function(e){const t=Object(o.useContext)(a.a),{header:i}=e,[r,j]=Object(o.useState)(null),[v,b]=Object(o.useState)("50vw"),[w,f]=Object(o.useState)("VERTICAL_ALTERNATING");return Object(o.useEffect)((()=>{var e,t,i,o,n,c;fetch(l.a.certificates,{method:"GET"}).then((e=>e.json())).then((e=>j(e))).catch((e=>e)),(null===(e=window)||void 0===e?void 0:e.innerWidth)<576&&f("VERTICAL"),(null===(t=window)||void 0===t?void 0:t.innerWidth)<576||(null===(i=window)||void 0===i?void 0:i.innerWidth)>=576&&(null===(o=window)||void 0===o?void 0:o.innerWidth)<768?b("90vw"):(null===(n=window)||void 0===n?void 0:n.innerWidth)>=768&&(null===(c=window)||void 0===c?void 0:c.innerWidth)<1024?b("75vw"):b("50vw")}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.default,{title:i}),r?Object(u.jsx)(d.a,{children:Object(u.jsx)("div",{style:{width:v},className:"section-content-container",children:Object(u.jsx)(c.a,{children:Object(u.jsx)(n.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:r.certificates,cardHeight:250,mode:w,theme:{primary:t.accentColor,secondary:t.chronoTheme.cardForeColor,cardBgColor:t.chronoTheme.cardBgColor,cardForeColor:t.chronoTheme.cardForeColor,titleColor:t.accentColor},children:Object(u.jsx)("div",{className:"chrono-icons",children:r.certificates.map((e=>e.icon?Object(u.jsx)("img",{src:e.icon.src,alt:e.icon.alt},e.icon.src):null))})})})})}):Object(u.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=4.20de0fa6.chunk.js.map