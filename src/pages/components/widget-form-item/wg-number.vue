<template>
    <view v-if="element.type == 'number'">
        <view class="hammer-box bg-white">
            <view class="sub-title">{{element.name}}</view>
            <input v-model="value" :type="element.type" :style="{width: element.options.width}" :placeholder="element.options.placeholder" :disabled="element.options.disabled"></input>
        </view>
    </view>
</template>

<script>
export default {
    // props来自父组件的数据：props可以是简单的数组，或者使用对象作为替代，对象允许配置高级选项，如类型检测、自定义验证和设置默认值。
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    computed: {
        value: {
            // getter
            get () {
                return this.element.options.defaultValue
            },
            // setter
            set (newValue) {
                return this.element.options.defaultValue = newValue
            }
        }
    },
    data() {
        return {
            // value: this.element.options.defaultValue
        }
    },
    methods: {
        getValue() {
            if (this.element.type !== 'number') {
                return null;
            }
            let data = {};
            data[this.element.model] = this.value;
            return  data;
        }
    }
}
</script>
<style lang="scss">
    .uni-input-number {
        display: block;
        height: 100%;
        background: none;
        color: inherit;
        opacity: inherit;
        font: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        text-align: inherit;
        text-indent: inherit;
        text-transform: inherit;
        text-shadow: inherit;
        width: 100%;
        outline: none;
        border: none;
        padding: 0;
        margin: 0;
        text-decoration: inherit;
    }
</style>
