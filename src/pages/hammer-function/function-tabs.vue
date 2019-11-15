<template>
    <view>
        <view class="hammer-header">
            <view class="title">导航 + 索引</view>
            <view class="sub-title">导航菜单 </view>
        </view>
        <view class="hammer-navigator-box">
            <navigator open-type="navigate" url="/pages/hammer-function/function-tabs-indexes-ceiling">
                <button type="white">索引选中+吸顶</button>
            </navigator>
            <navigator class="h-margin-top" open-type="navigate" url="/pages/hammer-function/function-tabs-indexes-ceiling2">
                <button type="white">索引选中+吸顶2</button>
            </navigator>
            <navigator class="h-margin-top" open-type="navigate" url="/pages/hammer-function/function-tabs-lists">
                <button type="white">垂直选项卡</button>
            </navigator>
            <navigator class="h-margin-top" open-type="navigate" url="/pages/hammer-function/function-tabs-indexes">
                <button type="white">垂直选项卡+索引选中</button>
            </navigator>
            <navigator class="h-margin-top" open-type="navigate" url="/pages/hammer-basic/basic-tabs-swiper">
                <button type="white">顶部选项卡+左右滑屏滚动</button>
            </navigator>
        </view>
    </view>
</template>

<style>
    .hammer-navigator-box {
        padding: 10rpx 20rpx;
    }
</style>
