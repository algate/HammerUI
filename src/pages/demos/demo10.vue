<template>
  <view>
    <button @tap="handleTap">点我弹出选择器</button>
    <view>{{ value }}</view>
    <view>默认初始化的时候会触发change</view>
    <lb-picker ref="picker"
      v-model="value"
      mode="selector"
      :list="list"
      @change="handleChange"
      @confirm="handleConfirm"
      @cancle="handleCancle"
      @show="handleShow"
      @hide="handleHide">
    </lb-picker>
  </view>
</template>

<script>
    import LbPicker from '@/components/lb-picker'
    export default {
        components: {
            LbPicker
        },
		data(){
			return {
				value: '',
				label: '',
				list: [
					{
						label: '选项一',
						value: 'A'
					},
					{
						label: '选项二',
						value: 'B'
					}
				]
			}
		},
		methods: {
			handleTap () {
				this.$refs.picker.show()
			},
			handleChange (item) {
				console.log('change::', item)
				uni.showToast({
					title: `change-${item.value}`,
					icon: 'none'
				})
			},
			handleConfirm (item) {
				console.log('confirm::', item)
				uni.showToast({
					title: `confirm-${item.value}`,
					icon: 'none'
				})
			},
			handleCancle (item) {
				console.log('cancle::', item)
				uni.showToast({
					title: `cancle`,
					icon: 'none'
				})
			},
			handleShow () {
				console.log('show')
				uni.showToast({
					title: `show`,
					icon: 'none'
				})
			},
			handleHide () {
				console.log('hide')
				uni.showToast({
					title: `hide`,
					icon: 'none'
				})
			}
		}
	}
</script>
