<template>
    <view v-if="element.type == 'textarea'">
        <view class="hammer-box bg-white h-margin-top align-start">
            <view class="sub-title">{{element.name}}</view>
            <textarea v-model="textareaValue" :style="{width: element.options.width}" @input="textareaInput" :placeholder="element.options.placeholder" :disabled="element.options.disabled"></textarea>
        </view>
    </view>
</template>
<script>
export default {
    name: 'WgStatictext',
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
            textareaValue: this.element.options.defaultValue || ''
        }
    },
    methods: {
        getValue() {
            if (this.$props.element.type !== 'textarea') {
                return null;
            }
            let data = {};
            data[this.$props.element.model] = this.textareaValue;
            return  data;
        },
        validate() {
            if (this.$props.element.type !== 'textarea') {
                return true;
            }

            let rules = this.$props.element.rules;
            if (!rules || rules.length === 0) {
                return true;
            }

            if (!this.textareaValue) {
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
