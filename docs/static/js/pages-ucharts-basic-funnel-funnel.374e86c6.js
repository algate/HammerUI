(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-funnel-funnel"],{"2d8e":function(n,t,a){"use strict";a.r(t);var i=a("a684"),e=a("a4b5");for(var u in e)["default"].indexOf(u)<0&&function(n){a.d(t,n,(function(){return e[n]}))}(u);a("48e7");var s,r=a("f0c5"),c=Object(r["a"])(e["default"],i["b"],i["c"],!1,null,"6bfac164",null,!1,i["a"],s);t["default"]=c.exports},"3c8c":function(n,t,a){var i=a("24fb");t=i(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-6bfac164]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-6bfac164]{width:%?750?%;height:%?500?%;background-color:#fff}",""]),n.exports=t},"48e7":function(n,t,a){"use strict";var i=a("f876"),e=a.n(i);e.a},"6c65":function(n,t,a){var i=a("62f5").default;n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=i(t)||!t)}catch(a){return console.log("error："+n+"!!!"+a),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},a4b5:function(n,t,a){"use strict";a.r(t);var i=a("bcda"),e=a.n(i);for(var u in i)["default"].indexOf(u)<0&&function(n){a.d(t,n,(function(){return i[n]}))}(u);t["default"]=e.a},a684:function(n,t,a){"use strict";var i;a.d(t,"b",(function(){return e})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return i}));var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"qiun-columns"},[a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-text",[n._v("pages/basic/funnel/funnel")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("漏斗图")])],1),a("v-uni-view",{staticClass:"qiun-charts"},[a("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasFunnel",id:"canvasFunnel"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchFunnel.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[a("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),a("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[a("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),a("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),a("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},u=[]},bcda:function(n,t,a){"use strict";var i=a("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e,u=i(a("af1e")),s=a("6c65"),r=null,c={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){e=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={series:[]};t.series=n.data.data.Pie.series,e.textarea=JSON.stringify(n.data.data.Pie),e.showFunnel("canvasFunnel",t)},fail:function(){e.tips="网络错误，小程序端请检查合法域名"}})},showFunnel:function(n,t){r=new u.default({$this:e,canvasId:n,type:"funnel",fontSize:11,padding:[15,15,0,15],legend:{show:!0,padding:5,lineHeight:11,margin:0},background:"#FFFFFF",pixelRatio:e.pixelRatio,series:t.series,animation:!0,width:e.cWidth*e.pixelRatio,height:e.cHeight*e.pixelRatio,dataLabel:!0,extra:{funnel:{border:!0,borderWidth:2,borderColor:"#FFFFFF"}}})},touchFunnel:function(n){r.showToolTip(n,{format:function(n){return n.name+":"+n.data}}),r.touchLegend(n,{animation:!0})},changeData:function(){if((0,s.isJSON)(e.textarea)){var n=JSON.parse(e.textarea);r.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=c},f876:function(n,t,a){var i=a("3c8c");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("4f06").default;e("0f8b404a",i,!0,{sourceMap:!1,shadowMode:!1})}}]);