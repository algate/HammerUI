(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-basic-basic-division"],{"0322":function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"hammer-header"},[i("v-uni-view",{staticClass:"title"},[e._v("Divider")]),i("v-uni-view",{staticClass:"sub-title"},[e._v("分隔符：可设置占据高度，线条宽度，颜色等")])],1),i("hammer-divider",[e._v("默认divider")]),i("hammer-divider",{attrs:{dividerColor:"red"}},[e._v("改变线条颜色")]),i("hammer-divider",{attrs:{dividerColor:"#5677fc",color:"#5677fc"}},[e._v("改变所有颜色")]),i("hammer-divider",{attrs:{width:"80%"}},[e._v("改变线条宽度")]),i("hammer-divider",{attrs:{width:"60%",divideColor:"red"}},[e._v("改变线条宽度")]),i("hammer-divider",{attrs:{gradual:!0}},[e._v("渐变线条")]),i("hammer-divider",{attrs:{width:"60%",gradual:!0}},[e._v("渐变线条")]),i("hammer-divider",{attrs:{gradual:!0,gradualColor:e.gradualColor}},[e._v("渐变线条")]),i("hammer-divider",{attrs:{size:30}},[e._v("改变字体大小")]),i("hammer-divider",{attrs:{size:30}},[i("hammer-icon",{attrs:{from:"iconfont",name:"emoji",size:24}})],1),i("hammer-divider",{attrs:{size:36}},[i("hammer-icon",{attrs:{from:"iconfont",name:"likefill",size:24}}),i("v-uni-text",{staticClass:"hammer-text"},[e._v("猜你喜欢")])],1)],1)},n=[]},"0c46":function(e,t,i){"use strict";i.r(t);var r=i("0322"),a=i("ed8b");for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("94b9");var d,o=i("f0c5"),l=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"481e4569",null,!1,r["a"],d);t["default"]=l.exports},"1bda":function(e,t,i){var r=i("5915");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("430fecf4",r,!0,{sourceMap:!1,shadowMode:!1})},"271b":function(e,t,i){"use strict";i.r(t);var r=i("fd23"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},"3a6f":function(e,t,i){"use strict";var r=i("1bda"),a=i.n(r);a.a},"4bde":function(e,t,i){"use strict";i.r(t);var r=i("fcd5"),a=i("271b");for(var n in a)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(n);i("3a6f");var d,o=i("f0c5"),l=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"3cad8c7a",null,!1,r["a"],d);t["default"]=l.exports},5915:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".tui-divider[data-v-3cad8c7a]{width:100%;position:relative;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;overflow:hidden}.tui-divider-line[data-v-3cad8c7a]{position:absolute;height:%?1?%;top:50%;left:50%;-webkit-transform:scaleY(.5) translateX(-50%) translateZ(0);transform:scaleY(.5) translateX(-50%) translateZ(0)}.tui-divider-text[data-v-3cad8c7a]{position:relative;text-align:center;padding:0 %?18?%;z-index:1}",""]),e.exports=t},"7b7f":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,".hammer-text[data-v-481e4569]{padding-left:%?10?%;vertical-align:middle;font-size:%?26?%}.hammer-divider-img[data-v-481e4569]{width:%?32?%;height:%?32?%;vertical-align:middle}",""]),e.exports=t},"7cb9":function(e,t,i){var r=i("7b7f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=i("4f06").default;a("099429fc",r,!0,{sourceMap:!1,shadowMode:!1})},"94b9":function(e,t,i){"use strict";var r=i("7cb9"),a=i.n(r);a.a},a671:function(e,t,i){"use strict";var r=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i("4bde")),n={components:{hammerDivider:a.default},data:function(){return{gradualColor:["red","#4a67d6"]}},methods:{}};t.default=n},ed8b:function(e,t,i){"use strict";i.r(t);var r=i("a671"),a=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(n);t["default"]=a.a},fcd5:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"tui-divider",style:{height:e.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-divider-line",style:{width:e.width,background:e.getBgColor(e.gradual,e.gradualColor,e.dividerColor)}}),i("v-uni-view",{staticClass:"tui-divider-text",style:{color:e.color,fontSize:e.size+"rpx",lineHeight:e.size+"rpx",background:e.bgcolor,fontWeight:e.bold?"bold":"normal"}},[e._t("default")],2)],1)},n=[]},fd23:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("a9e3");var r={name:"hammerDivider",props:{height:{type:Number,default:100},width:{type:String,default:"100%"},dividerColor:{type:String,default:"#e5e5e5"},color:{type:String,default:"#999"},size:{type:Number,default:24},bold:{type:Boolean,default:!1},bgcolor:{type:String,default:"#fafafa"},gradual:{type:Boolean,default:!1},gradualColor:{type:Array,default:function(){return["#eee","#ccc"]}}},methods:{getBgColor:function(e,t,i){var r=i;return e&&(r="linear-gradient(to right,"+t[0]+","+t[1]+","+t[1]+","+t[0]+")"),r}}};t.default=r}}]);