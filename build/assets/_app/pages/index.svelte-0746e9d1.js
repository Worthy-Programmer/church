import{S as s,i as c,s as r,e as t,t as e,k as o,c as n,a,g as l,d as h,n as i,b as u,L as f,f as d,F as v,h as p,M as m,K as x,N as g}from"../chunks/vendor-01414016.js";function b(s,c,r){const t=s.slice();return t[1]=c[r].id,t[2]=c[r].name,t[3]=c[r].location,t[4]=c[r].color,t}function y(s,c){let r,m,x,g,b,y,k,E,w=c[2]+"",P=c[3]+"";return{key:s,first:null,c(){r=t("a"),m=t("h3"),x=e(w),g=o(),b=t("p"),y=e(P),k=o(),this.h()},l(s){r=n(s,"A",{href:!0,style:!0,class:!0});var c=a(r);m=n(c,"H3",{class:!0});var t=a(m);x=l(t,w),t.forEach(h),g=i(c),b=n(c,"P",{});var e=a(b);y=l(e,P),e.forEach(h),k=i(c),c.forEach(h),this.h()},h(){u(m,"class","font-bold"),u(r,"href",E="/video/"+c[1]),f(r,"background-color",c[4]),u(r,"class","block border border-black hover:shadow-xl  p-10 my-7 mx-4 rounded-xl md:text-center bg-cover  church"),this.first=r},m(s,c){d(s,r,c),v(r,m),v(m,x),v(r,g),v(r,b),v(b,y),v(r,k)},p(s,t){c=s,1&t&&w!==(w=c[2]+"")&&p(x,w),1&t&&P!==(P=c[3]+"")&&p(y,P),1&t&&E!==(E="/video/"+c[1])&&u(r,"href",E),1&t&&f(r,"background-color",c[4])},d(s){s&&h(r)}}}function k(s){let c,r,f,p,k,E=[],w=new Map,P=s[0];const j=s=>s[1];for(let t=0;t<P.length;t+=1){let c=b(s,P,t),r=j(c);w.set(r,E[t]=y(r,c))}return{c(){c=t("div"),r=t("h2"),f=e("Public Churches"),p=o(),k=t("div");for(let s=0;s<E.length;s+=1)E[s].c();this.h()},l(s){c=n(s,"DIV",{class:!0});var t=a(c);r=n(t,"H2",{class:!0});var e=a(r);f=l(e,"Public Churches"),e.forEach(h),p=i(t),k=n(t,"DIV",{class:!0});var o=a(k);for(let c=0;c<E.length;c+=1)E[c].l(o);o.forEach(h),t.forEach(h),this.h()},h(){u(r,"class","text-2xl mx-4"),u(k,"class","grid md:grid-cols-5 grid-cols-1"),u(c,"class"," container mx-auto py-10")},m(s,t){d(s,c,t),v(c,r),v(r,f),v(c,p),v(c,k);for(let c=0;c<E.length;c+=1)E[c].m(k,null)},p(s,[c]){1&c&&(P=s[0],E=m(E,c,j,1,s,P,w,k,g,y,null,b))},i:x,o:x,d(s){s&&h(c);for(let c=0;c<E.length;c+=1)E[c].d()}}}var E=function(s,c,r,t){return new(r||(r=Promise))((function(e,o){function n(s){try{l(t.next(s))}catch(c){o(c)}}function a(s){try{l(t.throw(s))}catch(c){o(c)}}function l(s){var c;s.done?e(s.value):(c=s.value,c instanceof r?c:new r((function(s){s(c)}))).then(n,a)}l((t=t.apply(s,c||[])).next())}))};const w=({fetch:s})=>E(void 0,void 0,void 0,(function*(){const c=yield s("/church.json");if(c.ok){return{props:{churches:yield c.json()}}}}));function P(s,c,r){let{churches:t}=c;return s.$$set=s=>{"churches"in s&&r(0,t=s.churches)},[t]}export default class extends s{constructor(s){super(),c(this,s,P,k,r,{churches:0})}}export{w as load};