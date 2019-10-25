<template>
    <view v-if="element.type == 'input'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">{{element.name}}</view>
            <input v-model="value" :style="{width: element.options.width}" :placeholder="element.options.placeholder" :disabled="element.options.disabled"></input>
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
            // value: this.element.options.defaultValue?this.element.options.defaultValue:''
        }
    },
    methods: {
        getValue() {
            if (this.element.type !== 'input') {
                return null;
            }
            let data = {};
            data[this.element.model] = this.value;
            return  data;
        }
    }

}
</script>
