(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-pie-rose"],{4333:function(n,t,i){"use strict";var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"qiun-columns"},[i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-text",[n._v("pages/basic/pie/rose")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("玫瑰图(面积模式)")])],1),i("v-uni-view",{staticClass:"qiun-charts"},[i("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasPie",id:"canvasPie"},on:{touchstart:function(t){t=n.$handleEvent(t),n.touchPie(t)}}})],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("玫瑰图(半径模式)")])],1),i("v-uni-view",{staticClass:"qiun-charts"},[i("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasRose",id:"canvasRose"},on:{touchstart:function(t){t=n.$handleEvent(t),n.touchRose(t)}}})],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),i("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),i("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},e=[];i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return e}))},"43af":function(n,t,i){t=n.exports=i("24fb")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-1c05612c]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-1c05612c]{width:%?750?%;height:%?500?%;background-color:#fff}",""])},"4f10":function(n,t,i){"use strict";i.r(t);var a=i("4333"),e=i("fa2f");for(var s in e)"default"!==s&&function(n){i.d(t,n,(function(){return e[n]}))}(s);i("bd4d");var o=i("2877"),u=Object(o["a"])(e["default"],a["a"],a["b"],!1,null,"1c05612c",null);t["default"]=u.exports},"68d8":function(n,t,i){"use strict";var a=i("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e,s=a(i("af1e")),o=i("6c65"),u=null,c=null,r={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){e=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={series:[]};t.series=n.data.data.Pie.series,e.textarea=JSON.stringify(n.data.data.Pie),e.showPie("canvasPie",t),e.showRose("canvasRose",t)},fail:function(){e.tips="网络错误，小程序端请检查合法域名"}})},showPie:function(n,t){u=new s.default({$this:e,canvasId:n,type:"rose",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:e.pixelRatio,series:t.series,animation:!0,width:e.cWidth*e.pixelRatio,height:e.cHeight*e.pixelRatio,dataLabel:!0,extra:{rose:{type:"area",minRadius:50,activeOpacity:.5,offsetAngle:0,labelWidth:15}}})},touchPie:function(n){u.showToolTip(n,{format:function(n){return n.name+":"+n.data}})},showRose:function(n,t){c=new s.default({$this:e,canvasId:n,type:"rose",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:e.pixelRatio,series:t.series,animation:!0,width:e.cWidth*e.pixelRatio,height:e.cHeight*e.pixelRatio,dataLabel:!0,extra:{rose:{type:"radius",minRadius:50,activeOpacity:.5,offsetAngle:0,labelWidth:15}}})},touchRose:function(n){c.showToolTip(n,{format:function(n){return n.name+":"+n.data}})},changeData:function(){if((0,o.isJSON)(e.textarea)){var n=JSON.parse(e.textarea);u.updateData({series:n.series,categories:n.categories}),c.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=r},"6c65":function(n,t,i){"use strict";var a=i("4ea4"),e=a(i("7618"));n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=(0,e.default)(t)||!t)}catch(i){return console.log("error："+n+"!!!"+i),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},bd4d:function(n,t,i){"use strict";var a=i("d66b"),e=i.n(a);e.a},d66b:function(n,t,i){var a=i("43af");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=i("4f06").default;e("69a3d4ac",a,!0,{sourceMap:!1,shadowMode:!1})},fa2f:function(n,t,i){"use strict";i.r(t);var a=i("68d8"),e=i.n(a);for(var s in a)"default"!==s&&function(n){i.d(t,n,(function(){return a[n]}))}(s);t["default"]=e.a}}]);