(this["webpackJsonpbardouei.github.io"]=this["webpackJsonpbardouei.github.io"]||[]).push([[5,10],{145:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);n(0),n(90);var o=n(1);t.default=function(e){var t=e.title;return Object(o.jsx)("div",{className:"header",children:t})}},94:function(e,t,n){"use strict";n.r(t);var o=n(3),i=n(0),c=n(148),r=n(140),d=n(64),a=n.n(d),l=n(19),u=n(24),s=n(88),h=n(32),j=(n(145),n(1));t.default=function(e){var t=Object(i.useContext)(l.a),n=e.header,d=Object(i.useState)(null),b=Object(o.a)(d,2),v=b[0],w=b[1],O=Object(i.useState)("50vw"),f=Object(o.a)(O,2),m=f[0],C=f[1],x=Object(i.useState)("VERTICAL_ALTERNATING"),p=Object(o.a)(x,2),T=p[0],g=p[1];return Object(i.useEffect)((function(){var e,t,n,o,i,c;fetch(u.a.education,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return w(e)})).catch((function(e){return e})),(null===(e=window)||void 0===e?void 0:e.innerWidth)<576&&g("VERTICAL"),(null===(t=window)||void 0===t?void 0:t.innerWidth)<576||(null===(n=window)||void 0===n?void 0:n.innerWidth)>=576&&(null===(o=window)||void 0===o?void 0:o.innerWidth)<768?C("90vw"):(null===(i=window)||void 0===i?void 0:i.innerWidth)>=768&&(null===(c=window)||void 0===c?void 0:c.innerWidth)<1024?C("75vw"):C("50vw")}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.default,{title:n}),v?Object(j.jsx)(a.a,{children:Object(j.jsx)("div",{style:{width:m},className:"section-content-container",children:Object(j.jsx)(r.a,{children:Object(j.jsx)(c.a,{hideControls:!0,allowDynamicUpdate:!0,useReadMore:!1,items:v.education,cardHeight:250,mode:T,theme:{primary:t.accentColor,secondary:t.chronoTheme.cardForeColor,cardBgColor:t.chronoTheme.cardBgColor,cardForeColor:t.chronoTheme.cardForeColor,titleColor:t.accentColor},children:Object(j.jsx)("div",{className:"chrono-icons",children:v.education.map((function(e){return e.icon?Object(j.jsx)("img",{src:e.icon.src,alt:e.icon.alt},e.icon.src):null}))})})})})}):Object(j.jsx)(h.default,{})]})}}}]);
//# sourceMappingURL=5.fa7c3009.chunk.js.map