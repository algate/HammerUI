<template>
    <view class="hammer-box bg-white h-margin-top" v-if="element.type == 'switch'">
        <view class="sub-title">{{element.name}}</view>
        <switch @change="switchChange" :class="switchValue?'checked':''" :checked="switchValue?true:false"></switch>
    </view>
</template>
<script>
export default {
    name: 'WgSwitch',
    props: {
        element: {
            type: Object,
            required: true
        }
    },
    computed: {
        switchValue: {
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
            // switchValue: this.element.options.defaultValue
        }
    },
    methods: {
        switchChange: function (e) {
            console.log('switch发生 change 事件，携带值为', e.target.value)
            this.switchValue = e.target.value;
        },
        getValue() {
            if (this.$props.element.type !== 'switch') {
                return null;
            }

            let data = {};
            data[this.$props.element.model] = this.$props.element.options.defaultValue;
            return data;
        },
        validate() {
            if (this.$props.element.type !== 'switch') {
                return true;
            }

            let rules = this.$props.element.rules;
            if (!rules || rules.length === 0) {
                return true;
            }

            if (!this.switchValue) {
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
