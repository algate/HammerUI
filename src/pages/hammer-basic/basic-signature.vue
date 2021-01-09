<template>
    <view class="canvas-sign">
        <!-- 签名组件 -->
        <view>
            <view class="signature">
                <canvas
                    style="width: 100vw;height: 50vw;"
                    class="mycanvas"
                    canvas-id="mycanvas"
                    id="mycanvas"
                    type="2d"
                    @touchstart="touchstart"
                    @touchmove="touchmove"
                    @touchend="touchend"
                ></canvas>
                <view class="footer">
                    <view class="right" @click="clear">清除</view>
                    <view class="left" @click="finish">保存</view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
var x = 20;
var y = 20;
export default {
    props: [],
    data() {
        return {
			systemInfo: {},
            showCanvas: false,
            canvas: null,
            ctx: "", //绘图图像
            points: [], //路径点集合
            signature: "",
            canvasIsBlank: false
        };
    },
    onLoad() {
		// #ifdef H5
        // 签名阻止事件
        document.addEventListener(
            "touchmove",
            function(e) {
                if (document.querySelector(".canvas-sign").contains(e.target)) {
                    e.preventDefault();
                }
            },
            { passive: false }
        );
        // #endif
        uni.getSystemInfo({
			success: res => {
				this.systemInfo = res;
				console.log(res);
			}
		});
        // 创建并显示画布
        // this.createCanvas();
    },
	onReady() {
		// 创建并显示画布
        this.createCanvas();
	},
    onUnload() {
		this.ctx = null;
	},
    methods: {
        //关闭并清空画布
        close: function() {
            this.showCanvas = false;
            this.clear();
        },
        //创建并显示画布
        createCanvas: function() {
            this.showCanvas = true;
			// #ifdef H5
            /* this.ctx = uni.createCanvasContext("mycanvas", this); //创建绘图对象
             */
            this.canvas = document.querySelector('#mycanvas canvas');
            console.log(this.canvas);
			const dpr = uni.getSystemInfoSync().pixelRatio;
			this.canvas.width = this.systemInfo.windowWidth * dpr;
			this.canvas.height = this.systemInfo.windowWidth / 2 * dpr;
            this.ctx = this.canvas.getContext('2d');
            //设置笔画粗细
            this.ctx.lineWidth = 3;
            this.ctx.lineCap = "round";
            this.ctx.lineJoin = "round";
            // #endif
            // #ifdef MP-WEIXIN
			const query = uni.createSelectorQuery();
			query
				.select('#mycanvas')
				.fields({ node: true, size: true })
				.exec(res => {
					console.log(res);
					this.canvas = res[0].node;
					const dpr = uni.getSystemInfoSync().pixelRatio;
					this.canvas.width = res[0].width * dpr;
					this.canvas.height = res[0].width / 2 * dpr;
					this.ctx = this.canvas.getContext('2d');
                    this.ctx.scale(dpr, dpr);
                    //设置笔画粗细
                    this.ctx.lineWidth = 3;
                    this.ctx.lineCap = "round";
                    this.ctx.lineJoin = "round";
				});
			// #endif
        },
        //触摸开始，获取到起点
        touchstart: function(e) {
            let startX = e.changedTouches[0].x;
            let startY = e.changedTouches[0].y;
            let startPoint = {
                X: startX,
                Y: startY,
            };
            this.points.push(startPoint);
            //每次触摸开始，开启新的路径
            this.ctx.beginPath();
        },

        //触摸移动，获取到路径点
        touchmove: function(e) {
            let moveX = e.changedTouches[0].x;
            let moveY = e.changedTouches[0].y;
            let movePoint = {
                X: moveX,
                Y: moveY,
            };
            this.points.push(movePoint); //存点
            let len = this.points.length;
            if (len >= 2) {
                this.draw(); //绘制路径
                this.canvasIsBlank = true;
            }
        },

        // 触摸结束，将未绘制的点清空防止对后续路径产生干扰
        touchend: function() {
            this.points = [];
        },

        /* ***********************************************
        #   绘制笔迹
        #	1.为保证笔迹实时显示，必须在移动的同时绘制笔迹
        #	2.为保证笔迹连续，每次从路径集合中区两个点作为起点（moveTo）和终点(lineTo)
        #	3.将上一次的终点作为下一次绘制的起点（即清除第一个点）
        ************************************************ */
        draw: function() {
            let point1 = this.points[0];
            let point2 = this.points[1];
            this.points.shift();
            this.ctx.moveTo(point1.X, point1.Y);
            this.ctx.lineTo(point2.X, point2.Y);
            this.ctx.stroke();
            // 在新版 Canvas 2D 接口与 Web 一致，是没有 draw 方法的
            // this.ctx.draw(true);
        },

        //清空画布
        clear: function() {
            this.canvasIsBlank = false;
            let that = this;
            uni.getSystemInfo({
                success: function(res) {
                    let canvasw = res.windowWidth;
                    let canvash = res.windowHeight;
                    that.ctx.clearRect(0, 0, canvasw, canvash);
                    // that.ctx.draw(true);     // 在新版 Canvas 2D 接口与 Web 一致，是没有 draw 方法的
                }
            });
        },
        //完成绘画并保存到本地
        finish: function() {
            if(!this.canvasIsBlank) {
                uni.showModal({
                    content: '先进行签名再保存',
                    showCancel: false
                })
                return;
            }
            let that = this;
            uni.canvasToTempFilePath({
                canvasId: "mycanvas",
                success: function(res) {
                    // 关闭画布
                    // that.close();
                    // 返回图片地址
                    console.log(res.tempFilePath);
                },
            });
        }
    }
};
</script>
<style>
.signature {
    position: fixed;
    z-index: 999;
}

page {
    background: #fff;
}

.container {
    padding: 20rpx 0 120rpx 0;
    box-sizing: border-box;
}

.title {
    height: 50rpx;
    line-height: 50rpx;
    font-size: 16px;
}

.mycanvas {
    /* width: 100%;
    height: calc(45vh - 200rpx); */
    background-color: #ececec;
}

.footer {
    font-size: 14px;
    height: 150rpx;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.left,
.right,
.close {
    line-height: 100rpx;
    height: 100rpx;
    width: 220rpx;
    text-align: center;
    font-weight: bold;
    color: white;
    border-radius: 5rpx;
}

.left {
    background: #007aff;
}

.right {
    background: orange;
}

.close {
    background: #a3a3a3;
}
</style>
