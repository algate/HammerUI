let init = function(ak) {
    if (!ak) {
        ak = ""

    }
    const BMapURL = 'http://api.map.baidu.com/api?v=Lite&ak=' + ak + '&callback=onBMapCallback'
    return new Promise((resolve, reject) => {
        // 如果已加载直接返回
        if (typeof BMap !== 'undefined') {
            resolve(BMap);
            return true;
        }
        // 百度地图异步加载回调处理
        window.onBMapCallback = function() {
            console.log('百度地图脚本初始化成功...');
            resolve(BMap);
            return true;
        };
        // 插入script脚本
        let scriptNode = document.createElement('script')
        scriptNode.setAttribute('type', 'text/javascript')
        scriptNode.setAttribute('src', BMapURL)
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
