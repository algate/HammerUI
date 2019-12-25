<template>
    <view class="hammer-box bg-white h-margin-top" v-if="element.type == 'time'">
        <view class="sub-title">{{element.name}}</view>
        <picker mode="time" :value="time" @change="TimeChange">
            <view class="picker">
                {{time?time:element.options.placeholder}}
            </view>
        </picker>
    </view>
</template>
<script>
export default {
    name: 'WgTime',
    props: {
        element: {
            type: Object
        }
    },
    computed: {
        time () {
            return this.element.options.defaultValue
        }
    },
    data() {
        return {
            // time:this.element.options.defaultValue
        };
    },
    methods: {
        TimeChange(e) {
            this.time = e.detail.value
        }
    }
}
</script>
