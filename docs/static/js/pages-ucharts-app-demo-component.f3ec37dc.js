(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-app-demo-component"],{1121:function(t,n,e){"use strict";e.r(n);var a=e("7d13"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"1ae4":function(t,n,e){"use strict";var a=e("4191"),i=e.n(a);i.a},"375c":function(t,n,e){"use strict";e.r(n);var a=e("65a9"),i=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},4191:function(t,n,e){var a=e("ea5a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("b0da4d22",a,!0,{sourceMap:!1,shadowMode:!1})},"5c4b":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.canvasId?e("v-uni-canvas",{style:{width:t.cWidth*t.pixelRatio+"px",height:t.cHeight*t.pixelRatio+"px",transform:"scale("+1/t.pixelRatio+")","margin-left":-t.cWidth*(t.pixelRatio-1)/2+"px","margin-top":-t.cHeight*(t.pixelRatio-1)/2+"px"},attrs:{id:t.canvasId,canvasId:t.canvasId},on:{touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.touchStart.apply(void 0,arguments)},touchmove:function(n){arguments[0]=n=t.$handleEvent(n),t.touchMove.apply(void 0,arguments)},touchend:function(n){arguments[0]=n=t.$handleEvent(n),t.touchEnd.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.error.apply(void 0,arguments)}}}):t._e()},r=[]},"65a9":function(t,n,e){"use strict";var a=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("a9e3"),e("b680");var i=a(e("af1e")),r={},c={props:{chartType:{required:!0,type:String,default:"column"},opts:{required:!0,type:Object,default:function(){return null}},canvasId:{type:String,default:"u-canvas"},cWidth:{default:375},cHeight:{default:250},pixelRatio:{type:Number,default:1}},mounted:function(){this.init()},methods:{init:function(){switch(this.chartType){case"column":this.initColumnChart();break;case"line":this.initLineChart();break;default:break}},initColumnChart:function(){r[this.canvasId]=new i.default({$this:this,canvasId:this.canvasId,type:"column",legend:!0,fontSize:11,background:"#FFFFFF",pixelRatio:this.pixelRatio,animation:!0,categories:this.opts.categories,series:this.opts.series,enableScroll:!0,xAxis:{disableGrid:!0,itemCount:4,scrollShow:!0},yAxis:{},dataLabel:!0,width:this.cWidth*this.pixelRatio,height:this.cHeight*this.pixelRatio,extra:{column:{type:"group"}}})},initLineChart:function(){r[this.canvasId]=new i.default({$this:this,canvasId:this.canvasId,type:"line",fontSize:11,legend:!0,dataLabel:!1,dataPointShape:!0,background:"#FFFFFF",pixelRatio:this.pixelRatio,categories:this.opts.categories,series:this.opts.series,animation:!0,enableScroll:!0,xAxis:{type:"grid",gridColor:"#CCCCCC",gridType:"dash",dashLength:8,itemCount:4,scrollShow:!0},yAxis:{gridType:"dash",gridColor:"#CCCCCC",dashLength:8,splitNumber:5,min:10,max:180,format:function(t){return t.toFixed(0)+"元"}},width:this.cWidth*this.pixelRatio,height:this.cHeight*this.pixelRatio,extra:{line:{type:"straight"}}})},changeData:function(t,n){r[t].updateData({series:n.series,categories:n.categories})},touchStart:function(t){r[this.canvasId].showToolTip(t,{format:function(t,n){return n+" "+t.name+":"+t.data}}),r[this.canvasId].scrollStart(t)},touchMove:function(t){r[this.canvasId].scroll(t)},touchEnd:function(t){r[this.canvasId].scrollEnd(t)},error:function(t){console.log(t)}}};n.default=c},"6c65":function(t,n,e){var a=e("62f5").default;t.exports={error:"",isJSON:function(t){if("string"==typeof t)try{var n=JSON.parse(t);return!("object"!=a(n)||!n)}catch(e){return console.log("error："+t+"!!!"+e),!1}},isNumber:function(t){var n=/^-?[1-9][0-9]?.?[0-9]*$/;return n.test(t)}}},"7d13":function(t,n,e){"use strict";var a=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,r=a(e("a2b0")),c=(e("6c65"),{data:function(){return{textarea:"",cWidth:"",cHeight:"",arr:[]}},components:{uCharts:r.default},onLoad:function(){i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(t){var n={categories:[],series:[]};n.categories=t.data.data.LineA.categories,n.series=t.data.data.LineA.series;var e={categories:[],series:[]};e.categories=t.data.data.ColumnB.categories,e.series=t.data.data.ColumnB.series,i.textarea=JSON.stringify(t.data.data.LineA);var a=[{opts:n,chartType:"line",id:"abcc"},{opts:e,chartType:"column",id:"bcdd"}];i.arr=a},fail:function(){i.tips="网络错误，小程序端请检查合法域名"}})},changeData:function(){var t=JSON.parse(i.textarea);this.$refs.bcdd[0].changeData("bcdd",t)}}});n.default=c},"9b47":function(t,n,e){var a=e("f90b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("0208811e",a,!0,{sourceMap:!1,shadowMode:!1})},a2b0:function(t,n,e){"use strict";e.r(n);var a=e("5c4b"),i=e("375c");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("b177");var c,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"2956404e",null,!1,a["a"],c);n["default"]=s.exports},a8ec:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[t._l(t.arr,(function(n,a){return[e("v-uni-view",{key:a+"_0",staticClass:"qiun-columns",staticStyle:{"background-color":"#FFFFFF"}},[e("u-charts",{ref:n.id,refInFor:!0,attrs:{"canvas-id":n.id,chartType:n.chartType,cWidth:t.cWidth,cHeight:t.cHeight,opts:n.opts}})],1)]})),e("v-uni-button",{staticClass:"qiun-button",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changeData()}}},[t._v("更新图表")])],2)},r=[]},b177:function(t,n,e){"use strict";var a=e("9b47"),i=e.n(a);i.a},cb05:function(t,n,e){"use strict";e.r(n);var a=e("a8ec"),i=e("1121");for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("1ae4");var c,o=e("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"0718cdc6",null,!1,a["a"],c);n["default"]=s.exports},ea5a:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-0718cdc6]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-0718cdc6]{width:%?750?%;height:%?500?%}",""]),t.exports=n},f90b:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".charts[data-v-2956404e]{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#fff}",""]),t.exports=n}}]);