<template>
    <view class="bg-black">
        <form @submit="formSubmit" @reset="formReset">
            <view>
                <widget-form :formCustom="customFormsData.list"></widget-form>
            </view>
        </form>
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
