(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-canvas-canvas-touchmove-snow"],{"58cc":function(t,i,e){"use strict";e.r(i);var n=e("8055"),s=e("e7c4");for(var o in s)"default"!==o&&function(t){e.d(i,t,(function(){return s[t]}))}(o);var a=e("2877"),c=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,"31965490",null);i["default"]=c.exports},8055:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"bg-black",on:{touchmove:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.tapEvent(i)}}},[e("v-uni-canvas",{staticStyle:{width:"100vw",height:"100vh"},attrs:{type:"2d","canvas-id":"move-effect",id:"move-effect"}})],1)},s=[];e.d(i,"a",(function(){return n})),e.d(i,"b",(function(){return s}))},bcc2:function(t,i,e){"use strict";var n=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=n(e("d225")),o=n(e("b0b4")),a=function(){function t(i,e,n,o){(0,s.default)(this,t),this.character=o,this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.color=n,this.position={x:i,y:e},this.fontSize=24,this.alpha=1}return(0,o.default)(t,[{key:"update",value:function(t){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.fontSize-=.1,t.textAlign="center",t.textBaseline="middle",t.fillStyle=this.color,t.globalAlpha=this.alpha-.1,t.font=this.fontSize+"px Arial, Helvetica, sans-serif",this.fontSize>0&&this.alpha>0&&t.fillText(this.character,this.position.x,this.position.y)}}]),t}(),c={data:function(){return{systemInfo:{},emojis:["❄️"],colors:["#f37b1d","#8dc63f","#1cbbb4","#e03997","#8799a3"],canvas:null,ctx:null,stop:null,particles:[]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(i){t.systemInfo=i}})},onReady:function(){this.setup()},onUnload:function(){window&&this.stop?window.cancelAnimationFrame(this.stop):clearTimeout(this.stop),this.canvas=null,this.ctx=null},methods:{setup:function(){this.canvas=document.querySelector("#move-effect canvas");var t=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*t,this.canvas.height=this.systemInfo.windowHeight*t,this.ctx=this.canvas.getContext("2d"),document.addEventListener("mousemove",this.onMouseMove),this.animation()},animation:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.updateParticles(),this.stop=window?window.requestAnimationFrame(this.animation):setTimeout(this.animation,1e3/60)},onMouseMove:function(t){var i=t.clientX,e=t.clientY;console.log(this.emojis[Math.floor(Math.random()*this.emojis.length)]),this.addParticle(i,e,this.colors[Math.floor(Math.random()*this.colors.length)],this.emojis[Math.floor(Math.random()*this.emojis.length)])},tapEvent:function(t){this.addParticle(t.changedTouches[0].clientX,t.changedTouches[0].clientY,this.colors[Math.floor(Math.random()*this.colors.length)],this.emojis[Math.floor(Math.random()*this.emojis.length)])},updateParticles:function(){if(0!==this.particles.length){for(var t=0;t<this.particles.length;t++)this.particles[t].update(this.ctx);for(var i=this.particles.length-1;i>=0;i--)(this.particles[i].position.y>this.canvas.height||this.particles[i].alpha<=0||this.particles[i].fontSize<=0)&&this.particles.splice(i,1)}},addParticle:function(t,i,e,n){var s=new a(t,i,e,n);this.particles.push(s)}}};i.default=c},e7c4:function(t,i,e){"use strict";e.r(i);var n=e("bcc2"),s=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=s.a}}]);