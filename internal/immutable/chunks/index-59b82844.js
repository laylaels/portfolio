function C(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}else return Array.from(r)}var p=!1;if(typeof window<"u"){var g={get passive(){p=!0}};window.addEventListener("testPassive",null,g),window.removeEventListener("testPassive",null,g)}var _=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),n=[],v=!1,b=-1,d=void 0,c=void 0,$=function(t){return n.some(function(e){return!!(e.options.allowTouchMove&&e.options.allowTouchMove(t))})},f=function(t){var e=t||window.event;return $(e.target)||e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)},x=function(t){if(c===void 0){var e=!!t&&t.reserveScrollBarGap===!0,i=window.innerWidth-document.documentElement.clientWidth;e&&i>0&&(c=document.body.style.paddingRight,document.body.style.paddingRight=i+"px")}d===void 0&&(d=document.body.style.overflow,document.body.style.overflow="hidden")},L=function(){c!==void 0&&(document.body.style.paddingRight=c,c=void 0),d!==void 0&&(document.body.style.overflow=d,d=void 0)},M=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},S=function(t,e){var i=t.targetTouches[0].clientY-b;return $(t.target)?!1:e&&e.scrollTop===0&&i>0||M(e)&&i<0?f(t):(t.stopPropagation(),!0)},m=function(t,e){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!n.some(function(s){return s.targetElement===t})){var i={targetElement:t,options:e||{}};n=[].concat(C(n),[i]),_?(t.ontouchstart=function(s){s.targetTouches.length===1&&(b=s.targetTouches[0].clientY)},t.ontouchmove=function(s){s.targetTouches.length===1&&S(s,t)},v||(document.addEventListener("touchmove",f,p?{passive:!1}:void 0),v=!0)):x(e)}},w=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}n=n.filter(function(e){return e.targetElement!==t}),_?(t.ontouchstart=null,t.ontouchmove=null,v&&n.length===0&&(document.removeEventListener("touchmove",f,p?{passive:!1}:void 0),v=!1)):n.length||L()};class T{constructor(t,e={}){const i={controlColor:"#FFFFFF",controlShadow:!0,addCircle:!1,addCircleBlur:!0,showLabels:!1,labelOptions:{before:"Before",after:"After",onHover:!1},smoothing:!0,smoothingAmount:100,hoverStart:!1,verticalMode:!1,startingPoint:50,fluidMode:!1};this.settings=Object.assign(i,e),this.safariAgent=navigator.userAgent.indexOf("Safari")!=-1&&navigator.userAgent.indexOf("Chrome")==-1,this.el=t,this.images={},this.wrapper=null,this.control=null,this.arrowContainer=null,this.arrowAnimator=[],this.active=!1,this.slideWidth=50,this.lineWidth=2,this.arrowCoordinates={circle:[5,3],standard:[8,0]}}mount(){this.safariAgent&&(this.settings.smoothing=!1),this._shapeContainer(),this._getImages(),this._buildControl(),this._events()}_events(){this.el.addEventListener("mousedown",t=>{this._activate(!0),document.body.classList.add("icv__body"),m(this.el,{reserveScrollBarGap:!0}),this._slideCompare(t)}),this.el.addEventListener("mousemove",t=>this.active&&this._slideCompare(t)),this.el.addEventListener("mouseup",()=>this._activate(!1)),document.body.addEventListener("mouseup",()=>{document.body.classList.remove("icv__body"),w(this.el),this._activate(!1)}),this.control.addEventListener("touchstart",t=>{this._activate(!0),document.body.classList.add("icv__body"),m(this.el,{reserveScrollBarGap:!0})}),this.el.addEventListener("touchmove",t=>{this.active&&this._slideCompare(t)}),this.el.addEventListener("touchend",()=>{this._activate(!1),document.body.classList.remove("icv__body"),w(this.el)}),this.el.addEventListener("mouseenter",()=>{this.settings.hoverStart&&this._activate(!0);let t=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach((e,i)=>{e.style.cssText=`
        ${this.settings.verticalMode?`transform: translateY(${t[1]*(i===0?1:-1)}px);`:`transform: translateX(${t[1]*(i===0?1:-1)}px);`}
        `})}),this.el.addEventListener("mouseleave",()=>{let t=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach((e,i)=>{e.style.cssText=`
        ${this.settings.verticalMode?`transform: translateY(${i===0?`${t[0]}px`:`-${t[0]}px`});`:`transform: translateX(${i===0?`${t[0]}px`:`-${t[0]}px`});`}
        `})})}_slideCompare(t){let e=this.el.getBoundingClientRect(),i=t.touches!==void 0?t.touches[0].clientX-e.left:t.clientX-e.left,s=t.touches!==void 0?t.touches[0].clientY-e.top:t.clientY-e.top,o=this.settings.verticalMode?s/e.height*100:i/e.width*100;o>=0&&o<=100&&(this.settings.verticalMode?this.control.style.top=`calc(${o}% - ${this.slideWidth/2}px)`:this.control.style.left=`calc(${o}% - ${this.slideWidth/2}px)`,this.settings.fluidMode?this.settings.verticalMode?this.wrapper.style.clipPath=`inset(0 0 ${100-o}% 0)`:this.wrapper.style.clipPath=`inset(0 0 0 ${o}%)`:this.settings.verticalMode?this.wrapper.style.height=`calc(${o}%)`:this.wrapper.style.width=`calc(${100-o}%)`)}_activate(t){this.active=t}_shapeContainer(){let t=document.createElement("div"),e=document.createElement("span"),i=document.createElement("span");e.classList.add("icv__label","icv__label-before","keep"),i.classList.add("icv__label","icv__label-after","keep"),this.settings.labelOptions.onHover&&(e.classList.add("on-hover"),i.classList.add("on-hover")),this.settings.verticalMode&&(e.classList.add("vertical"),i.classList.add("vertical")),e.innerHTML=this.settings.labelOptions.before||"Before",i.innerHTML=this.settings.labelOptions.after||"After",this.settings.showLabels&&(this.el.appendChild(e),this.el.appendChild(i)),this.el.classList.add("icv",this.settings.verticalMode?"icv__icv--vertical":"icv__icv--horizontal",this.settings.fluidMode?"icv__is--fluid":"standard"),t.classList.add("icv__imposter"),this.el.appendChild(t)}_buildControl(){let t=document.createElement("div"),e=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div");const o="20";i.classList.add("icv__theme-wrapper");for(var l=0;l<=1;l++){let a=document.createElement("div"),u=`<svg
      height="15"
      width="15"
       style="
       transform: 
       scale(${this.settings.addCircle?.7:1.5})  
       rotateZ(${l===0?this.settings.verticalMode?"-90deg":"180deg":this.settings.verticalMode?"90deg":"0deg"}); height: ${o}px; width: ${o}px;
       
       ${this.settings.controlShadow?`
       -webkit-filter: drop-shadow( 0px 3px 5px rgba(0, 0, 0, .33));
       filter: drop-shadow( 0px ${l===0?"-3px":"3px"} 5px rgba(0, 0, 0, .33));
       `:""}
       "
       xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 15 15">
       <path ${this.settings.addCircle?'fill="transparent"':`fill="${this.settings.controlColor}"`}
       stroke="${this.settings.controlColor}"
       stroke-linecap="round"
       stroke-width="${this.settings.addCircle?3:0}"
       d="M4.5 1.9L10 7.65l-5.5 5.4"
       />
     </svg>`;a.innerHTML+=u,this.arrowAnimator.push(a),i.appendChild(a)}let h=this.settings.addCircle?this.arrowCoordinates.circle:this.arrowCoordinates.standard;this.arrowAnimator.forEach((a,u)=>{a.classList.add("icv__arrow-wrapper"),a.style.cssText=`
      ${this.settings.verticalMode?`transform: translateY(${u===0?`${h[0]}px`:`-${h[0]}px`});`:`transform: translateX(${u===0?`${h[0]}px`:`-${h[0]}px`});`}
      `}),t.classList.add("icv__control"),t.style.cssText=`
    ${this.settings.verticalMode?"height":"width "}: ${this.slideWidth}px;
    ${this.settings.verticalMode?"top":"left "}: calc(${this.settings.startingPoint}% - ${this.slideWidth/2}px);
    ${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}
    `,e.classList.add("icv__control-line"),e.style.cssText=`
      ${this.settings.verticalMode?"height":"width "}: ${this.lineWidth}px;
      background: ${this.settings.controlColor};
        ${this.settings.controlShadow?"box-shadow: 0px 0px 15px rgba(0,0,0,0.33);":""}
    `;let y=e.cloneNode(!0);s.classList.add("icv__circle"),s.style.cssText=`

      ${this.settings.addCircleBlur&&"-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px)"};
      
      border: ${this.lineWidth}px solid ${this.settings.controlColor};
      ${this.settings.controlShadow&&"box-shadow: 0px 0px 15px rgba(0,0,0,0.33)"};
    `,t.appendChild(e),this.settings.addCircle&&t.appendChild(s),t.appendChild(i),t.appendChild(y),this.arrowContainer=i,this.control=t,this.el.appendChild(t)}_getImages(){let t=this.el.querySelectorAll("img, .keep");this.el.innerHTML="",t.forEach(i=>{this.el.appendChild(i)});let e=[...t].filter(i=>i.nodeName.toLowerCase()==="img");this.settings.verticalMode&&e.reverse();for(let i=0;i<=1;i++){let s=e[i];if(s.classList.add("icv__img"),s.classList.add(i===0?"icv__img-a":"icv__img-b"),i===1){let o=document.createElement("div"),l=e[1].src;o.classList.add("icv__wrapper"),o.style.cssText=`
            width: ${100-this.settings.startingPoint}%; 
            height: ${this.settings.startingPoint}%;

            ${"ontouchstart"in document.documentElement?"":this.settings.smoothing?`transition: ${this.settings.smoothingAmount}ms ease-out;`:""}
            ${this.settings.fluidMode&&`background-image: url(${l}); clip-path: inset(${this.settings.verticalMode?` 0 0 ${100-this.settings.startingPoint}% 0`:`0 0 0 ${this.settings.startingPoint}%`})`}
        `,o.appendChild(s),this.wrapper=o,this.el.appendChild(this.wrapper)}}if(this.settings.fluidMode){let i=e[0].src,s=document.createElement("div");s.classList.add("icv__fluidwrapper"),s.style.cssText=`
 
        background-image: url(${i});
        
      `,this.el.appendChild(s)}}}export{T as default};
