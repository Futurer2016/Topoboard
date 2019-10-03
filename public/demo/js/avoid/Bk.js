import LayerModel from "../basic/LayerModel";

export default class Bk extends LayerModel {
  constructor(board, img) {
    super(board, 'bk-layer');
    this.img = img;
    // 背景图片
    this.graph = null;
    this._init();
  }
  _init() {
    this.graph = new Topoboard.graphs.Img({
      layer: this.layer,
      image: this.img
    }).draw();
  }
}