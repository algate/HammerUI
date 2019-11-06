<template>
    <view class="bg-black">
        <view class="hammer-header bg-white">
            <view class="title">Form of custom</view>
            <view class="sub-title">
                自定义表单：通过JSON数据来生成表单 <br/>
                文字、描述、数字输入，腾讯、百度、高德地图<br/>
                图片上传，图片展示、radio、checkbox<br/>
                下拉选择、时间、日期等选择
            </view>
        </view>
        <view class="h-margin-top">
            <form @submit="formSubmit" @reset="formReset">
                <view>
                    <widget-form :formCustom="customFormsData.list"></widget-form>
                </view>
            </form>
        </view>
    </view>
</template>
<script>
import WidgetForm from '@/pages/components/widget-form';
let customFormsJson = require("@/static/custom-forms.json");

export default {
    components: {
        WidgetForm
    },
    data() {
        return {
            customFormsData: customFormsJson
        }
    },
    methods: {
        formSubmit: function(e) {
            console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
            var formdata = e.detail.value
            uni.showModal({
                content: '表单数据内容：' + JSON.stringify(formdata),
                showCancel: false
            });
        },
        formReset: function() {
            console.log('form发生了reset事件')
        }
    }
}
</script>
