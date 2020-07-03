<template>
    <view>
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
                        title: '标签Tag+Badge',
                        name: 'basic-tags',
                        hammerIcon: 'label',
						from: 'tui',
                        size: 50,
                        bgColor : 'bg-blue'
                    },
                    {
                        title: '分割线',
                        name: 'basic-division',
                        hammerIcon: 'fengefu1',
						from: 'iconfont',
                        size: 50,
                        bgColor : 'bg-purple'
                    }
                ],
            };
        },
        onShow() {
            console.log("进入首页🔨")
        }
    }
</script>