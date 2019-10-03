import LayerModel from '../basic/LayerModel';

export default class Loading extends LayerModel {
  constructor(board, total) {
    super(board, 'loading-layer');
    this.total = total;
    this._init();
  }
  _init() {
    this._initGraph();
    this._initAni();
  }
  _initGraph() {
    this.loading = new Topoboard.graphs.Text({
      layer: this.layer,
      content: 'loading: 0/' + this.total,
      font: new TB.model.Font({fontSize: 18, fontFamily: '微软雅黑'}),
      style: '#f40'
    }).fill();
    this.loading.count = 0;
    this.loading.total = this.total;
    this.loading.text = 'loading: 0/' + this.total;
  }
  _initAni() {
    this.animation = new Topoboard.Animation(500);
    this.animation.onenterframe = () => {
      this.active();
    };
    
    let dot = 1;
    this.animation.addTask(() => {
      dot ++;
      if(dot >= 6) {
        dot = 1;
      }
      let str = new Array(dot).fill(1).reduce(prev => prev + '.', '');
      this.loading.dots = str;
      this.loading.content = this.loading.text + this.loading.dots;
      this.loading.refresh();
    });
  }
  update(count) {
    this.loading.count = count;
    this.loading.text = 'loading: ' + count + '/' + this.total;
    this.loading.content = this.loading.text + this.loading.dots;

    this.loading.refresh();
    this.active();
  }
  destroy() {
    this.animation.stop(), this.layer.remove();
  }
}