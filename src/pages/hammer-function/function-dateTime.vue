<template>
    <view>
        <view class="hammer-header">
            <view class="title">日期时间选择器</view>
            <view class="sub-title">picker-view扩展，日期时间选择器 </view>
            <view class="sub-title hammer-primary">您选择的结果为：{{result}}</view>
        </view>
        <view class="hammer-btn-box">
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(1)">选择日期 年月日</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(2)">选择日期 年月</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(3)">选择时间</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(4)">日期+时间</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(5)">设置默认显示 2019-09-12 18:01</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(6)">年份区间 2019-2021</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(7)">改变按钮字体颜色</button>
            </view>
        </view>
        <hammer-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color" :setDateTime="setDateTime" @confirm="change"></hammer-datetime>
    </view>
</template>

<script>
    import hammerDatetime from "@/pages/components/extend/dateTime/dateTime"
    export default {
        components: {
            hammerDatetime
        },
        data() {
            return {
                type: 1,
                startYear: 1980,
                endYear: 2030,
                cancelColor: "#888",
                color: "#5677fc",
                setDateTime: "",
                result: ""
            }
        },
        methods: {
            show: function(type) {
                this.cancelColor = "#888";
                this.color = "#5677fc";
                this.setDateTime = "";
                this.startYear = 1980;
                this.endYear = 2030;
                switch (type) {
                    case 1:
                        //this.setDateTime = "2019-10-12";
                        this.type = 2;
                        break;
                    case 2:
                        //this.setDateTime = "2019-11";
                        this.type = 3;
                        break;
                    case 3:
                        // this.setDateTime = "18:01";
                        this.type = 4;
                        break;
                    case 4:
                        this.type = 1;
                        break;
                    case 5:
                        this.type = 1;
                        this.setDateTime = "2019-09-12 18:01";
                        break;
                    case 6:
                        this.type = 1;
                        this.startYear = 2019;
                        this.endYear = 2021;
                        break;
                    case 7:
                        this.type = 1;
                        this.cancelColor = "#555";
                        this.color = "#e41f19";
                        break;
                    default:
                        break;
                }
                this.$refs.dateTime.show()
            },
            change: function(e) {
                console.log(e)
                this.result = e.result
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
