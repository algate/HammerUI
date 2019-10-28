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
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    computed: {
        textareaValue: {
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
    data () {
        return {
            // textareaValue: this.element.options.defaultValue
        }
    },
    methods: {
        textareaInput(e) {
            this.textareaValue = e.detail.value
        },
        getValue() {
            if (this.$props.element.type !== 'textarea') {
                return null;
            }
            let data = {};
            data[this.$props.element.model] = this.textareaValue;
            return  data;
        }
    }
}
</script>
