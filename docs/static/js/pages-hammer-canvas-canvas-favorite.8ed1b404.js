(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-canvas-canvas-favorite"],{"0c8c":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,a("99af"),a("4160"),a("159b"),a("a434"),a("c975");var e={data:function(){return{systemInfo:{},canvas:null,ctx:null,stop:null,dots:[],warea:{x:null,y:null,max:2e4}}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(n){t.systemInfo=n,console.log(n)}})},onReady:function(){this.setup()},onUnload:function(){window&&this.stop?window.cancelAnimationFrame(this.stop)||window.webkitCancelAnimationFrame(this.stop):clearTimeout(this.stop),this.canvas=null,this.ctx=null},methods:{setup:function(){var t=this;this.canvas=document.querySelector("#favorite canvas");var n=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*n,this.canvas.height=this.systemInfo.windowHeight*n,this.ctx=this.canvas.getContext("2d");for(var a=0;a<300;a++){var e=Math.random()*this.systemInfo.windowWidth,i=Math.random()*this.systemInfo.windowHeight,o=2*Math.random()-1,s=2*Math.random()-1;this.dots.push({x:e,y:i,xa:o,ya:s,max:3e3})}setTimeout((function(){t.animate()}),100)},wareaTap:function(t){},touchstart:function(t){this.warea.x=t.changedTouches[0].clientX,this.warea.y=t.changedTouches[0].clientY},touchmove:function(t){this.warea.x=t.changedTouches[0].clientX,this.warea.y=t.changedTouches[0].clientY},touchend:function(t){this.warea.x=null,this.warea.y=null},animate:function(){var t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);var n=[this.warea].concat(this.dots);this.dots.forEach((function(a){a.x+=a.xa,a.y+=a.ya,a.xa*=a.x>t.systemInfo.windowWidth||a.x<0?-1:1,a.ya*=a.y>t.systemInfo.windowHeight||a.y<0?-1:1,t.ctx.fillRect(a.x-.5,a.y-.5,1,1);for(var e=0;e<n.length;e++){var i=n[e];if(a!==i&&null!==i.x&&null!==i.y){var o,s=a.x-i.x,c=a.y-i.y,u=s*s+c*c;u<i.max&&(i===t.warea&&u>i.max/2&&(a.x-=.03*s,a.y-=.03*c),o=(i.max-u)/i.max,t.ctx.beginPath(),t.ctx.lineWidth=o/2,t.ctx.strokeStyle="rgba(0,171,152,"+(o+.5)+")",t.ctx.moveTo(a.x,a.y),t.ctx.lineTo(i.x,i.y),t.ctx.stroke())}}n.splice(n.indexOf(a),1)})),this.stop=window&&(window.requestAnimationFrame(this.animate)||window.webkitRequestAnimationFrame(this.animate)||window.mozRequestAnimationFrame(this.animate)||window.oRequestAnimationFrame(this.animate)||window.msRequestAnimationFrame(this.animate))||setTimeout(this.animate,1e3/60)}}};n.default=e},1741:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return o})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("v-uni-view",{on:{touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.touchstart.apply(void 0,arguments)},touchmove:function(n){arguments[0]=n=t.$handleEvent(n),t.touchmove.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.touchend.apply(void 0,arguments)},touchcancel:function(n){arguments[0]=n=t.$handleEvent(n),t.touchend.apply(void 0,arguments)},click:function(n){arguments[0]=n=t.$handleEvent(n),t.wareaTap.apply(void 0,arguments)}}},[a("v-uni-canvas",{staticStyle:{width:"100vw",height:"100vh"},attrs:{type:"2d","canvas-id":"favorite",id:"favorite"}})],1)],1)},o=[]},"79e0":function(t,n,a){"use strict";a.r(n);var e=a("1741"),i=a("e4b1");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(o);var s,c=a("f0c5"),u=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"ac66f132",null,!1,e["a"],s);n["default"]=u.exports},e4b1:function(t,n,a){"use strict";a.r(n);var e=a("0c8c"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(o);n["default"]=i.a}}]);