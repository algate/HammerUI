<template>
	<view>
		<view class="bg-black" @touchmove.stop="tapEvent"><canvas style="width: 100vw;height: 100vh;" type="2d" canvas-id="move-effect" id="move-effect"></canvas></view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="hammer-official-account">
			<ad-custom unit-id="adunit-22979cc743faec19"></ad-custom>
		</view>
		<!-- #endif -->
	</view>
</template>
<script>
class Particle {
	constructor(x, y, color, emoji) {
		this.character = emoji;
		this.velocity = {
			x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 10),
			y: (-.4 + (Math.random() * -1))
		};
		this.color = color;
		this.position = { x: x, y: y };
		this.fontSize = 12;
		this.alpha = 1;
	}
	
	update(ctx) {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		this.velocity.x += (Math.random() < 0.5 ? -1 : 1) * 2 / 75;
		this.velocity.y -= Math.random() / 600;
		this.fontSize += 0.1;
		// 设置水平对齐方式
		/* textAlign    设置或返回文本内容的当前对齐方式
		 * start :    默认。文本在指定的位置开始。
		 * end   :    文本在指定的位置结束。
		 * center:    文本的中心被放置在指定的位置。
		 * left  :    文本左对齐。
		 * right :    文本右对齐。*/
		ctx.textAlign = "center";
		// 设置垂直对齐方式
		/* textBaseline     设置或返回在绘制文本时使用的当前文本基线   
		 * alphabetic ：   默认。文本基线是普通的字母基线。
		 * top        ：   文本基线是 em 方框的顶端。。
		 * hanging    ：   文本基线是悬挂基线。
		 * middle     ：   文本基线是 em 方框的正中。
		 * ideographic：   文本基线是em基线。
		 * bottom     ：   文本基线是 em 方框的底端。 */
		ctx.textBaseline = "middle";
		ctx.fillStyle = this.color;
		ctx.globalAlpha = this.alpha - 0.1;
		ctx.font = this.fontSize + 'px Arial, Helvetica, sans-serif';
		if(this.position.y > 0 && this.alpha > 0) {
			ctx.fillText(this.character, this.position.x, this.position.y);
		}
	}
}
export default {
	data() {
		return {
			systemInfo: {},
			emojis: ["o"],
			// emojis: ["❄️","❅","❆","☁","☀","☼"],
			colors: ["#f37b1d", "#8dc63f", "#1cbbb4", "#e03997", "#8799a3"],
			canvas: null,
			ctx: null,
			stop: null,
			particles: []
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
	onUnload() {
		(window && this.stop) ? window.cancelAnimationFrame(this.stop) : clearTimeout(this.stop);
		this.canvas = null;
		this.ctx = null;
	},
	methods: {
		setup() {
			// #ifdef H5
			this.canvas = document.querySelector('#move-effect canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = this.systemInfo.windowHeight * dpr;
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.scale(dpr, dpr);
			document.addEventListener('mousemove', this.onMouseMove);
			this.animation();
			// #endif
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#move-effect')
				.fields({ node: true, size: true })
				.exec(res => {
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].height * dpr;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					this.animation();
				});
			// #endif
		},
		animation() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.updateParticles();
			// window ? window.requestAnimationFrame(this.animation) : setTimeout(this.animation, 1000 / 60);
			this.stop = window ? window.requestAnimationFrame(this.animation) : setTimeout(this.animation, 1000 / 60);
		},
		onMouseMove(e) {
			var x = e.clientX;
			var y = e.clientY;
			this.addParticle(x, y, this.colors[Math.floor(Math.random() * this.colors.length)], this.emojis[Math.floor(Math.random() * this.emojis.length)]);
		},
		tapEvent(e) {
			this.addParticle(e.changedTouches[0].clientX, e.changedTouches[0].clientY, this.colors[Math.floor(Math.random() * this.colors.length)], this.emojis[Math.floor(Math.random() * this.emojis.length)]);
		},
		updateParticles() {
			if(this.particles.length === 0) {
				return;
			}
			// Updated
			for (let i = 0; i < this.particles.length; i++) {
				this.particles[i].update(this.ctx);
			}
			// Remove dead particles
			for (let i = this.particles.length - 1; i >= 0; i--) {
				if (this.particles[i].position.y < 0 || this.particles[i].alpha <= 0) {
					this.particles.splice(i, 1);
				}
			}
		},
		addParticle(x, y, color, emoji) {
			var particle = new Particle(x, y, color, emoji);
			this.particles.push(particle);
		}
	}
};
</script>

<style></style>
