<template>
    <view v-if="element.type == 'imgupload'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">
                图片上传
                <span v-if="imgList.length > 0">
                    <span class="text-red" v-if="isWaiting">(有文件尚未上传)</span>
                    <span class="text-green" v-if="!isWaiting">(所有文件已上传)</span>
                </span>
            </view>
            <view class="action">
                {{imgList.length}}张
            </view>
        </view>
        <view class="bg-white">
            <view class="grid grid-col-4">
                <view class="bg-img-eq grid-item" v-for="(item,index) in imgList" :key="index"
                      :data-url="imgList[index]">
                    <image :src="imgList[index]" mode="aspectFill"></image>
                    <view class="hammer-close" @tap.stop="DelImg" :data-index="index">
                        <hammer-icon name="close"></hammer-icon>
                    </view>
                </view>
                <view class="bg-img-eq line-color location-icon" @tap="ChooseImage">
                    <hammer-icon name="camera-add"></hammer-icon>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    import imageCompress from '@/libs/image-compress.js';

    export default {
        name: 'WgUpload',
        props: {
            element: {
                type: Object
            },
            images: {
                type: Array
            }
        },
        data() {
            return {
                imgList: [],
                uploadedFiles: [], // 已上传的文件列表
                isWaiting: false // 是否有等待上传的文件
            }
        },
        mounted() {
            this.imgList = this.images || [];
            this.imgList.forEach((img, i) => {
               this.uploadedFiles.push({
                   name: `image___${i}`,
                   url: img
               });
            });
        },
        methods: {
            ViewImage(e) {
                uni.previewImage({
                    urls: this.imgList,
                    current: e.currentTarget.dataset.url
                });
            },
            DelImg(e) {
                uni.showModal({
                    content: '确定要删除此照片吗？',
                    cancelText: '取消',
                    confirmText: '确定',
                    success: res => {
                        if (res.confirm) {
                            this.imgList.splice(e.currentTarget.dataset.index, 1);
                            this.uploadedFiles.splice(e.currentTarget.dataset.index, 1);
                        }
                    }
                })
            },
            ChooseImage() {
                uni.chooseImage({
                    count: 4, //默认9
                    // sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
                    // sourceType: ['album'], //从相册选择
                    success: (res) => {
                        if (this.imgList.length !== 0) {
                            this.imgList = this.imgList.concat(res.tempFilePaths);
                        } else {
                            this.imgList = res.tempFilePaths
                        }
                        res.tempFilePaths.forEach(() => {
                            this.uploadedFiles.push({});
                        });
                        this.isWaiting = true;
                    }
                });
            },
            submit(index) {
                let that = this;
                if (index === this.imgList.length) {
                    uni.showToast({
                        title: '所有图片处理完毕'
                    });
                    this.isWaiting = false;
                    return;
                }
                uni.showLoading({
                    title: `正在处理第${index + 1}张图片`,
                    mask: true
                });
                if (this.uploadedFiles[index].url) {
                    // 当前文件已上传，不需要再次上传
                    console.log('图片存在');
                    this.submit(index + 1);
                    return;
                }
                imageCompress.compress(this.imgList[index]).then((data) => {
                    this.uploadedFiles[index] = data.base64;
                    setTimeout(function () {
                        uni.hideLoading();
                        that.submit(index + 1);
                    }, 100);
                });
            },
            getValue() {
                if (this.$props.element.type !== 'imgupload') {
                    return;
                }
                let data = {};
                if (this.imgList.length > 0 ) {
                    console.log('图片压缩');
                    this.submit(0);
                    console.log(this.uploadedFiles);
                    data[this.$props.element.model] = this.uploadedFiles;
                } else {
                    data[this.$props.element.model] = this.uploadedFiles;
                }
                return data;
            }
        }
    }
</script>
