(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-pie-rose"],{"02b3":function(n,t,i){"use strict";var a=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e,s=a(i("af1e")),o=i("6c65"),u=null,c=null,r={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){e=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={series:[]};t.series=n.data.data.Pie.series,e.textarea=JSON.stringify(n.data.data.Pie),e.showPie("canvasPie",t),e.showRose("canvasRose",t)},fail:function(){e.tips="网络错误，小程序端请检查合法域名"}})},showPie:function(n,t){u=new s.default({$this:e,canvasId:n,type:"rose",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:e.pixelRatio,series:t.series,animation:!0,width:e.cWidth*e.pixelRatio,height:e.cHeight*e.pixelRatio,dataLabel:!0,extra:{rose:{type:"area",minRadius:50,activeOpacity:.5,offsetAngle:0,labelWidth:15}}})},touchPie:function(n){u.showToolTip(n,{format:function(n){return n.name+":"+n.data}})},showRose:function(n,t){c=new s.default({$this:e,canvasId:n,type:"rose",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:e.pixelRatio,series:t.series,animation:!0,width:e.cWidth*e.pixelRatio,height:e.cHeight*e.pixelRatio,dataLabel:!0,extra:{rose:{type:"radius",minRadius:50,activeOpacity:.5,offsetAngle:0,labelWidth:15}}})},touchRose:function(n){c.showToolTip(n,{format:function(n){return n.name+":"+n.data}})},changeData:function(){if((0,o.isJSON)(e.textarea)){var n=JSON.parse(e.textarea);u.updateData({series:n.series,categories:n.categories}),c.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=r},"4f10":function(n,t,i){"use strict";i.r(t);var a=i("aff6"),e=i("fa2f");for(var s in e)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(s);i("825e");var o,u=i("f0c5"),c=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"76268f21",null,!1,a["a"],o);t["default"]=c.exports},"6c65":function(n,t,i){var a=i("62f5").default;n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=a(t)||!t)}catch(i){return console.log("error："+n+"!!!"+i),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},"825e":function(n,t,i){"use strict";var a=i("8ec9"),e=i.n(a);e.a},"8ec9":function(n,t,i){var a=i("9680");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var e=i("4f06").default;e("df0436aa",a,!0,{sourceMap:!1,shadowMode:!1})},9680:function(n,t,i){var a=i("24fb");t=a(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-76268f21]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-76268f21]{width:%?750?%;height:%?500?%;background-color:#fff}",""]),n.exports=t},aff6:function(n,t,i){"use strict";var a;i.d(t,"b",(function(){return e})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"qiun-columns"},[i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-text",[n._v("pages/basic/pie/rose")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("玫瑰图(面积模式)")])],1),i("v-uni-view",{staticClass:"qiun-charts"},[i("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasPie",id:"canvasPie"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchPie.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("玫瑰图(半径模式)")])],1),i("v-uni-view",{staticClass:"qiun-charts"},[i("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasRose",id:"canvasRose"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchRose.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),i("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),i("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},s=[]},fa2f:function(n,t,i){"use strict";i.r(t);var a=i("02b3"),e=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return a[n]}))}(s);t["default"]=e.a}}]);