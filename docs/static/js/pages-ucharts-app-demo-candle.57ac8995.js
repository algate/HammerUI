(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-app-demo-candle"],{"023d":function(n,t,e){var a=e("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-51b02266]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-51b02266]{width:%?750?%;height:%?500?%;background-color:#fff}.qiun-charts2[data-v-51b02266]{width:%?750?%;height:%?200?%;background-color:#fff}.charts2[data-v-51b02266]{width:%?750?%;height:%?200?%;background-color:#fff}",""]),n.exports=t},"0ae0":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){return a}));var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"qiun-columns"},[e("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt qiun-rows"},[e("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("K线图与柱状图联动")]),e("v-uni-view",{staticStyle:{flex:"1","text-align":"right"}},[e("v-uni-button",{attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.tapButton("in")}}},[n._v("放大")]),e("v-uni-button",{staticStyle:{"margin-left":"20upx"},attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.tapButton("out")}}},[n._v("缩小")])],1)],1),e("v-uni-view",{staticClass:"qiun-charts"},[e("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasCandle",id:"canvasCandle","disable-scroll":"true"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchCandle.apply(void 0,arguments)},touchmove:function(t){arguments[0]=t=n.$handleEvent(t),n.moveCandle.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=n.$handleEvent(t),n.touchEndCandle.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"qiun-charts2"},[e("v-uni-canvas",{staticClass:"charts2",attrs:{"canvas-id":"canvasColumn",id:"canvasColumn"}})],1),e("v-uni-view",{staticClass:"qiun-padding qiun-bg-white "},[e("v-uni-slider",{attrs:{value:n.itemCount,min:"5",max:n.sliderMax,"block-color":"#f8f8f8","block-size":"18"},on:{changing:function(t){arguments[0]=t=n.$handleEvent(t),n.sliderMove.apply(void 0,arguments)},change:function(t){arguments[0]=t=n.$handleEvent(t),n.sliderMove.apply(void 0,arguments)}}})],1)],1)},o=[]},"3b5a":function(n,t,e){var a=e("023d");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("67051da7",a,!0,{sourceMap:!1,shadowMode:!1})},"3c64":function(n,t,e){"use strict";var a=e("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("b680");var i,o=a(e("af1e")),l=(e("6c65"),null),s=null,c={data:function(){return{cWidth:"",cHeight:"",cHeight2:"",pixelRatio:1,itemCount:20,sliderMax:50}},onLoad:function(){i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.cHeight2=uni.upx2px(200),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={categories:[],series:[]},e={categories:[],series:[]};t.categories=n.data.data.Candle.categories,t.series=n.data.data.Candle.series,e.categories=n.data.data.CandleColumn.categories,e.series=n.data.data.CandleColumn.series,i.showCandle("canvasCandle",t),i.showColumn("canvasColumn",e)},fail:function(){i.tips="网络错误，小程序端请检查合法域名"}})},showCandle:function(n,t){l=new o.default({$this:i,canvasId:n,type:"candle",fontSize:11,padding:[10,15,0,15],legend:{show:!0},background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series,animation:!1,enableScroll:!0,xAxis:{disableGrid:!0,labelCount:4,itemCount:i.itemCount,scrollShow:!0,scrollAlign:"right"},yAxis:{gridType:"dash",splitNumber:5,format:function(n){return n.toFixed(0)}},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,dataLabel:!1,dataPointShape:!0,extra:{candle:{color:{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},average:{show:!0,name:["MA5","MA10","MA30"],day:[5,10,20],color:["#1890ff","#2fc25b","#facc14"]}},tooltip:{bgColor:"#000000",bgOpacity:.7,gridType:"dash",dashLength:5,gridColor:"#1890ff",fontColor:"#FFFFFF",horizentalLine:!0,xAxisLabel:!0,yAxisLabel:!0,labelBgColor:"#DFE8FF",labelBgOpacity:.95,labelAlign:"left",labelFontColor:"#666666"}}})},touchCandle:function(n){l.scrollStart(n)},moveCandle:function(n){var t=l.scroll(n);void 0!==t&&s.translate(t)},touchEndCandle:function(n){l.scrollEnd(n),l.showToolTip(n,{format:function(n,t){return t+" "+n.name+":"+n.data}})},tapButton:function(n){var t=5;"in"==n?(i.itemCount-=t,i.itemCount<=5&&(i.itemCount=5)):(i.itemCount+=t,i.itemCount>=i.sliderMax&&(i.itemCount=i.sliderMax)),i.zoomCandle(i.itemCount)},sliderMove:function(n){i.itemCount=n.detail.value,i.zoomCandle(n.detail.value)},zoomCandle:function(n){l.zoom({itemCount:n}),s.zoom({itemCount:n})},showColumn:function(n,t){s=new o.default({$this:i,canvasId:n,type:"column",padding:[10,15,0,15],legend:{show:!1},fontSize:11,background:"#FFFFFF",pixelRatio:i.pixelRatio,animation:!1,enableScroll:!0,dataLabel:!1,categories:t.categories,series:t.series,xAxis:{disabled:!0,disableGrid:!0,labelCount:4,itemCount:i.itemCount,scrollAlign:"right"},yAxis:{disableGrid:!0,splitNumber:2,min:0,format:function(n){return n.toFixed(0)}},width:i.cWidth*i.pixelRatio,height:i.cHeight2*i.pixelRatio,extra:{column:{type:"group"}}})}}};t.default=c},"48f1":function(n,t,e){"use strict";e.r(t);var a=e("0ae0"),i=e("c9ff");for(var o in i)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(o);e("5322");var l,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"51b02266",null,!1,a["a"],l);t["default"]=c.exports},5322:function(n,t,e){"use strict";var a=e("3b5a"),i=e.n(a);i.a},"6c65":function(n,t,e){var a=e("62f5").default;n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=a(t)||!t)}catch(e){return console.log("error："+n+"!!!"+e),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},c9ff:function(n,t,e){"use strict";e.r(t);var a=e("3c64"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(o);t["default"]=i.a}}]);