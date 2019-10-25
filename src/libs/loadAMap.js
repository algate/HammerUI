let init = function(ak) {
    if (!ak) {
        ak = "6716fd3a383c57b3cf407f454dc97e27"

    }
    const AMapURL = 'https://webapi.amap.com/maps?v=1.4.15&key=' + ak + '&callback=onAMapCallback'
    return new Promise((resolve, reject) => {
        // 如果已加载直接返回
        if (typeof AMap !== 'undefined') {
            resolve(AMap);
            return true;
        }
        // 高德地图异步加载回调处理
        window.onAMapCallback = function() {
            console.log('高德地图脚本初始化成功...');
            resolve(AMap);
            return true;
        };
        // 插入script脚本
        let scriptNode = document.createElement('script')
        scriptNode.setAttribute('type', 'text/javascript')
        scriptNode.setAttribute('src', AMapURL)
        scriptNode.onload = scriptNode.onreadystatechange = function(e) {
            //!this.readyState支持谷歌和火狐  this.readyState == 'loaded' || this.readyState == 'complete'支持IE
            if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                console.log('加载中……');
            } else {
                return false;
            }
        }
        document.body.appendChild(scriptNode)
    })
}

export {
    init
}
