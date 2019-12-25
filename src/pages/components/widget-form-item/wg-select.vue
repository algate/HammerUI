<template>
    <view class="hammer-box bg-white" v-if="element.type == 'select'">
        <view class="title">{{element.name}}</view>
        <picker @change="PickerChange" :value="defaultValue" :range="options">
            <view class="picker">
                {{defaultValue || defaultValue === 0?options[defaultValue]:(element.options.placeholder || '请选择一个选项')}}
            </view>
        </picker>
    </view>
</template>
<script>
export default {
    name: 'WgSelect',
    props: {
        element: {
            type: Object
        }
    },
    computed: {
        options (){
            return this.element.options.options.map(ele => ele.value)
        }
    },
    data() {
        return {
            defaultValue: this.element.options.defaultValue
        };
    },
    methods: {
        PickerChange(e) {
            this.defaultValue = e.detail.value
        },
        getValue() {
            if (this.$props.element.type !== 'select') {
                return null;
            }

            let data = {};
            data[this.$props.element.model] = this.options[this.defaultValue];
            return data;
        },
        validate() {
            if (this.$props.element.type !== 'select') {
                return true;
            }

            let rules = this.$props.element.rules;
            if (!rules || rules.length === 0) {
                return true;
            }

            if (!this.defaultValue && this.defaultValue !== 0) {
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
