/**
 * 压缩图片
 * @param imageUrl 图片路径
 * @returns {Promise<any>}base64编码
 */
const compress = (imageUrl) => {
    return new Promise((resolve, reject) => {
        if (!Image || !imageUrl) {
            reject({
                error: '当前浏览器不支持Image对象，或者图片路径为空。'
            });
            return;
        }
        let image = new Image();
        image.src = imageUrl;
        image.onload = () => {
            let canvas = document.createElement('canvas');
            let ctx = canvas.getContext('2d');
            let width = document.createAttribute('width');
            let height = document.createAttribute('height');
            width.nodeValue = image.width || '0';
            height.nodeValue = image.height || '0';
            canvas.setAttributeNode(width);
            canvas.setAttributeNode(height);
            ctx.drawImage(image, 0, 0, image.width, image.height);
            let compressedBase64 = canvas.toDataURL('image/jpeg', 0.1);
            resolve({
                base64: compressedBase64
            });
        };
        image.onerror = () => {
            reject({
                error: '图片解析失败'
            });
        }
    })
};

module.exports.compress = compress;
