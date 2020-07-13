<template>
	<view @touchmove="touchmove">
		<canvas style="background: #666;width: 100vw;height: 50vw;" type="2d" canvas-id="vector" id="vector"></canvas>
	</view>
</template>

<script>
import Vector from './vector/vector.js';
class Planet {
	constructor(x, y, g) {
		this.pos = new Vector(x, y);
		this.g = g;
	}
	draw(ctx) {
		ctx.fillStyle = '#aaa';
		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, 4, 0, Math.PI * 2);
		ctx.fill();
	}
}
// A line that is part of forming the text
class Particle {
	constructor(x, y, spikeLength) {
		this.pos = new Vector(x, y);
		this.vel = new Vector(0, spikeLength);
		this.spikeLength = spikeLength;
	}

	move(force) {
		if (force) {
			this.vel.addTo(force);
		}
		if (this.vel.getLength() > this.spikeLength) {
			this.vel.setLength(this.spikeLength);
		}
	}

	draw(ctx) {
		ctx.beginPath();
		ctx.moveTo(this.pos.x, this.pos.y);
		let p2 = this.pos.add(this.vel);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
	}
}
export default {
	data() {
		return {
			systemInfo: {},
			config: {
				text: 'Love',
				widthToSpikeLengthRatio: 0.054
			},
			colorConfig: {
				particleOpacity: 0.2,
				baseHue: 350,
				hueRange: 9,
				hueSpeed: 0.04,
				colorSaturation: 100,
			},
			
			canvas: null,
			ctx: null,
			w: 0, 
			h: 0,
			hue: null,
			particles: [],
			spikeLength: 0,
			planets: [],
			A: 0,
			B: 0,
			a: 0,
			b: 0,
			tick: 0
		};
	},
	onLoad() {
		uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
				console.log(this.systemInfo);
			}
		});
	},
	onReady() {
		this.setup();
	},
	methods: {
		setup() {
			this.tick = 0;
			let that = this;
			let len = Math.round(Math.random() * 3 + 3);
			for (let i = 0; i < len; i++) {
				let p = new Planet(50 + i * 100, 200, i ? 1000 : 2000);
				this.planets.push(p);
			}
			// #ifdef H5
			this.canvas = document.querySelector('#vector canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = (this.systemInfo.windowWidth / 2) * dpr;
			this.ctx = this.canvas.getContext("2d");
			// this.ctx.scale(dpr, dpr);
			this.reset();
			this.draw();
			// #endif
			
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#vector')
				.fields({ node: true, size: true })
				.exec(res => {
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].width / 2 * dpr;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					this.reset();
					this.draw();
				});
			// #endif
		},

		reset() {
			this.hue = this.colorConfig.baseHue;
			this.w = this.systemInfo.windowWidth;
			this.h = this.systemInfo.windowWidth / 2;
			
			this.spikeLength = this.w * this.config.widthToSpikeLengthRatio;
			this.A = this.w / 2.2;
			this.B = this.h / 2.2;
			this.a = Math.round(Math.random() + 2);
			this.b = Math.round(Math.random() + 2);
			this.drawText();
		},
		drawText() {
			let that = this;
			this.ctx.save();
			let fontSize = this.w * 0.2;
			this.ctx.font = 'bold ' + fontSize + 'px Arial, Helvetica, sans-serif';
			this.ctx.globalAlpha = 0.5;
			this.ctx.lineWidth = 1;
			this.ctx.strokeStyle = 'white';
			// this.ctx.fillStyle = '#fff';
			// 设置水平对齐方式
			/* textAlign    设置或返回文本内容的当前对齐方式
			    * start :    默认。文本在指定的位置开始。
			    * end   :    文本在指定的位置结束。
			    * center:    文本的中心被放置在指定的位置。
			    * left  :    文本左对齐。
			    * right :    文本右对齐。 */
			this.ctx.textAlign = "center";
			// 设置垂直对齐方式
			/* textBaseline     设置或返回在绘制文本时使用的当前文本基线   
			    * alphabetic ：   默认。文本基线是普通的字母基线。
			    * top        ：   文本基线是 em 方框的顶端。。
			    * hanging    ：   文本基线是悬挂基线。
			    * middle     ：   文本基线是 em 方框的正中。
			    * ideographic：   文本基线是em基线。
			    * bottom     ：   文本基线是 em 方框的底端。 */
			this.ctx.textBaseline = "middle";
			/* strokeText 基线位置 textAlign和textBaseline以基线来绘制 */
			// this.ctx.strokeText(this.config.text, this.w / 2, this.h / 2);
			this.ctx.strokeText(this.config.text, this.w / (2 * this.systemInfo.pixelRatio), this.h / (2 * this.systemInfo.pixelRatio), this.width);
			this.ctx.restore();
			uni.canvasGetImageData({
				canvasId: 'vector',
				x: 0,
				y: 0,
				width: Number(that.w),
				height: Number(that.h),
				success(res) {
					let imageData = res;
					for (let x = 0; x < that.w; x++) {
						for (let y = 0; y < that.h; y++) {
							let i = (x + that.w * y) * 4;
							let average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2] + imageData.data[i + 3]) / 4;
							if (average > 200) {
								let particle = new Particle(x, y, that.spikeLength);
								that.particles.push(particle);
							}
						}
					}
					that.clear();
				}
			});
			
		},
		// #ifdef H5
		touchmove(event) {
			console.log(event);
			let x = e.changedTouches[0].clientX;
			let y = e.changedTouches[0].clientY;
			this.planets[0].pos.x = x;
			this.planets[0].pos.y = y;
		},
		// #endif

		draw() {
			this.clear();
			(window && window.requestAnimationFrame(this.draw)) || setTimeout(this.draw);
			this.updateParticles();
			this.updatePlanets();
			this.tick++;
		},

		clear() {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		},

		// 球
		updatePlanets() {
			let len = this.planets.length;
			for (let i = 1; i < len; i++) {
				let angle = ((Math.PI * 2) / (len - 1)) * i;
				let x = this.A * Math.sin((this.a * this.tick) / 100 + angle) + this.w / 2;
				let y = this.B * Math.sin((this.b * this.tick) / 100 + angle) + this.h / 2;
				let p = this.planets[i];
				p.pos.x = x;
				p.pos.y = y;
				p.draw(this.ctx);
			}
		},
		// 颗粒
		updateParticles() {
			this.hue += this.colorConfig.hueSpeed;
			let h = Math.sin(this.hue) * this.colorConfig.hueRange + this.colorConfig.baseHue;
			
			this.ctx.strokeStyle = `hsla(${h}, ${this.colorConfig.colorSaturation}%, 50%, ${this.colorConfig.particleOpacity})`;
			this.particles.forEach(p => {
				// Apply the force of each planet (repeller) to the current particle
				this.planets.forEach(planet => {
					let d = p.pos.sub(planet.pos);
					let length = d.getLength();
					let g = planet.g / length;
					if (g > 40) {
						g = 40;
					}
					// We keep the angle of the distance
					d.setLength(g);
					p.move(d);
				});
				p.draw(this.ctx);
			});
		}
	}
};
</script>
