<template>
	<view><canvas style="width: 100vw;height: 100vw;" type="2d" canvas-id="tangram" id="tangram"></canvas></view>
</template>

<script>
export default {
	data() {
		return {
			systemInfo: {},
			canvas: null,
			ctx: null,
			tangram: [
				{ p: [{ x: 0, y: 0 }, { x: 800, y: 0 }, { x: 400, y: 400 }], color: '#caff67' },
				{ p: [{ x: 0, y: 0 }, { x: 400, y: 400 }, { x: 0, y: 800 }], color: '#67bccf' },
				{ p: [{ x: 800, y: 0 }, { x: 800, y: 400 }, { x: 600, y: 600 }, { x: 600, y: 200 }], color: '#cf3d61' },
				{ p: [{ x: 600, y: 200 }, { x: 600, y: 600 }, { x: 400, y: 400 }], color: '#f9f51a' },
				{ p: [{ x: 400, y: 400 }, { x: 600, y: 600 }, { x: 400, y: 800 }, { x: 200, y: 600 }], color: '#a594c0' },
				{ p: [{ x: 200, y: 600 }, { x: 400, y: 800 }, { x: 0, y: 800 }], color: '#fa8ccc' },
				{ p: [{ x: 800, y: 400 }, { x: 800, y: 800 }, { x: 400, y: 800 }], color: '#f6ca29' }
			]
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
				console.log(res);
			}
		});
	},
	onReady() {
		this.setup();
	},
	methods: {
		setup() {
			// #ifdef H5
			this.canvas = document.querySelector('#tangram canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = this.systemInfo.windowWidth * dpr;
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.scale(dpr, dpr);
			this.applyData(this.ctx);
			// #endif
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#tangram')
				.fields({ node: true, size: true })
				.exec(res => {
					console.log(res);
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].width * dpr;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					this.applyData(this.ctx);
				});
			// #endif
		},
		applyData(ctx) {
			this.tangram.map(plece => {
				return plece.p.map(coordinate => {
					if (coordinate.x === 200) {
						coordinate.x = this.systemInfo.windowWidth / 4;
					} else if (coordinate.x === 400) {
						coordinate.x = this.systemInfo.windowWidth / 2;
					} else if (coordinate.x === 600) {
						coordinate.x = (this.systemInfo.windowWidth / 4) * 3;
					} else if (coordinate.x === 800) {
						coordinate.x = this.systemInfo.windowWidth;
					}
					if (coordinate.y === 200) {
						coordinate.y = this.systemInfo.windowWidth / 4;
					} else if (coordinate.y === 400) {
						coordinate.y = this.systemInfo.windowWidth / 2;
					} else if (coordinate.y === 600) {
						coordinate.y = (this.systemInfo.windowWidth / 4) * 3;
					} else if (coordinate.y === 800) {
						coordinate.y = this.systemInfo.windowWidth;
					}
				});
			});
			for (var i = 0; i < this.tangram.length; i++) {
				this.draw(this.tangram[i], ctx);
			}
		},
		draw(plece, cxt) {
			cxt.beginPath();
			cxt.moveTo(plece.p[0].x, plece.p[0].y);
			for (var i = 1; i < plece.p.length; i++) {
				cxt.lineTo(plece.p[i].x, plece.p[i].y);
			}
			cxt.closePath();
			cxt.fillStyle = plece.color;
			cxt.fill();
		}
	}
};
</script>

<style></style>
