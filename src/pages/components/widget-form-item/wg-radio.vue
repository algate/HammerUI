<template>
    <view v-if="element.type == 'radio'">
        <view class="uni-padding-wrap">
            <view class="uni-title">{{element.name}}</view>
        </view>
        <radio-group class="block" @change="radioChange">
            <label class="cu-form-group" v-for="(item, index) in element.options.options" :key="item.value + index">
                <view class="title">{{item.label}}</view>
                <radio class='radio' :class="radio==item.value?'checked':''" :checked="radio==item.value?true:false" :value="item.value"></radio>
            </label>
        </radio-group>
        <view class="cu-bar margin-top bg-white">
            <view class="action">{{element.name}}</view>
            <view class="action">
                <radio-group @change="radioChange">
                    <label class="margin-left-sm" v-for="(item, index) in element.options.options" :key="item.value + index">
                        <radio class="blue radio" :class="radio==item.value?'checked':''" :checked="radio==item.value?true:false" :value="item.value"></radio>
                        <text class="margin-left-sm">{{item.label}}</text>
                    </label>
                </radio-group>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            radio: ''
        }
    },
    methods: {
        radioChange: function(e) {
            this.radio = e.detail.value
        },
        getValue() {
            if (this.element.type !== 'radio') {
                return null;
            }
            let data = {};
            data[this.element.model] = this.radio;
            return  data;
        }
    }
}
</script>
