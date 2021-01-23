(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-canvas-canvas-vectorJs"],{"19b6":function(t,e,i){"use strict";i.r(e);var n=i("573d"),s=i("e06e");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);var h=i("2877"),o=Object(h["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},"573d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{on:{touchmove:function(e){e=t.$handleEvent(e),t.touchmove(e)}}},[i("v-uni-canvas",{staticStyle:{background:"#666",width:"100vw",height:"50vw"},attrs:{type:"2d","canvas-id":"vector",id:"vector"}})],1)},s=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s}))},"6c7b":function(t,e,i){var n=i("5ca1");n(n.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},"82bd":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=n(i("d225")),a=n(i("b0b4")),h=function(){function t(e,i){(0,s.default)(this,t),this.x=e,this.y=i}return(0,a.default)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"addTo",value:function(t){this.x+=t.x,this.y+=t.y}},{key:"sub",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"subFrom",value:function(t){this.x-=t.x,this.y-=t.y}},{key:"mult",value:function(e){return new t(this.x*e,this.y*e)}},{key:"div",value:function(e){return new t(this.x/e,this.y/e)}},{key:"setAngle",value:function(t){var e=this.getLength();this.x=Math.cos(t)*e,this.y=Math.sin(t)*e}},{key:"setLength",value:function(t){var e=this.getAngle();this.x=Math.cos(e)*t,this.y=Math.sin(e)*t}},{key:"getAngle",value:function(){return Math.atan2(this.y,this.x)}},{key:"getLength",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"getLengthSq",value:function(){return this.x*this.x+this.y*this.y}},{key:"distanceTo",value:function(t){return this.sub(t).getLength()}},{key:"copy",value:function(){return new t(this.x,this.y)}}]),t}(),o=h;e.default=o},d9dc:function(t,i,n){"use strict";var s=n("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,n("ac6a"),n("c5f6"),n("6c7b");var a=s(n("d225")),h=s(n("b0b4")),o=s(n("82bd")),c=function(){function t(e,i,n){(0,a.default)(this,t),this.pos=new o.default(e,i),this.g=n}return(0,h.default)(t,[{key:"draw",value:function(t){t.fillStyle="#aaa",t.beginPath(),t.arc(this.pos.x,this.pos.y,4,0,2*Math.PI),t.fill()}}]),t}(),u=function(){function t(e,i,n){(0,a.default)(this,t),this.pos=new o.default(e,i),this.vel=new o.default(0,n),this.spikeLength=n}return(0,h.default)(t,[{key:"move",value:function(t){t&&this.vel.addTo(t),this.vel.getLength()>this.spikeLength&&this.vel.setLength(this.spikeLength)}},{key:"draw",value:function(t){t.beginPath(),t.moveTo(this.pos.x,this.pos.y);var e=this.pos.add(this.vel);t.lineTo(e.x,e.y),t.stroke()}}]),t}(),r={data:function(){return{systemInfo:{},config:{text:"Love",widthToSpikeLengthRatio:.054},colorConfig:{particleOpacity:.2,baseHue:350,hueRange:9,hueSpeed:.04,colorSaturation:100},canvas:null,ctx:null,stop:null,w:0,h:0,hue:null,particles:[],spikeLength:0,planets:[],A:0,B:0,a:0,b:0,tick:0}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(e){t.systemInfo=e,console.log(t.systemInfo)}})},onReady:function(){this.setup()},onUnload:function(){window&&this.stop?window.cancelAnimationFrame(this.stop):clearTimeout(this.stop),this.canvas=null,this.ctx=null},methods:{setup:function(){this.tick=0;for(var t=Math.round(3*Math.random()+3),e=0;e<t;e++){var i=new c(50+100*e,200,e?1e3:2e3);this.planets.push(i)}this.canvas=document.querySelector("#vector canvas");var n=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*n,this.canvas.height=this.systemInfo.windowWidth/2*n,this.ctx=this.canvas.getContext("2d"),this.reset(),this.draw()},reset:function(){this.hue=this.colorConfig.baseHue,this.w=this.systemInfo.windowWidth,this.h=this.systemInfo.windowWidth/2,this.spikeLength=this.w*this.config.widthToSpikeLengthRatio,this.A=this.w/2.2,this.B=this.h/2.2,this.a=Math.round(Math.random()+2),this.b=Math.round(Math.random()+2),this.drawText()},drawText:function(){var t=this;this.ctx.save();var e=.2*this.w;this.ctx.font="bold "+e+"px Arial, Helvetica, sans-serif",this.ctx.globalAlpha=.5,this.ctx.lineWidth=1,this.ctx.strokeStyle="white",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.strokeText(this.config.text,this.w/(2*this.systemInfo.pixelRatio),this.h/(2*this.systemInfo.pixelRatio),this.width),this.ctx.restore(),uni.canvasGetImageData({canvasId:"vector",x:0,y:0,width:Number(t.w),height:Number(t.h),success:function(e){for(var i=e,n=0;n<t.w;n++)for(var s=0;s<t.h;s++){var a=4*(n+t.w*s),h=(i.data[a]+i.data[a+1]+i.data[a+2]+i.data[a+3])/4;if(h>200){var o=new u(n,s,t.spikeLength);t.particles.push(o)}}t.clear()}})},touchmove:function(t){console.log(t);var i=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;this.planets[0].pos.x=i,this.planets[0].pos.y=n},draw:function(){this.clear(),this.stop=window&&window.requestAnimationFrame(this.draw)||setTimeout(this.draw),this.updateParticles(),this.updatePlanets(),this.tick++},clear:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},updatePlanets:function(){for(var t=this.planets.length,e=1;e<t;e++){var i=2*Math.PI/(t-1)*e,n=this.A*Math.sin(this.a*this.tick/100+i)+this.w/2,s=this.B*Math.sin(this.b*this.tick/100+i)+this.h/2,a=this.planets[e];a.pos.x=n,a.pos.y=s,a.draw(this.ctx)}},updateParticles:function(){var t=this;this.hue+=this.colorConfig.hueSpeed;var e=Math.sin(this.hue)*this.colorConfig.hueRange+this.colorConfig.baseHue;this.ctx.strokeStyle="hsla(".concat(e,", ").concat(this.colorConfig.colorSaturation,"%, 50%, ").concat(this.colorConfig.particleOpacity,")"),this.particles.forEach((function(e){t.planets.forEach((function(t){var i=e.pos.sub(t.pos),n=i.getLength(),s=t.g/n;s>40&&(s=40),i.setLength(s),e.move(i)})),e.draw(t.ctx)}))}}};i.default=r},e06e:function(t,e,i){"use strict";i.r(e);var n=i("d9dc"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a}}]);