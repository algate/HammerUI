(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-basic-basic-swiper"],{"01ba":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s={data:function(){return{cardCur:0,swiperList:[{id:1,type:"image",url:"http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0"},{id:2,type:"image",url:"http://shp.qpic.cn/ishow/2735021211/1549941945_704174346_16208_sProdImgNo_3.jpg/0"},{id:3,type:"image",url:"http://shp.qpic.cn/ishow/2735012117/1548064556_587358052_24401_sProdImgNo_3.jpg/0"},{id:4,type:"image",url:"http://shp.qpic.cn/ishow/2735012115/1548056809_1186005513_19120_sProdImgNo_3.jpg/0"},{id:5,type:"image",url:"http://shp.qpic.cn/ishow/2735011517/1547545098_-888937974_18837_sProdImgNo_3.jpg/0"},{id:5,type:"image",url:"http://shp.qpic.cn/ishow/2735092409/1569290387_84828260_13119_sProdImgNo_2.jpg/0"}],dotStyle:!0,towerStart:0,direction:"",headlines:["😊: 公众号搜索 - 『 洋葱前端 』","😂: 不要跟我谈理想，我的理想是不上班","🔨: 小程序搜搜 - 『 chuizi 』"]}},onLoad:function(){this.TowerSwiper("swiperList")},methods:{DotStyle:function(t){this.dotStyle=t.detail.value},cardSwiper:function(t){this.cardCur=t.detail.current},TowerSwiper:function(t){for(var i=this[t],e=0;e<i.length;e++)i[e].zIndex=parseInt(i.length/2)+1-Math.abs(e-parseInt(i.length/2)),i[e].mLeft=e-parseInt(i.length/2);this.swiperList=i},TowerStart:function(t){this.towerStart=t.touches[0].pageX},TowerMove:function(t){this.direction=t.touches[0].pageX-this.towerStart>0?"right":"left"},TowerEnd:function(t){var i=this.direction,e=this.swiperList;if("right"==i){for(var s=e[0].mLeft,a=e[0].zIndex,r=1;r<this.swiperList.length;r++)this.swiperList[r-1].mLeft=this.swiperList[r].mLeft,this.swiperList[r-1].zIndex=this.swiperList[r].zIndex;this.swiperList[e.length-1].mLeft=s,this.swiperList[e.length-1].zIndex=a}else{for(var n=e[e.length-1].mLeft,o=e[e.length-1].zIndex,c=this.swiperList.length-1;c>0;c--)this.swiperList[c].mLeft=this.swiperList[c-1].mLeft,this.swiperList[c].zIndex=this.swiperList[c-1].zIndex;this.swiperList[0].mLeft=n,this.swiperList[0].zIndex=o}this.direction="",this.swiperList=this.swiperList}}};i.default=s},"0ad2":function(t,i,e){i=t.exports=e("24fb")(!1),i.push([t.i,".hammer-scorll-view[data-v-0ed0d734]{-webkit-box-flex:1;-webkit-flex:1;flex:1;white-space:nowrap;overflow:hidden;color:#f54f46;height:%?60?%;line-height:%?60?%}.hammer-animation[data-v-0ed0d734]{-webkit-animation:hammer-rolling-data-v-0ed0d734 12s linear infinite;animation:hammer-rolling-data-v-0ed0d734 12s linear infinite}@-webkit-keyframes hammer-rolling-data-v-0ed0d734{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}to{-webkit-transform:translateX(-170%);transform:translateX(-170%)}}@keyframes hammer-rolling-data-v-0ed0d734{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}to{-webkit-transform:translateX(-170%);transform:translateX(-170%)}}.tower-swiper .tower-item[data-v-0ed0d734]{-webkit-transform:scale(calc(.5 + var(--index) / 10));transform:scale(calc(.5 + var(--index) / 10));margin-left:calc(var(--left) * %?100?% - %?150?%);z-index:var(--index)}",""])},"130b":function(t,i,e){"use strict";e.r(i);var s=e("01ba"),a=e.n(s);for(var r in s)"default"!==r&&function(t){e.d(i,t,(function(){return s[t]}))}(r);i["default"]=a.a},"2c06":function(t,i,e){"use strict";var s=e("61b1"),a=e.n(s);a.a},"61b1":function(t,i,e){var s=e("0ad2");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("38ea3d33",s,!0,{sourceMap:!1,shadowMode:!1})},"8aed":function(t,i,e){"use strict";e.r(i);var s=e("9f74"),a=e("130b");for(var r in a)"default"!==r&&function(t){e.d(i,t,(function(){return a[t]}))}(r);e("2c06");var n=e("2877"),o=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,"0ed0d734",null);i["default"]=o.exports},"9f74":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"bg-black"},[e("v-uni-view",{staticClass:"hammer-header bg-white"},[e("v-uni-view",{staticClass:"title"},[t._v("Swiper")]),e("v-uni-view",{staticClass:"sub-title"},[t._v("轮播：图片轮播、顶部信息滚动等")])],1),e("v-uni-view",{staticClass:"hammer-box bg-white h-margin-top"},[e("v-uni-view",{staticClass:"iconfont icon-notification",staticStyle:{size:"20rpx",color:"#f54f46"}}),e("v-uni-view",{staticClass:"hammer-scorll-view"},[e("v-uni-view",{staticClass:"hammer-animation"},[t._v("🔨欢迎小程序搜索-chuizi; 不要跟我谈理想，我的理想就是不上班; 欢迎关注公众号-前端洋葱")])],1)],1),e("v-uni-view",{staticClass:"hammer-box bg-white h-margin-top"},[e("v-uni-view",{staticClass:"iconfont icon-notification",staticStyle:{size:"20rpx"}}),e("v-uni-swiper",{staticClass:"hammer-swiper",attrs:{vertical:!0,autoplay:!0,circular:!0,interval:4e3}},t._l(t.headlines,(function(i,s){return e("v-uni-swiper-item",{key:s,staticClass:"hammer-swiper-item"},[e("v-uni-view",{staticClass:"tui-news-item"},[t._v(t._s(i))])],1)})),1)],1),e("v-uni-view",{staticClass:"hammer-box bg-white h-margin-top"},[e("v-uni-view",{staticClass:"iconfont icon-notification",staticStyle:{size:"20rpx"}}),e("v-uni-swiper",{staticClass:"hammer-swiper",attrs:{vertical:!1,autoplay:!0,circular:!0,interval:4e3}},t._l(t.headlines,(function(i,s){return e("v-uni-swiper-item",{key:s,staticClass:"hammer-swiper-item"},[e("v-uni-view",{staticClass:"tui-news-item"},[t._v(t._s(i))])],1)})),1)],1),e("v-uni-view",{staticClass:"hammer-box bg-white h-margin-top"},[e("v-uni-view",{staticClass:"title"},[t._v("指示点样式")]),e("v-uni-view",{staticClass:"title"},[e("v-uni-switch",{class:t.dotStyle?"checked":"",attrs:{checked:!!t.dotStyle},on:{change:function(i){i=t.$handleEvent(i),t.DotStyle(i)}}})],1)],1),e("v-uni-view",{staticClass:"hammer-box bg-white h-margin-top"},[e("v-uni-view",{staticClass:"sub-title"},[t._v("全屏限高轮播")])],1),e("v-uni-swiper",{staticClass:"screen-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#888","indicator-active-color":"#00ab98"}},t._l(t.swiperList,(function(i,s){return e("v-uni-swiper-item",{key:s},["image"==i.type?e("v-uni-image",{attrs:{src:i.url,mode:"aspectFill"}}):t._e(),"video"==i.type?e("v-uni-video",{attrs:{src:i.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,"show-center-play-btn":!0,controls:!1,objectFit:"cover"}}):t._e()],1)})),1),e("v-uni-view",{staticClass:"hammer-box bg-white h-margin-top"},[e("v-uni-view",{staticClass:"sub-title"},[t._v("卡片式轮播")])],1),e("v-uni-swiper",{staticClass:"card-swiper",class:t.dotStyle?"square-dot":"round-dot",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500","indicator-color":"#888","indicator-active-color":"#00ab98"},on:{change:function(i){i=t.$handleEvent(i),t.cardSwiper(i)}}},t._l(t.swiperList,(function(i,s){return e("v-uni-swiper-item",{key:s,class:t.cardCur==s?"cur":""},[e("v-uni-view",{staticClass:"swiper-item"},["image"==i.type?e("v-uni-image",{attrs:{src:i.url,mode:"aspectFill"}}):t._e(),"video"==i.type?e("v-uni-video",{attrs:{src:i.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"hammer-box bg-white h-margin-top"},[e("v-uni-view",{staticClass:"sub-title"},[t._v("堆叠式轮播")])],1),e("v-uni-view",{staticClass:"tower-swiper",on:{touchmove:function(i){i=t.$handleEvent(i),t.TowerMove(i)},touchstart:function(i){i=t.$handleEvent(i),t.TowerStart(i)},touchend:function(i){i=t.$handleEvent(i),t.TowerEnd(i)}}},t._l(t.swiperList,(function(i,s){return e("v-uni-view",{key:s,staticClass:"tower-item",class:1==i.zIndex?"none":"",style:[{"--index":i.zIndex,"--left":i.mLeft}],attrs:{"data-direction":t.direction}},[e("v-uni-view",{staticClass:"swiper-item"},["image"==i.type?e("v-uni-image",{attrs:{src:i.url,mode:"aspectFill"}}):t._e(),"video"==i.type?e("v-uni-video",{attrs:{src:i.url,autoplay:"",loop:"",muted:"","show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1)],1)},a=[];e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return a}))}}]);