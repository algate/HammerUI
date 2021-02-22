<template>
    <view>
        <!-- #ifdef MP-WEIXIN -->
        <view class="adContainer"><ad unit-id="adunit-2d10a7b6828d8fc6"></ad></view>
        <!-- #endif -->
        <scroll-view scroll-y>
            <view class="nav-list">
                <navigator hover-class="none" :url="'/pages/hammer-canvas/' + item.name" class="nav-li bg-img" open-type="navigate" :class="item.bgColor" :style="[{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 backwards', backgroundImage:'url('+item.img+')'}]" v-for="(item,index) in elements" :key="index">
					<!-- backwards/both;
					设置animate状态：
					none：默认值。不设置对象动画之外的状态，DOM未进行动画前状态
					forwards：设置对象状态为动画结束时的状态，100%或to时，当设置animation-direcdtion为reverse时动画结束后显示为keyframes第一帧
					backwards：设置对象状态为动画开始时的状态,（测试显示DOM未进行动画前状态）
					both：设置对象状态为动画结束或开始的状态，结束时状态优先 -->
                    <view class="nav-title">{{item.title}}</view>
                    <view class="nav-name">{{item.name}}</view>
                    <view class="nav-icon"><hammer-icon :from="item.from" :name="item.hammerIcon" color="#fff" :size="item.size"></hammer-icon></view>
                </navigator>
            </view>
        </scroll-view>
    </view>
</template>
<script>
	import img from "@/static/title.json"
    export default {
        name: "basics",
        data() {
            return {
                elements: [
					// #ifdef H5
					/* 此特效在小程序端效果不佳，仅在H5端展示 */
                    {
						title: 'Vector.js',
                        name: 'canvas-vectorJs',
                        from: 'iconfont',
                        hammerIcon: 'like',
                        size: 30,
                        bgColor : 'bg-orange',
						img: img.imgs[0].url
                    },
					// #endif
                    {
						title: 'Tangram.js',
                        name: 'canvas-tangram',
                        from: 'iconfont',
                        hammerIcon: 'favor',
                        size: 30,
                        bgColor : 'bg-yellow',
						img: img.imgs[1].url
                    },
                    {
						title: 'Countdown',
                        name: 'canvas-countdown',
                        from: 'tui',
                        hammerIcon: 'clock',
                        size: 30,
                        bgColor : 'bg-olive',
						img: img.imgs[2].url
                    },
                    {
						title: 'Mouseclick-effect',
                        name: 'canvas-click-effect',
                        from: 'iconfont',
                        hammerIcon: 'sponsorfill',
                        size: 30,
                        bgColor : 'bg-purple',
						img: img.imgs[3].url
                    },
                    {
						title: 'Touchmove-snow',
                        name: 'canvas-touchmove-snow',
                        from: 'iconfont',
                        hammerIcon: 'shangchuan',
                        size: 30,
                        bgColor : 'bg-mauve',
						img: img.imgs[4].url
                    },
                    {
						title: 'Particle',
                        name: 'canvas-particle',
                        from: 'iconfont',
                        hammerIcon: 'emojiflashfill',
                        size: 30,
                        bgColor : 'bg-cyan',
						img: img.imgs[5].url
                    },
                    {
						title: 'Favorite',
                        name: 'canvas-favorite',
                        from: 'iconfont',
                        hammerIcon: 'likefill',
                        size: 30,
                        bgColor : 'bg-green',
						img: img.imgs[6].url
                    },
                    {
						title: 'Grids',
                        name: 'canvas-grids',
                        from: 'iconfont',
                        hammerIcon: 'redpacket',
                        size: 30,
                        bgColor : 'bg-blue',
						img: img.imgs[7].url
                    },
                    {
						title: 'Touchmove-bubble',
                        name: 'canvas-touchmove-bubble',
                        from: 'tui',
                        hammerIcon: 'circle',
                        size: 30,
                        bgColor : 'bg-pink',
						img: img.imgs[8].url
                    }
                ],
            };
        },
        onShow() {
            console.log("进入首页🔨")
        }
    }
</script>