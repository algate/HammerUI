(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-canvas-home"],{"5ec9":function(i,e,o){"use strict";o.r(e);var t=o("a1fc"),n=o.n(t);for(var a in t)"default"!==a&&function(i){o.d(e,i,(function(){return t[i]}))}(a);e["default"]=n.a},a1fc:function(i,e,o){"use strict";var t=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(o("b252")),a={name:"basics",data:function(){return{elements:[{title:"Vector.js",name:"canvas-vectorJs",from:"iconfont",hammerIcon:"like",size:30,bgColor:"bg-orange",img:n.default.imgs[0].url},{title:"Tangram.js",name:"canvas-tangram",from:"iconfont",hammerIcon:"favor",size:30,bgColor:"bg-yellow",img:n.default.imgs[1].url},{title:"Countdown",name:"canvas-countdown",from:"tui",hammerIcon:"clock",size:30,bgColor:"bg-olive",img:n.default.imgs[2].url},{title:"Particle",name:"canvas-particle",from:"iconfont",hammerIcon:"emojiflashfill",size:30,bgColor:"bg-cyan",img:n.default.imgs[3].url},{title:"Favorite",name:"canvas-favorite",from:"iconfont",hammerIcon:"likefill",size:30,bgColor:"bg-green",img:n.default.imgs[4].url},{title:"Grids",name:"canvas-grids",from:"iconfont",hammerIcon:"redpacket",size:30,bgColor:"bg-blue",img:n.default.imgs[5].url},{title:"Mouseclick-effect",name:"canvas-click-effect",from:"iconfont",hammerIcon:"sponsorfill",size:30,bgColor:"bg-purple",img:n.default.imgs[6].url}]}},onShow:function(){console.log("进入首页🔨")}};e.default=a},b252:function(i){i.exports=JSON.parse('{"imgs":[{"id":1,"type":"image","url":"http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0"},{"id":2,"type":"image","url":"http://shp.qpic.cn/ishow/2735021211/1549941945_704174346_16208_sProdImgNo_3.jpg/0"},{"id":3,"type":"image","url":"http://shp.qpic.cn/ishow/2735012117/1548064556_587358052_24401_sProdImgNo_3.jpg/0"},{"id":4,"type":"image","url":"http://shp.qpic.cn/ishow/2735012115/1548056809_1186005513_19120_sProdImgNo_3.jpg/0"},{"id":5,"type":"image","url":"http://shp.qpic.cn/ishow/2735011517/1547545098_-888937974_18837_sProdImgNo_3.jpg/0"},{"id":6,"type":"image","url":"http://shp.qpic.cn/ishow/2735092409/1569290387_84828260_13119_sProdImgNo_2.jpg/0"},{"id":7,"type":"image","url":"http://shp.qpic.cn/ishow/2735011111/1547177102_704174346_5257_sProdImgNo_3.jpg/0"},{"id":8,"type":"image","url":"http://shp.qpic.cn/ishow/2735010915/1547020571_704174346_15249_sProdImgNo_3.jpg/0"},{"id":9,"type":"image","url":"http://shp.qpic.cn/ishow/2735010915/1547020061_-888937974_25739_sProdImgNo_3.jpg/0"},{"id":10,"type":"image","url":"http://shp.qpic.cn/ishow/2735010915/1547020571_704174346_15249_sProdImgNo_2.jpg/0"},{"id":11,"type":"image","url":"http://shp.qpic.cn/ishow/2735010915/1547020514_704174346_3495_sProdImgNo_2.jpg/0"},{"id":12,"type":"image","url":"http://shp.qpic.cn/ishow/2735010816/1546935488_-888937974_8713_sProdImgNo_2.jpg/0"},{"id":13,"type":"image","url":"http://shp.qpic.cn/ishow/2735010718/1546855949_-888937974_7998_sProdImgNo_2.jpg/0"},{"id":14,"type":"image","url":"http://shp.qpic.cn/ishow/2735010415/1546587152_-888937974_8639_sProdImgNo_2.jpg/0"},{"id":15,"type":"image","url":"http://shp.qpic.cn/ishow/2735010415/1546586181_704174346_30735_sProdImgNo_2.jpg/0"},{"id":16,"type":"image","url":"http://shp.qpic.cn/ishow/2735010414/1546584023_704174346_17634_sProdImgNo_2.jpg/0"},{"id":17,"type":"image","url":"http://shp.qpic.cn/ishow/2735010415/1546585341_-888937974_25945_sProdImgNo_2.jpg/0"}],"colors":[{"id":1,"name":"bg-red","color":"#e54d42"},{"id":2,"name":"bg-orange","color":"#f37b1d"}]}')},d5ee:function(i,e,o){"use strict";var t=function(){var i=this,e=i.$createElement,o=i._self._c||e;return o("v-uni-view",[o("v-uni-scroll-view",{attrs:{"scroll-y":""}},[o("v-uni-view",{staticClass:"nav-list"},i._l(i.elements,(function(e,t){return o("v-uni-navigator",{key:t,staticClass:"nav-li bg-img",class:e.bgColor,style:[{animation:"bounceInDown "+(.2*(t+1)+1)+"s "+.4*t+"s 1 backwards",backgroundImage:"url("+e.img+")"}],attrs:{"hover-class":"none",url:"/pages/hammer-canvas/"+e.name,"open-type":"navigate"}},[o("v-uni-view",{staticClass:"nav-title"},[i._v(i._s(e.title))]),o("v-uni-view",{staticClass:"nav-name"},[i._v(i._s(e.name))]),o("v-uni-view",{staticClass:"nav-icon"},[o("hammer-icon",{attrs:{from:e.from,name:e.hammerIcon,color:"#fff",size:e.size}})],1)],1)})),1)],1)],1)},n=[];o.d(e,"a",(function(){return t})),o.d(e,"b",(function(){return n}))},dde9:function(i,e,o){"use strict";o.r(e);var t=o("d5ee"),n=o("5ec9");for(var a in n)"default"!==a&&function(i){o.d(e,i,(function(){return n[i]}))}(a);var s=o("2877"),r=Object(s["a"])(n["default"],t["a"],t["b"],!1,null,null,null);e["default"]=r.exports}}]);