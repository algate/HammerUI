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
                <button type="white" shape="circle" @click="show(5)">设置默认显示 2020-09-12 18:01</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(6)">年份区间 2020-2021</button>
            </view>
            <view class="hammer-btn-btm">
                <button type="white" shape="circle" @click="show(7)">改变按钮字体颜色</button>
            </view>
        </view>
        <hammer-datetime ref="dateTime" :type="type" :startYear="startYear" :endYear="endYear" :cancelColor="cancelColor" :color="color" :setDateTime="setDateTime" @confirm="change"></hammer-datetime>
        <view class="hammer-header">
            <view class="title">日历时间选择器</view>
            <view class="sub-title">日历时间选择器</view>
        </view>
        <view class="hammer-btn-box">
            <view>日期选择 - 示例</view>
            {{date}}
            <button type="primary" @click="onShowDatePicker('date')">选择日期</button>
            {{time}}
            <button type="primary" @click="onShowDatePicker('time')">选择时间</button>
            {{datetime}}
            <button type="primary" @click="onShowDatePicker('datetime')">选择日期时间</button>
            {{range[0]}} - {{range[1]}}
            <button type="primary" @click="onShowDatePicker('range')">选择日期范围</button>
            {{rangetime[0]}} - {{rangetime[1]}}
            <button type="primary" @click="onShowDatePicker('rangetime')">选择日期时间范围</button>
        </view>
        <mx-date-picker :show="showPicker" :type="calendartype" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
        <!-- #ifdef MP-WEIXIN -->
        <view class="adContainer">
            <ad unit-id="adunit-57232f436c3fd212"></ad>
        </view>
        <!-- #endif -->
    </view>
</template>

<script>
    import hammerDatetime from "@/pages/components/extend/dateTime/dateTime"
    import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
    export default {
        components: {
            hammerDatetime,
            MxDatePicker
        },
        data() {
            return {
                type: 1,
                startYear: 1980,
                endYear: 2030,
                cancelColor: "#888",
                color: "#5677fc",
                setDateTime: "",
                result: "",
                showPicker: false,
                date: '2020/01/01',
                time: '15:00:12',
                // time: `${(new Date).getHours()}:${(new Date).getMinutes()<10?'0'+(new Date).getMinutes():(new Date).getMinutes()}:${(new Date).getSeconds()<10?'0'+(new Date).getSeconds():(new Date).getSeconds()}`,
                datetime: '2020/01/01 15:00:12',
                // datetime: `${(new Date).getFullYear()}/${((new Date).getMonth()+1)<10?'0'+((new Date).getMonth()+1):((new Date).getMonth()+1)}/${(new Date).getDate()<10?'0'+(new Date).getDate():(new Date).getDate()} ${(new Date).getHours()}:${(new Date).getMinutes()<10?'0'+(new Date).getMinutes():(new Date).getMinutes()}:${(new Date).getSeconds()<10?'0'+(new Date).getSeconds():(new Date).getSeconds()}`,
                range: ['2020/01/01','2020/01/06'],
                rangetime: ['2020/01/08 14:00','2020/01/16 13:59'],
                calendartype: 'rangetime',
                value: ''
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
                        //this.setDateTime = "2020-10-12";
                        this.type = 2;
                        break;
                    case 2:
                        //this.setDateTime = "2020-11";
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
                        this.setDateTime = "2020-09-12 18:01";
                        break;
                    case 6:
                        this.type = 1;
                        this.startYear = 2020;
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
            },
            onShowDatePicker(calendartype){//显示
                this.calendartype = calendartype;
                this.showPicker = true;
                this.value = this[calendartype];
            },
            onSelected(e) {//选择
                this.showPicker = false;
                if(e) {
                    this[this.calendartype] = e.value;
                    //选择的值
                    console.log('value => '+ e.value);
                    //原始的Date对象
                    console.log('date => ' + e.date);
                }
            }
        }
    }
</script>

<style>
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
</style>
