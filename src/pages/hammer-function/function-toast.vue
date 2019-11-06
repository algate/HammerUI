<template>
    <view>
        <view class="hammer-header">
            <view class="title">Toast提示</view>
            <view class="sub-title">自定义icon，传入icon地址即可 </view>
        </view>
        <view class="hammer-btn-box">
            <view class="hammer-btn-btm">
                <button @click="showToast(4)">提示信息，无icon</button>
            </view>
            <view class="hammer-btn-btm">
                <button @click="showToast(1)">操作成功</button>
            </view>
            <view class="hammer-btn-btm">
                <button @click="showToast(2)">操作失败</button>
            </view>
            <view class="hammer-btn-btm">
                <button @click="showToast(3)">提示信息</button>
            </view>
            <view class="hammer-btn-btm">
                <button @click="showToast(5)">操作成功，多行文本</button>
            </view>
            <view class="hammer-btn-btm">
                <button @click="showToast(6)">自定义显示时间</button>
            </view>
        </view>
        <!--toast提示-->
        <hammer-toast ref="toast"></hammer-toast>
    </view>
</template>

<script>
    import hammerToast from "@/pages/components/extend/toast/toast"
    export default {
        components: {
            hammerToast
        },
        data() {
            return {}
        },
        methods: {
            showToast(type) {
                let params = {
                    title: "操作成功",
                    iconFrom: "iconfont",
                    iconName: "roundcheck",
                    icon: true
                };
                switch (type) {
                    case 2:
                        params.title = "操作失败";
                        params.iconName = "roundclose";
                        params.iconColor = "#e54d42"
                        break;
                    case 3:
                        params.title = "提示信息";
                        params.iconName = "warn";
                        break;
                    case 4:
                        params.title = "提示信息";
                        params.icon = false;
                        break;
                    case 5:
                        params.title = "标题信息";
                        params.content = "操作成功，内容信息";
                        break;
                    case 6:
                        params.title = "3s后消失~";
                        params.duration = 3000;
                        break;
                    default:
                        break;
                }

                this.$refs.toast.show(params)
            }
        }
    }
</script>

<style>
    .hammer-btn-box {
        padding: 10rpx 40rpx;
        box-sizing: border-box;
    }

    .hammer-btn-btm {
        margin-bottom: 36rpx;
    }
</style>
