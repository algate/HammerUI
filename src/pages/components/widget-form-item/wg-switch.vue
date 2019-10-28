<template>
    <view v-if="element.type == 'switch'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="title">{{element.name}}</view>
            <switch @change="switchChange" :class="switchValue?'checked':''" :checked="switchValue?true:false"></switch>
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
        }
    }
}
</script>
