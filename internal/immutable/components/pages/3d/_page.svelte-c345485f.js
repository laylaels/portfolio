import{S as W,i as X,s as Y,k,a as I,l as A,m as M,c as S,h as m,D as q,n as p,b,B as V,A as B,o as x,E as $,q as H,e as T,G as ee,r as L,f as P,d as te,t as N,C as j,v as le,w as se,x as ae,y as re,g as ie}from"../../../chunks/index-44e9d731.js";import{b as O}from"../../../chunks/paths-846459bd.js";import{_ as J}from"../../../chunks/preload-helper-0ffe6af8.js";function oe(i){let t,s,a,c,g,f,_,v;return{c(){t=k("div"),s=k("img"),g=I(),f=k("img"),this.h()},l(r){t=A(r,"DIV",{class:!0});var h=M(t);s=A(h,"IMG",{src:!0,alt:!0}),g=S(h),f=A(h,"IMG",{src:!0,alt:!0}),h.forEach(m),this.h()},h(){q(s.src,a=i[0])||p(s,"src",a),p(s,"alt",c=i[2]+" (before)"),q(f.src,_=i[1])||p(f,"src",_),p(f,"alt",v=i[2]+" (after)"),p(t,"class","svelte-hvoq0m")},m(r,h){b(r,t,h),V(t,s),V(t,g),V(t,f),i[5](t)},p(r,[h]){h&1&&!q(s.src,a=r[0])&&p(s,"src",a),h&4&&c!==(c=r[2]+" (before)")&&p(s,"alt",c),h&2&&!q(f.src,_=r[1])&&p(f,"src",_),h&4&&v!==(v=r[2]+" (after)")&&p(f,"alt",v)},i:B,o:B,d(r){r&&m(t),i[5](null)}}}function ne(i,t,s){let{before:a}=t,{after:c}=t,{alt:g}=t,{options:f=void 0}=t,_;x(async()=>{J(()=>Promise.resolve({}),["..\\..\\..\\assets\\image-compare-viewer.min-8588ba3c.css"],import.meta.url);const r=(await J(()=>import("../../../chunks/index-11361888.js"),[],import.meta.url)).default;new r(_,f).mount(),s(3,_.style.visibility="visible",_)});function v(r){$[r?"unshift":"push"](()=>{_=r,s(3,_)})}return i.$$set=r=>{"before"in r&&s(0,a=r.before),"after"in r&&s(1,c=r.after),"alt"in r&&s(2,g=r.alt),"options"in r&&s(4,f=r.options)},[a,c,g,_,f,v]}class fe extends W{constructor(t){super(),X(this,t,ne,oe,Y,{before:0,after:1,alt:2,options:4})}}function z(i,t,s){const a=i.slice();return a[1]=t[s].title,a[2]=t[s].file,a}function F(i,t,s){const a=i.slice();return a[5]=t[s],a[7]=s,a}function K(i){let t,s;return t=new fe({props:{alt:"Virtual Staging",before:O+"/img/3d/vstage/"+i[7]+"b.webp",after:O+"/img/3d/vstage/"+i[7]+"a.webp"}}),{c(){le(t.$$.fragment)},l(a){se(t.$$.fragment,a)},m(a,c){ae(t,a,c),s=!0},p:B,i(a){s||(P(t.$$.fragment,a),s=!0)},o(a){N(t.$$.fragment,a),s=!1},d(a){re(t,a)}}}function Q(i){let t,s;return{c(){t=k("img"),this.h()},l(a){t=A(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){q(t.src,s=O+"/img/3d/asset/"+i[2]+".webp")||p(t,"src",s),p(t,"alt",i[1]),p(t,"class","svelte-153n29w")},m(a,c){b(a,t,c)},p:B,d(a){a&&m(t)}}}function ce(i){let t,s,a,c,g,f,_,v,r,h,C,w,G,y=Array(U),n=[];for(let e=0;e<y.length;e+=1)n[e]=K(F(i,y,e));const Z=e=>N(n[e],1,1,()=>{n[e]=null});let D=i[0],u=[];for(let e=0;e<D.length;e+=1)u[e]=Q(z(i,D,e));return{c(){t=I(),s=k("h2"),a=H("3D"),c=I(),g=k("h3"),f=H("Virtual Staging"),_=I();for(let e=0;e<n.length;e+=1)n[e].c();v=I(),r=k("h3"),h=H("Assets"),C=I();for(let e=0;e<u.length;e+=1)u[e].c();w=T(),this.h()},l(e){ee('[data-svelte="svelte-1o7eck7"]',document.head).forEach(m),t=S(e),s=A(e,"H2",{});var l=M(s);a=L(l,"3D"),l.forEach(m),c=S(e),g=A(e,"H3",{});var d=M(g);f=L(d,"Virtual Staging"),d.forEach(m),_=S(e);for(let E=0;E<n.length;E+=1)n[E].l(e);v=S(e),r=A(e,"H3",{});var R=M(r);h=L(R,"Assets"),R.forEach(m),C=S(e);for(let E=0;E<u.length;E+=1)u[E].l(e);w=T(),this.h()},h(){document.title="3D - Layla El-Sekaifi"},m(e,o){b(e,t,o),b(e,s,o),V(s,a),b(e,c,o),b(e,g,o),V(g,f),b(e,_,o);for(let l=0;l<n.length;l+=1)n[l].m(e,o);b(e,v,o),b(e,r,o),V(r,h),b(e,C,o);for(let l=0;l<u.length;l+=1)u[l].m(e,o);b(e,w,o),G=!0},p(e,[o]){if(o&0){y=Array(U);let l;for(l=0;l<y.length;l+=1){const d=F(e,y,l);n[l]?(n[l].p(d,o),P(n[l],1)):(n[l]=K(d),n[l].c(),P(n[l],1),n[l].m(v.parentNode,v))}for(ie(),l=y.length;l<n.length;l+=1)Z(l);te()}if(o&1){D=e[0];let l;for(l=0;l<D.length;l+=1){const d=z(e,D,l);u[l]?u[l].p(d,o):(u[l]=Q(d),u[l].c(),u[l].m(w.parentNode,w))}for(;l<u.length;l+=1)u[l].d(1);u.length=D.length}},i(e){if(!G){for(let o=0;o<y.length;o+=1)P(n[o]);G=!0}},o(e){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)N(n[o]);G=!1},d(e){e&&m(t),e&&m(s),e&&m(c),e&&m(g),e&&m(_),j(n,e),e&&m(v),e&&m(r),e&&m(C),j(u,e),e&&m(w)}}}const U=11;function _e(i){return[[{title:"Coffee Set",file:"coffee_set"},{title:"Cups",file:"cups"},{title:"Jug",file:"jug"}]]}class ge extends W{constructor(t){super(),X(this,t,_e,ce,Y,{})}}export{ge as default};
