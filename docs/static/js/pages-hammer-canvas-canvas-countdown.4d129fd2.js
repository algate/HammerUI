(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-canvas-canvas-countdown"],{"0c88":function(t,s,i){var n=i("917a");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("463431d9",n,!0,{sourceMap:!1,shadowMode:!1})},"1dc8":function(t,s,i){"use strict";i.r(s);var n=i("3c24"),e=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(s,t,(function(){return n[t]}))}(a);s["default"]=e.a},2398:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=[[[0,0,1,1,1,0,0],[0,1,1,0,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,0,1,1,0],[0,0,1,1,1,0,0]],[[0,0,0,1,1,0,0],[0,1,1,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[1,1,1,1,1,1,1]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,0,0,1,1],[1,1,1,1,1,1,1]],[[1,1,1,1,1,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,1,1,1,0,0],[0,0,0,0,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,0,1,1,1,0],[0,0,1,1,1,1,0],[0,1,1,0,1,1,0],[1,1,0,0,1,1,0],[1,1,1,1,1,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,1,1]],[[1,1,1,1,1,1,1],[1,1,0,0,0,0,0],[1,1,0,0,0,0,0],[1,1,1,1,1,1,0],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,0,0,0,1,1,0],[0,0,1,1,0,0,0],[0,1,1,0,0,0,0],[1,1,0,0,0,0,0],[1,1,0,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[1,1,1,1,1,1,1],[1,1,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0],[0,0,1,1,0,0,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,1,1,0]],[[0,1,1,1,1,1,0],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[1,1,0,0,0,1,1],[0,1,1,1,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,0,1,1],[0,0,0,0,1,1,0],[0,0,0,1,1,0,0],[0,1,1,0,0,0,0]],[[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]]],e=n;s.default=e},3080:function(t,s,i){"use strict";var n;i.d(s,"b",(function(){return e})),i.d(s,"c",(function(){return a})),i.d(s,"a",(function(){return n}));var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",[i("v-uni-canvas",{staticStyle:{width:"100vw",height:"50vw"},attrs:{type:"2d","canvas-id":"countdown",id:"countdown"}})],1)},a=[]},"3c24":function(t,s,i){"use strict";var n=i("ee27").default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,i("e25e"),i("cb29");var e=n(i("2398")),a={data:function(){return{systemInfo:{},canvas:null,ctx:null,stop:null,WINDOW_WIDTH:375,WINDOW_HEIGHT:250,MARGIN_LEFT:20,MARGIN_TOP:10,RADIUS:2,balls:[],currentDate:0,newDate:0,colors:["#57a3e5","#7e93cc","#b785cc","#cc69c7","#becc7c","#99ff87","#ffd75c","#ffBB00","#ff9f79","#cc6767"]}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(s){t.systemInfo=s,console.log(t.systemInfo)}}),this.currentDate=new Date},onReady:function(){this.setup()},onUnload:function(){console.log("监听页面卸载"),clearInterval(this.stop),this.canvas=null,this.ctx=null},methods:{setup:function(){this.canvas=document.querySelector("#countdown canvas");var t=uni.getSystemInfoSync().pixelRatio;this.canvas.width=this.systemInfo.windowWidth*t,this.canvas.height=this.systemInfo.windowWidth/2*t,this.WINDOW_WIDTH=this.systemInfo.windowWidth,this.WINDOW_HEIGHT=this.systemInfo.windowWidth/2,this.ctx=this.canvas.getContext("2d"),this.stop=setInterval(this.animation,100)},animation:function(){this.clear(this.ctx),this.render(this.ctx),this.update(this.ctx)},clear:function(t){t.clearRect(0,0,this.WINDOW_WIDTH,this.WINDOW_HEIGHT)},render:function(t){this.newDate=new Date;var s=this.newDate.getHours(),i=this.newDate.getMinutes(),n=this.newDate.getSeconds();this.renderDigit(this.MARGIN_LEFT,this.MARGIN_TOP,parseInt(s/10),t),this.renderDigit(this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(s%10),t),this.renderDigit(this.MARGIN_LEFT+30*(this.RADIUS+1),this.MARGIN_TOP,10,t),this.renderDigit(this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(i/10),t),this.renderDigit(this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(i%10),t),this.renderDigit(this.MARGIN_LEFT+69*(this.RADIUS+1),this.MARGIN_TOP,10,t),this.renderDigit(this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(n/10),t),this.renderDigit(this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,parseInt(n%10),t);for(var e=0;e<this.balls.length;e++)t.fillStyle=this.balls[e].color,t.beginPath(),t.arc(this.balls[e].x,this.balls[e].y,this.RADIUS,0,2*Math.PI,!0),t.closePath(),t.fill()},renderDigit:function(t,s,i,n){n.fillStyle="#cf3d61";for(var a=0;a<e.default[i].length;a++)for(var h=0;h<e.default[i][a].length;h++)1==e.default[i][a][h]&&(n.beginPath(),n.arc(t+2*h*(this.RADIUS+1)+(this.RADIUS+1),s+2*a*(this.RADIUS+1)+(this.RADIUS+1),this.RADIUS,0,2*Math.PI),n.closePath(),n.fill())},update:function(t){this.newDate=new Date;var s=this.newDate.getHours(),i=this.newDate.getMinutes(),n=this.newDate.getSeconds(),e=this.currentDate.getHours(),a=this.currentDate.getMinutes(),h=this.currentDate.getSeconds();this.currentDate.getTime()!=this.newDate.getTime()&&(parseInt(e/10)!=parseInt(s/10)&&this.addBalls(this.MARGIN_LEFT+0,this.MARGIN_TOP,parseInt(e/10)),parseInt(e%10)!=parseInt(s%10)&&this.addBalls(this.MARGIN_LEFT+15*(this.RADIUS+1),this.MARGIN_TOP,parseInt(e%10)),parseInt(a/10)!=parseInt(i/10)&&this.addBalls(this.MARGIN_LEFT+39*(this.RADIUS+1),this.MARGIN_TOP,parseInt(a/10)),parseInt(a%10)!=parseInt(i%10)&&this.addBalls(this.MARGIN_LEFT+54*(this.RADIUS+1),this.MARGIN_TOP,parseInt(a%10)),parseInt(h/10)!=parseInt(n/10)&&this.addBalls(this.MARGIN_LEFT+78*(this.RADIUS+1),this.MARGIN_TOP,parseInt(h/10)),parseInt(h%10)!=parseInt(n%10)&&this.addBalls(this.MARGIN_LEFT+93*(this.RADIUS+1),this.MARGIN_TOP,parseInt(h%10)),this.currentDate=this.newDate),this.updateBalls()},addBalls:function(t,s,i){for(var n=0;n<e.default[i].length;n++)for(var a=0;a<e.default[i][n].length;a++)if(1==e.default[i][n][a]){var h={x:t+2*a*(this.RADIUS+1)+(this.RADIUS+1),y:s+2*n*(this.RADIUS+1)+(this.RADIUS+1),g:1.5+Math.random(),vx:6*Math.pow(-1,Math.ceil(500*Math.random())),vy:-3,color:this.colors[Math.floor(Math.random()*this.colors.length)]};this.balls.push(h)}},updateBalls:function(){for(var t=0;t<this.balls.length;t++)this.balls[t].x+=this.balls[t].vx,this.balls[t].y+=this.balls[t].vy,this.balls[t].vy+=this.balls[t].g,this.balls[t].y>=this.WINDOW_HEIGHT-this.RADIUS&&(this.balls[t].y=this.WINDOW_HEIGHT-this.RADIUS,this.balls[t].vy=.25*-this.balls[t].vy)}}};s.default=a},5946:function(t,s,i){"use strict";i.r(s);var n=i("3080"),e=i("1dc8");for(var a in e)["default"].indexOf(a)<0&&function(t){i.d(s,t,(function(){return e[t]}))}(a);i("c2ea");var h,r=i("f0c5"),l=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"2f3d913a",null,!1,n["a"],h);s["default"]=l.exports},"917a":function(t,s,i){var n=i("24fb");s=n(!1),s.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* hammer自定义 - 颜色 */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-canvas[data-v-2f3d913a]{border:1px solid #2dabff}',""]),t.exports=s},c2ea:function(t,s,i){"use strict";var n=i("0c88"),e=i.n(n);e.a},cb29:function(t,s,i){var n=i("23e7"),e=i("81d5"),a=i("44d2");n({target:"Array",proto:!0},{fill:e}),a("fill")}}]);