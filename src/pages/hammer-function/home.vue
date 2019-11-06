<template>
    <view>
        <scroll-view scroll-y>
            <view class="nav-list">
                <navigator hover-class="none" :url="'/pages/hammer-function/' + item.name" class="nav-li" open-type="navigate" :class="item.bgColor" v-for="(item,index) in elements" :key="index" :style="{animation: 'bounceInDown ' + ((index+1)*0.2+1) + 's ' + ((index)*0.4) + 's 1 both'}">
                    <view class="nav-title">{{item.title}}</view>
                    <view class="nav-name">{{item.name}}</view>
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

                    }/*,
                    {
                        title: '标签Tag+Badge',
                        name: 'basic-tags',
                        hammerIcon: 'label',
                        size: 50,
                        bgColor : 'bg-cyan'
                    },
                    {
                        title: '分割线',
                        name: 'basic-division',
                        hammerIcon: 'gengefu1',
                        size: 50,
                        bgColor : 'bg-blue'
                    }*/
                ],
            };
        },
        onShow() {
            console.log("进入首页🔨")
        }
    }
</script>
