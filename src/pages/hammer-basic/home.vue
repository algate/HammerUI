<template>
    <view>
        <scroll-view scroll-y>
            <view class="nav-list">
                <navigator hover-class="none" :url="'/pages/hammer-basic/' + item.name" class="nav-li" open-type="navigate" :class="item.bgColor" v-for="(item,index) in elements" :key="index" :style="{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 both'}">
                    <view class="nav-title">{{item.title}}</view>
                    <view class="nav-name">{{item.name}}</view>
                    <!-- <text :from="item.from" :class="'icon-' + item.hammerIcon" :style="'color:#fff;font-size:'+item.size"></text> -->
                    <text><hammer-icon :from="item.from" :name="item.hammerIcon" color="#fff" :size="item.size"></hammer-icon></text>
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
                        from: 'iconfont',
                        hammerIcon: 'hammer',
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
                    {
                        title: '轮播',
                        name: 'basic-swiper',
                        from: 'iconfont',
                        hammerIcon: 'lunbo1',
                        size: 50,
                        bgColor: 'bg-yellow'
                    },
                    {
                        title: '选项卡+滑动',
                        name: 'basic-tabs-swiper',
                        from: 'iconfont',
                        hammerIcon: 'SwipeRight',
                        size: 50,
                        bgColor: 'bg-olive'
                    },
                    {
                        title: '自定义表单',
                        name: 'basic-custom-forms',
                        from: 'iconfont',
                        hammerIcon: 'app',
                        size: 50,
                        bgColor : 'bg-green'

                    },
                    {
                        title: '标签',
                        name: 'basic-tags',
                        hammerIcon: 'label',
                        size: 50,
                        bgColor : 'bg-cyan'
                    }
                ],
            };
        },
        onShow() {
            console.log("进入首页🔨")
        }
    }
</script>
