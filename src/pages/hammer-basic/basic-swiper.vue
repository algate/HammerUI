<template>
    <view class="bg-black">
        <view class="hammer-box bg-white">
            <view class="iconfont icon-notification" style="size:20rpx;color:#f54f46;"></view>
            <view class="hammer-scorll-view">
                <view class="hammer-animation">🔨欢迎小程序搜索-chuizi; 不要跟我谈理想，我的理想就是不上班; 欢迎关注公众号-前端洋葱</view>
            </view>
        </view>
        <!--headlines-->
        <view class="hammer-box bg-white h-margin-top">
            <view class="iconfont icon-notification" style="size:20rpx;"></view>
            <swiper :vertical="true" :autoplay="true" :circular="true" :interval="4000" class="hammer-swiper">
                <swiper-item v-for="(item,index) in headlines" :key="index" class="hammer-swiper-item">
                    <view class="tui-news-item">{{item}}</view>
                </swiper-item>
            </swiper>
        </view>
        <!--headlines-->
        <view class="hammer-box bg-white h-margin-top">
            <view class="iconfont icon-notification" style="size:20rpx;"></view>
            <swiper :vertical="false" :autoplay="true" :circular="true" :interval="4000" class="hammer-swiper">
                <swiper-item v-for="(item,index) in headlines" :key="index" class="hammer-swiper-item">
                    <view class="tui-news-item">{{item}}</view>
                </swiper-item>
            </swiper>
        </view>
        <view class="hammer-box bg-white h-margin-top">
            <view class="title">指示点样式</view>
            <view class="title">
                <switch @change="DotStyle" :class="dotStyle?'checked':''" :checked="dotStyle?true:false"/>
            </view>
        </view>
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">全屏限高轮播</view>
        </view>
        <swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" indicator-color="#888" indicator-active-color="#fff">
            <swiper-item v-for="(item,index) in swiperList" :key="index">
                <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
                <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
            </swiper-item>
        </swiper>
        <!-- #ifndef MP-ALIPAY -->
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">卡片式轮播</view>
        </view>
        <swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#888" indicator-active-color="#00ab98">
            <swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
                <view class="swiper-item">
                    <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
                    <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
                </view>
            </swiper-item>
        </swiper>
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">堆叠式轮播</view>
        </view>
        <view class="tower-swiper" @touchmove="TowerMove" @touchstart="TowerStart" @touchend="TowerEnd">
            <view class="tower-item" :class="item.zIndex==1?'none':''" v-for="(item,index) in swiperList" :key="index" :style="[{'--index': item.zIndex,'--left':item.mLeft}]" :data-direction="direction">
                <view class="swiper-item">
                    <image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
                    <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
                </view>
            </view>
        </view>
        <!-- #endif -->
    </view>
</template>
<script>
export default {
    data() {
        return {
            cardCur: 0,
            swiperList: [{
                id: 0,
                type: 'image',
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
            }, {
                id: 1,
                type: 'image',
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
            }, {
                id: 2,
                type: 'image',
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
            }, {
                id: 3,
                type: 'image',
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
            }, {
                id: 4,
                type: 'image',
                url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
            }],
            dotStyle: true,
            towerStart: 0,
            direction: '',
            headlines: [
                "😊: 公众号搜索 - 『 洋葱前端 』",
                "😂: 不要跟我谈理想，我的理想是不上班",
                "🔨: 小程序搜搜 - 『 chuizi 』"
            ]
        };
    },
    onLoad() {
        this.TowerSwiper('swiperList');
        // 初始化towerSwiper 传已有的数组名即可
    },
    methods: {
        DotStyle(e) {
            this.dotStyle = e.detail.value
        },
        // cardSwiper
        cardSwiper(e) {
            this.cardCur = e.detail.current
        },
        // towerSwiper
        // 初始化towerSwiper
        TowerSwiper(name) {
            let list = this[name];
            for (let i = 0; i < list.length; i++) {
                list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
                list[i].mLeft = i - parseInt(list.length / 2)
            }
            this.swiperList = list
        },

        // towerSwiper触摸开始
        TowerStart(e) {
            this.towerStart = e.touches[0].pageX
        },

        // towerSwiper计算方向
        TowerMove(e) {
            this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
        },

        // towerSwiper计算滚动
        TowerEnd(e) {
            let direction = this.direction;
            let list = this.swiperList;
            if (direction == 'right') {
                let mLeft = list[0].mLeft;
                let zIndex = list[0].zIndex;
                for (let i = 1; i < this.swiperList.length; i++) {
                    this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
                    this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
                }
                this.swiperList[list.length - 1].mLeft = mLeft;
                this.swiperList[list.length - 1].zIndex = zIndex;
            } else {
                let mLeft = list[list.length - 1].mLeft;
                let zIndex = list[list.length - 1].zIndex;
                for (let i = this.swiperList.length - 1; i > 0; i--) {
                    this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
                    this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
                }
                this.swiperList[0].mLeft = mLeft;
                this.swiperList[0].zIndex = zIndex;
            }
            this.direction = ""
            this.swiperList = this.swiperList
        },
    }
}
</script>
<style>
    .hammer-scorll-view {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        color: #f54f46;
    }

    .hammer-animation {
        animation: hammer-rolling 12s linear infinite;
    }

    @keyframes hammer-rolling {
        0% {
            transform: translateX(100%);
        }

        100% {
            transform: translateX(-170%);
        }
    }
    .tower-swiper .tower-item {
        transform: scale(calc(0.5 + var(--index) / 10));
        margin-left: calc(var(--left) * 100upx - 150upx);
        z-index: var(--index);
    }
</style>
