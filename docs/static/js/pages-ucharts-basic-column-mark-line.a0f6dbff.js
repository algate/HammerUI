(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-column-mark-line"],{"0079":function(n,t,a){"use strict";a.r(t);var e=a("dc3d"),i=a("06b8");for(var o in i)["default"].indexOf(o)<0&&function(n){a.d(t,n,(function(){return i[n]}))}(o);a("594a");var u,s=a("f0c5"),r=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"579546aa",null,!1,e["a"],u);t["default"]=r.exports},"0122":function(n,t,a){"use strict";function e(n){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.default=e=function(n){return typeof n}:t.default=e=function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e,a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0")},"06b8":function(n,t,a){"use strict";a.r(t);var e=a("eb7d"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(n){a.d(t,n,(function(){return e[n]}))}(o);t["default"]=i.a},"594a":function(n,t,a){"use strict";var e=a("e9b8c"),i=a.n(e);i.a},"6c65":function(n,t,a){var e=a("62f5").default;n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=e(t)||!t)}catch(a){return console.log("error："+n+"!!!"+a),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},a12c:function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-579546aa]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-579546aa]{width:%?750?%;height:%?500?%;background-color:#fff}",""]),n.exports=t},dc3d:function(n,t,a){"use strict";var e;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}));var i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-text",[n._v("pages/basic/column/mark-line")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标记线")])],1),a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasColumn",id:"canvasColumn"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchColumn.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),a("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),a("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},o=[]},e9b8c:function(n,t,a){var e=a("a12c");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var i=a("4f06").default;i("2864f7b3",e,!0,{sourceMap:!1,shadowMode:!1})},eb7d:function(n,t,a){"use strict";var e=a("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=e(a("0122")),u=e(a("af1e")),s=a("6c65"),r=null,c={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){i=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={categories:[],series:[]};t.categories=n.data.data.ColumnB.categories,t.series=n.data.data.ColumnB.series,i.textarea=JSON.stringify(n.data.data.ColumnB),i.showColumn("canvasColumn",t)},fail:function(){i.tips="网络错误，小程序端请检查合法域名"}})},showColumn:function(n,t){r=new u.default({$this:i,canvasId:n,type:"column",padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},fontSize:11,background:"#FFFFFF",pixelRatio:i.pixelRatio,animation:!0,dataLabel:!0,enableMarkLine:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,categories:t.categories,series:t.series,xAxis:{disableGrid:!0},extra:{column:{type:"group",width:i.cWidth*i.pixelRatio*.45/t.categories.length},markLine:{type:"dash",dashLength:5,data:[{value:38,lineColor:"#f04864",showLabel:!0},{value:19,lineColor:"#f04864",showLabel:!0}]}}})},touchColumn:function(n){r.showToolTip(n,{format:function(n,t){return"object"===(0,o.default)(n.data)?t+" "+n.name+":"+n.data.value:t+" "+n.name+":"+n.data}}),r.touchLegend(n,{animation:!0})},changeData:function(){if((0,s.isJSON)(i.textarea)){var n=JSON.parse(i.textarea);r.updateData({series:n.series,categories:n.categories,animation:!0})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=c}}]);