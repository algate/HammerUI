<template>
    <view>
        <view class="hammer-header">
            <view class="title">N级联动选择器</view>
            <view class="sub-title">picker-view扩展</view>
        </view>
        <hammerPicker :name="name" :range="array" :num="index" @confirm="change"></hammerPicker>
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
            array: ['请选择','中国', '美国', '巴西', '日本'],
            index: 0
        }
    },
    methods: {
        change(index) {
            console.log(index)
        }
    }
}
</script>
<style>
    .sub-title {
        font-size: 24rpx;
        color: #7a7a7a;
        padding-top: 18rpx;
    }

    .hammer-primary {
        color: #5677FC;
    }

    .hammer-btn-box {
        padding: 10rpx 40rpx;
        box-sizing: border-box;
    }

    .hammer-btn-btm {
        margin-bottom: 36rpx;
    }
</style>
