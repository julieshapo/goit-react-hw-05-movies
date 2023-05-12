"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[593],{593:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r,a,c,s,i=n(861),u=n(439),o=n(757),l=n.n(o),p=n(168),d=n(444),f=d.default.div(r||(r=(0,p.Z)(["\n  padding: 30px;\n  display: flex;\n"]))),h=d.default.div(a||(a=(0,p.Z)(["\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),v=n(184),x=function(e){var t=e.item,n=t.original_title,r=t.release_date,a=t.poster_path,c=t.genres,s=t.overview,i=t.vote_average,u=new Date(r).getFullYear(),o=a?"https://image.tmdb.org/t/p/w400/".concat(a):"",l=i?"".concat((10*i).toFixed(0),"%"):"No Score";return(0,v.jsxs)(f,{children:[(0,v.jsx)("img",{src:o,alt:n,width:"320"}),(0,v.jsxs)(h,{children:[(0,v.jsxs)("h1",{children:[n," (",u,")"]}),(0,v.jsxs)("p",{children:["User score: ",l]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:s}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:c.map((function(e){return e.name})).join(", ")})]})]})},g=n(791),m=n(689),w=n(87),j=n(245),y=n(243),k=n(906),Z=d.default.div(c||(c=(0,p.Z)(["\n  padding: 30px;\n"]))),_=(0,d.default)(w.rU)(s||(s=(0,p.Z)(["\n  text-transform: uppercase;\n"]))),b=function(){var e,t,n=(0,g.useState)(),r=(0,u.Z)(n,2),a=r[0],c=r[1],s=(0,g.useState)({}),o=(0,u.Z)(s,2),p=o[0],d=o[1],f=(0,m.TH)(),h=(0,g.useRef)(null!==(e=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies"),b=(0,m.UO)().movieId;return(0,g.useEffect)((function(){var e=function(){var e=(0,i.Z)(l().mark((function e(t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,j.TP)(t);case 4:n=e.sent,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,d(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();e(b)}),[b]),(0,v.jsxs)(Z,{children:[(0,v.jsx)(_,{to:h.current,children:"Back to Movies"}),p?(0,v.jsx)("p",{children:"LOADING..."}):(0,v.jsx)(x,{item:a}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(w.rU,{to:"cast",children:"Watch casting"})}),(0,v.jsx)("li",{children:(0,v.jsx)(w.rU,{to:"reviews",children:"Watch reviews"})})]}),(0,v.jsx)(g.Suspense,{fallback:(0,v.jsx)(k.a,{children:(0,v.jsx)(y.Z1,{height:"80",width:"80",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})}),children:(0,v.jsx)(m.j3,{})})]})}},245:function(e,t,n){n.d(t,{Df:function(){return o},M1:function(){return v},TP:function(){return f},tx:function(){return g},zi:function(){return p}});var r=n(861),a=n(757),c=n.n(a),s=n(924),i="https://api.themoviedb.org/3",u="169863a84bc27c731fc45c45dd4a4a7e";function o(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,n={api_key:u,language:"en-US"},e.next=5,s.Z.get("".concat(i,"/trending/movie/week?page=").concat(t),{params:n});case 5:return r=e.sent,e.abrupt("return",r.data.results);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),l.apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:u,language:"en-US",query:t,page:1},e.next=4,s.Z.get("".concat(i,"/search/movie?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:u,language:"en-US"},e.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:u,language:"en-US"},e.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"/credits?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={api_key:u,language:"en-US",page:1},e.next=4,s.Z.get("".concat(i,"/movie/").concat(t,"/reviews?"),{params:n});case 4:return r=e.sent,e.abrupt("return",r.data.results);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=593.e7ad6a29.chunk.js.map