export default class Timer {
  constructor(imgs) {
    let bkLayer = board.newLayer('bk-layer');
    // 背景图片
    this.graph = new Topoboard.graphs.Img({
      layer: bkLayer,
      image: imgs.bg
    }).draw();
  }
}