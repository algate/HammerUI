<template>
    <view>
        <scroll-view scroll-y>
            <view class="nav-list">
                <navigator hover-class="none" :url="'/pages/hammer-basic/' + item.name" class="nav-li" open-type="navigate" :class="item.bgColor" v-for="(item,index) in elements" :key="index" :style="{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 both'}">
                    <view class="nav-title">{{item.title}}</view>
                    <view class="nav-name">{{item.name}}</view>
                    <text class="iconfont" :class="'icon-' + item.hammerIcon" :style="'color:#fff;font-size:'+item.size"></text>
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
                        title: '图标',
                        name: 'basic-icon',
                        hammerIcon: 'hammer',
                        size: '80rpx',
                        bgColor: 'bg-red'
                    },
                    {
                        title: '轮播',
                        name: 'basic-swiper',
                        hammerIcon: 'lunbo1',
                        size: '80rpx',
                        bgColor: 'bg-orange'
                    },
                    {
                        title: '选项卡+滑动',
                        name: 'basic-tabs-swiper',
                        hammerIcon: 'SwipeRight',
                        size: '80rpx',
                        bgColor: 'bg-yellow'
                    },
                    {
                        title: '自定义表单',
                        name: 'basic-custom-forms',
                        hammerIcon: 'app',
                        size: '80rpx',
                        bgColor : 'bg-olive'

                    }
                ],
            };
        },
        onShow() {
            console.log("进入首页🔨")
        }
    }
</script>
