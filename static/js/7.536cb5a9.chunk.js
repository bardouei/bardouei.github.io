(this["webpackJsonpbardouei.github.io"]=this["webpackJsonpbardouei.github.io"]||[]).push([[7,8],{88:function(t,e,i){"use strict";i.r(e);i(0),i(90);var n=i(1);e.default=function(t){var e=t.title;return Object(n.jsx)("div",{className:"header",children:e})}},96:function(t,e,i){"use strict";i.r(e);var n=i(3),c=i(0),r=i(179),s=i(64),l=i.n(s),a=i(139),o=i(88),j=i(24),u=i(32),h=i(1),d={iconStyle:{height:75,width:75,margin:10,marginBottom:0},introTextContainer:{whiteSpace:"pre-wrap"}};e.default=function(t){var e,i,s=t.header,b=Object(c.useState)(null),x=Object(n.a)(b,2),f=x[0],O=x[1];return Object(c.useEffect)((function(){fetch(j.a.skills,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return O(t)})).catch((function(t){return t}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(o.default,{title:s}),f?Object(h.jsx)(l.a,{children:Object(h.jsx)("div",{className:"section-content-container",children:Object(h.jsxs)(a.a,{children:[(i=f.intro,Object(h.jsx)("h4",{style:d.introTextContainer,children:Object(h.jsx)(r.a,{children:i})})),null===(e=f.skills)||void 0===e?void 0:e.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:t.title}),t.items.map((function(t){return Object(h.jsxs)("div",{style:{display:"inline-block"},children:[t.icon&&Object(h.jsx)("img",{style:d.iconStyle,src:t.icon,alt:t.title}),Object(h.jsx)("p",{style:{marginRight:"6px",marginLeft:"6px"},children:t.title})]},t.title)}))]},t.title)}))]})})}):Object(h.jsx)(u.default,{})]})}}}]);
//# sourceMappingURL=7.536cb5a9.chunk.js.map