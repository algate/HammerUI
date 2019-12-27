<template>
    <view v-if="element.type == 'input'">
        <view class="hammer-box bg-white">
            <view class="sub-title">{{element.name}}</view>
            <input v-model="value" :style="{width: element.options.width}" :placeholder="element.options.placeholder" :disabled="element.options.disabled"></input>
        </view>
    </view>
</template>

<script>
export default {
    // props来自父组件的数据：props可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
    name: "WgInput",
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    computed: {
        /*value() {
            return this.element.options.defaultValue
        }*/
        value: {
            get() {
                return this.element.options.defaultValue
            },
            set(newValue) {
                this.element.options.defaultValue = newValue
            }
        }
    },
    data() {
        return {
            // value: this.element.options.defaultValue ? this.element.options.defaultValue:''
        }
    },
    methods: {
        getValue() {
            if (this.$props.element.type !== 'input') {
                return null;
            }
            let data = {};
            data[this.$props.element.model] = this.value;
            return data;
        },
        validate() {
            let isValid = true;
            if (this.$props.element.type !== 'input') {
                return isValid;
            }

            let rules = this.$props.element.rules;
            if (!rules || rules.length === 0) {
                return isValid;
            }

            for (let i = 0; i < rules.length; i++) {
                let currentRule = rules[i];
                isValid = this.checkValueByRule(currentRule);
                if (!isValid) {
                    break;
                }
            }

            return isValid;
        },
        checkValueByRule(rule) {
            if (!rule)
                return true;
            if (rule.required) {
                // 必填校验
                if (!this.value || !this.value.trim()) {
                    uni.showToast({
                        title: rule.message || `${this.$props.element.name}不能为空`,
                        icon: 'none'
                    });
                    return false;
                }
            }
            if (rule.type === 'number') {
                if (this.value && !/\d+/.test(this.value)) {
                    uni.showToast({
                        title: rule.message || `${this.$props.element.name}格式不正确`,
                        icon: 'none'
                    });
                    return false;
                }
            }

            return true;
        }
    }

}
</script>
