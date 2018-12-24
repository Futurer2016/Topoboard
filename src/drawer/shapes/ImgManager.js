const {ajax} = require('../../base/utils');

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
ImgManager.prototype.load = function() {
    let self = this;
    this.readyState = STATE_RESOURCE_INFO_PRE_LOAD;
    this.onreadystatechange && this.onreadystatechange();
    ajax({
        url: this.imgJsonUrl,
        success: function(data) {
            self.data = data;
            let imgs = data.images;
            self.readyState = STATE_RESOURCE_INFO_READY;
            self.onreadystatechange && self.onreadystatechange();
            for(let key in imgs) {
                //创建图片
                self.imgs[imgs[key].name] = new Image();
                //加载图片
                self.imgs[imgs[key].name].src = imgs[key].url;
                //监听加载
                self.imgs[imgs[key].name].onload = function() {
                    self.count ++;
                    self.readyState = STATE_RESOURCE_LOADING;
                    self.onreadystatechange && self.onreadystatechange();
                    //加载完成
                    if(self.count == imgs.length) {
                        self.readyState = STATE_RESOURCE_READY;
                        self.onreadystatechange && self.onreadystatechange();
                    }
                }
            }
        }
    });
};

module.exports = ImgManager;