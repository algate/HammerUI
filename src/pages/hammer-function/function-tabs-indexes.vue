<template>
    <view class="bg-black">
        <swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" indicator-color="#fff" indicator-active-color="#00ab98">
            <swiper-item v-for="(item,index) in swiperList" :key="index">
                <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
            </swiper-item>
        </swiper>
        <view class="VerticalBox">
            <scroll-view class="VerticalNav nav" scroll-y scroll-with-animation :scroll-top="verticalNavTop" style="height:calc(100vh - 375rpx)">
                <view class="cu-item" :class="index==tabCur?'text-color cur':''" v-for="(item,index) in list" :key="index" @tap="TabSelect"
                 :data-id="index">
                    Tabs-{{item.name}}
                </view>
            </scroll-view>
            <scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375rpx)"
             :scroll-into-view="'main-'+mainCur" @scroll="VerticalMain">
                <view class="list-item bg-white" v-for="(item,index) in list" :key="index" :id="'main-'+index">
                    <view class="hammer-box" style="border-bottom: 1px solid #ccc;">
                        <view class="title">
                            <text class="cuIcon-title text-color"></text> Tabs-{{item.name}}</view>
                    </view>
                    <view class="cu-list menu-avatar">
                        <view class="grid grid-col-4">
                            <view class="bg-green grid-item bg-img-eq">
                                <view class="hammer-badge bg-mauve">99+</view>
                            </view>
                        </view>
                        <view class="hammer-box bg-brown light">
                            <view class="sub-title">5等分 - 拉伸 flex-grow</view>
                        </view>
                        <view class="grid grid-col-5 bg-white">
                            <view class="bg-img grid-item grid-margin-right-none flex-grow" v-for="(item,index) in avatar" :key="index" :style="[{ backgroundImage:'url(' + avatar[index] + ')' }]"></view>
                        </view>
                    </view>
                </view>
            </scroll-view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                avatar:[
                    'http://shp.qpic.cn/ishow/2735092409/1569290387_84828260_13119_sProdImgNo_2.jpg/0',
                    'http://shp.qpic.cn/ishow/2735062811/1561692452_-695593207_23925_sProdImgNo_2.jpg/0',
                    'http://shp.qpic.cn/ishow/2735070910/1562640168_1186005513_17698_sProdImgNo_2.jpg/0',
                    'http://shp.qpic.cn/ishow/2735061310/1560394439_-695593207_21939_sProdImgNo_3.jpg/0',
                    'http://shp.qpic.cn/ishow/2735011517/1547545098_-888937974_18837_sProdImgNo_3.jpg/0'
                ],
                swiperList: [
                {
                    id: 1,
                    type: 'image',
                    url: 'http://shp.qpic.cn/ishow/2735022611/1551150494_-695593207_2194_sProdImgNo_3.jpg/0',
                }, {
                    id: 2,
                    type: 'image',
                    url: 'http://shp.qpic.cn/ishow/2735021211/1549941945_704174346_16208_sProdImgNo_3.jpg/0'
                }, {
                    id: 3,
                    type: 'image',
                    url: 'http://shp.qpic.cn/ishow/2735012117/1548064556_587358052_24401_sProdImgNo_3.jpg/0'
                }],
                list: [],
                tabCur: 0,
                mainCur: 0,
                verticalNavTop: 0,
                load: true
            };
        },
        onLoad() {
            uni.showLoading({
                title: '加载中...',
                mask: true
            });
            let list = [{}];
            for (let i = 0; i < 26; i++) {
                list[i] = {};
                list[i].name = String.fromCharCode(65 + i);
                list[i].id = i;
            }
            this.list = list;
            this.listCur = list[0];
        },
        onReady() {
            uni.hideLoading()
        },
        methods: {
            TabSelect(e) {
                this.tabCur = e.currentTarget.dataset.id;
                this.mainCur = e.currentTarget.dataset.id;
                this.verticalNavTop = (e.currentTarget.dataset.id - 1) * 50
            },
            VerticalMain(e) {
                // #ifdef MP-ALIPAY
                   return false  //支付宝小程序暂时不支持双向联动
                // #endif
                let that = this;
                let tabHeight = 0;
                if (this.load) {
                    for (let i = 0; i < this.list.length; i++) {
                        let view = uni.createSelectorQuery().select("#main-" + this.list[i].id);
                        view.fields({
                            size: true
                        }, data => {
                            this.list[i].top = tabHeight;
                            tabHeight = tabHeight + data.height;
                            this.list[i].bottom = tabHeight;
                        }).exec();
                    }
                    this.load = false
                }
                let scrollTop = e.detail.scrollTop + 10;
                for (let i = 0; i < this.list.length; i++) {
                    if (scrollTop > this.list[i].top && scrollTop < this.list[i].bottom) {
                        this.verticalNavTop = (this.list[i].id - 1) * 50
                        this.tabCur = this.list[i].id
                        console.log(scrollTop)
                        return false
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .screen-swiper {
        height: 375rpx;
    }

    .VerticalNav.nav {
        width: 200rpx;
        white-space: initial;
        color: #444;
    }

    .VerticalNav.nav .cu-item {
        width: 100%;
        text-align: center;
        background-color: #fff;
        margin: 0;
        border: none;
        height: 80rpx;
        line-height: 80rpx;
        position: relative;
    }

    .VerticalNav.nav .cu-item.cur {
        background-color: #f1f1f1;
    }

    .VerticalNav.nav .cu-item.cur::after {
        content: "";
        width: 8rpx;
        height: 30rpx;
        border-radius: 10rpx 0 0 10rpx;
        position: absolute;
        background-color: currentColor;
        top: 0;
        right: 0rpx;
        bottom: 0;
        margin: auto;
    }

    .VerticalBox {
        display: flex;
    }

    .VerticalMain {
        flex: 1;
        margin-left: 10rpx;
        .list-item {
            background: #fff;
            // margin: 10rpx 0;
            margin-bottom: 10rpx;
            .cu-list {
                line-height: 50rpx;
            }
        }
    }
</style>
