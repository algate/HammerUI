(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucharts-basic-pie-ring"],{"109f":function(n,t,i){"use strict";i.r(t);var e=i("545a"),a=i("6150");for(var s in a)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return a[n]}))}(s);i("eeed");var r,u=i("f0c5"),c=Object(u["a"])(a["default"],e["b"],e["c"],!1,null,"de08bc04",null,!1,e["a"],r);t["default"]=c.exports},"2bdc":function(n,t,i){var e=i("995a");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("4a948ec9",e,!0,{sourceMap:!1,shadowMode:!1})},"545a":function(n,t,i){"use strict";var e;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return e}));var a=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("v-uni-view",{staticClass:"qiun-columns"},[i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("页面地址")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-text",[n._v("pages/basic/pie/ring")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("环形图")])],1),i("v-uni-view",{staticClass:"qiun-charts"},[i("v-uni-canvas",{staticClass:"charts",attrs:{"canvas-id":"canvasRing",id:"canvasRing"},on:{touchstart:function(t){arguments[0]=t=n.$handleEvent(t),n.touchRing.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-title-bar qiun-common-mt"},[i("v-uni-view",{staticClass:"qiun-title-dot-light"},[n._v("标准数据格式")])],1),i("v-uni-view",{staticClass:"qiun-bg-white qiun-padding"},[i("v-uni-textarea",{staticClass:"qiun-textarea",attrs:{"auto-height":"true",maxlength:"-1"},model:{value:n.textarea,callback:function(t){n.textarea=t},expression:"textarea"}})],1),i("v-uni-view",{staticClass:"qiun-text-tips"},[n._v("Tips：修改后点击更新图表")]),i("v-uni-button",{staticClass:"qiun-button",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.changeData()}}},[n._v("更新图表")])],1)},s=[]},6150:function(n,t,i){"use strict";i.r(t);var e=i("abce"),a=i.n(e);for(var s in e)["default"].indexOf(s)<0&&function(n){i.d(t,n,(function(){return e[n]}))}(s);t["default"]=a.a},"6c65":function(n,t,i){var e=i("62f5").default;n.exports={error:"",isJSON:function(n){if("string"==typeof n)try{var t=JSON.parse(n);return!("object"!=e(t)||!t)}catch(i){return console.log("error："+n+"!!!"+i),!1}},isNumber:function(n){var t=/^-?[1-9][0-9]?.?[0-9]*$/;return t.test(n)}}},"995a":function(n,t,i){var e=i("24fb");t=e(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*样式的width和height一定要与定义的cWidth和cHeight相对应*/.qiun-charts[data-v-de08bc04]{width:%?750?%;height:%?500?%;background-color:#fff}.charts[data-v-de08bc04]{width:%?750?%;height:%?500?%;background-color:#fff}",""]),n.exports=t},abce:function(n,t,i){"use strict";var e=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=e(i("af1e")),r=i("6c65"),u=null,c={data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,textarea:""}},onLoad:function(){a=this,this.cWidth=uni.upx2px(750),this.cHeight=uni.upx2px(500),this.getServerData()},methods:{getServerData:function(){uni.request({url:"https://www.ucharts.cn/data.json",data:{},success:function(n){console.log(n.data.data);var t={series:[]};t.series=n.data.data.Ring.series;for(var i=function(n){t.series[n].format=function(){return t.series[n].name+t.series[n].data}},e=0;e<t.series.length;e++)i(e);a.textarea=JSON.stringify(n.data.data.Ring),a.showRing("canvasRing",t)},fail:function(){a.tips="网络错误，小程序端请检查合法域名"}})},showRing:function(n,t){u=new s.default({$this:a,canvasId:n,type:"ring",fontSize:11,padding:[5,5,5,5],legend:{show:!0,position:"right",float:"center",itemGap:10,padding:5,lineHeight:26,margin:5,borderWidth:1},background:"#FFFFFF",pixelRatio:a.pixelRatio,series:t.series,animation:!1,width:a.cWidth*a.pixelRatio,height:a.cHeight*a.pixelRatio,disablePieStroke:!0,dataLabel:!0,subtitle:{name:"70%",color:"#7cb5ec",fontSize:25*a.pixelRatio},title:{name:"收益率",color:"#666666",fontSize:15*a.pixelRatio},extra:{pie:{offsetAngle:0,ringWidth:40*a.pixelRatio,labelWidth:15}}})},touchRing:function(n){u.touchLegend(n,{animation:!1}),u.showToolTip(n,{format:function(n){return n.name+":"+n.data}})},changeData:function(){if((0,r.isJSON)(a.textarea)){var n=JSON.parse(a.textarea);u.updateData({series:n.series,categories:n.categories})}else uni.showToast({title:"数据格式错误",image:"../../../static/images/alert-warning.png"})}}};t.default=c},eeed:function(n,t,i){"use strict";var e=i("2bdc"),a=i.n(e);a.a}}]);