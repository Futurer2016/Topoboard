const {ajax} = require('../../base/utils');

/**
 * 图片加载管理器
 * @param imgJsonUrl
 * @constructor
 */
function ImgManager({imgJsonUrl, onreadystatechange}) {
    this.imgJsonUrl = imgJsonUrl;
    this.imgs = {};
    this.count = 0;
    //数据准备状态：0：请求未初始化；1：开始加载数据；2：已加载数据，开始加载图片；3：每加载一张图片调用一次；4：所有图片都加载完成
    this.readyState = 0;
    this.onreadystatechange = onreadystatechange;
}
ImgManager.prototype.load = function() {
    let self = this;
    this.readyState = 1;
    this.onreadystatechange && this.onreadystatechange();
    ajax({
        url: this.imgJsonUrl,
        success: function(data) {
            let imgs = data.images;
            self.readyState = 2;
            self.onreadystatechange && self.onreadystatechange();
            for(let key in imgs) {
                //创建图片
                self.imgs[imgs[key].name] = new Image();
                //加载图片
                self.imgs[imgs[key].name].src = imgs[key].url;
                //监听加载
                self.imgs[imgs[key].name].onload = function() {
                    self.count ++;
                    self.readyState = 3;
                    self.onreadystatechange && self.onreadystatechange();
                    //加载完成
                    if(self.count == imgs.length) {
                        self.readyState = 4;
                        self.onreadystatechange && self.onreadystatechange();
                    }
                }
            }
        }
    });
};

module.exports = ImgManager;