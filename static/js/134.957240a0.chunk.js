"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{126:function(e,t,r){r(791);var n=r(87),a=r(184);t.Z=function(e){var t=e.movies;return(0,a.jsx)("ul",{children:t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(n.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}},134:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),i=r(126),s=r(791),o=r(87),p=r(894),f=r(184);t.default=function(){var e=(0,o.lr)(),t=(0,a.Z)(e,2),r=t[0],u=t[1],h=(0,s.useState)([]),l=(0,a.Z)(h,2),v=l[0],d=l[1],m=(0,s.useState)(!1),x=(0,a.Z)(m,2),g=x[0],j=x[1],w=(0,s.useState)(!1),Z=(0,a.Z)(w,2),b=Z[0],y=Z[1],k=(0,s.useState)("Something went wrong! Try again later"),I=(0,a.Z)(k,2),J=I[0],N=I[1],M=r.get("query");(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,p.q)(M);case 4:t=e.sent,d(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),y(!0),N(e.t0.message);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}M&&function(){e.apply(this,arguments)}()}),[M]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.searchMovie.value;u({query:t})},children:[(0,f.jsx)("label",{children:(0,f.jsx)("input",{name:"searchMovie",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies...",required:!0})}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsxs)("section",{children:[b&&(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:J})}),g&&(0,f.jsx)("div",{children:(0,f.jsx)("p",{children:"Loading..."})}),(0,f.jsx)("ul",{children:0!==v&&(0,f.jsx)(i.Z,{movies:v})})]})]})}},894:function(e,t,r){r.d(t,{Df:function(){return i},HI:function(){return s},IQ:function(){return o},Tn:function(){return p},q:function(){return f}});var n=r(861),a=r(757),u=r.n(a),c=r(340).Z.create({headers:{Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTY1NjY4NTgxZDM2MDViNjI3YmJkNTA1M2MwZjc4YiIsInN1YiI6IjY1NjFmM2QyN2RmZGE2NTkzMTc0NGM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mJ_NpdJlCksB6aHfkEKZ1GCpPJcq2S1fKYHXkm3OMn0")}}),i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("https://api.themoviedb.org/3/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("https://api.themoviedb.org/3/search/movie?query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.957240a0.chunk.js.map