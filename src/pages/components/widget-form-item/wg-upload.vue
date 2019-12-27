<template>
    <view v-if="element.type == 'imgupload'">
        <view class="hammer-box bg-white h-margin-top">
            <view class="sub-title">
                图片上传
                <!-- <span v-if="imgList.length > 0">
                    <span class="text-red" v-if="isWaiting">(有文件尚未上传)</span>
                    <span class="text-green" v-if="!isWaiting">(所有文件已上传)</span>
                </span> -->
            </view>
            <view class="action">
                {{imgList.length}}张
            </view>
        </view>
        <view class="bg-white">
            <view class="grid grid-col-4">
                <view class="bg-img-eq grid-item" v-for="(item,index) in imgList" :key="index"
                      :data-url="item">
                    <image :src="item" mode="aspectFill"></image>
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
                // isWaiting: false // 是否有等待上传的文件
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
                    sizeType: [/*'original', */'compressed'], //可以指定是原图还是压缩图，默认二者都有
                    // sourceType: ['album','camera'], //从相册选择,使用相机
                    success: (res) => {
                        console.log(res.tempFiles); // Array<Object>    图片的本地文件列表，每一项是一个 File 对象
                        console.log(res.tempFilePaths); // Array<String> 图片的本地文件路径列表
                        // this.imgList.push(res.tempFilePaths);
                        res.tempFilePaths.forEach(path => {
                            this.imgList.push(path);
                        });
                        this.imgList.forEach(img => {
                            console.log(img);
                            uni.compressImage({
                                src: img,
                                quality: 80,
                                success: res => {
                                    console.log(res);
                                    this.uploadedFiles.push(res.tempFilePath)

                                }
                            });
                        });
                    }
                });
            },
            getValue() {
                if (this.$props.element.type !== 'imgupload') {
                    return;
                }
                let data = {};
                // data[this.$props.element.model] = this.uploadedFiles;
                data[this.$props.element.model] = this.imgList;
                return data;
            }
        }
    }
</script>
