<template>
    <view>
        <!-- #ifdef MP-WEIXIN -->
        <view class="adContainer"><ad unit-id="adunit-f89500eefdc9832d"></ad></view>
        <!-- #endif -->
        <scroll-view scroll-y>
            <view class="nav-list">
                <navigator hover-class="none" :url="'/pages/hammer-function/' + item.name" class="nav-li" open-type="navigate" :class="item.bgColor" v-for="(item,index) in elements" :key="index" :style="{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 both'}">
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
                        title: '信息提示',
                        name: 'function-toast',
                        from: 'iconfont',
                        hammerIcon: 'hammer',
                        size: 50,
                        bgColor : 'bg-red'

                    },
                    {
                        title: '日期时间选择器',
                        name: 'function-dateTime',
                        from: 'iconfont',
                        hammerIcon: 'time',
                        size: 50,
                        bgColor: 'bg-orange'
                    },
                    {
                        title: 'N级联动',
                        name: 'function-linkage',
                        from: 'iconfont',
                        hammerIcon: 'liandong',
                        size: 50,
                        bgColor: 'bg-yellow'
                    },
                    {
                        title: '下拉选择底部弹层',
                        name: 'function-popup',
                        // from: 'iconfont',
                        hammerIcon: 'partake',
                        size: 50,
                        bgColor: 'bg-olive'
                    },
                    {
                        title: '导航 + 索引',
                        name: 'function-tabs',
                        hammerIcon: 'category',
                        size: 50,
                        bgColor : 'bg-green'

                    },
                    {
                        title: '折叠面板',
                        name: 'function-collapse',
                        hammerIcon: 'strategy',
                        size: 50,
                        bgColor : 'bg-cyan'
                    },
                    {
                        title: '下拉刷新上啦加载',
                        name: 'function-mescroll',
                        from: 'iconfont',
                        hammerIcon: 'fengefu',
                        size: 50,
                        bgColor : 'bg-blue'
                    },
                    /*
                     * 此图表展示有问题，暂时不再展示 
                    {
                        title: 'uCharts高性能跨全端图表',
                        name: 'function-charts',
                        from: 'tui',
                        hammerIcon: 'histogram',
                        size: 50,
                        bgColor : 'bg-purple'
                    }, */
                    {
                        title: 'tree结构树',
                        name: 'function-trees',
                        from: 'tui',
                        hammerIcon: 'listview',
                        size: 50,
                        bgColor : 'bg-mauve'
                    }
                ],
            };
        },
        onShow() {
            console.log("进入首页🔨")
        }
    }
</script>
