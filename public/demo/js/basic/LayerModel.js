export default class LayerModel {
  constructor(board, className) {
    this.board = board;
    this.layer = board.newLayer(className);
    this.hide();
  }
  show() {
    this.layer.show();
  }
  hide() {
    this.layer.hide();
  }
  active() {
    this.layer.refresh(); // 图层存在动画, 需要刷新
    this.board.refresh(); // 画板存在动画, 需要刷新
  }
  doAni() {
    this.animation && this.animation.start();
  }
  stopAni() {
    this.animation && this.animation.stop();
  }
}