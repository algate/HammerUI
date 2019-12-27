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
        <view>
            <button class="bg-color"  @tap="submitForm">测试自定义表单数据</button>
        </view>
        <view class="h-margin-top">
            <form>
                <view>
                    <widget-form ref="formClient" :formCustom="customFormsData.list"></widget-form>
                    <!-- <widget-form ref="formClient" :formCustom="typeof customFormsData === 'string' ? JSON.parse(customFormsData).list : customFormsData.list"></widget-form> -->
                </view>
            </form>
        </view>
    </view>
</template>
<script>
// import WidgetForm from '@/pages/components/widget-form';
import WidgetForm from '@/pages/components/widget-form-item';
// let customFormsJson = require("@/static/custom-forms.json");
let customFormsJson = require('static/custom-forms.js');

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
        submitForm() {
            let widgetForm = this.$refs.formClient.generateData();
            let params = Object.assign({},{widgetForm});
            uni.showModal({
                content: JSON.stringify(params),
                showCancel: false,
                confirmText: '确定',
                success: res => {
                    console.log(params);
                }
            })
        }
    }
}
</script>
