import{S as D,i as G,s as L,a as v,k as E,q as A,e as g,G as M,h as u,c as y,l as I,m as q,r as C,b as m,B as S,f as p,d as H,t as d,C as N,g as z,v as P,w as T,x as V,A as j,y as F}from"../../../chunks/index-44e9d731.js";import{b as $}from"../../../chunks/paths-846459bd.js";import{B as J}from"../../../chunks/beforeAfter-b4bd1a26.js";function k(i,o,r){const n=i.slice();return n[1]=o[r].title,n[2]=o[r].count,n[3]=o[r].dir,n}function w(i,o,r){const n=i.slice();return n[6]=o[r],n[8]=r,n}function x(i){let o,r;return o=new J({props:{before:$+"/img/image/"+i[3]+"/"+i[8]+"b.webp",after:$+"/img/image/"+i[3]+"/"+i[8]+"a.webp",alt:i[1]}}),{c(){P(o.$$.fragment)},l(n){T(o.$$.fragment,n)},m(n,f){V(o,n,f),r=!0},p:j,i(n){r||(p(o.$$.fragment,n),r=!0)},o(n){d(o.$$.fragment,n),r=!1},d(n){F(o,n)}}}function B(i){let o,r=i[1]+"",n,f,c,_,s=Array(i[2]),t=[];for(let e=0;e<s.length;e+=1)t[e]=x(w(i,s,e));const b=e=>d(t[e],1,1,()=>{t[e]=null});return{c(){o=E("h3"),n=A(r),f=v();for(let e=0;e<t.length;e+=1)t[e].c();c=g()},l(e){o=I(e,"H3",{});var a=q(o);n=C(a,r),a.forEach(u),f=y(e);for(let l=0;l<t.length;l+=1)t[l].l(e);c=g()},m(e,a){m(e,o,a),S(o,n),m(e,f,a);for(let l=0;l<t.length;l+=1)t[l].m(e,a);m(e,c,a),_=!0},p(e,a){if(a&1){s=Array(e[2]);let l;for(l=0;l<s.length;l+=1){const h=w(e,s,l);t[l]?(t[l].p(h,a),p(t[l],1)):(t[l]=x(h),t[l].c(),p(t[l],1),t[l].m(c.parentNode,c))}for(z(),l=s.length;l<t.length;l+=1)b(l);H()}},i(e){if(!_){for(let a=0;a<s.length;a+=1)p(t[a]);_=!0}},o(e){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)d(t[a]);_=!1},d(e){e&&u(o),e&&u(f),N(t,e),e&&u(c)}}}function K(i){let o,r,n,f,c,_,s=i[0],t=[];for(let e=0;e<s.length;e+=1)t[e]=B(k(i,s,e));const b=e=>d(t[e],1,1,()=>{t[e]=null});return{c(){o=v(),r=E("h2"),n=A("Image"),f=v();for(let e=0;e<t.length;e+=1)t[e].c();c=g(),this.h()},l(e){M('[data-svelte="svelte-10pxwky"]',document.head).forEach(u),o=y(e),r=I(e,"H2",{});var l=q(r);n=C(l,"Image"),l.forEach(u),f=y(e);for(let h=0;h<t.length;h+=1)t[h].l(e);c=g(),this.h()},h(){document.title="Image Manipulation - Layla El-Sekaifi"},m(e,a){m(e,o,a),m(e,r,a),S(r,n),m(e,f,a);for(let l=0;l<t.length;l+=1)t[l].m(e,a);m(e,c,a),_=!0},p(e,[a]){if(a&1){s=e[0];let l;for(l=0;l<s.length;l+=1){const h=k(e,s,l);t[l]?(t[l].p(h,a),p(t[l],1)):(t[l]=B(h),t[l].c(),p(t[l],1),t[l].m(c.parentNode,c))}for(z(),l=s.length;l<t.length;l+=1)b(l);H()}},i(e){if(!_){for(let a=0;a<s.length;a+=1)p(t[a]);_=!0}},o(e){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)d(t[a]);_=!1},d(e){e&&u(o),e&&u(r),e&&u(f),N(t,e),e&&u(c)}}}function O(i){return[[{title:"Externals",count:5,dir:"externals"},{title:"Internals",count:3,dir:"internals"},{title:"Time of Day Conversion",count:8,dir:"tod"},{title:"Visualisations",count:1,dir:"viz"}]]}class W extends D{constructor(o){super(),G(this,o,O,K,L,{})}}export{W as default};