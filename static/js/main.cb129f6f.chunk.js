(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{181:function(e,t,c){},182:function(e,t,c){},183:function(e,t,c){},189:function(e,t,c){},190:function(e,t,c){},191:function(e,t,c){},221:function(e,t,c){},222:function(e,t,c){},223:function(e,t,c){},224:function(e,t,c){},225:function(e,t,c){},226:function(e,t,c){},521:function(e,t,c){},522:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(32),s=c.n(a),i=c(63),o=(c(180),c(181),c(182),c(8)),l=c(6),j=(c(183),c.p+"static/media/film-reel.01818138.png"),u=c(0),d=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],b=function(){var e=Object(l.g)().pathname,t=Object(n.useRef)(null),c=d.findIndex((function(t){return t.path===e}));return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(u.jsx)("div",{ref:t,className:"header",children:Object(u.jsxs)("div",{className:"header__wrap container",children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:"logo strony"}),Object(u.jsx)(o.b,{to:"/",children:"Your Movie Base"})]}),Object(u.jsx)("ul",{className:"header__nav",children:d.map((function(e,t){return Object(u.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(u.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]})})},m=(c(189),c.p+"static/media/footer-bg.f215cfbc.jpg"),h=function(){return Object(u.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(m,")")},children:Object(u.jsxs)("div",{className:"footer__content container",children:[Object(u.jsx)("div",{className:"footer__content__logo",children:Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:"logo strony"}),Object(u.jsx)(o.b,{to:"/",children:"Your Movie Base"})]})}),Object(u.jsxs)("div",{className:"footer__content__menus",children:[Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Home"}),Object(u.jsx)(o.b,{to:"/",children:"Contact us"}),Object(u.jsx)(o.b,{to:"/",children:"Term of services"}),Object(u.jsx)(o.b,{to:"/",children:"About us"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Live"}),Object(u.jsx)(o.b,{to:"/",children:"FAQ"}),Object(u.jsx)(o.b,{to:"/",children:"Premium"}),Object(u.jsx)(o.b,{to:"/",children:"Privacy policy"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"You must watch"}),Object(u.jsx)(o.b,{to:"/",children:"Recent release"}),Object(u.jsx)(o.b,{to:"/",children:"Top IMDB"})]})]})]})})},p=(c(190),function(e){return Object(u.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}),v=function(e){return Object(u.jsx)(p,{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},O=p,x=c(10),f=c.n(x),g=c(17),_=c(16),y=c(525),N=c(523),k=c(526),w=c(524),C=(c(191),c(62)),L=function(e){var t=Object(n.useRef)(null);return Object(u.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(u.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(u.jsx)("i",{className:"bx bx-x"})})]})},S=function(e){var t=Object(n.useState)(!1),c=Object(_.a)(t,2),r=c[0],a=c[1];return Object(C.useEffect)((function(){a(e.active)}),[e.active]),Object(u.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""),children:e.children})},T=c(172),I=c.n(T),E=c(173),M=c.n(E),V={baseUrl:"https://api.themoviedb.org/3/",apiKey:"858562499d43d781fa0db3b6a90062d9",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},F=I.a.create({baseURL:V.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return M.a.stringify(Object(i.a)(Object(i.a)({},e),{},{api_key:V.apiKey}))}});F.interceptors.request.use(function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),F.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var R=F,q={movie:"movie",tv:"tv"},A={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},B={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},P={getMovieList:function(e,t){var c="movie/"+A[e];return R.get(c,t)},getTvList:function(e,t){var c="tv/"+B[e];return R.get(c,t)},getVideos:function(e,t){var c=q[e]+"/"+t+"/videos";return R.get(c,{params:{}})},search:function(e,t){var c="search/"+q[e];return R.get(c,t)},detail:function(e,t,c){var n=q[e]+"/"+t;return R.get(n,c)},credits:function(e,t){var c=q[e]+"/"+t+"/credits";return R.get(c,{params:{}})},similar:function(e,t){var c=q[e]+"/"+t+"/similar";return R.get(c,{params:{}})}},H=(c(221),function(e){var t=Object(l.f)(),c=e.item,n=V.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path),r=function(){var e=Object(g.a)(f.a.mark((function e(){var t,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal_".concat(c.id)),e.next=3,P.getVideos(q.movie,c.id);case 3:(n=e.sent).results.length>0?(r="https://www.youtube.com/embed/"+n.results[0].key,t.querySelector(".modal__content > iframe").setAttribute("src",r)):t.querySelector(".modal__content").innerHTML="No trailer",t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(u.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(u.jsx)("h2",{className:"title",children:c.title}),Object(u.jsx)("div",{className:"overview",children:c.overview}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(O,{onClick:function(){return t.push("/movie/"+c.id)},children:"Watch now"}),Object(u.jsx)(v,{onClick:r,children:"Watch trailer"})]})]}),Object(u.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(u.jsx)("img",{src:V.w500Image(c.poster_path),alt:""})})]})})}),U=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(u.jsx)(S,{active:!1,id:"modal_".concat(t.id),children:Object(u.jsx)(L,{onClose:function(){return c.current.setAttribute("src","")},children:Object(u.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})},W=function(){y.a.use([N.a]);var e=Object(C.useState)([]),t=Object(_.a)(e,2),c=t[0],n=t[1];return Object(C.useEffect)((function(){var e=function(){var e=Object(g.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,P.getMovieList(A.popular,{params:t});case 4:c=e.sent,n(c.results.slice(0,20)),console.log(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"hero-slide",children:[Object(u.jsx)(k.a,{modules:[N.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,children:c.map((function(e,t){return Object(u.jsx)(w.a,{children:function(t){var c=t.isActive;return Object(u.jsx)(H,{item:e,className:"".concat(c?"active":"")})}},t)}))}),c.map((function(e,t){return Object(u.jsx)(U,{item:e},t)}))]})},Y=(c(222),c(223),function(e){var t=e.item,c="/"+q[e.category]+"/"+t.id,n=V.w500Image(t.poster_path||t.backdrop_path);return Object(u.jsxs)(o.b,{to:c,children:[Object(u.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsx)(O,{children:Object(u.jsx)("i",{className:"bx bx-play"})})}),Object(u.jsx)("h3",{children:t.title||t.name})]})}),D=function(e){var t=Object(n.useState)([]),c=Object(_.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(g.a)(f.a.mark((function t(){var c,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,P.getMovieList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,P.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,P.similar(e.category,e.id);case 17:c=t.sent;case 18:a(c.results);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(u.jsx)("div",{className:"movie-list",children:Object(u.jsx)(k.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(u.jsx)(w.a,{children:Object(u.jsx)(Y,{item:t,category:e.category})},c)}))})})},J=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(W,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(D,{category:q.movie,type:A.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(D,{category:q.movie,type:A.top_rated})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending TV Series"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(D,{category:q.tv,type:B.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated TV Series"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(D,{category:q.tv,type:B.top_rated})]})]})]})},K=(c(224),function(e){return Object(u.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(m,")")},children:Object(u.jsx)("h2",{children:e.children})})}),z=c(113),Q=(c(225),c(226),function(e){return Object(u.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange?function(t){return e.onChange(t)}:null})}),G=(c(227),function(e){var t=Object(l.f)(),c=Object(n.useState)(e.keyword?e.keyword:""),r=Object(_.a)(c,2),a=r[0],s=r[1],i=Object(n.useCallback)((function(){a.trim().length>0&&t.push("/".concat(q[e.category],"/search/").concat(a))}),[a,e.category,t]);return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[a,i]),Object(u.jsxs)("div",{className:"movie-search",children:[Object(u.jsx)(Q,{type:"text",placeholder:"Enter keyword",value:a,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(O,{className:"small",onClick:i,children:"Search"})]})}),X=function(e){var t=Object(n.useState)([]),c=Object(_.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(1),i=Object(_.a)(s,2),o=i[0],j=i[1],d=Object(n.useState)(0),b=Object(_.a)(d,2),m=b[0],h=b[1],p=Object(l.h)().keyword;Object(n.useEffect)((function(){var t=function(){var t=Object(g.a)(f.a.mark((function t(){var c,n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={},t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,P.getMovieList(A.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,P.getTvList(B.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return r={query:p},t.next=18,P.search(e.category,{params:r});case 18:c=t.sent;case 19:a(c.results),h(c.total_pages);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,p]);var O=function(){var t=Object(g.a)(f.a.mark((function t(){var c,n,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={page:o+1},t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,P.getMovieList(A.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,P.getTvList(B.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return s={page:o+1,query:p},t.next=18,P.search(e.category,{params:s});case 18:c=t.sent;case 19:a([].concat(Object(z.a)(r),Object(z.a)(c.results))),j(o+1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(G,{category:e.category,keyword:p})}),Object(u.jsx)("div",{className:"movie-grid",children:r.map((function(t,c){return Object(u.jsx)(Y,{category:e.category,item:t},c)}))}),o<m?Object(u.jsx)("div",{className:"movie-grid__loadmore",children:Object(u.jsx)(v,{className:"small",onClick:O,children:"Load more"})}):null]})},Z=function(){var e=Object(l.h)().category;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(K,{children:e===q.movie?"Movies":"TV Series"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(X,{category:e})})})]})},$=(c(521),function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(_.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(g.a)(f.a.mark((function c(){var n;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,P.credits(t,e.id);case 2:n=c.sent,s(n.cast.slice(0,7));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(u.jsx)("div",{className:"casts",children:a.map((function(e,t){return Object(u.jsxs)("div",{className:"casts__item",children:[Object(u.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(V.w500Image(e.profile_path),")")}}),Object(u.jsx)("p",{className:"casts__item__name",children:e.name})]},t)}))})}),ee=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(u.jsxs)("div",{className:"video",children:[Object(u.jsx)("div",{className:"video__title",children:Object(u.jsx)("h2",{children:t.name})}),Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),ref:c,width:"100%",title:"video"})]})},te=function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(_.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(g.a)(f.a.mark((function c(){var n;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,P.getVideos(t,e.id);case 2:n=c.sent,s(n.results.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(u.jsx)(u.Fragment,{children:a.map((function(e,t){return Object(u.jsx)(ee,{item:e},t)}))})},ce=function(){var e=Object(l.h)(),t=e.category,c=e.id,r=Object(n.useState)(null),a=Object(_.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(g.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.detail(t,c,{params:{}});case 2:n=e.sent,i(n),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,c]),Object(u.jsx)(u.Fragment,{children:s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(V.originalImage(s.backdrop_path||s.poster_path),")")}}),Object(u.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(u.jsx)("div",{className:"movie-content__poster",children:Object(u.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(V.originalImage(s.poster_path||s.backdrop_path),")")}})}),Object(u.jsxs)("div",{className:"movie-content__info",children:[Object(u.jsx)("h1",{className:"title",children:s.title||s.name}),Object(u.jsx)("div",{className:"genres",children:s.genres&&s.genres.slice(0,5).map((function(e,t){return Object(u.jsx)("span",{className:"genres__item",children:e.name},t)}))}),Object(u.jsx)("p",{className:"overview",children:s.overview}),Object(u.jsxs)("div",{className:"cast",children:[Object(u.jsx)("div",{className:"section__header",children:Object(u.jsx)("h2",{children:"Casts"})}),Object(u.jsx)($,{id:s.id})]})]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(te,{id:s.id})}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsx)("div",{className:"section__header mb-2",children:Object(u.jsx)("h2",{children:"Similar"})}),Object(u.jsx)(D,{category:t,type:"similar",id:s.id})]})]})]})})},ne=function(){return Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/:category/search/:keyword",component:Z}),Object(u.jsx)(l.a,{path:"/:category/:id",component:ce}),Object(u.jsx)(l.a,{path:"/:category",component:Z}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:J})]})};var re=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(l.a,{render:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,Object(i.a)({},e)),Object(u.jsx)(ne,{}),Object(u.jsx)(h,{})]})}})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(re,{})}),document.getElementById("root"))}},[[522,1,2]]]);
//# sourceMappingURL=main.cb129f6f.chunk.js.map