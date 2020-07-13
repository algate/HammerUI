<template>
	<view class="bg-black" @tap.stop="tapEvent"><canvas style="width: 100vw;height: 100vh;" type="2d" canvas-id="effect" id="effect"></canvas></view>
</template>
<script>
// ball class
class Ball {
	constructor(x, y, radius, color) {
		this.x = x || 0;
		this.y = y || 0;
		this.vx = 0;
		this.vy = 0;
		this.sx = 1;
		this.sy = 1;
		this.radius = radius || 10;
		this.color = color || 'black';
	}

	draw(ctx, type) {
		if (['fill', 'stroke'].indexOf(type) == -1) {
			throw 'ball.draw need a right type';
		}
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.scale(this.sx, this.sy);
		ctx.fillStyle = this.color;
		ctx.strokeStyle = this.color;
		ctx.beginPath();
		ctx.arc(0, 0, this.radius, 0, (360 * Math.PI) / 180);
		ctx.closePath();
		type === 'fill' ? ctx.fill() : ctx.stroke();
		ctx.restore();
	}
}
export default {
	data() {
		return {
			systemInfo: {},
			canvas: null,
			ctx: null,
			count: 15,
			innerRadius: 30,
			outterRadius: 150,
			moreOutterRadius: 200,
			easing: 0.05,
			mcolor: ['#00ab9899', '#fd4f426e', '#8bff568f', '#e467f787'],
			opacticy: 0.6,
			balls: [],
			circle: null,
			stop: null
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
			}
		});
	},
	onReady() {
		this.setup();
	},
	methods: {
		setup() {
			// #ifdef H5
			this.canvas = document.querySelector('#effect canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = this.systemInfo.windowHeight * dpr;
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.scale(dpr, dpr);
			// this.animation(this.ctx);
			// #endif
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#effect')
				.fields({ node: true, size: true })
				.exec(res => {
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].height * dpr;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					// this.animation(this.ctx);
				});
			// #endif
		},
		tapEvent(e) {
			window ? window.cancelAnimationFrame(this.stop) : clearTimeout(this.stop);
			this.balls = [];
			this.circle = null;
			this.balls = this.getEnoughBall(this.count, e.changedTouches[0].clientX, e.changedTouches[0].clientY, this.canvas);
			this.circle = new Ball(e.changedTouches[0].clientX, e.changedTouches[0].clientY, this.innerRadius, '#00ab98');
			this.animation();
		},
		animation() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.balls.forEach(item => {
				item.draw(this.ctx, 'fill');
				// 缓动动画
				item.vx = (item.dx - item.x) * this.easing;
				item.vy = (item.dy - item.y) * this.easing;
				item.x += item.vx;
				item.y += item.vy;
				item.sx += -item.sx * this.easing;
				item.sy += -item.sy * this.easing;
			});
			this.circle.draw(this.ctx, 'stroke');
			this.circle.radius += (this.outterRadius - this.circle.radius) * this.easing;
			this.opacticy = this.opacticy - 0.6 * this.easing;
			this.circle.color = `rgba(244, 67, 54, ${this.opacticy})`;
			if (this.circle.radius > 148) {
				window ? window.cancelAnimationFrame(this.stop) : clearTimeout(this.stop);
				return;
			}
			this.stop = window ? window.requestAnimationFrame(this.animation) : setTimeout(this.animation, 1000 / 60);
		},
		getEnoughBall(num, mouseX, mouseY, canvas) {
			var balls = [];

			for (let i = 0; i < num; i++) {
				var ball = new Ball(0, 0, Math.random() * (40 - 5 + 1) + 5, this.mcolor[parseInt(Math.random() * 3)]);
				ball.x = mouseX + Math.random() * this.innerRadius - Math.random() * this.innerRadius;
				ball.y = mouseY + Math.random() * this.innerRadius - Math.random() * this.innerRadius;

				// 计算最终位置
				var x = mouseX - ball.x;
				var y = mouseY - ball.y;
				var scale = Math.abs(x / y);
				ball.dx = (((x < 0 ? 1 : -1) * this.moreOutterRadius) / Math.sqrt(scale * scale + 1)) * Math.random() * scale + mouseX;
				ball.dy = (((y < 0 ? 1 : -1) * this.moreOutterRadius) / Math.sqrt(scale * scale + 1)) * Math.random() + mouseY;

				balls.push(ball);
			}

			return balls;
		}
	}
};
</script>

<style></style>
