<template>
	<view>
		<view @tap="wareaTap" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend" @touchcancel="touchend"><canvas style="width: 100vw;height: 100vh;" type="2d" canvas-id="favorite" id="favorite"></canvas></view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="hammer-official-account">
			<ad-custom unit-id="adunit-4955e8ad7b01cc95"></ad-custom>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			systemInfo: {},
			canvas: null,
			ctx: null,
			stop: null,
			dots: [],
			warea: {
				x: null,
				y: null,
				max: 20000
			}
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
	onUnload() {
		// window.cancelAnimationFrame(this.stop)
		(window && this.stop) ? (window.cancelAnimationFrame(this.stop) ||
					window.webkitCancelAnimationFrame(this.stop)/* ||
					window.mozCancelAnimationFrame(this.stop) ||
					window.oCancelAnimationFrame(this.stop) ||
					window.msCancelAnimationFrame(this.stop) */) : clearTimeout(this.stop);
		this.canvas = null;
		this.ctx = null;
	},
	methods: {
		setup() {
			// #ifdef H5
			this.canvas = document.querySelector('#favorite canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = this.systemInfo.windowHeight * dpr;
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.scale(dpr, dpr);
			for (var i = 0; i < 300; i++) {
				var x = Math.random() * this.systemInfo.windowWidth;
				var y = Math.random() * this.systemInfo.windowHeight;
				var xa = Math.random() * 2 - 1;
				var ya = Math.random() * 2 - 1;

				this.dots.push({
					x: x,
					y: y,
					xa: xa,
					ya: ya,
					max: 3000
				});
			}
			// #endif
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#favorite')
				.fields({ node: true, size: true })
				.exec(res => {
					console.log(res);
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].height * dpr;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					for (var i = 0; i < 200; i++) {
						var x = Math.random() * res[0].width;
						var y = Math.random() * res[0].height;
						var xa = Math.random() * 2 - 1;
						var ya = Math.random() * 2 - 1;

						this.dots.push({
							x: x,
							y: y,
							xa: xa,
							ya: ya,
							max: 3000
						});
					}
				});
			// #endif
			setTimeout(() => {
				this.animate();
			}, 100);
		},
		wareaTap(e) {
			/* this.warea.x = e.detail.x;
			this.warea.y = e.detail.y; */
		},
		touchstart(e) {
			this.warea.x = e.changedTouches[0].clientX;
			this.warea.y = e.changedTouches[0].clientY;
		},
		touchmove(e) {
			this.warea.x = e.changedTouches[0].clientX;
			this.warea.y = e.changedTouches[0].clientY;
		},
		touchend(e) {
			this.warea.x = null;
			this.warea.y = null;
		},
		animate() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			// 将鼠标坐标添加进去，产生一个用于比对距离的点数组
			var ndots = [this.warea].concat(this.dots);

			this.dots.forEach(dot => {
				// 粒子位移
				dot.x += dot.xa;
				dot.y += dot.ya;

				// 遇到边界将加速度反向
				dot.xa *= dot.x > this.systemInfo.windowWidth || dot.x < 0 ? -1 : 1;
				dot.ya *= dot.y > this.systemInfo.windowHeight || dot.y < 0 ? -1 : 1;

				// 绘制点
				this.ctx.fillRect(dot.x - 0.5, dot.y - 0.5, 1, 1);

				// 循环比对粒子间的距离
				for (var i = 0; i < ndots.length; i++) {
					var d2 = ndots[i];

					if (dot === d2 || d2.x === null || d2.y === null) continue;

					var xc = dot.x - d2.x;
					var yc = dot.y - d2.y;

					// 两个粒子之间的距离
					var dis = xc * xc + yc * yc;

					// 距离比
					var ratio;

					// 如果两个粒子之间的距离小于粒子对象的max值，则在两个粒子间画线
					if (dis < d2.max) {
						// 如果是鼠标，则让粒子向鼠标的位置移动
						if (d2 === this.warea && dis > d2.max / 2) {
							dot.x -= xc * 0.03;
							dot.y -= yc * 0.03;
						}

						// 计算距离比
						ratio = (d2.max - dis) / d2.max;

						// 画线
						this.ctx.beginPath();
						this.ctx.lineWidth = ratio / 2;
						this.ctx.strokeStyle = 'rgba(0,171,152,' + (ratio + 0.5) + ')';
						this.ctx.moveTo(dot.x, dot.y);
						this.ctx.lineTo(d2.x, d2.y);
						this.ctx.stroke();
					}
				}

				// 将已经计算过的粒子从数组中删除
				ndots.splice(ndots.indexOf(dot), 1);
			});
			// console.log(window);
			// this.RAF(this.animate);
			this.stop = (window &&
				(window.requestAnimationFrame(this.animate) ||
					window.webkitRequestAnimationFrame(this.animate) ||
					window.mozRequestAnimationFrame(this.animate) ||
					window.oRequestAnimationFrame(this.animate) ||
					window.msRequestAnimationFrame(this.animate))) ||
				setTimeout(this.animate, 1000 / 60);
		}
	}
};
</script>

<style></style>
