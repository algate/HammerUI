<template>
	<view class="bg-black"><canvas style="width: 100vw;height: 100vh;" type="2d" canvas-id="grid" id="grid"></canvas></view>
</template>

<script>
function degToRad(deg) {
	return Math.PI / 180 * deg;
}
// let shapes;
class Shape {
	constructor(gen, x, y, size, rotation, shapes, sizeVariation, maxGeneration, ctx, c1, c2, c3) {
		this.generation = gen;
		this.size = size;
		this.rotation = -rotation;
		this.start = {
			x: x,
			y: y
		};
		this.end = {
			x_1: this.start.x + Math.cos(degToRad(this.rotation)) * this.size,
			y_1: this.start.y + Math.sin(degToRad(this.rotation)) * this.size,
			x_2: this.start.x + Math.cos(degToRad(this.rotation + 360 / 3)) * this.size,
			y_2: this.start.y + Math.sin(degToRad(this.rotation + 360 / 3)) * this.size,
			x_3: this.start.x + Math.cos(degToRad(this.rotation + 360 / 3 * 2)) * this.size,
			y_3: this.start.y + Math.sin(degToRad(this.rotation + 360 / 3 * 2)) * this.size
		};
		this.init(shapes, sizeVariation, maxGeneration, ctx, c1, c2, c3);
	}
	init(shapes, sizeVariation, maxGeneration, ctx, c1, c2, c3) {
		if (this.generation < maxGeneration) {
			var gen = this.generation + 1,
				newSize = this.size * sizeVariation,
				newRotation = this.rotation;
			shapes.push(
				new Shape(gen, this.end.x_1, this.end.y_1, newSize, newRotation, shapes, sizeVariation, maxGeneration, ctx, c1, c2, c3)
			);
			shapes.push(
				new Shape(gen, this.end.x_2, this.end.y_2, newSize, newRotation, shapes, sizeVariation, maxGeneration, ctx, c1, c2, c3)
			);
			shapes.push(
				new Shape(gen, this.end.x_3, this.end.y_3, newSize, newRotation, shapes, sizeVariation, maxGeneration, ctx, c1, c2, c3)
			);
		}
		this.draw(ctx, c1, c2, c3);
	}
	draw(ctx, c1, c2, c3) {
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.moveTo(this.start.x, this.start.y);
		ctx.lineTo(this.end.x_1, this.end.y_1);
		ctx.moveTo(this.start.x, this.start.y);
		ctx.lineTo(this.end.x_2, this.end.y_2);
		ctx.moveTo(this.start.x, this.start.y);
		ctx.lineTo(this.end.x_3, this.end.y_3);
		ctx.moveTo(this.start.x, this.start.y);
		ctx.closePath();
		ctx.strokeStyle = "rgba(" + c1 + "," + c2 + "," + c3 + "," + 1 / this.generation / 5 + ")";
		ctx.stroke();
	}
	
}
export default {
	data() {
		return {
			systemInfo: {},
			canvas: null,
			ctx: null,
			canvasWidth: 0,
			canvasHeight: 0,
			shapes: [],
			sizeVariation: null,
			iteration: 0,
			animationDirection: 1,
			sizeVariationRange: .15,
			baseRotation: 0,
			baseSize: 50,
			c1: 43,
			c1S: 1,
			c2: 205,
			c2S: 1,
			c3: 255,
			c3S: 1,
			
			PHI: (1 + Math.sqrt(5)) / 2, // 1.618033988749895
			maxGeneration: 6,
			// maxGeneration: (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) ? 5 : 6,
			frameDuration: 1000 / 60,
			duration: 3000,
			rotationSpeed: 0.3,
			totalIterations: Math.floor(3000/(1000/60)),
			maxBaseSize: 100,
			baseSizeSpeed: 0.02,
			
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
		console.log('onReady');
		this.canvas = null;
		this.ctx = null;
		this.iteration = 0;
		this.shapes = [];
		(window && this.stop) ? window.cancelAnimationFrame(this.stop) : clearTimeout(this.stop);
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
			this.canvas = document.querySelector('#grid canvas');
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = this.systemInfo.windowHeight * dpr;
			this.canvasWidth = this.systemInfo.windowWidth;
			this.canvasHeight = this.systemInfo.windowHeight;
			this.ctx = this.canvas.getContext('2d');
			// this.ctx.scale(dpr, dpr);
			this.animate();
			// #endif
			// #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#grid')
				.fields({ node: true, size: true })
				.exec(res => {
					console.log(res);
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].height * dpr;
					this.canvasWidth = res[0].width;
					this.canvasHeight = res[0].height;
					this.ctx = this.canvas.getContext('2d');
					this.ctx.scale(dpr, dpr);
					this.animate();
				});
			// #endif
		},
		animate() {
		    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
		    this.ctx.globalCompositeOperation = "destination-out";
		    this.ctx.fillStyle = "rgba(0,0,0,0.1)";
		    this.ctx.fillRect(0, 0, this.systemInfo.windowWidth, this.systemInfo.windowHeight);
		    this.ctx.globalCompositeOperation = "lighter";
			this.shapes = [];
		    this.shapes.push(
		        new Shape(0, this.canvasWidth / 2, this.canvasHeight / 2, this.baseSize, this.baseRotation,this.shapes, this.sizeVariation, this.maxGeneration, this.ctx, this.c1, this.c2, this.c3)
		    );
		    this.changeColor();
		    this.iteration++;
		    if (this.baseSize < this.maxBaseSize) this.baseSize += this.baseSizeSpeed;
		    this.baseRotation += this.rotationSpeed;
			// this.totalIterations = Math.floor(this.duration / this.frameDuration);
		    this.sizeVariation = this.easeInOutSine(
		        this.iteration,
		        1 - this.sizeVariationRange * this.animationDirection,
		        this.sizeVariationRange * 2 * this.animationDirection,
		        this.totalIterations
		    );
		    if (this.iteration >= this.totalIterations) {
		        this.iteration = 0;
		        this.animationDirection *= -1;
		    }
			// (window && window.requestAnimationFrame(this.animate)) || setTimeout(this.animate, 1000 / 60);
			this.stop = window ? window.requestAnimationFrame(this.animate) : setTimeout(this.animate, 1000 / 60);
		},
		easeInOutSine(currentIteration,startValue,changeInValue,totalIterations) {
		    return changeInValue / 2 * (1 - Math.cos(Math.PI * currentIteration / totalIterations)) + startValue;
		},
		changeColor() {
		    if (this.c1 == 0 || this.c1 == 255) this.c1S *= -1;
		    if (this.c2 == 0 || this.c2 == 255) this.c2S *= -1;
		    if (this.c3 == 0 || this.c3 == 255) this.c3S *= -1;
		    this.c1 += 1 * this.c1S;
		    this.c2 += 1 * this.c2S;
		    this.c3 += 1 * this.c3S;
		}
	}
};
</script>

<style></style>
