<template>
    <view v-if="element.type == 'radio'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
        </view>
        <radio-group @change="radioChange">
            <label class="hammer-box bg-white" v-for="(item, index) in element.options.options" :key="item.value + index">
                <view class="sub-title">{{item.label}}</view>
                <radio class="radio" :class="radio==item.value?'checked':''" :checked="radio==item.value?true:false" :value="item.value"></radio>
            </label>
        </radio-group>
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <view class="sub-title">
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
