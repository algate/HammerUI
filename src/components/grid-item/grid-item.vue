<template>
	<view class="tui-grid" :class="'tui-grid-'+cell" :hover-class="hover?'tui-item-hover':''"
	 :hover-stay-time="50" :style="{background:bgcolor}" @tap="handleClick">
		<view class='tui-grid-bg'>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tuiGridItem",
		props: {
			cell: {
				type: Number,
				default: 3
			},
			bgcolor: {
				type: String,
				default: "#fff"
			},
			//是否有点击效果
			hover: {
				type: Boolean,
				default: true
			},
			//底部线条
			bottom: {
				type: Boolean,
				default: true
			},
			index: {
				type: Number,
				default: 0
			}
		},
		methods: {
			handleClick() {
				this.$emit('click', {
					index: this.index
				});
			}
		}
	}
</script>

<style>
	.tui-grid {
		position: relative;
		padding: 20rpx;
		box-sizing: border-box;
		background: #fff;
		float: left;
	}

	.tui-grid-2 {
		width: 50%;
	}

	.tui-grid-3 {
		width: 33.333333333%;
	}

	.tui-grid-4 {
		width: 25%;
		padding: 30rpx 20rpx !important;
	}

	.tui-grid-5 {
		width: 20%;
		padding: 20rpx !important;
	}

	.tui-grid-2:nth-of-type(2n)::before,
	.tui-grid-3:nth-of-type(3n)::before,
	.tui-grid-4:nth-of-type(4n)::before,
	.tui-grid-5:nth-of-type(5n)::before {
		width: 0;
		border-right: 0;
	}

	.tui-grid::before {
		content: " ";
		position: absolute;
		right: 0;
		top: 0;
		width: 1px;
		bottom: 0;
		border-right: 1px solid #aaa;
		-webkit-transform-origin: 100% 0;
		transform-origin: 100% 0;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
	}

	.tui-grid::after {
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1px;
		border-bottom: 1px solid #aaa;
		-webkit-transform-origin: 0 100%;
		transform-origin: 0 100%;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	.tui-item-hover {
		background: #eee !important;
		color: #fff;
	}
</style>
