(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-pie-pie"],{"3ae9":function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"qiun-columns"},[i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-text",[n._v("pages/basic/pie/pie")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("饼状图")])],1),i("v-uni-view",{staticClass:"qiun-charts"},[i("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasPie",id:"canvasPie"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchPie.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),i("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),i("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},s=[]},"4e2d":function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-5b80999a]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-5b80999a]{width:%?750?%;height:%?500?%;background-color:#fff}",""]),n.exports=t},"6c65":function(n,t,i){var e=i("62f5").default;n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=e(t)||!t)}catch(i){return console.log("error："+n+"!!!"+i),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},7925:function(n,t,i){"use strict";i.r(t);var e=i("3ae9"),a=i("fd3c");for(var s in a)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return a[n]}))}(s);i("9b0f");var u,r=i("f0c5"),c=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"5b80999a",null,!1,e["a"],u);t["default"]=c.exports},"9b0f":function(n,t,i){"use strict";var e=i("d105"),a=i.n(e);a.a},d105:function(n,t,i){var e=i("4e2d");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("034f912c",e,!0,{sourceMap:!1,shadowMode:!1})},e218:function(n,t,i){"use strict";var e=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=e(i("af1e")),u=i("6c65"),r=null,c={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){a=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={series:[]};t.series=n.data.data.Pie.series,a.textarea=JSON.stringify(n.data.data.Pie),a.showPie("canvasPie",t)},fail:function(){a.tips="网络错误，小程序端请检查合法域名"}})},showPie:function(n,t){r=new s.default({$this:a,canvasId:n,type:"pie",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:a.pixelRatio,series:t.series,animation:!0,width:a.cWidth*a.pixelRatio,height:a.cHeight*a.pixelRatio,dataLabel:!0,extra:{pie:{border:!0,borderColor:"#FFFFFF",borderWidth:3}}})},touchPie:function(n){r.showToolTip(n,{format:function(n){return n.name+":"+n.data}}),r.touchLegend(n,{animation:!0})},changeData:function(){if((0,u.isJSON)(a.textarea)){var n=JSON.parse(a.textarea);r.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=c},fd3c:function(n,t,i){"use strict";i.r(t);var e=i("e218"),a=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(s);t["default"]=a.a}}]);