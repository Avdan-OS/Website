(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{3492:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(7462),a=n(91),i=n(7294),c=n(7089),o=n(3937),s=n(1236),l=["children","tag","className","type"],u=function(e){var t=e.children,n=e.tag,u=e.className,d=e.type,m=(0,a.Z)(e,l),p=n,f=(0,o.Z)(),h=(0,s.ZP)(),g=h.SCALES,y=h.getScaleProps,x=y("font"),v=y(["margin","marginLeft","marginRight","mx","ml","mr"]),b=y(["margin","marginTop","marginBottom","my","mt","mb"]),_=y(["padding","paddingLeft","paddingRight","pl","pr","px"]),w=y(["padding","paddingTop","paddingBottom","pt","pb","py"]),Z=(0,i.useMemo)((function(){return function(e,t){var n={default:"inherit",secondary:t.secondary,success:t.success,warning:t.warning,error:t.error};return n[e]||n.default}(d,f.palette)}),[d,f.palette]),j=(0,i.useMemo)((function(){var e=[{value:v,className:"mx"},{value:b,className:"my"},{value:_,className:"px"},{value:w,className:"py"},{value:x,className:"font"}].reduce((function(e,t){return"undefined"===typeof t.value?e:"".concat(e," ").concat(t.className)}),"");return"".concat(e," ").concat(u).trim()}),[v,b,_,w,x,u]);return i.createElement(p,(0,r.Z)({},m,{className:c.ZP.dynamic([["3155699851",[n,Z,g.width(1,"auto"),g.height(1,"auto"),g.font(1,"inherit"),g.ml(0,"revert"),g.mr(0,"revert"),g.mt(0,"revert"),g.mb(0,"revert"),g.pl(0,"revert"),g.pr(0,"revert"),g.pt(0,"revert"),g.pb(0,"revert")]]])+" "+(m&&null!=m.className&&m.className||j||"")}),t,i.createElement(c.ZP,{id:"3155699851",dynamic:[n,Z,g.width(1,"auto"),g.height(1,"auto"),g.font(1,"inherit"),g.ml(0,"revert"),g.mr(0,"revert"),g.mt(0,"revert"),g.mb(0,"revert"),g.pl(0,"revert"),g.pr(0,"revert"),g.pt(0,"revert"),g.pb(0,"revert")]},"".concat(n,".__jsx-style-dynamic-selector{color:").concat(Z,";width:").concat(g.width(1,"auto"),";height:").concat(g.height(1,"auto"),";}.font.__jsx-style-dynamic-selector{font-size:").concat(g.font(1,"inherit"),";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(g.ml(0,"revert"),";margin-right:").concat(g.mr(0,"revert"),";}.my.__jsx-style-dynamic-selector{margin-top:").concat(g.mt(0,"revert"),";margin-bottom:").concat(g.mb(0,"revert"),";}.px.__jsx-style-dynamic-selector{padding-left:").concat(g.pl(0,"revert"),";padding-right:").concat(g.pr(0,"revert"),";}.py.__jsx-style-dynamic-selector{padding-top:").concat(g.pt(0,"revert"),";padding-bottom:").concat(g.pb(0,"revert"),";}")))};u.defaultProps={type:"default",className:""},u.displayName="GeistTextChild";var d=u,m=n(314),p=["h1","h2","h3","h4","h5","h6","p","b","small","i","span","del","em","blockquote","children","className"],f=function e(t,n){if(!t.length)return n;var r=t.slice(1,t.length);return i.createElement(d,{tag:t[0]},e(r,n))},h=function(e){var t=e.h1,n=e.h2,c=e.h3,o=e.h4,s=e.h5,l=e.h6,u=e.p,m=e.b,h=e.small,g=e.i,y=e.span,x=e.del,v=e.em,b=e.blockquote,_=e.children,w=e.className,Z=(0,a.Z)(e,p),j={h1:t,h2:n,h3:c,h4:o,h5:s,h6:l,p:u,blockquote:b},k={span:y,small:h,b:m,em:v,i:g,del:x},N=Object.keys(j).filter((function(e){return j[e]})),T=Object.keys(k).filter((function(e){return k[e]})),E=(0,i.useMemo)((function(){return N[0]?N[0]:T[0]?T[0]:"p"}),[N,T]),P=T.filter((function(e){return e!==E})),I=(0,i.useMemo)((function(){return P.length?f(P,_):_}),[P,_]);return i.createElement(d,(0,r.Z)({className:w,tag:E},Z),I)};h.defaultProps={h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,p:!1,b:!1,small:!1,i:!1,span:!1,del:!1,em:!1,blockquote:!1,className:"",type:"default"},h.displayName="GeistText";var g=(0,m.Z)(h)},7822:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(1451),a=n(7462),i=n(7294),c=n(2047),o=n(6761),s=2e3,l="default",u=function(e){var t=(0,c.kW)(),n=t.updateToasts,u=t.toasts,d=t.updateToastLayout,m=t.updateLastToastId;(0,i.useEffect)((function(){e&&d((function(){return e?(0,a.Z)({},c.TP,e):c.TP}))}),[]);var p=function(e){n((function(t){return t.map((function(t){return t._internalIdent!==e?t:(0,a.Z)({},t,{visible:!1})}))})),m((function(){return e}))};return{toasts:u,setToast:function(e){var t="toast-".concat((0,o.zv)()),a=e.delay||s;if(e.id&&u.find((function(t){return t.id===e.id})))throw new Error('Toast: Already have the same key: "ident"');n((function(n){var i={delay:a,text:e.text,visible:!0,type:e.type||l,id:e.id||t,actions:e.actions||[],_internalIdent:t,_timeout:window.setTimeout((function(){p(t),i._timeout&&(window.clearTimeout(i._timeout),i._timeout=null)}),a),cancel:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return p(t)}))};return[].concat((0,r.Z)(n),[i])}))},removeAll:function(){n((function(e){return e.map((function(e){return(0,a.Z)({},e,{visible:!1})}))}))},findToastOneByID:function(e){return u.find((function(t){return t.id===e}))},removeToastOneByID:function(e){n((function(t){return t.map((function(t){return t.id!==e?t:(0,a.Z)({},t,{visible:!1})}))}))}}},d=u},8348:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return n(6820)}])},6820:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(5988),i=n.n(a),c=n(3937),o=n(7822),s=n(9952),l=n(3492),u=n(1761),d=n(4632),m=n(1881),p=n(6054),f=n(4633),h=n(9335),g=n(7294);t.default=function(){var e=(0,c.Z)(),t=(0,g.useState)("row"),n=t[0],a=t[1],y=(0,g.useState)(6),x=y[0],v=y[1],b=(0,o.Z)().setToast;return(0,h.Z)((function(e){e<950?(a("column"),v(14)):(a("row"),v(8))})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{id:"overview",className:i().dynamic([["4c2aa58282269eb4",[e.palette.background,e.palette.accents_2]]])+" text-center",children:[(0,r.jsx)(s.Z,{h:3}),(0,r.jsx)(l.Z,{className:"header",h1:!0,children:"Read the features in detail."}),(0,r.jsx)(s.Z,{}),(0,r.jsxs)(u.Z.Container,{gap:3,direction:n,alignItems:"center",justify:"center",children:[(0,r.jsx)(u.Z,{xs:x,children:(0,r.jsxs)(d.Z,{style:{background:e.palette.background},hoverable:!0,paddingTop:"40px",paddingBottom:"10px",width:"100%",children:[(0,r.jsx)(m.Z,{draggable:"false",src:"/assets/icons/user.png",height:"100%",width:"200px"}),(0,r.jsx)(p.Z,{type:"success",children:"I'm a User"}),(0,r.jsx)(s.Z,{}),(0,r.jsx)(f.Z,{type:"success",shadow:!0,margin:"10px",onClick:function(){b({text:"Manual is not available yet.",delay:5e3,type:"error"})},children:"Open manual"}),(0,r.jsx)(s.Z,{})]})}),(0,r.jsx)(u.Z,{xs:x,children:(0,r.jsxs)(d.Z,{style:{background:e.palette.background},hoverable:!0,paddingTop:"40px",paddingBottom:"10px",width:"100%",children:[(0,r.jsx)(m.Z,{draggable:"false",src:"/assets/icons/developer.png",height:"100%",width:"200px"}),(0,r.jsx)(p.Z,{type:"success",children:"I'm a Developer"}),(0,r.jsx)(s.Z,{}),(0,r.jsx)(f.Z,{type:"success",shadow:!0,margin:"10px",onClick:function(){b({text:"Doc is not available yet.",delay:5e3,type:"error"})},children:"Open documentation"}),(0,r.jsx)(s.Z,{h:1})]})})]}),(0,r.jsx)(s.Z,{h:5})]}),(0,r.jsx)(i(),{id:"4c2aa58282269eb4",dynamic:[e.palette.background,e.palette.accents_2],children:".card-container.__jsx-style-dynamic-selector{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin:0 auto;\nmax-width:500%;\npadding:0;\nborder-top:none!important}\n.trouble.__jsx-style-dynamic-selector{background:".concat(e.palette.background,"!important}\n.trouble.__jsx-style-dynamic-selector:hover{background:").concat(e.palette.accents_2,"!important}\n.header.__jsx-style-dynamic-selector{font-size:72px;\nbackground:-webkit-linear-gradient(#eee, #333);\n-webkit-background-clip:text;\n-webkit-text-fill-color:transparent}")})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=8348,e(e.s=t);var t}));var t=e.O();_N_E=t}]);