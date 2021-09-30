(this["webpackJsonpui-refresh-test"]=this["webpackJsonpui-refresh-test"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(14),i=n.n(o),a=n(12),s=(n(31),n(32),n(9)),u=n(3),j=function(){return Object(a.b)()},d=a.c,b=n(13),h=n.n(b),l=n(18),f=n(8),x="https://ci.kbase.us/services/auth",O={pending:!1},k=Object(f.b)("auth/authFromToken",function(){var e=Object(l.a)(h.a.mark((function e(t){var n,r,c,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/api/V2/token"),{method:"GET",headers:{Authorization:t||""}});case 2:if((n=e.sent).ok){e.next=15;break}return r=n.statusText,e.prev=5,e.next=8,n.json();case 8:c=e.sent.error,r+=": ".concat(c.message),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:throw new Error('Failed to validate token: "'.concat(r,'"'));case 15:return e.next=17,n.json();case 17:return o=e.sent,e.abrupt("return",{token:t,tokenInfo:o});case 19:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()),p=Object(f.b)("auth/revokeCurrentToken",function(){var e=Object(l.a)(h.a.mark((function e(t,n){var r,c,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=null===(r=n.getState().auth._tokenInfo)||void 0===r?void 0:r.id,o=n.getState().auth.token,c&&o){e.next=4;break}throw new Error("Failed to revoke token: No token to revoke");case 4:return e.next=6,fetch("".concat(x,"/tokens/revoke/").concat(c),{method:"DELETE",headers:{Authorization:o||""}});case 6:if((i=e.sent).ok){e.next=9;break}throw new Error("Failed to revoke token: ".concat(i.statusText));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(f.c)({name:"auth",initialState:O,reducers:{},extraReducers:function(e){return e.addCase(k.pending,(function(e){e.error=void 0,e.pending=!0})).addCase(k.fulfilled,(function(e,t){e.token=t.payload.token,e.username=t.payload.tokenInfo.user,e._tokenInfo=t.payload.tokenInfo,e.pending=!1})).addCase(k.rejected,(function(e,t){e.error=t.error.message,e.username=void 0,e._tokenInfo=void 0,e.pending=!1})).addCase(p.pending,(function(){})).addCase(p.fulfilled,(function(){return O})).addCase(p.rejected,(function(){}))}}).reducer,g=n(15);var m=n(1);function C(){return Object(m.jsx)("nav",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/count",children:"Count"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/users",children:"Users"})}),Object(m.jsx)("li",{children:Object(m.jsx)(s.b,{to:"/auth",children:"Auth"})})]})})}var w=Object(f.c)({name:"count",initialState:{count:0},reducers:{increment:function(e){e.count+=1}}}),E=w.reducer,F=w.actions.increment,T=function(e){return e.count.count},y=function(){var e=d(T);return Object(m.jsx)(m.Fragment,{children:e})};function I(){var e=j();return Object(m.jsxs)("section",{children:[Object(m.jsxs)("h2",{children:["The count is: ",Object(m.jsx)(y,{})]}),Object(m.jsx)("button",{onClick:function(){e(F())},children:"Add"})]})}function A(){return Object(m.jsx)("h2",{children:"About"})}function S(){return Object(m.jsx)("h2",{children:"Home"})}function L(){var e=d((function(e){return e.auth})),t=e.username,n=e.token,r=e.error,c=e.pending;return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Auth"}),Object(m.jsx)("p",{children:n?"You are logged in as '".concat(t,"'"):"You are not logged in"}),c?Object(m.jsx)("p",{children:"Please wait..."}):n?Object(m.jsx)(_,{}):Object(m.jsx)(P,{}),r?Object(m.jsx)("span",{style:{color:"red"},children:r}):null]})}var P=function(){var e=j(),t=Object(r.useState)(),n=Object(g.a)(t,2),c=n[0],o=n[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{placeholder:"kbase token",type:"text",value:null!==c&&void 0!==c?c:"",onChange:function(e){return o(e.target.value)}}),Object(m.jsx)("button",{onClick:function(){c?e(k(c)):alert("Please enter a kbase token")},children:"Login"})]})},_=function(){var e=j();return Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return e(p())},children:"Logout of KBase"})})};function B(){return Object(m.jsx)("h2",{children:"Users"})}function z(){var e=j(),t=function(e){var t=document.cookie.split(";").map((function(e){return e.trim().split("=")})).find((function(t){var n=Object(g.a)(t,2),r=n[0];return n[1],r.trim()===e}));return t?t[1]:void 0}("kbase_session");return Object(r.useEffect)((function(){t&&e(k(t))}),[t]),Object(m.jsx)(s.a,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{}),Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{path:"/about",children:Object(m.jsx)(A,{})}),Object(m.jsx)(u.a,{path:"/count",children:Object(m.jsx)(I,{})}),Object(m.jsx)(u.a,{path:"/users",children:Object(m.jsx)(B,{})}),Object(m.jsx)(u.a,{path:"/auth",children:Object(m.jsx)(L,{})}),Object(m.jsx)(u.a,{path:"/",children:Object(m.jsx)(S,{})})]})]})})}var D=Object(f.a)({reducer:{count:E,auth:v}}),H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(a.a,{store:D,children:Object(m.jsx)(z,{})})}),document.getElementById("root")),H()}},[[39,1,2]]]);
//# sourceMappingURL=main.6fa86a91.chunk.js.map