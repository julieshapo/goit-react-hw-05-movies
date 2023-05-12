"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[991],{672:function(n,e,t){t.d(e,{O:function(){return u}});var r,a=t(87),c=t(168),o=t(444).default.li(r||(r=(0,c.Z)(["\n  margin-bottom: 15px;\n  color: #212121;\n  font-weight: 500;\n"]))),i=t(184),u=function(n){var e=n.movies,t=n.state;return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:e.map((function(n){return(0,i.jsx)(o,{children:(0,i.jsx)(a.rU,{to:"/movies/".concat(n.id),state:t,children:(0,i.jsx)("p",{children:n.title})})},n.id)}))})})}},991:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,a,c,o,i=t(433),u=t(861),s=t(439),p=t(757),l=t.n(p),f=t(791),h=t(245),d=t(689),m=t(87),v=t(672),g=t(168),x=t(444),w=x.default.div(r||(r=(0,g.Z)(["\n  margin-top: 30px;\n  margin-left: 30px;\n"]))),y=(x.default.form(a||(a=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  overflow: hidden;\n"]))),x.default.input(c||(c=(0,g.Z)(["\n  width: 600px;\n  height: 40px;\n  font-family: inherit;\n  font-size: 20px;\n  margin-right: 10px;\n  outline: none;\n  padding: 10px;\n  border-radius: 3px;\n\n  ::placeholder {\n    font-family: inherit;\n    font-size: 18px;\n  }\n"])))),b=x.default.button(o||(o=(0,g.Z)(["\n  align-items: center;\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: ",";\n  background-color: ",";\n  padding: 8px;\n  height: 40px;\n  border: 0;\n  border-radius: 3px;\n  /* opacity: 0.6; */\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  :hover {\n    opacity: 1;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.lightGreen})),Z=t(184),k=function(n){var e=n.onSubmit;return(0,Z.jsx)(w,{children:(0,Z.jsxs)("form",{action:"",onSubmit:e,children:[(0,Z.jsx)(y,{type:"text",name:"search",placeholder:"Enter movie name",autoFocus:!0,autoComplete:"off"}),(0,Z.jsx)(b,{type:"submit","aria-label":"Search movies",children:"Search"})]})})},j=function(){var n=(0,f.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,f.useState)(!1),c=(0,s.Z)(a,2),o=c[0],p=c[1],g=(0,d.TH)(),x=(0,m.lr)(),w=(0,s.Z)(x,2),y=w[0],b=w[1],j=y.get("search");return(0,f.useEffect)((function(){if(j){var n=function(){var n=(0,u.Z)(l().mark((function n(e){var t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,p(!0),n.next=4,(0,h.zi)(e);case 4:t=n.sent,r((0,i.Z)(t)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:return n.prev=11,p(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(e){return n.apply(this,arguments)}}();n(j)}}),[j]),(0,Z.jsxs)("main",{children:[(0,Z.jsx)(k,{onSubmit:function(n){n.preventDefault(),""!==j?(b({search:n.target.elements.search.value}),n.target.reset()):alert("Please enter movie name")}}),o?(0,Z.jsx)("p",{children:"'LOADING...'"}):(0,Z.jsx)(v.O,{movies:t,state:{from:g}})]})}},245:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return m},TP:function(){return h},tx:function(){return g},zi:function(){return l}});var r=t(861),a=t(757),c=t.n(a),o=t(924),i="https://api.themoviedb.org/3",u="169863a84bc27c731fc45c45dd4a4a7e";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function n(){var e,t,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:1,n.prev=1,t={api_key:u,language:"en-US"},n.next=5,o.Z.get("".concat(i,"/trending/movie/week?page=").concat(e),{params:t});case 5:return r=n.sent,n.abrupt("return",r.data.results);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])}))),p.apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={api_key:u,language:"en-US",query:e,page:1},n.next=4,o.Z.get("".concat(i,"/search/movie?"),{params:t});case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={api_key:u,language:"en-US"},n.next=4,o.Z.get("".concat(i,"/movie/").concat(e,"?"),{params:t});case 4:return r=n.sent,n.abrupt("return",r.data);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={api_key:u,language:"en-US"},n.next=4,o.Z.get("".concat(i,"/movie/").concat(e,"/credits?"),{params:t});case 4:return r=n.sent,n.abrupt("return",r.data.cast);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t={api_key:u,language:"en-US",page:1},n.next=4,o.Z.get("".concat(i,"/movie/").concat(e,"/reviews?"),{params:t});case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=991.d012c87d.chunk.js.map