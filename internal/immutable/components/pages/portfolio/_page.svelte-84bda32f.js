import{S as j,i as F,s as H,k as v,a as z,l as y,m as V,c as B,h as d,K as b,n as g,b as h,D as I,B as p,o as J,P as K,q as w,r as A,t as D,d as C,f as k,J as Q,g as G,e as M,u as N,L as U,w as W,x as X,y as Y,z as Z}from"../../../chunks/index-3f651713.js";import{_ as O}from"../../../chunks/preload-helper-41c905a7.js";import{p as x}from"../../../chunks/stores-20e044df.js";import{b as q}from"../../../chunks/paths-b4419565.js";function $(o){let e,t,a,n,s,r,_,f;return{c(){e=v("div"),t=v("img"),s=z(),r=v("img"),this.h()},l(l){e=y(l,"DIV",{class:!0});var c=V(e);t=y(c,"IMG",{src:!0,alt:!0,loading:!0}),s=B(c),r=y(c,"IMG",{src:!0,alt:!0,loading:!0}),c.forEach(d),this.h()},h(){b(t.src,a=o[0])||g(t,"src",a),g(t,"alt",n=o[2]+" (before)"),g(t,"loading",o[3]),b(r.src,_=o[1])||g(r,"src",_),g(r,"alt",f=o[2]+" (after)"),g(r,"loading",o[3]),g(e,"class","svelte-hvoq0m")},m(l,c){h(l,e,c),I(e,t),I(e,s),I(e,r),o[6](e)},p(l,[c]){c&1&&!b(t.src,a=l[0])&&g(t,"src",a),c&4&&n!==(n=l[2]+" (before)")&&g(t,"alt",n),c&8&&g(t,"loading",l[3]),c&2&&!b(r.src,_=l[1])&&g(r,"src",_),c&4&&f!==(f=l[2]+" (after)")&&g(r,"alt",f),c&8&&g(r,"loading",l[3])},i:p,o:p,d(l){l&&d(e),o[6](null)}}}function ee(o,e,t){let{before:a}=e,{after:n}=e,{alt:s}=e,{options:r=void 0}=e,{loading:_="eager"}=e,f;J(async()=>{O(()=>Promise.resolve({}),["..\\..\\..\\assets\\image-compare-viewer.min-8588ba3c.css"],import.meta.url);const c=(await O(()=>import("../../../chunks/index-59b82844.js"),[],import.meta.url)).default;new c(f,r).mount(),t(4,f.style.visibility="visible",f)});function l(c){K[c?"unshift":"push"](()=>{f=c,t(4,f)})}return o.$$set=c=>{"before"in c&&t(0,a=c.before),"after"in c&&t(1,n=c.after),"alt"in c&&t(2,s=c.alt),"options"in c&&t(5,r=c.options),"loading"in c&&t(3,_=c.loading)},[a,n,s,_,f,r,l]}class te extends j{constructor(e){super(),F(this,e,ee,$,H,{before:0,after:1,alt:2,options:5,loading:3})}}function R(o,e,t){const a=o.slice();return a[4]=e[t],a}function ae(o){let e;return{c(){e=w("no results")},l(t){e=A(t,"no results")},m(t,a){h(t,e,a)},p,i:p,o:p,d(t){t&&d(e)}}}function re(o){let e,t,a=o[1].length+"",n,s,r,_,f=o[1],l=[];for(let i=0;i<f.length;i+=1)l[i]=S(R(o,f,i));const c=i=>D(l[i],1,1,()=>{l[i]=null});return{c(){e=w(o[0]),t=w(" - "),n=w(a),s=w(` items\r
    `);for(let i=0;i<l.length;i+=1)l[i].c();r=M()},l(i){e=A(i,o[0]),t=A(i," - "),n=A(i,a),s=A(i,` items\r
    `);for(let u=0;u<l.length;u+=1)l[u].l(i);r=M()},m(i,u){h(i,e,u),h(i,t,u),h(i,n,u),h(i,s,u);for(let m=0;m<l.length;m+=1)l[m].m(i,u);h(i,r,u),_=!0},p(i,u){if((!_||u&1)&&N(e,i[0]),(!_||u&2)&&a!==(a=i[1].length+"")&&N(n,a),u&2){f=i[1];let m;for(m=0;m<f.length;m+=1){const L=R(i,f,m);l[m]?(l[m].p(L,u),k(l[m],1)):(l[m]=S(L),l[m].c(),k(l[m],1),l[m].m(r.parentNode,r))}for(G(),m=f.length;m<l.length;m+=1)c(m);C()}},i(i){if(!_){for(let u=0;u<f.length;u+=1)k(l[u]);_=!0}},o(i){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)D(l[u]);_=!1},d(i){i&&d(e),i&&d(t),i&&d(n),i&&d(s),U(l,i),i&&d(r)}}}function le(o){let e,t,a,n;return t=new te({props:{before:o[4].data.before,after:o[4].data.after,alt:"Item",loading:"lazy"}}),{c(){e=v("div"),W(t.$$.fragment),a=z(),this.h()},l(s){e=y(s,"DIV",{class:!0});var r=V(e);X(t.$$.fragment,r),a=B(r),r.forEach(d),this.h()},h(){g(e,"class","ba svelte-anl9pc")},m(s,r){h(s,e,r),Y(t,e,null),I(e,a),n=!0},p(s,r){const _={};r&2&&(_.before=s[4].data.before),r&2&&(_.after=s[4].data.after),t.$set(_)},i(s){n||(k(t.$$.fragment,s),n=!0)},o(s){D(t.$$.fragment,s),n=!1},d(s){s&&d(e),Z(t)}}}function ie(o){let e,t;return{c(){e=v("video"),this.h()},l(a){e=y(a,"VIDEO",{src:!0,class:!0}),V(e).forEach(d),this.h()},h(){b(e.src,t=o[4].data.src)||g(e,"src",t),e.autoplay=!0,e.muted=!0,e.loop=!0,g(e,"class","svelte-anl9pc")},m(a,n){h(a,e,n)},p(a,n){n&2&&!b(e.src,t=a[4].data.src)&&g(e,"src",t)},i:p,o:p,d(a){a&&d(e)}}}function oe(o){let e,t;return{c(){e=v("img"),this.h()},l(a){e=y(a,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),this.h()},h(){b(e.src,t=o[4].data.src)||g(e,"src",t),g(e,"alt","Item"),g(e,"loading","lazy"),g(e,"class","svelte-anl9pc")},m(a,n){h(a,e,n)},p(a,n){n&2&&!b(e.src,t=a[4].data.src)&&g(e,"src",t)},i:p,o:p,d(a){a&&d(e)}}}function S(o){let e,t,a,n;const s=[oe,ie,le],r=[];function _(f,l){return f[4].data.type==="image"?0:f[4].data.type==="video"?1:2}return e=_(o),t=r[e]=s[e](o),{c(){t.c(),a=M()},l(f){t.l(f),a=M()},m(f,l){r[e].m(f,l),h(f,a,l),n=!0},p(f,l){let c=e;e=_(f),e===c?r[e].p(f,l):(G(),D(r[c],1,1,()=>{r[c]=null}),C(),t=r[e],t?t.p(f,l):(t=r[e]=s[e](f),t.c()),k(t,1),t.m(a.parentNode,a))},i(f){n||(k(t),n=!0)},o(f){D(t),n=!1},d(f){r[e].d(f),f&&d(a)}}}function ne(o){let e,t,a,n,s,r,_;const f=[re,ae],l=[];function c(i,u){return i[1].length?0:1}return s=c(o),r=l[s]=f[s](o),{c(){e=v("div"),t=v("h2"),a=w("Portfolio"),n=z(),r.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var u=V(e);t=y(u,"H2",{});var m=V(t);a=A(m,"Portfolio"),m.forEach(d),n=B(u),r.l(u),u.forEach(d),this.h()},h(){g(e,"class","root svelte-anl9pc")},m(i,u){h(i,e,u),I(e,t),I(t,a),I(e,n),l[s].m(e,null),_=!0},p(i,[u]){let m=s;s=c(i),s===m?l[s].p(i,u):(G(),D(l[m],1,1,()=>{l[m]=null}),C(),r=l[s],r?r.p(i,u):(r=l[s]=f[s](i),r.c()),k(r,1),r.m(e,null))},i(i){_||(k(r),_=!0)},o(i){D(r),_=!1},d(i){i&&d(e),l[s].d()}}}function P(o,e,t){return Array.from({length:e},(a,n)=>({tags:t,data:{type:"image",src:`${q}/portfolio/${o}/${n}.webp`}}))}function E(o,e,t){return Array.from({length:e},(a,n)=>({tags:t,data:{type:"before-after",before:`${q}/portfolio/${o}/${n}b.webp`,after:`${q}/portfolio/${o}/${n}a.webp`}}))}const se={retouch:"Retouching",image:"Image Editing","3d":"3D","3d_model":"3D Modeling",vstage:"Virtual Staging",exterior:"Exterior",interior:"Interior","image:manipulation":"Image Manipulation",tod:"Time of Day Conversion",visualisation:"Visualisation",illustration:"Illustration",art:"Art",fine_art:"Fine Art",photography:"Photography"},T=[...P("retouch",1,["image","retouch"]),...E("retouch",12,["image","retouch"]),...P("3d_model",5,["3d","3d:model"]),...E("vstage",12,["3d","vstaging"]),...E("image/exterior",5,["image","image:manipulation","exterior"]),...E("image/interior",3,["image","image:manipulation","interior"]),...E("image/tod",8,["image","image:manipulation","tod"]),...E("image/viz",1,["image","image:manipulation","visualisation"]),...P("art",8,["art","fine_art"]),...P("illustrations",14,["illustration","art"]),...P("photography",15,["art","photography"]),{tags:["illustration","animation"],data:{type:"video",src:`${q}/portfolio/illustrations/eye.webm`}},{tags:["illustration","animation"],data:{type:"video",src:`${q}/portfolio/illustrations/a.webm`}}];function fe(o){return o.length?T.filter(e=>o.every(t=>e.tags.some(a=>a===t))):T}function ce(o,e,t){let a,n,s,r;return Q(o,x,_=>t(3,r=_)),o.$$.update=()=>{o.$$.dirty&8&&t(2,a=r.url.searchParams.getAll("tag")),o.$$.dirty&4&&t(1,n=fe(a)),o.$$.dirty&4&&t(0,s=a.length?a.map(_=>se[_]).join(", "):"all")},[s,n,a,r]}class de extends j{constructor(e){super(),F(this,e,ce,ne,H,{})}}export{de as default};