(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-basic-basic-signature"],{2680:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:[],data:function(){return{systemInfo:{},showCanvas:!1,canvas:null,ctx:"",points:[],signature:"",canvasIsBlank:!1}},onLoad:function(){var t=this;document.addEventListener("touchmove",(function(t){document.querySelector(".canvas-sign").contains(t.target)&&t.preventDefault()}),{passive:!1}),uni.getSystemInfo({success:function(n){t.systemInfo=n,console.log(n)}})},onReady:function(){this.createCanvas()},onUnload:function(){this.ctx=null},methods:{close:function(){this.showCanvas=!1,this.clear()},createCanvas:function(){this.showCanvas=!0,this.canvas=document.querySelector("#mycanvas canvas"),console.log(this.canvas);var t=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*t,this.canvas.height=this.systemInfo.windowWidth/2*t,this.ctx=this.canvas.getContext("2d"),this.ctx.lineWidth=3,this.ctx.lineCap="round",this.ctx.lineJoin="round"},touchstart:function(t){var n=t.changedTouches[0].x,a=t.changedTouches[0].y,e={X:n,Y:a};this.points.push(e),this.ctx.beginPath()},touchmove:function(t){var n=t.changedTouches[0].x,a=t.changedTouches[0].y,e={X:n,Y:a};this.points.push(e);var i=this.points.length;i>=2&&(this.draw(),this.canvasIsBlank=!0)},touchend:function(){this.points=[]},draw:function(){var t=this.points[0],n=this.points[1];this.points.shift(),this.ctx.moveTo(t.X,t.Y),this.ctx.lineTo(n.X,n.Y),this.ctx.stroke()},clear:function(){this.canvasIsBlank=!1;var t=this;uni.getSystemInfo({success:function(n){var a=n.windowWidth,e=n.windowHeight;t.ctx.clearRect(0,0,a,e)}})},finish:function(){if(this.canvasIsBlank){uni.canvasToTempFilePath({canvasId:"mycanvas",success:function(t){console.log(t.tempFilePath)}})}else uni.showModal({content:"先进行签名再保存",showCancel:!1})}}};n.default=e},"4a62":function(t,n,a){"use strict";a.r(n);var e=a("2680"),i=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return e[t]}))}(s);n["default"]=i.a},"5bf3":function(t,n,a){var e=a("902c");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("4b7e3245",e,!0,{sourceMap:!1,shadowMode:!1})},"902c":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,".signature[data-v-1de97656]{position:relative;z-index:999}uni-page-body[data-v-1de97656]{background:#fff}.container[data-v-1de97656]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.title[data-v-1de97656]{height:%?50?%;line-height:%?50?%;font-size:16px}.mycanvas[data-v-1de97656]{\r\n    /* width: 100%;\r\n    height: calc(45vh - 200rpx); */background-color:#ececec}.footer[data-v-1de97656]{font-size:14px;height:%?150?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.left[data-v-1de97656],\r\n.right[data-v-1de97656],\r\n.close[data-v-1de97656]{line-height:%?100?%;height:%?100?%;width:%?220?%;text-align:center;font-weight:700;color:#fff;border-radius:%?5?%}.left[data-v-1de97656]{background:#007aff}.right[data-v-1de97656]{background:orange}.close[data-v-1de97656]{background:#a3a3a3}body.?%PAGE?%[data-v-1de97656]{background:#fff}",""]),t.exports=n},b211:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return i})),a.d(n,"c",(function(){return s})),a.d(n,"a",(function(){return e}));var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("v-uni-view",{staticClass:"canvas-sign"},[a("v-uni-view",[a("v-uni-view",{staticClass:"signature"},[a("v-uni-canvas",{staticClass:"mycanvas",staticStyle:{width:"100vw",height:"50vw"},attrs:{"canvas-id":"mycanvas",id:"mycanvas",type:"2d"},on:{touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.touchstart.apply(void 0,arguments)},touchmove:function(n){arguments[0]=n=t.$handleEvent(n),t.touchmove.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.touchend.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"footer"},[a("v-uni-view",{staticClass:"right",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.clear.apply(void 0,arguments)}}},[t._v("清除")]),a("v-uni-view",{staticClass:"left",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.finish.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1)],1)],1)},s=[]},c20e:function(t,n,a){"use strict";var e=a("5bf3"),i=a.n(e);i.a},fba1:function(t,n,a){"use strict";a.r(n);var e=a("b211"),i=a("4a62");for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(n,t,(function(){return i[t]}))}(s);a("c20e");var o,c=a("f0c5"),u=Object(c["a"])(i["default"],e["b"],e["c"],!1,null,"1de97656",null,!1,e["a"],o);n["default"]=u.exports}}]);