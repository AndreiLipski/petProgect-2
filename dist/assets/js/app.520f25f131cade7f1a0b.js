!function(t){function e(e){for(var i,o,l=e[0],c=e[1],a=e[2],d=0,h=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(u&&u(e);h.length;)h.shift()();return n.push.apply(n,a||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var c=s[l];0!==r[c]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},r={0:0},n=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var u=c;n.push([1,2]),s()}([,function(t,e,s){"use strict";s.r(e);s(2),s(3),s(5),s(7),s(8),s(9),s(10),s(11),s(12)},function(t,e){},function(t,e,s){var i=s(0),r=s(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var n={insert:"head",singleton:!1};i(r,n);t.exports=r.locals||{}},function(t,e,s){},function(t,e,s){var i=s(0),r=s(6);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var n={insert:"head",singleton:!1};i(r,n);t.exports=r.locals||{}},function(t,e,s){},function(t,e){const s=document.querySelector(".nav-menu"),i=document.querySelector(".hamburger"),r=document.querySelector(".hamb-night"),n=document.querySelector(".body");document.addEventListener("click",(function(t){t.target.closest(".hamburger")&&(s.classList.toggle("nav-menu_active"),i.classList.toggle("hamburger_active"),r.classList.toggle("hamb-night_active"),n.classList.toggle("body_active"));t.target.closest(".hamburger")||(i.classList.remove("hamburger_active"),s.classList.remove("nav-menu_active"),r.classList.remove("hamb-night_active"),n.classList.remove("body_active"))}))},function(t,e){document.querySelectorAll('a[href^="#"').forEach(t=>{t.addEventListener("click",(function(t){t.preventDefault();let e=this.getAttribute("href").substring(1);const s=document.getElementById(e),i=document.querySelector(".header").offsetHeight,r=s.getBoundingClientRect().top-i;window.scrollBy({top:r,behavior:"smooth"})}))})},function(t,e){$("[data-tab-index]").click((function(){const t=$(this).attr("data-tab-index");if($("[data-tab-content]").removeClass("active"),$("[data-tab-index]").removeClass("active"),$(this).addClass("active"),$(`[data-tab-content=${t}]`).addClass("active"),$(this).attr("data-scroll")){const t=$(this).attr("data-tab-index");$("[data-tab-index]").removeClass("active"),$(`[data-tab-index=${t}]`).addClass("active"),$("html,body").stop().animate({scrollTop:$(`[data-tab-content=${t}]`).offset().top},1e3),$(`[data-tab-content=${t}]`).find(".js-toggler").addClass("active"),$(`[data-tab-content=${t}]`).find(".product-page__media-content").slideDown(),$(`[data-tab-content=${t}]`).find(".product-page__media-content").addClass("active")}}))},function(t,e){function s(t){t.height=t.target.firstElementChild.clientHeight}[...document.querySelectorAll(".js-accordion")].forEach((function(t){const e={};!function(t,e){const s=t;s.element=e,s.target=e.nextElementSibling}(e,t),s(e),function(t){t.element.addEventListener("click",e=>{e.preventDefault(),function(t){t.isActive?function(t){const e=t,{target:s}=e;s.style.height=null,e.isActive=!1}(t):function(t){const e=t,{target:s,height:i}=e;s.style.height=i+"px",e.isActive=!0}(t)}(t)}),window.addEventListener("resize",()=>s(t))}(e)}))},function(t,e,s){"use strict";function i(t){let e=document.getElementById(t);this.sldrRoot=e||document.querySelector(".sim-slider"),this.sldrList=this.sldrRoot.querySelector(".sim-slider-list"),this.sldrElements=this.sldrList.querySelectorAll(".sim-slider-element"),this.sldrElemFirst=this.sldrList.querySelector(".sim-slider-element"),this.leftArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-left"),this.rightArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-right"),this.options=i.defaults,i.initialize(this)}function r(t){let e=document.getElementById(t);this.sldrRoot=e||document.querySelector(".sim-sliders"),this.sldrList=this.sldrRoot.querySelector(".sim-slider-lists"),this.sldrElements=this.sldrList.querySelectorAll(".sim-slider-elements"),this.sldrElemFirst=this.sldrList.querySelector(".sim-slider-elements"),this.leftArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-lefts"),this.rightArrow=this.sldrRoot.querySelector("div.sim-slider-arrow-rights"),this.options=i.defaults,r.initialize(this)}i.defaults={loop:!0,interval:5e4,arrows:!0},i.prototype.elemPrev=function(t){t=t||1;let e=this.currentElement;this.currentElement-=t,this.currentElement<0&&(this.currentElement=this.elemCount-1),this.options.loop||(0==this.currentElement&&(this.leftArrow.style.display="none"),this.rightArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[e].style.opacity="0"},i.prototype.elemNext=function(t){t=t||1;let e=this.currentElement;this.currentElement+=t,this.currentElement>=this.elemCount&&(this.currentElement=0),this.options.loop||(this.currentElement==this.elemCount-1&&(this.rightArrow.style.display="none"),this.leftArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[e].style.opacity="0"},i.initialize=function(t){t.elemCount=t.sldrElements.length,t.currentElement=0;let e=s();function s(){return(new Date).getTime()}t.elemCount<=1&&(t.options.arrows=!1,t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.elemCount>=1&&(t.sldrElemFirst.style.opacity="1"),t.options.arrows?(t.leftArrow.addEventListener("click",(function(){let i=s();i-e>1e3&&(e=i,t.elemPrev())}),!1),t.rightArrow.addEventListener("click",(function(){let i=s();i-e>1e3&&(e=i,t.elemNext())}),!1)):(t.leftArrow.style.display="none",t.rightArrow.style.display="none")},new i,r.defaults={loop:!0,interval:5e4,arrows:!0},r.prototype.elemPrev=function(t){t=t||1;let e=this.currentElement;this.currentElement-=t,this.currentElement<0&&(this.currentElement=this.elemCount-1),this.options.loop||(0==this.currentElement&&(this.leftArrow.style.display="none"),this.rightArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[e].style.opacity="0"},r.prototype.elemNext=function(t){t=t||1;let e=this.currentElement;this.currentElement+=t,this.currentElement>=this.elemCount&&(this.currentElement=0),this.options.loop||(this.currentElement==this.elemCount-1&&(this.rightArrow.style.display="none"),this.leftArrow.style.display="block"),this.sldrElements[this.currentElement].style.opacity="1",this.sldrElements[e].style.opacity="0"},r.initialize=function(t){t.elemCount=t.sldrElements.length,t.currentElement=0;let e=s();function s(){return(new Date).getTime()}t.elemCount<=1&&(t.options.arrows=!1,t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.elemCount>=1&&(t.sldrElemFirst.style.opacity="1"),t.options.arrows?(t.leftArrow.addEventListener("click",(function(){let i=s();i-e>1e3&&(e=i,t.elemPrev())}),!1),t.rightArrow.addEventListener("click",(function(){let i=s();i-e>1e3&&(e=i,t.elemNext())}),!1)):(t.leftArrow.style.display="none",t.rightArrow.style.display="none")},new r},function(t,e){function s(t){let e=document.getElementById(t);this.crslRoot=e||document.querySelector(".ant-carousel"),this.crslList=this.crslRoot.querySelector(".ant-carousel-list"),this.crslElements=this.crslList.querySelectorAll(".ant-carousel-element"),this.crslElemFirst=this.crslList.querySelector(".ant-carousel-element"),this.leftArrow=this.crslRoot.querySelector("div.ant-carousel-arrow-left"),this.rightArrow=this.crslRoot.querySelector("div.ant-carousel-arrow-right"),this.indicatorDots=this.crslRoot.querySelector("div.ant-carousel-dots"),this.options=s.defaults,s.initialize(this)}s.defaults={elemVisible:3,loop:!0,auto:!0,interval:5e3,speed:750,touch:!0,arrows:!0,dots:!1},s.prototype.elemPrev=function(t){if(t=t||1,this.options.dots&&this.dotOn(this.currentElement),this.currentElement-=t,this.currentElement<0&&(this.currentElement=this.dotsVisible-1),this.options.dots&&this.dotOff(this.currentElement),this.options.loop){let e,s,i=this;for(let i=0;i<t;i++)e=this.crslList.lastElementChild,s=e.cloneNode(!0),this.crslList.insertBefore(s,this.crslList.firstElementChild),this.crslList.removeChild(e);this.crslList.style.marginLeft="-"+this.elemWidth*t+"px";window.getComputedStyle(this.crslList).marginLeft;this.crslList.style.cssText="transition:margin "+this.options.speed+"ms ease;",this.crslList.style.marginLeft="0px",setTimeout((function(){i.crslList.style.cssText="transition:none;"}),this.options.speed)}else this.currentOffset+=this.elemWidth*t,this.crslList.style.marginLeft=this.currentOffset+"px",0==this.currentElement&&(this.leftArrow.style.display="none",this.touchPrev=!1),this.rightArrow.style.display="block",this.touchNext=!0},s.prototype.elemNext=function(t){if(t=t||1,this.options.dots&&this.dotOn(this.currentElement),this.currentElement+=t,this.currentElement>=this.dotsVisible&&(this.currentElement=0),this.options.dots&&this.dotOff(this.currentElement),this.options.loop){let e,s,i=this;this.crslList.style.cssText="transition:margin "+this.options.speed+"ms ease;",this.crslList.style.marginLeft="-"+this.elemWidth*t+"px",setTimeout((function(){i.crslList.style.cssText="transition:none;";for(let r=0;r<t;r++)e=i.crslList.firstElementChild,s=e.cloneNode(!0),i.crslList.appendChild(s),i.crslList.removeChild(e);i.crslList.style.marginLeft="0px"}),this.options.speed)}else this.currentOffset-=this.elemWidth*t,this.crslList.style.marginLeft=this.currentOffset+"px",this.currentElement==this.dotsVisible-1&&(this.rightArrow.style.display="none",this.touchNext=!1),this.leftArrow.style.display="block",this.touchPrev=!0},s.prototype.dotOn=function(t){this.indicatorDotsAll[t].style.cssText="background-color:#BBB; cursor:pointer;"},s.prototype.dotOff=function(t){this.indicatorDotsAll[t].style.cssText="background-color:#556; cursor:default;"},s.initialize=function(t){t.elemCount=t.crslElements.length,t.dotsVisible=t.elemCount;let e,s,i,r,n,o,l=window.getComputedStyle(t.crslElemFirst);t.elemWidth=t.crslElemFirst.offsetWidth+parseInt(l.marginLeft)+parseInt(l.marginRight),t.currentElement=0,t.currentOffset=0,t.touchPrev=!0,t.touchNext=!0;let c=a();function a(){return(new Date).getTime()}function u(){t.autoScroll=setInterval((function(){let e=a();e-c+10>t.options.interval&&(c=e,t.elemNext())}),t.options.interval)}if(t.elemCount<=t.options.elemVisible&&(t.options.auto=!1,t.options.touch=!1,t.options.arrows=!1,t.options.dots=!1,t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.options.loop?t.options.auto&&(u(),t.crslList.addEventListener("mouseenter",(function(){clearInterval(t.autoScroll)}),!1),t.crslList.addEventListener("mouseleave",u,!1)):(t.dotsVisible=t.elemCount-t.options.elemVisible+1,t.leftArrow.style.display="none",t.touchPrev=!1,t.options.auto=!1),t.options.touch&&(t.crslList.addEventListener("touchstart",(function(t){e=parseInt(t.touches[0].clientX),s=parseInt(t.touches[0].clientY),n=a()}),!1),t.crslList.addEventListener("touchmove",(function(l){e&&s&&(i=e-parseInt(l.touches[0].clientX),r=s-parseInt(l.touches[0].clientY),o=a(),Math.abs(i)>15&&Math.abs(i)>Math.abs(r)&&o-n<75&&(n=0,t.touchNext&&i>0?(c=o,t.elemNext()):t.touchPrev&&i<0&&(c=o,t.elemPrev())))}),!1)),t.options.arrows?(t.options.loop||(t.crslList.style.cssText="transition:margin "+t.options.speed+"ms ease;"),t.leftArrow.addEventListener("click",(function(){let e=a();e-c>t.options.speed&&(c=e,t.elemPrev())}),!1),t.rightArrow.addEventListener("click",(function(){let e=a();e-c>t.options.speed&&(c=e,t.elemNext())}),!1)):(t.leftArrow.style.display="none",t.rightArrow.style.display="none"),t.options.dots){let e,s="";for(let e=0;e<t.dotsVisible;e++)s+='<span class="ant-dot"></span>';t.indicatorDots.innerHTML=s,t.indicatorDotsAll=t.crslRoot.querySelectorAll("span.ant-dot");for(let s=0;s<t.dotsVisible;s++)t.indicatorDotsAll[s].addEventListener("click",(function(){e=Math.abs(s-t.currentElement),s<t.currentElement?(c=a(),t.elemPrev(e)):s>t.currentElement&&(c=a(),t.elemNext(e))}),!1);t.dotOff(0);for(let e=1;e<t.dotsVisible;e++)t.dotOn(e)}},new s}]);