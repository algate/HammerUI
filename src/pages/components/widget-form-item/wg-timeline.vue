<template>
    <view>
        <view class="cu-bar solid-bottom bg-white">
            <view class="action">时间轴线</view>
        </view>
        <view class="cu-timeline">
            <view class="cu-time">接单</view>
            <view class="cu-item text-blue">
                <view class="bg-blue content">
                    <text>20:00</text> 【月球】快件已到达月球，准备发往地球
                </view>
                <view class="bg-cyan content">
                    <text>10:00</text> 【银河系】快件已到达银河系，准备发往月球
                </view>
            </view>
            <view class="cu-time">完成</view>
            <view class="cu-item">
                <view class="content">
                    <view class="cu-capsule radius">
                        <view class="cu-tag bg-cyan">上午</view>
                        <view class="cu-tag line-cyan">10:00</view>
                    </view>
                    <view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
                </view>
            </view>
        </view>
        <view class="cu-bar solid-bottom bg-white margin-top">
            <view class="action">时间轴线2</view>
        </view>
        <view class="tui-order-tracking">
            <tui-time-axis>

                <tui-timeaxis-item bgcolor="none">
                    <template v-slot:node>
                        <view class="tui-node tui-bg-primary">
                            <tui-icon name="check" color="#fff" :size="14" :bold="true"></tui-icon>
                        </view>
                    </template>

                    <template v-slot:content>
                        <view>
                            <view class="tui-order-title">已签收</view>
                            <view class="tui-order-desc">您的订单已由本人签收。感谢您在商城购物，欢迎再次光临。</view>
                            <view class="tui-order-time tui-gray">2019-05-01 18:48:26</view>
                        </view>
                    </template>
                </tui-timeaxis-item>

                <tui-timeaxis-item bgcolor="none">
                    <template v-slot:node>
                        <view class="tui-node">
                            <tui-icon name="people" color="#fff" :size="13"></tui-icon>
                        </view>
                    </template>
                    <template v-slot:content>
                        <view class="tui-order-title tui-gray">派送中</view>
                        <view class="tui-order-desc tui-light-gray">您的订单正在配送途中（快递员：echo.，电话：
                            <text class='tui-primary'>13822448855</text>），请您耐心等待。</view>
                        <view class="tui-order-time tui-gray">2019-05-01 16:29:07</view>
                    </template>
                </tui-timeaxis-item>

                <tui-timeaxis-item bgcolor="none">
                    <template v-slot:node>
                        <view class="tui-node">
                            <tui-icon name="transport" color="#fff" :size="13"></tui-icon>
                        </view>
                    </template>
                    <template v-slot:content>
                        <view class="tui-order-title tui-gray">运输中</view>
                        <view class="tui-order-desc tui-light-gray">您的订单已到达XX【北京XX营业部】</view>
                        <view class="tui-order-time tui-gray">2019-05-01 16:17:32</view>
                    </template>
                </tui-timeaxis-item>

                <tui-timeaxis-item bgcolor="none">
                    <template v-slot:node>
                        <view class="tui-node tui-node-small"></view>
                    </template>

                    <template v-slot:content>
                        <view class="tui-order-desc tui-light-gray tui-ptop">您的订单已在XX【北京XX营业部】收货完成</view>
                        <view class="tui-order-time tui-gray">2019-05-01 08:40:32</view>
                    </template>
                </tui-timeaxis-item>

                <tui-timeaxis-item bgcolor="none">
                    <template v-slot:node>
                        <view class="tui-node tui-node-small"></view>
                    </template>
                    <template v-slot:content>
                        <view class="tui-order-desc tui-light-gray tui-ptop">您的订单由XXXX送往XX【北京XX营业部】</view>
                        <view class="tui-order-time tui-gray">2019-05-01 08:17:32</view>
                    </template>
                </tui-timeaxis-item>

                <tui-timeaxis-item bgcolor="none">
                    <template v-slot:node>
                        <view class="tui-node">
                            <tui-icon name="home" color="#fff" :size="12"></tui-icon>
                        </view>
                    </template>
                    <template v-slot:content>
                        <view class="tui-order-title tui-gray">仓库处理中</view>
                        <view class="tui-order-desc tui-light-gray">打包完成</view>
                        <view class="tui-order-time tui-gray">2019-05-01 08:09:16</view>
                    </template>
                </tui-timeaxis-item>

                <tui-timeaxis-item bgcolor="none">
                    <template v-slot:node>
                        <view class="tui-node">
                            <tui-icon name="order" color="#fff" :size="12"></tui-icon>
                        </view>
                    </template>
                    <template v-slot:content>
                        <view class="tui-order-title tui-gray">已下单</view>
                        <view class="tui-order-desc tui-light-gray">您的订单将下传XXX仓库，准备出库</view>
                        <view class="tui-order-time tui-gray">2019-05-01 02:09:16</view>
                    </template>
                </tui-timeaxis-item>

            </tui-time-axis>
        </view>
    </view>
</template>
<script>
// import tuiIcon from "@/components/icon/icon"
import tuiTimeAxis from "@/components/time-line/time-axis/time-axis"
import tuiTimeaxisItem from "@/components/time-line/timeaxis-item/timeaxis-item"
export default {
    components: {
        // tuiIcon,
        tuiTimeAxis,
        tuiTimeaxisItem
    }
}
</script>
<style lang="scss">
    .tui-order-header {
        padding: 30upx;
        box-sizing: border-box;
        background: #fff;
    }

    .tui-text {
        font-size: 28upx;
        color: #333;
        padding: 4upx;
    }

    .tui-bold {
        font-weight: bold;
    }

    .tui-node {
        background: #ddd;
        height: 44upx;
        width: 44upx;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding-top: 0;
    }

    .tui-node-small {
        height: 16upx !important;
        width: 16upx !important;
    }

    .tui-bg-primary {
        background: #5677fc !important;
    }
    .tui-order-tracking {
        padding: 30upx 30upx 30upx 40upx;
        background: #fff;
        margin-top: 20upx;
        box-sizing: border-box;
    }

    .tui-order-title {
        color: #333;
        font-weight: bold;
        font-size: 32upx;
        font-family: "microsoft yahei";
    }

    .tui-order-desc {
        font-size: 28upx;
        color: #333;
        padding: 12upx 0;
    }

    .tui-ptop {
        display: flex;
        justify-content: flex-start;
        line-height: 28upx;
    }

    .tui-order-time {
        font-size: 24upx;
        font-weight: bold;
    }

    .tui-gray {
        color: #848484 !important;
    }

    .tui-light-gray {
        color: #888 !important;
    }

    .tui-primary {
        color: #5677fc;
    }
</style>
