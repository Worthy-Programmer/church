import{D as e,S as s,i as t,s as a,e as r,c as l,a as n,d as o,b as c,E as i,f as h,F as u,G as d,t as f,k as b,g,n as m,H as p,x as v,u as x,I as $,J as E}from"../chunks/vendor-3c003bfe.js";const y={subscribe:s=>(()=>{const s=e("__svelte__");return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:s.navigating.subscribe}},session:s.session}})().page.subscribe(s)};function k(e,s,t){const a=e.slice();return a[4]=s[t].name,a[5]=s[t].href,a}function _(e){let s,t,a,d;return{c(){s=r("a"),t=r("i"),this.h()},l(e){s=l(e,"A",{href:!0,class:!0,"sveltekit:prefetch":!0});var a=n(s);t=l(a,"I",{class:!0}),n(t).forEach(o),a.forEach(o),this.h()},h(){c(t,"class",a="fas fa-"+e[4]),c(s,"href",d=e[5]),c(s,"class","hover:text-blue-800"),c(s,"sveltekit:prefetch",""),i(s,"text-blue-800",e[0].path==e[5])},m(e,a){h(e,s,a),u(s,t)},p(e,t){3&t&&i(s,"text-blue-800",e[0].path==e[5])},d(e){e&&o(s)}}}function j(e){let s,t,a,i,E,y,j,A=e[1],H=[];for(let r=0;r<A.length;r+=1)H[r]=_(k(e,A,r));const V=e[3].default,w=d(V,e,e[2],null);return{c(){s=r("header"),t=r("h1"),a=f("My Video"),i=b(),E=r("nav");for(let e=0;e<H.length;e+=1)H[e].c();y=b(),w&&w.c(),this.h()},l(e){s=l(e,"HEADER",{class:!0});var r=n(s);t=l(r,"H1",{class:!0,id:!0});var c=n(t);a=g(c,"My Video"),c.forEach(o),i=m(r),E=l(r,"NAV",{class:!0});var h=n(E);for(let s=0;s<H.length;s+=1)H[s].l(h);h.forEach(o),r.forEach(o),y=m(e),w&&w.l(e),this.h()},h(){c(t,"class","text-2xl text-center md:text-left flex-auto hidden md:block svelte-1tqcvay"),c(t,"id","nav-brand"),c(E,"class","fixed -inset-x-0 bottom-0 flex justify-around p-3 border border-top text-2xl md:relative md:border-none flex-auto bg-gray-50 md:bg-white"),c(s,"class","md:my-10 md:flex mx-10 md:justify-between items-baseline")},m(e,r){h(e,s,r),u(s,t),u(t,a),u(s,i),u(s,E);for(let s=0;s<H.length;s+=1)H[s].m(E,null);h(e,y,r),w&&w.m(e,r),j=!0},p(e,[s]){if(3&s){let t;for(A=e[1],t=0;t<A.length;t+=1){const a=k(e,A,t);H[t]?H[t].p(a,s):(H[t]=_(a),H[t].c(),H[t].m(E,null))}for(;t<H.length;t+=1)H[t].d(1);H.length=A.length}w&&w.p&&(!j||4&s)&&p(w,V,e,e[2],j?s:-1,null,null)},i(e){j||(v(w,e),j=!0)},o(e){x(w,e),j=!1},d(e){e&&o(s),$(H,e),e&&o(y),w&&w.d(e)}}}function A(e,s,t){let a;E(e,y,(e=>t(0,a=e)));let{$$slots:r={},$$scope:l}=s;return e.$$set=e=>{"$$scope"in e&&t(2,l=e.$$scope)},[a,[{name:"home",href:"/"},{name:"video",href:"/video"},{name:"plus",href:"/church/add"}],l,r]}export default class extends s{constructor(e){super(),t(this,e,A,j,a,{})}}
