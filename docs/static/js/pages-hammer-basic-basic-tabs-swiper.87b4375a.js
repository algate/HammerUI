(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-hammer-basic-basic-tabs-swiper"],{"20e2":function(t,i,n){i=t.exports=n("24fb")(!1),i.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*tabbar start*/[data-v-7f17c954]::-webkit-scrollbar{width:0;height:0;color:transparent}.tab-view[data-v-7f17c954]:before{content:"";position:absolute;border-bottom:%?4?% solid #eaeef1;-webkit-transform:scaleY(.5);transform:scaleY(.5);bottom:0;right:0;left:0}.tab-view[data-v-7f17c954]{width:100%;height:%?100?%;overflow:hidden;box-sizing:border-box;position:fixed;top:0;\ntop:44px;\nleft:0;z-index:99;background:#fff;white-space:nowrap}.tab-bar-item[data-v-7f17c954]{padding:0;height:%?100?%;min-width:%?80?%;line-height:%?100?%;margin:0 %?28?%;display:inline-block;text-align:center;box-sizing:border-box}.tab-bar-title[data-v-7f17c954]{height:%?100?%;line-height:%?100?%;font-size:%?32?%;color:#999;font-weight:400}.active[data-v-7f17c954]{border-bottom:%?6?% solid #5677fc}.active .tab-bar-title[data-v-7f17c954]{color:#5677fc!important;font-size:%?36?%;font-weight:700}\n/*tabbar end*/.scoll-y[data-v-7f17c954]{height:100%}.list-view[data-v-7f17c954]{margin-top:%?100?%;width:100%;background:#fff;box-sizing:border-box;padding-bottom:env(safe-area-inset-bottom)}.list-cell[data-v-7f17c954]{padding:%?30?%;box-sizing:border-box}.cell-title-box[data-v-7f17c954]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cell-title[data-v-7f17c954]{font-size:%?36?%;line-height:%?56?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2\n    /* padding-bottom: 30upx; */}.img-container[data-v-7f17c954]{width:100%;padding-top:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;height:%?160?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.cell-img[data-v-7f17c954]{width:32%;overflow:hidden;position:relative}.img[data-v-7f17c954]{width:100%;height:%?160?%;display:block;\n    /* position: absolute;\n      left: 50%;\n      top:50%;\n      transform: translate(-50%,-50%);\n    */border-radius:%?4?%}.sub-title[data-v-7f17c954]{padding-top:%?24?%;font-size:%?28?%;color:#bcbcbc;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.badge[data-v-7f17c954]{padding:%?5?% %?10?%;font-size:%?24?%;border-radius:%?4?%;margin-right:%?20?%}.b-red[data-v-7f17c954]{background:#fcebef;color:#8a5966}.b-blue[data-v-7f17c954]{background:#ecf6fd;color:#4dabeb}.b-orange[data-v-7f17c954]{background:#fef5eb;color:#faa851}.b-green[data-v-7f17c954]{background:#e8f6e8;color:#44cf85}',""])},"29db":function(t,i,n){"use strict";n.r(i);var a=n("3d81"),s=n.n(a);for(var e in a)"default"!==e&&function(t){n.d(i,t,(function(){return a[t]}))}(e);i["default"]=s.a},"3d81":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{tabbar:["热门","娱乐","体育","国内","财经","科技","教育","汽车"],winHeight:"",currentTab:0,scrollLeft:0}},onLoad:function(){var t=this;uni.getSystemInfo({success:function(i){var n=i.windowHeight;t.winHeight=n}})},methods:{switchTab:function(t){this.currentTab=t.detail.current,this.checkCor()},swichNav:function(t){var i=t.currentTarget.dataset.current;if(this.currentTab==i)return!1;this.currentTab=i},checkCor:function(){this.currentTab>3?this.scrollLeft=300:this.scrollLeft=0},detail:function(t){uni.navigateTo({url:"../extend-view/newsDetail/newsDetail"})}}};i.default=a},"4a95":function(t,i,n){"use strict";var a=n("731e"),s=n.n(a);s.a},7233:function(t,i,n){"use strict";var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",[n("v-uni-scroll-view",{staticClass:"tab-view",attrs:{"scroll-x":"","scroll-with-animation":"","scroll-left":t.scrollLeft}},t._l(t.tabbar,(function(i,a){return n("v-uni-view",{key:a,staticClass:"tab-bar-item",class:[t.currentTab==a?"active":""],attrs:{"data-current":a},on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i),t.swichNav(i)}}},[n("v-uni-text",{staticClass:"tab-bar-title"},[t._v(t._s(i))])],1)})),1),n("v-uni-swiper",{staticClass:"tab-content",style:{height:t.winHeight+"px"},attrs:{current:t.currentTab,duration:"300"},on:{change:function(i){i=t.$handleEvent(i),t.switchTab(i)}}},t._l(t.tabbar,(function(i,a){return n("v-uni-swiper-item",{key:a},[n("v-uni-scroll-view",{staticClass:"scoll-y",attrs:{"scroll-y":""}},[n("v-uni-view",{staticClass:"list-view"},[n("v-uni-view",{staticClass:"list-cell list-item",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v('温故知"心"习近平这些话要牢记')]),n("v-uni-view",{staticClass:"img-container"},[n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/2.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/3.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/4.jpg"}})],1)],1),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"badge b-red"},[t._v("要闻")]),n("v-uni-text",{staticClass:"sub-content"},[t._v("央视网新闻")])],1)],1),n("v-uni-view",{staticClass:"list-cell list-item",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v("美国会表决通过新驻华大使 月底有望赴华")]),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"badge b-blue"},[t._v("朋友都看过")]),n("v-uni-text",{staticClass:"sub-content"},[t._v("百科故事大全")])],1)],1),n("v-uni-view",{staticClass:"list-cell list-item",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v("哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列金融专业排前列金融专业排前列金融专业排前列")]),n("v-uni-view",{staticClass:"img-container"},[n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/1.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/4.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/5.jpg"}})],1)],1),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"badge b-orange"},[t._v("本地资讯")]),n("v-uni-text",{staticClass:"sub-content"},[t._v("粤港精英联盟")])],1)],1),n("v-uni-view",{staticClass:"list-cell list-item",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v("科创板交易系统准备就绪,不存在首批名单")]),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"sub-content"},[t._v("百科故事大全")])],1)],1),n("v-uni-view",{staticClass:"list-cell list-item",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v("开户大战燎原！加急上线科创板预约开户")]),n("v-uni-view",{staticClass:"img-container"},[n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/1.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/4.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/5.jpg"}})],1)],1),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"sub-content"},[t._v("粤港精英联盟")])],1)],1),n("v-uni-view",{staticClass:"list-cell list-item",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v("3.07财经早报┃头条：推进改革开放创新增进民生福祉，促进经济社会持续健康发展促进经济社会持续健康发展")]),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"badge b-green"},[t._v("互联网精英看过")]),n("v-uni-text",{staticClass:"sub-content"},[t._v("百科故事大全")])],1)],1),n("v-uni-view",{staticClass:"list-cell list-item",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v("哪些专业毕业后收入高?计算机、金融专业排前列金融专业排前列")]),n("v-uni-view",{staticClass:"img-container"},[n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/2.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/4.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/3.jpg"}})],1)],1),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"badge b-orange"},[t._v("本地资讯")]),n("v-uni-text",{staticClass:"sub-content"},[t._v("粤港精英联盟")])],1)],1),n("v-uni-view",{staticClass:"list-cell",attrs:{"hover-class":"hover","hover-stay-time":150},on:{click:function(i){i=t.$handleEvent(i),t.detail(i)}}},[n("v-uni-view",{staticClass:"cell-title"},[t._v("触手直播“和平精英”星联赛Jstar夺冠 大热")]),n("v-uni-view",{staticClass:"img-container"},[n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/4.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/1.jpg"}})],1),n("v-uni-view",{staticClass:"cell-img"},[n("v-uni-image",{staticClass:"img",attrs:{src:"../../static/images/product/2.jpg"}})],1)],1),n("v-uni-view",{staticClass:"sub-title"},[n("v-uni-text",{staticClass:"badge b-red"},[t._v("要闻")]),n("v-uni-text",{staticClass:"sub-content"},[t._v("粤港精英联盟")])],1)],1)],1)],1)],1)})),1)],1)},s=[];n.d(i,"a",(function(){return a})),n.d(i,"b",(function(){return s}))},"731e":function(t,i,n){var a=n("20e2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=n("4f06").default;s("18adddbc",a,!0,{sourceMap:!1,shadowMode:!1})},e261:function(t,i,n){"use strict";n.r(i);var a=n("7233"),s=n("29db");for(var e in s)"default"!==e&&function(t){n.d(i,t,(function(){return s[t]}))}(e);n("4a95");var c=n("2877"),l=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,"7f17c954",null);i["default"]=l.exports}}]);