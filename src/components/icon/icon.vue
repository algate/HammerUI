<template>
    <view :class="[from=='iconfont' ? 'iconfont icon-'+name : 'tui-icon tui-icon-'+name]" :style="{ color: color, fontSize: (size?size:'24') + 'px',fontWeight:bold?'bold':'normal'}" @tap="handleClick(index)"></view>
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
