<template>
    <view>
        <!-- #ifdef MP-WEIXIN -->
        <view class="adContainer"><ad unit-id="adunit-f89500eefdc9832d"></ad></view>
        <!-- #endif -->
        <scroll-view scroll-y>
            <view class="nav-list">
                <navigator hover-class="none" :url="'/pages/hammer-basic/' + item.name" class="nav-li" open-type="navigate" :class="item.bgColor" v-for="(item,index) in elements" :key="index" :style="{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 backwards'}">
                    <view class="nav-title">{{item.title}}</view>
                    <view class="nav-name">{{item.name}}</view>
                    <view class="nav-icon"><hammer-icon :from="item.from" :name="item.hammerIcon" color="#fff" :size="item.size"></hammer-icon></view>
                </navigator>
            </view>
        </scroll-view>
    </view>
</template>
<script>
    export default {
        name: "basics",
        data() {
            return {
                elements: [
                    {
                        title: '布局',
                        name: 'basic-layout',
                        from: 'tui',
                        hammerIcon: 'manage',
                        size: 50,
                        bgColor : 'bg-red'

                    },
                    {
                        title: '图标',
                        name: 'basic-icon',
                        from: 'iconfont',
                        hammerIcon: 'hammer',
                        size: 50,
                        bgColor: 'bg-orange'
                    },
                    /* {
                        title: '按钮',
                        name: 'basic-button',
                        from: 'iconfont',
                        hammerIcon: 'bofang',
                        size: 50,
                        bgColor: 'bg-yellow'
                    }, */
                    {
                        title: '轮播',
                        name: 'basic-swiper',
                        from: 'iconfont',
                        hammerIcon: 'lunbo1',
                        size: 50,
                        bgColor: 'bg-olive'
                    },
                    {
                        title: '各种列表<Li>',
                        name: 'basic-lists',
                        hammerIcon: 'listview',
                        size: 50,
                        from: 'tui',
                        bgColor: 'bg-green'
                    },
                    {
                        title: '自定义表单',
                        name: 'basic-custom-forms',
                        from: 'iconfont',
                        hammerIcon: 'app',
                        size: 50,
                        bgColor : 'bg-cyan'
                    },
                    {
                        title: '签名画板',
                        name: 'basic-signature',
                        from: 'tui',
                        hammerIcon: 'card',
                        size: 50,
                        bgColor : 'bg-blue'
                    },
                    {
                        title: '标签Tag+Badge',
                        name: 'basic-tags',
                        hammerIcon: 'label',
						from: 'tui',
                        size: 50,
                        bgColor : 'bg-purple'
                    },
                    {
                        title: '分割线',
                        name: 'basic-division',
                        hammerIcon: 'fengefu1',
						from: 'iconfont',
                        size: 50,
                        bgColor : 'bg-mauve'
                    }
                ],
                // 插屏广告
			    interstitialAd: null,
            };
        },
        onLoad() {
            // 由于此广告位影响小程序的使用效果 - 插屏广告（广告管理端已经关闭）
            // #ifdef MP-WEIXIN
            /* if (wx.createInterstitialAd) {
                this.interstitialAd = wx.createInterstitialAd({
                    adUnitId: 'adunit-2dc8bcb32be7494b'
                })
                this.interstitialAd.onLoad(() => {
                    console.log('插屏广告 - 加载成功');
                })
                this.interstitialAd.onError((err) => {
                    console.log('onError event emit', err)
                })
                this.interstitialAd.onClose((res) => {
                    console.log('插屏 广告关闭');
                })
            } */
            // #endif
        },
        onShow() {
            // console.log("进入首页🔨");
            // #ifdef MP-WEIXIN
            /* if (this.interstitialAd) {
                this.interstitialAd.show().catch((err) => {
                    console.error(err)
                })
            } */
            // #endif
        }
    }
</script>