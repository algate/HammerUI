<template>
    <view :class="[from=='tui'?'tui-icon tui-icon-'+name:'iconfont icon-'+name]" :style="{ color: color, fontSize: size + 'px',fontWeight:bold?'bold':'normal'}" @tap="handleClick(index)"></view>
</template>
<script>
export default {
    name: "hammerIcon",
    props: {
        name: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 32
        },
        color: {
            type: String,
            default: ''
        },
        bold: {
            type: Boolean,
            default: false
        },
        visible: {
            type: Boolean,
            default: true
        },
        index: {
            type: Number,
            default: 0
        },
        from: {
        	type: String,
        	default: 'tui'
        }
    },
    methods: {
        handleClick(index) {
            this.$emit('click', {
                index
            })
        }
    }
}
</script>
