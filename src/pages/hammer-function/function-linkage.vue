<template>
    <view>
        <view class="hammer-header">
            <view class="title">N级联动选择器</view>
            <view class="sub-title">picker-view扩展</view>
        </view>
        <hammerPicker :name="name" :range="array" :num="pickerindex"></hammerPicker>
        <view class="hammer-header">
            <view class="title">联动选择器</view>
            <view class="sub-title">picker-view扩展</view>
        </view>
        <view class="list">
            <view class="list-item" v-for="(item, index) in demoList" :key="index" @tap="handleTap(item)">
                <view class="item-title">{{ item.title }}</view>
                <hammer-icon name="arrowright" from="tui" :size="30"></hammer-icon>
            </view>
        </view>
    </view>
</template>
<script>
import hammerPicker from '@/pages/components/linkage-picker/linkage-picker'
export default {
    components: {
        hammerPicker
    },
    data() {
        return {
            name: '一级联动',
            array: ['请选择', '北京', '四川', '海南', '山西'],
            pickerindex: 0,
            demoList: [{
                    title: '单选',
                    path: '/pages/demos/demo1'
                },
                {
                    title: '多级联动',
                    path: '/pages/demos/demo2'
                },
                {
                    title: '省市区选择',
                    path: '/pages/demos/demo3'
                },
                {
                    title: '自定义确定取消文字及颜色',
                    path: '/pages/demos/demo4'
                },
                {
                    title: '插槽自定义选择器头部',
                    path: '/pages/demos/demo5'
                },
                {
                    title: '可视区自定义滚动个数',
                    path: '/pages/demos/demo6'
                },
                {
                    title: '自定义数据结构',
                    path: '/pages/demos/demo7'
                },
                {
                    title: '自定义样式颜色',
                    path: '/pages/demos/demo9'
                },
                {
                    title: '相关事件',
                    path: '/pages/demos/demo10'
                },
                {
                    title: '异步加载整体数据',
                    path: '/pages/demos/demo11'
                }
            ]
        }
    },
    methods: {
        handleTap({ path }) {
            uni.navigateTo({
                url: path
            })
        }
    }
}
</script>
<style lang="scss">
.sub-title {
    font-size: 24upx;
    color: #7a7a7a;
    padding-top: 18upx;
}

.hammer-primary {
    color: #5677FC;
}

.hammer-btn-box {
    padding: 10upx 40upx;
    box-sizing: border-box;
}

.hammer-btn-btm {
    margin-bottom: 36upx;
}

.list {
    background-color: $hammer-color;
    .list-item {
        display: flex;
        align-items: center;
        height: 88upx;
        background-color: $uni-text-color-inverse;
        margin-bottom: 8upx;
        padding: 0 20upx;

        .item-title {
            flex: 1;
            font-size: 32upx;
        }
    }
}
</style>
