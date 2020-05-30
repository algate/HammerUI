<template>
    <view>
        <view class="hammer-header">
            <view class="title">Divider</view>
            <view class="sub-title">分隔符：可设置占据高度，线条宽度，颜色等</view>
        </view>
        <hammer-divider>默认divider</hammer-divider>
        <hammer-divider dividerColor="red">改变线条颜色</hammer-divider>
        <hammer-divider dividerColor="#5677fc" color="#5677fc">改变所有颜色</hammer-divider>
        <hammer-divider width="80%">改变线条宽度</hammer-divider>
        <hammer-divider width="60%" divideColor="red">改变线条宽度</hammer-divider>
        <hammer-divider :gradual="true">渐变线条</hammer-divider>
        <hammer-divider width="60%" :gradual="true">渐变线条</hammer-divider>
        <hammer-divider :gradual="true" :gradualColor="gradualColor">渐变线条</hammer-divider>
        <hammer-divider :size="30">改变字体大小</hammer-divider>
        <hammer-divider :size="30">
            <hammer-icon from="iconfont" name="emoji" :size="24"></hammer-icon>
        </hammer-divider>
        <hammer-divider :size="36">
            <hammer-icon from="iconfont" name="likefill" :size="24"></hammer-icon>
            <text class="hammer-text">猜你喜欢</text>
        </hammer-divider>

    </view>
</template>

<script>
    import hammerDivider from "@/components/divider/divider"
    export default {
        components:{
            // tuiIcon,
            hammerDivider
        },
        data() {
            return {
                gradualColor: ["red", "#4a67d6"]
            }
        },
        methods: {

        }
    }
</script>

<style>
    .hammer-text {
        padding-left: 10upx;
        vertical-align: middle;
        font-size: 26upx
    }

    .hammer-divider-img {
        width: 32upx;
        height: 32upx;
        vertical-align: middle;
    }
</style>
