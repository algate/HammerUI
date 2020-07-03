<template>
	<view><canvas style="width: 100vw;height: 50vw;" type="2d" canvas-id="countdown" id="countdown"></canvas></view>
</template>

<script>
import digit from './countdown/digit.js';
console.log(digit);
export default {
	data() {
		return {
			systemInfo: {},
			canvas: null,
			ctx: null,

			WINDOW_WIDTH: 375,
			WINDOW_HEIGHT: 250,
			MARGIN_LEFT: 20,
			MARGIN_TOP: 10,
			RADIUS: 2,

			balls: [],
			currentDate: 0,
			newDate: 0,
			colors: ['#57a3e5', '#7e93cc', '#b785cc', '#cc69c7', '#becc7c', '#99ff87', '#ffd75c', '#ffBB00', '#ff9f79', '#cc6767']
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
				console.log(this.systemInfo);
			}
		});
		this.currentDate = new Date();
	},
	onReady() {
		this.setup();
	},
	methods: {
		setup() {
			// #ifdef H5
			this.canvas = document.querySelector('#countdown canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			// this.canvas.height = (this.systemInfo.windowHeight / 3) * dpr;
			this.canvas.height = this.systemInfo.windowWidth / 2 * dpr;
			this.WINDOW_WIDTH = this.systemInfo.windowWidth;
			// this.WINDOW_HEIGHT = this.systemInfo.windowHeight / 3;
			this.WINDOW_HEIGHT = this.systemInfo.windowWidth / 2;
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.scale(dpr, dpr);
			setInterval(()=>{
				this.clear(this.ctx);
				this.render(this.ctx);
				this.update(this.ctx);
			},100)
			
			// #endif
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#countdown')
				.fields({ node: true, size: true })
				.exec(res => {
					console.log(res);
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].width / 2 * dpr;
					this.WINDOW_WIDTH = res[0].width;
					this.WINDOW_HEIGHT = res[0].width / 2;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					setInterval(()=>{
						this.clear(this.ctx);
						this.render(this.ctx);
						this.update(this.ctx);
					},100)
				});
			// #endif
		},
		clear(ctx) {
			ctx.clearRect(0, 0, this.WINDOW_WIDTH, this.WINDOW_HEIGHT);
		},
		render(ctx) {
			this.newDate = new Date();
			var hours = this.newDate.getHours();
			var minutes = this.newDate.getMinutes();
			var seconds = this.newDate.getSeconds();

			this.renderDigit(this.MARGIN_LEFT, this.MARGIN_TOP, parseInt(hours / 10), ctx);
			this.renderDigit(this.MARGIN_LEFT + 15 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(hours % 10), ctx);
			this.renderDigit(this.MARGIN_LEFT + 30 * (this.RADIUS + 1), this.MARGIN_TOP, 10, ctx);
			this.renderDigit(this.MARGIN_LEFT + 39 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(minutes / 10), ctx);
			this.renderDigit(this.MARGIN_LEFT + 54 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(minutes % 10), ctx);
			this.renderDigit(this.MARGIN_LEFT + 69 * (this.RADIUS + 1), this.MARGIN_TOP, 10, ctx);
			this.renderDigit(this.MARGIN_LEFT + 78 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(seconds / 10), ctx);
			this.renderDigit(this.MARGIN_LEFT + 93 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(seconds % 10), ctx);
			for (var i = 0; i < this.balls.length; i++) {
				ctx.fillStyle = this.balls[i].color;
				ctx.beginPath();
				ctx.arc(this.balls[i].x, this.balls[i].y, this.RADIUS, 0, 2 * Math.PI, true);
				ctx.closePath();
				ctx.fill();
			}
		},
		renderDigit(x, y, num, ctx) {
			ctx.fillStyle = '#cf3d61';
			for (var i = 0; i < digit[num].length; i++) {
				for (var j = 0; j < digit[num][i].length; j++) {
					if (digit[num][i][j] == 1) {
						ctx.beginPath();
						ctx.arc(x + j * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), y + i * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), this.RADIUS, 0, 2 * Math.PI);
						ctx.closePath();
						ctx.fill();
					}
				}
			}
		},
		update(ctx) {
			this.newDate=new Date();
			var newHours = this.newDate.getHours();
			var newMinutes = this.newDate.getMinutes();
			var newSeconds = this.newDate.getSeconds();
			var curHours = this.currentDate.getHours();
			var curMinutes = this.currentDate.getMinutes();
			var curSeconds = this.currentDate.getSeconds();
			if (this.currentDate.getTime() != this.newDate.getTime()) {
				if (parseInt(curHours / 10) != parseInt(newHours / 10)) {
					this.addBalls(this.MARGIN_LEFT + 0, this.MARGIN_TOP, parseInt(curHours / 10));
				}
				if (parseInt(curHours % 10) != parseInt(newHours % 10)) {
					this.addBalls(this.MARGIN_LEFT + 15 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(curHours % 10));
				}

				if (parseInt(curMinutes / 10) != parseInt(newMinutes / 10)) {
					this.addBalls(this.MARGIN_LEFT + 39 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(curMinutes / 10));
				}
				if (parseInt(curMinutes % 10) != parseInt(newMinutes % 10)) {
					this.addBalls(this.MARGIN_LEFT + 54 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(curMinutes % 10));
				}

				if (parseInt(curSeconds / 10) != parseInt(newSeconds / 10)) {
					this.addBalls(this.MARGIN_LEFT + 78 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(curSeconds / 10));
				}
				if (parseInt(curSeconds % 10) != parseInt(newSeconds % 10)) {
					this.addBalls(this.MARGIN_LEFT + 93 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt(curSeconds % 10));
				}
				this.currentDate = this.newDate;
			}
			this.updateBalls();
		},
		addBalls(x, y, num) {
			for (var i = 0; i < digit[num].length; i++) {
				for (var j = 0; j < digit[num][i].length; j++) {
					if (digit[num][i][j] == 1) {
						var aBall = {
							x: x + j * 2 * (this.RADIUS + 1) + (this.RADIUS + 1),
							y: y + i * 2 * (this.RADIUS + 1) + (this.RADIUS + 1),
							g: 1.5 + Math.random(),
							//Math.pow(x,y)结果表示x的y次幂
							vx: Math.pow(-1, Math.ceil(Math.random() * 500)) * 6,
							vy: -3,
							color: this.colors[Math.floor(Math.random() * this.colors.length)]
						};
						this.balls.push(aBall);
					}
				}
			}
		},
		updateBalls() {
			for (var i = 0; i < this.balls.length; i++) {
				this.balls[i].x += this.balls[i].vx;
				this.balls[i].y += this.balls[i].vy;
				this.balls[i].vy += this.balls[i].g;
				if (this.balls[i].y >= this.WINDOW_HEIGHT - this.RADIUS) {
					this.balls[i].y = this.WINDOW_HEIGHT - this.RADIUS;
					this.balls[i].vy = -this.balls[i].vy * 0.25;
				}
			}
		}
	}
};
</script>

<style lang="scss">
	canvas {
		border: 1px solid #2dabff;
	}
</style>
