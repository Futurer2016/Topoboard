const { extend } = require('./inherit');
const ajax = require('./ajax');

//数据准备状态：0：请求未初始化；1：开始加载图片信息；2：已加载图片信息，开始加载图片；3：每加载一张图片调用一次；4：所有图片都加载完成
const STATE_INITIAL = 0;
const STATE_RESOURCE_INFO_PRE_LOAD = 1;
const STATE_RESOURCE_INFO_READY = 2;
const STATE_RESOURCE_LOADING = 3;
const STATE_RESOURCE_READY = 4;

/**
 * 图片加载管理器
 * @param imgJsonUrl
 * @constructor
 */
function ImgManager({imgJsonUrl, onreadystatechange}) {
    this.imgJsonUrl = imgJsonUrl;
    this.data;
    this.imgs = {};
    this.count = 0;
    this.readyState = STATE_INITIAL;
    this.onreadystatechange = onreadystatechange;
}

/**
 * 扩展静态常量
 */
extend(ImgManager, {
    STATE_INITIAL,
    STATE_RESOURCE_INFO_PRE_LOAD, STATE_RESOURCE_INFO_READY,
    STATE_RESOURCE_LOADING, STATE_RESOURCE_READY
});

extend(ImgManager.prototype, {
    load: function() {
        let _this = this;
        this.readyState = STATE_RESOURCE_INFO_PRE_LOAD;
        this.onreadystatechange && this.onreadystatechange();
        ajax({
            url: this.imgJsonUrl,
            success: function(data) {
                _this.data = data;
                let imgs = data.images;
                _this.readyState = STATE_RESOURCE_INFO_READY;
                _this.onreadystatechange && _this.onreadystatechange();
                for(let key in imgs) {
                    //创建图片
                    _this.imgs[imgs[key].name] = new Image();
                    //加载图片
                    _this.imgs[imgs[key].name].src = imgs[key].url;
                    //监听加载
                    _this.imgs[imgs[key].name].onload = function() {
                        _this.count ++;
                        _this.readyState = STATE_RESOURCE_LOADING;
                        _this.onreadystatechange && _this.onreadystatechange();
                        //加载完成
                        if(_this.count == imgs.length) {
                            _this.readyState = STATE_RESOURCE_READY;
                            _this.onreadystatechange && _this.onreadystatechange();
                        }
                    }
                }
            }
        });
    }
});

module.exports = ImgManager;