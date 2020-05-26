<template>
	<view class="container">
		<view class="tui-title">
			默认按钮
		</view>
		<view class="tui-btn-box">
			<tui-button @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button disabled loading @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button disabled loading disabledGray>禁用背景为灰色</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="white" @click="detail">页面次要操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="white" disabled loading>页面次要操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="danger" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="danger" disabled loading>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="danger" disabled loading disabledGray>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="warning" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="warning" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="green" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="green" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="blue" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="blue" disabled>页面辅助操作 Disabled</tui-button>
		</view>

		<view class="tui-btn-box">
			<tui-button type="gray" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="gray" disabled>页面辅助操作 Disabled</tui-button>
		</view>

		<view class="tui-btn-box">
			<tui-button type="black" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="black" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-title">
			空心按钮
		</view>
		<view class="tui-btn-box">
			<tui-button plain @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button plain disabled loading @click="detail">页面主操作</tui-button>
		</view>
		<!-- <view class="tui-btn-box">
			<tui-button type="white" plain @click="detail">页面次要操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="white" plain disabled loading >页面次要操作 Disabled</tui-button>
		</view> -->
		<view class="tui-btn-box">
			<tui-button type="danger" plain @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="danger" plain disabled loading>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="warning" plain @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="warning" plain disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="green" plain @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="green" plain disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="black" plain @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="black" plain disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-title">
			圆角按钮
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" disabled loading @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" disabled loading disabledGray>禁用背景为灰色</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="white" @click="detail">页面次要操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="white" disabled loading>页面次要操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="danger" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="danger" disabled loading>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="warning" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="warning" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="green" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="green" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="blue" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="blue" disabled>页面辅助操作 Disabled</tui-button>
		</view>

		<view class="tui-btn-box">
			<tui-button shape="circle" type="gray" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="gray" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="black" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="circle" type="black" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-title">
			平角按钮
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" disabled loading @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" disabled loading disabledGray>禁用背景为灰色</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="white" @click="detail">页面次要操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="white" disabled loading>页面次要操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="danger" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="danger" disabled loading>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="danger" disabled loading disabledGray>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="warning" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="warning" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="green" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shape="rightAngle" type="green" disabled>页面辅助操作 Disabled</tui-button>
		</view>

		<view class="tui-title">
			带阴影按钮
		</view>

		<view class="tui-btn-box">
			<tui-button shadow @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shadow disabled loading @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shadow type="danger" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shadow type="danger" disabled loading>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shadow type="warning" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shadow type="warning" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shadow type="green" @click="detail">页面辅助操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button shadow type="green" disabled>页面辅助操作 Disabled</tui-button>
		</view>
		<view class="tui-title">
			渐变按钮
		</view>
		<view class="tui-btn-box">
			<tui-button type="gradual" @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="gradual" shadow @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-btn-box">
			<tui-button type="gradual" shadow disabled loading @click="detail">页面主操作</tui-button>
		</view>
		<view class="tui-title">
			自定义尺寸按钮
		</view>

		<view class="tui-flex-box">
			<tui-button margin="0 20upx 26upx 0" width="280upx" height="90upx" :size="32" @click="detail">页面主操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="danger" width="280upx" height="90upx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" width="280upx" height="90upx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" shape="circle" width="280upx" height="90upx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" plain width="280upx" height="90upx" :size="32" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" plain shape="circle" width="280upx" height="90upx" :size="32"
			 @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" width="200upx" height="80upx" :size="28" @click="detail">页面主操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="danger" width="200upx" height="80upx" :size="28" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" width="200upx" height="80upx" :size="28" @click="detail">辅助操作</tui-button>
			<tui-button margin="0 20upx 26upx 0" width="160upx" height="70upx" :size="24" @click="detail">160*70</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="danger" width="160upx" height="70upx" :size="24" @click="detail">160*70</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" width="160upx" height="70upx" :size="24" @click="detail">160*70</tui-button>
			<tui-button margin="0 20upx 26upx 0" width="140upx" height="60upx" :size="24" @click="detail">140*60</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="danger" width="140upx" height="60upx" :size="24" @click="detail">140*60</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" width="140upx" height="60upx" :size="24" @click="detail">140*60</tui-button>
			<tui-button margin="0 20upx 26upx 0" width="100upx" height="50upx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="danger" width="100upx" height="50upx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" width="100upx" height="50upx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" shape="circle" width="100upx" height="50upx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" plain width="100upx" height="50upx" :size="24" @click="detail">small</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" plain shape="circle" width="100upx" height="50upx" :size="24"
			 @click="detail">small</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" plain shape="rightAngle" width="100upx" height="50upx" :size="24"
			 @click="detail">small</tui-button>
			<tui-button margin="0 20upx 26upx 0" type="green" shadow width="100upx" height="50upx" :size="24" @click="detail">small</tui-button>

		</view>
	</view>
</template>

<script>
	//easycom组件模式 无需手动引入
	import tuiButton from "@/components/hammer-button/hammer-button.vue"
	export default {
		components: {
			tuiButton
		},
		data() {
			return {

			}
		},
		methods: {
			detail: function(e) {
				uni.showToast({
					title: e
				});
			}
		}
	}
</script>

<style>
	.container {
		padding: 20upx 30upx 40upx 30upx;
		box-sizing: border-box;
	}

	.tui-title {
		padding: 30upx 0;
		font-size: 32upx;
		color: #333;
		font-weight: bold;
	}

	.tui-btn-box {
		margin-bottom: 26upx;
	}

	.tui-flex-box {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
