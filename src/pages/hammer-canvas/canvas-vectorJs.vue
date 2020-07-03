<template>
	<view>
		<canvas style="background: #666;width: 100vw;height: 50vw;" type="2d" canvas-id="vector" id="vector"></canvas>
	</view>
</template>

<script>
import Vector from './vector/vector.js';
const config = {
	text: 'Love',
	widthToSpikeLengthRatio: 0.054
};

const colorConfig = {
	particleOpacity: 0.2,
	baseHue: 350,
	hueRange: 9,
	hueSpeed: 0.02,
	colorSaturation: 100,
};
class Planet {
	constructor(x, y, g) {
		this.pos = new Vector(x, y);
		this.g = g;
	}
	draw() {
		ctx.fillStyle = '#aaa';
		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, 4, 0, Math.PI * 2);
		ctx.fill();
	}
}

// A line that is part of forming the text
class Particle {
	constructor(x, y) {
		this.pos = new Vector(x, y);
		this.vel = new Vector(0, spikeLength);
	}

	move(force) {
		if (force) {
			this.vel.addTo(force);
		}
		if (this.vel.getLength() > spikeLength) {
			this.vel.setLength(spikeLength);
		}
	}

	draw() {
		ctx.beginPath();
		ctx.moveTo(this.pos.x, this.pos.y);
		let p2 = this.pos.add(this.vel);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
	}
}

let canvas;
let ctx;
let w, h;
let hue;
let particles;
let spikeLength;
let planets;
let A;
let B;
let a;
let b;
let tick;
export default {
	data() {
		return {
			systemInfo: {}
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
			tick = 0;
			planets = [];
			let len = Math.round(Math.random() * 3 + 3);
			let that = this;
			for (let i = 0; i < len; i++) {
				// let p = new Planet(50 + i * 100, 340, i ? 1000 : 4000);
				let p = new Planet(50 + i * 100, 200, i ? 1000 : 2000);
				planets.push(p);
			}
			// #ifdef H5
			canvas = document.querySelector('#vector canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			canvas.width = this.systemInfo.windowWidth * dpr;
			canvas.height = (this.systemInfo.windowWidth / 2) * dpr;
			ctx = canvas.getContext("2d");
			// ctx.scale(dpr, dpr);
			// window.addEventListener('resize', this.reset);
			// canvas.addEventListener("mousemove", this.mousemove);
			this.reset();
			that.draw();
			// #endif
			
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#vector')
				.fields({ node: true, size: true })
				.exec(res => {
					console.log(res);
					canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					canvas.width = res[0].width * dpr;
					canvas.height = res[0].width / 2 * dpr;
					ctx = canvas.getContext('2d');
					ctx.scale(dpr, dpr);
					that.reset();
					that.draw();
				});
			// #endif
		},

		reset() {
			hue = colorConfig.baseHue;
			w = this.systemInfo.windowWidth;
			h = this.systemInfo.windowWidth / 2;
			
			spikeLength = w * config.widthToSpikeLengthRatio;
			A = w / 2.2;
			B = h / 2.2;
			a = Math.round(Math.random() + 2);
			b = Math.round(Math.random() + 2);
			this.drawText();
		},
		drawText() {
			let that = this;
			ctx.save();
			let fontSize = w * 0.2;
			console.log(fontSize);
			ctx.font = 'bold ' + fontSize + 'px Arial, Helvetica, sans-serif';
			// ctx.textAlign = 'center';
			ctx.globalAlpha = 0.2;
			// ctx.textBaseline = 'middle';
			ctx.lineWidth = 1;
			ctx.strokeStyle = 'white';
			ctx.strokeText(config.text, w / 2 - fontSize * config.text.length / 2, h / 2 - fontSize / 2);
			// ctx.fillText(config.text, w / 2 - fontSize * config.text.length / 2, h / 2 - fontSize / 2);
			ctx.restore();
			
			particles = [];
			uni.canvasGetImageData({
				canvasId: 'vector',
				x: 0,
				y: 0,
				width: Number(w),
				height: Number(h),
				success(res) {
					let imageData = res;
					for (let x = 0; x < w; x++) {
						for (let y = 0; y < h; y++) {
							let i = (x + w * y) * 4;
							let average = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2] + imageData.data[i + 3]) / 4;
							if (average > 200) {
								let particle = new Particle(x, y);
								particles.push(particle);
							}
						}
					}
					that.clear();
				}
			});
			
		},
		// #ifdef H5
		mousemove(event) {
			let x = event.clientX;
			let y = event.clientY;
			planets[0].pos.x = x;
			planets[0].pos.y = y;
		},
		// #endif

		draw() {
			this.clear();
			let that = this;
			// #ifdef H5
			window.requestAnimationFrame(that.draw);
			// setTimeout(that.draw);
			// #endif
			// #ifdef MP-WEIXIN
			setTimeout(that.draw);
			// #endif
			this.updateParticles();
			this.updatePlanets();
			tick++;
		},

		clear() {
			ctx.clearRect(0, 0, w, h);
		},

		// 球
		updatePlanets() {
			let len = planets.length;
			for (let i = 1; i < len; i++) {
				let angle = ((Math.PI * 2) / (len - 1)) * i;
				let x = A * Math.sin((a * tick) / 100 + angle) + w / 2;
				let y = B * Math.sin((b * tick) / 100 + angle) + h / 2;
				let p = planets[i];
				p.pos.x = x;
				p.pos.y = y;
				p.draw();
			}
		},
		// 颗粒
		updateParticles() {
			hue += colorConfig.hueSpeed;
			let h = Math.sin(hue) * colorConfig.hueRange + colorConfig.baseHue;
			
			ctx.strokeStyle = `hsla(${h}, ${colorConfig.colorSaturation}%, 50%, ${colorConfig.particleOpacity})`;
			particles.forEach(p => {
				// Apply the force of each planet (repeller) to the current particle
				planets.forEach(planet => {
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
				p.draw();
			});
		}
	}
};
</script>
