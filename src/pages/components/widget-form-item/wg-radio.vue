<template>
    <view v-if="element.type == 'radio'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
        </view>
        <radio-group @change="radioChange">
            <label class="hammer-box bg-white" v-for="(item, index) in element.options.options" :key="index">
                <view class="sub-title">{{item.label}}</view>
                <radio class="radio" :class="radio==item.value?'checked':''" :checked="radio==item.value?true:false" :value="item.value"></radio>
            </label>
        </radio-group>
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <view class="sub-title">
                <radio-group @change="radioChange">
                    <label class="margin-left-sm" v-for="(item, index) in element.options.options" :key="index">
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
    name: 'WgRadio',
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
            if (this.$props.element.type !== 'radio') {
                return null;
            }
            let data = {};
            data[this.$props.element.model] = this.radio;
            return  data;
        },
        validate() {
            if (this.$props.element.type !== 'radio') {
                return true;
            }

            let rules = this.$props.element.rules;
            if (!rules || rules.length === 0) {
                return true;
            }

            if (!this.radio) {
                uni.showToast({
                    title: rules[0].message || `${this.$props.element.name}不能为空`,
                    icon: 'none'
                });
                return false;
            }

            return true;
        }
    }
}
</script>
