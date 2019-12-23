<template>
    <view>
        <view class="hammer-box bg-gray">
            <view class="iconfont icon-notification"></view>
            <view class="hammer-scorll-view">
                <view class="hammer-animation text-color">🔨欢迎使用Hammer UI！当前版本：V{{version}}</view>
            </view>
        </view>
        <view class="hammer-log">
            <tui-time-axis>
                <tui-timeaxis-item v-for="(item,index) in logList" :key="index">
                    <template v-slot:node>
                        <view class="tui-node">
                            <hammer-icon from="iconfont" name="hammer" :size="20"></hammer-icon>
                        </view>
                    </template>
                    <template v-slot:content>
                        <view class="tui-content-log" :class="[version==item.version?'':'bg-gray']">
                            <view class="tui-version-date">{{logList.length-1==index?item.version:'V'+item.version}}（{{item.date}}）</view>
                            <view v-for="(model,index2) in item.log" :key="index2" class="tui-log-text">{{model}}</view>
                            <view class="tui-doc-box" v-if="index===logList.length-1">
                                <view>H5访问地址：</view>
                                <view class="tui-link" @tap.stop="getLink('https://algate.github.io/HammerUI/')">https://algate.github.io/HammerUI/</view>
                            </view>
                        </view>
                    </template>
                </tui-timeaxis-item>
            </tui-time-axis>
        </view>
    </view>
</template>
<script>
const logLists = require('./log.js')
const HammerUI = require("@/libs/loadClipboard.js")
import tuiTimeAxis from "@/components/time-axis/time-axis"
import tuiTimeaxisItem from "@/components/timeaxis-item/timeaxis-item"
import {
    mapState
} from 'vuex'
export default {
    computed: mapState(['version']),
    components: {
        tuiTimeAxis,
        tuiTimeaxisItem
    },
    data() {
        return {
            logList: []
        }
    },
    onLoad() {
        this.logList = logLists.logLists.reverse();
    },
    methods: {
        getLink: function(link) {
            HammerUI.getClipboardData(link, (res) => {
                // #ifdef H5
                if (res) {
                    uni.showToast({
                        title: "链接复制成功"
                    })
                } else {
                    uni.showToast({
                        title: "链接复制失败"
                    })
                }
                // #endif
            })
        }
    }
}
</script>
<style>
.hammer-scorll-view {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    color: #f54f46;
    height: 60rpx;
    line-height: 60rpx;
}
.hammer-animation {
    animation: hammer-rolling 12s linear infinite;
}

@keyframes hammer-rolling {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(-170%);
    }
}
.tower-swiper .tower-item {
    transform: scale(calc(0.5 + var(--index) / 10));
    margin-left: calc(var(--left) * 100rpx - 150rpx);
    z-index: var(--index);
}

.hammer-log {
    padding: 30rpx;
    box-sizing: border-box;
    height: calc(100vh - 60rpx);
    overflow-y: auto;
}
.tui-content-log {
    border-radius: 10rpx;
    position: relative;
    padding: 20rpx 26rpx;
    font-size: 28rpx;
    color: #fff;
    background: #00ab98;
    border: 1rpx solid #5c8dff;
    display: inline-block;
}

.tui-content-log::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 14rpx;
    border: 16rpx solid;
    right: 100%;
    border-color: transparent #00ab98 transparent transparent;
}

.bg-gray {
    background: #ededed !important;
    border: 1rpx solid #ededed !important;
    color: #999 !important;
}

.bg-gray::before {
    border-color: transparent #ededed transparent transparent !important;
}

.tui-version-date {
    font-size: 32rpx;
    font-weight: bold;
    padding-bottom: 20rpx;
}

.tui-doc-box {
    padding-top: 20rpx;
    word-break: break-all;
}

.tui-link {
    padding-bottom: 20rpx;
    color: #0066cc;
}
</style>
