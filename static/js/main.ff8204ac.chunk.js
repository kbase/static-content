(this["webpackJsonpui-refresh-test"]=this["webpackJsonpui-refresh-test"]||[]).push([[0],{10:function(e,t,n){e.exports={topbar:"TopBar_topbar__3xoma",topbar_item:"TopBar_topbar_item__20292",stretch:"TopBar_stretch__5Y5fJ",hamburger_menu:"TopBar_hamburger_menu__1Nc7c",page_title:"TopBar_page_title__1OjqW",environment:"TopBar_environment__Lx09_",login_menu:"TopBar_login_menu__agXq7"}},13:function(e,t,n){e.exports={nav_list:"LeftNavBar_nav_list__iLWGq",nav_item:"LeftNavBar_nav_item__35CL2",active:"LeftNavBar_active__38wjJ",nav_icon:"LeftNavBar_nav_icon__e2bJK",nav_desc:"LeftNavBar_nav_desc__1vXc6"}},16:function(e,t,n){e.exports={container:"App_container__MiK3W",left_navbar:"App_left_navbar__SQTn7",page_content:"App_page_content__1GAyC",topbar:"App_topbar__Qqa7Z"}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(20),i=n.n(r),o=n(15),s=(n(38),n(16)),u=n.n(s),j=n(21),d=n(4),l=n(11),b={pageTitle:void 0,environment:"unknown"},x=Object(l.c)({name:"page",initialState:b,reducers:{setPageTitle:function(e,t){e.pageTitle=t.payload},setEnvironment:function(e,t){e.environment=t.payload}}}),h=x.reducer,p=x.actions,O=p.setPageTitle,v=p.setEnvironment,f=function(){return Object(o.b)()},m=o.c,g=document.title,A=function(e){var t=f();return Object(c.useEffect)((function(){return t(O(e)),document.title="KBase".concat(void 0!==e?": ".concat(e):""),function(){t(O(void 0)),document.title=g}}),[t,e]),null},_=n(17),k=n.n(_),E=n(25),C="https://next-dev.kbase.us/services/auth",N={pending:!1},T=Object(l.b)("auth/authFromToken",function(){var e=Object(E.a)(k.a.mark((function e(t){var n,c,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/api/V2/token"),{method:"GET",headers:{Authorization:t||""}});case 2:if((n=e.sent).ok){e.next=15;break}return c=n.statusText,e.prev=5,e.next=8,n.json();case 8:a=e.sent.error,c+=": ".concat(a.message),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:throw new Error('Failed to validate token: "'.concat(c,'"'));case 15:return e.next=17,n.json();case 17:return r=e.sent,e.abrupt("return",{token:t,tokenInfo:r});case 19:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()),F=Object(l.b)("auth/revokeCurrentToken",function(){var e=Object(E.a)(k.a.mark((function e(t,n){var c,a,r,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null===(c=n.getState().auth._tokenInfo)||void 0===c?void 0:c.id,r=n.getState().auth.token,a&&r){e.next=4;break}throw new Error("Failed to revoke token: No token to revoke");case 4:return e.next=6,fetch("".concat(C,"/tokens/revoke/").concat(a),{method:"DELETE",headers:{Authorization:r||""}});case 6:if((i=e.sent).ok){e.next=9;break}throw new Error("Failed to revoke token: ".concat(i.statusText));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),q=Object(l.c)({name:"auth",initialState:N,reducers:{},extraReducers:function(e){return e.addCase(T.pending,(function(e){e.error=void 0,e.pending=!0})).addCase(T.fulfilled,(function(e,t){e.token=t.payload.token,e.username=t.payload.tokenInfo.user,e._tokenInfo=t.payload.tokenInfo,e.pending=!1})).addCase(T.rejected,(function(e,t){e.error=t.error.message,e.username=void 0,e._tokenInfo=void 0,e.pending=!1})).addCase(F.pending,(function(){})).addCase(F.fulfilled,(function(){return N})).addCase(F.rejected,(function(){}))}}).reducer,B=n(22);var L=n(13),w=n.n(L),Z=n(12),y=n(5),Y=n(1);function P(){return Object(Y.jsx)("nav",{children:Object(Y.jsxs)("ul",{className:w.a.nav_list,children:[Object(Y.jsx)(S,{path:"/",desc:"Navigator",icon:y.d}),Object(Y.jsx)(S,{path:"/orgs",desc:"Orgs",icon:y.m}),Object(Y.jsx)(S,{path:"/catalog",desc:"Catalog",icon:y.b}),Object(Y.jsx)(S,{path:"/search",desc:"Search",icon:y.i}),Object(Y.jsx)(S,{path:"/jobs",desc:"Jobs",icon:y.k}),Object(Y.jsx)(S,{path:"/account",desc:"Account",icon:y.g}),Object(Y.jsx)(S,{path:"/feeds",desc:"Feeds",icon:y.c}),Object(Y.jsx)(S,{path:"/count",desc:"Count",icon:y.e}),Object(Y.jsx)(S,{path:"/auth",desc:"Auth",icon:y.e})]})})}var S=function(e){var t=e.path,n=e.desc,c=e.icon,a=Object(d.f)(),r=w.a.nav_item;return a.pathname===t&&(r+=" ".concat(w.a.active)),Object(Y.jsx)("li",{className:r,children:Object(Y.jsxs)(j.b,{to:t,children:[Object(Y.jsx)(Z.a,{className:w.a.nav_icon,icon:c}),Object(Y.jsx)("span",{className:w.a.nav_desc,children:n})]})},t)};function K(){return Object(Y.jsx)("section",{children:Object(Y.jsx)("h2",{children:"Page Not Found."})})}function X(){return A("Narrative Navigator"),Object(Y.jsx)("section",{children:Object(Y.jsx)("h2",{children:"Nothing here yet"})})}var W=Object(l.c)({name:"count",initialState:{count:0},reducers:{increment:function(e){e.count+=1}}}),I=W.reducer,Q=W.actions.increment,J=function(e){return e.count.count},G=function(){var e=m(J);return Object(Y.jsx)(Y.Fragment,{children:e})};function D(){A("Count");var e=f();return Object(Y.jsxs)("section",{children:[Object(Y.jsxs)("h2",{children:["The count is: ",Object(Y.jsx)(G,{})]}),Object(Y.jsx)("button",{onClick:function(){e(Q())},children:"Add"})]})}function H(){A("Authentication");var e=m((function(e){return e.auth})),t=e.username,n=e.token,c=e.error,a=e.pending;return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("p",{children:n?"You are logged in as '".concat(t,"'"):"You are not logged in"}),a?Object(Y.jsx)("p",{children:"Please wait..."}):n?Object(Y.jsx)(M,{}):Object(Y.jsx)(z,{}),c?Object(Y.jsx)("span",{style:{color:"red"},children:c}):null]})}var z=function(){var e=f(),t=Object(c.useState)(),n=Object(B.a)(t,2),a=n[0],r=n[1];return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("input",{placeholder:"kbase token",type:"text",value:null!==a&&void 0!==a?a:"",onChange:function(e){return r(e.target.value)}}),Object(Y.jsx)("button",{onClick:function(){a?e(T(a)):alert("Please enter a kbase token")},children:"Login"})]})},M=function(){var e=f();return Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{onClick:function(){return e(F())},children:"Logout of KBase"})})},R=n(10),V=n.n(R);function U(){return Object(Y.jsxs)("header",{className:V.a.topbar,children:[Object(Y.jsx)("div",{className:V.a.topbar_item,children:Object(Y.jsx)($,{})}),Object(Y.jsx)("div",{className:V.a.topbar_item,children:Object(Y.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(Y.jsx)("div",{className:[V.a.topbar_item,V.a.stretch].join(" "),children:Object(Y.jsx)(ee,{})}),Object(Y.jsx)("div",{className:V.a.topbar_item,children:Object(Y.jsx)(te,{})}),Object(Y.jsxs)("div",{className:V.a.login_menu,children:[Object(Y.jsx)(Z.a,{icon:y.l}),Object(Y.jsx)(Z.a,{icon:y.j})]})]})}var $=function(){return Object(Y.jsx)("div",{className:V.a.hamburger_menu,children:Object(Y.jsx)(Z.a,{icon:y.a})})},ee=function(){var e=m((function(e){return e.layout.pageTitle}));return Object(Y.jsx)("div",{className:V.a.page_title,children:Object(Y.jsx)("span",{children:e||""})})},te=function(){var e=m((function(e){return e.layout.environment}));if("production"===e)return null;var t={ci:y.f,unknown:y.h,appdev:y.n}[e],n={ci:"CI",unknown:"??",appdev:"APPDEV"}[e];return Object(Y.jsxs)("div",{className:V.a.environment,children:[Object(Y.jsx)("span",{children:n}),Object(Y.jsx)(Z.a,{icon:t})]})};function ne(){var e=f(),t=function(e){var t=document.cookie.split(";").map((function(e){return e.trim().split("=")})).find((function(t){var n=Object(B.a)(t,2),c=n[0];return n[1],c.trim()===e}));return t?t[1]:void 0}("kbase_session");return Object(c.useEffect)((function(){t&&e(T(t))}),[e,t]),Object(c.useEffect)((function(){e(v("ci"))}),[e]),Object(Y.jsx)(j.a,{basename:"/services/static-content",children:Object(Y.jsxs)("div",{className:u.a.container,children:[Object(Y.jsx)("div",{className:u.a.topbar,children:Object(Y.jsx)(U,{})}),Object(Y.jsx)("div",{className:u.a.left_navbar,children:Object(Y.jsx)(P,{})}),Object(Y.jsx)("div",{className:u.a.page_content,children:Object(Y.jsxs)(d.c,{children:[Object(Y.jsx)(d.a,{path:"/count",children:Object(Y.jsx)(D,{})}),Object(Y.jsx)(d.a,{path:"/auth",children:Object(Y.jsx)(H,{})}),Object(Y.jsx)(d.a,{exact:!0,path:"/",children:Object(Y.jsx)(X,{})}),Object(Y.jsx)(d.a,{path:"*",children:Object(Y.jsx)(K,{})})]})})]})})}var ce=function(){return Object(l.a)({reducer:{count:I,auth:q,layout:h}})},ae=ce(),re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(o.a,{store:ae,children:Object(Y.jsx)(ne,{})})}),document.getElementById("root")),re()}},[[47,1,2]]]);
//# sourceMappingURL=main.ff8204ac.chunk.js.map