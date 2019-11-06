<template>
    <view v-if="element.type == 'date'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <picker mode="date" :value="date" @change="TimeChange">
                <view class="picker">
                    {{date?date:element.options.placeholder}}
                </view>
            </picker>
        </view>
        <view class="hammer-box bg-white">
            <view class="sub-title text-blue"><navigator hover-class="none" url="/pages/hammer-function/function-dateTime" open-type="navigate">…更多日期选择器</navigator></view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object
        }
    },
    computed: {
        date () {
            return this.element.options.defaultValue
        }
    },
    data() {
        return {
            // date: this.element.options.defaultValue
        };
    },
    methods: {
        TimeChange(e) {
            this.date = e.detail.value
        }
    }
}
</script>
