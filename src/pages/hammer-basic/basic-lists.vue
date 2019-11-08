<template>
    <view class="bg-black">
        <view class="hammer-header bg-white">
            <view class="tilte">列表组件</view>
            <view class="sub-title">列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等</view>
        </view>
        <view>
            <view class="example-title">宫格列表</view>
            <view class="example-title">默认样式（3列）</view>
            <view class="example-body">
                <uni-grid :column="3" :highlight="true" @change="change">
                    <uni-grid-item v-for="(item, index) in list" :key="index">
                        <image :src="item.url" class="image" mode="aspectFill" />
                        <text class="text">{{ item.text }}</text>
                    </uni-grid-item>
                </uni-grid>
            </view>
            <view class="example-title">带红点角标（4列）</view>
            <view class="example-body">
                <uni-grid :column="4" :show-border="true" :square="true" :hor="35" :ver="-45" @change="change">
                    <uni-grid-item marker="dot">
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="aspectFill" />
                        <text class="text">新浪</text>
                    </uni-grid-item>
                    <uni-grid-item marker="badge" text="99" type="success">
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill" />
                        <text class="text">微信</text>
                    </uni-grid-item>
                    <uni-grid-item marker="badge" type="error" text="热">
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png" mode="aspectFill" />
                        <text class="text">QQ</text>
                    </uni-grid-item>
                    <uni-grid-item :hor="35" :ver="-45" :img-width="25" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png" mode="aspectFill" />
                        <text class="text">抖音</text>
                    </uni-grid-item>
                </uni-grid>
            </view>
            <view class="example-title">无边框（3列）</view>
            <view class="example-body">
                <uni-grid :column="3" :show-border="false" :square="false" @change="change">
                    <uni-grid-item :hor="35" :ver="-45" marker="badge" type="error" text="12">
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="aspectFill" />
                        <text class="text">新浪</text>
                    </uni-grid-item>
                    <uni-grid-item :hor="40" :ver="-55" :img-width="30" marker="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/recommend.png">
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill" />
                        <text class="text">微信</text>
                    </uni-grid-item>
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png" mode="aspectFill" />
                        <text class="text">QQ</text>
                    </uni-grid-item>
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png" mode="aspectFill" />
                        <text class="text">抖音</text>
                    </uni-grid-item>
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png" mode="aspectFill" />
                        <text class="text">百度</text>
                    </uni-grid-item>
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png" mode="aspectFill" />
                        <text class="text">支付宝</text>
                    </uni-grid-item>
                </uni-grid>
            </view>

            <view class="example-title">矩形宫格（3列）</view>
            <view class="example-body">
                <uni-grid :column="3" :square="false" :highlight="false" @change="change">
                    <uni-grid-item v-for="(item, index) in list" :key="index">
                        <image :src="item.url" class="image" mode="aspectFill" />
                        <text class="text">{{ item.text }}</text>
                    </uni-grid-item>
                </uni-grid>
            </view>
            <view class="example-title">边框颜色（4列）</view>
            <view class="example-body">
                <uni-grid :column="4" border-color="#03a9f4" @change="change">
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png" mode="aspectFill" />
                        <text class="text">新浪</text>
                    </uni-grid-item>
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png" mode="aspectFill" />
                        <text class="text">微信</text>
                    </uni-grid-item>
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png" mode="aspectFill" />
                        <text class="text">QQ</text>
                    </uni-grid-item>
                    <uni-grid-item>
                        <image class="image" src="https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png" mode="aspectFill" />
                        <text class="text">抖音</text>
                    </uni-grid-item>
                </uni-grid>
            </view>
        </view>
        <view class="example-title">基础列表</view>
        <uni-list>
            <uni-list-item :show-arrow="false" title="列表文字" />
            <uni-list-item :show-arrow="false" title="列表文字" note="列表描述信息" />
            <uni-list-item :disabled="true" :show-arrow="false" title="列表禁用状态" />
        </uni-list>
        <view class="example-title">菜单列表</view>
        <uni-list>
            <uni-list-item title="列表右侧带箭头" />
            <uni-list-item :show-badge="true" title="列表右侧带箭头 + 角标" badge-text="12" />
            <uni-list-item title="列表左侧带略缩图" thumb="/static/images/tabBar/hammer.svg" />
            <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" title="列表左侧带扩展图标" />
            <uni-list-item :show-extra-icon="true" :extra-icon="extraIcon1" :show-switch="true" title="列表右侧带 switch" @switchChange="switchChange" />
            <uni-list-item :disabled="true" :show-extra-icon="true" :extra-icon="extraIcon2" :show-switch="true" :switch-checked="true" title="禁用状态" @switchChange="switchChange" />
        </uni-list>
    </view>
</template>

<script>
    import uniList from '@/components/uni-list/uni-list.vue'
    import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
    import uniGrid from '@/components/uni-grid/uni-grid.vue'
    import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
    export default {
        components: {
            uniList,
            uniListItem,
            uniGrid,
            uniGridItem
        },
        data() {
            return {
                list: [{
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
                        text: '新浪'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
                        text: '微信'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
                        text: 'QQ'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png',
                        text: '抖音'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
                        text: '百度'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
                        text: '支付宝'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-9.png',
                        text: '字节跳动'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-4.png',
                        text: '手机'
                    },
                    {
                        url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-5.png',
                        text: '工具'
                    }
                ],
                extraIcon1: {
                    from: 'iconfont',
                    color: '#007aff',
                    size: 22,
                    name: 'hammer'
                },
                extraIcon2: {
                    from: 'iconfont',
                    color: '#4cd964',
                    size: 22,
                    name: 'camera'
                }
            }
        },
        methods: {
            switchChange(e) {
                uni.showToast({
                    title: 'change:' + e.value,
                    icon: 'none'
                })
            }
        }
    }
</script>

<style>
    .example {
        padding: 0 30rpx 30rpx
    }

    .example-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 32rpx;
        color: #464e52;
        padding: 30rpx 30rpx 30rpx 50rpx;
        margin-top: 20rpx;
        position: relative;
        background-color: #fdfdfd;
        border-bottom: 1px #f5f5f5 solid
    }

    .example-title__after {
        position: relative;
        color: #031e3c
    }

    .example-title:after {
        content: '';
        position: absolute;
        left: 30rpx;
        margin: auto;
        top: 0;
        bottom: 0;
        width: 6rpx;
        height: 32rpx;
        background-color: #ccc
    }

    .example .example-title {
        margin: 40rpx 0
    }

    .example-body {
        padding: 30rpx;
        background: #fff
    }

    .example-info {
        padding: 30rpx;
        color: #3b4144;
        background: #fff
    }

    .image {
        width: 50rpx;
        height: 50rpx;
    }

    .text {
        font-size: 26rpx;
        margin-top: 10rpx;
    }
</style>
