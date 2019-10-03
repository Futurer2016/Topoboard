import { addAreaBox, addBtn } from './dom';

let layerControl = (box, board) => {
  let layerBox = addAreaBox(box, '图层控制');
  board.layers.forEach(layer => {
    if(layer.className == 'loading-layer') {
      return;
    }
    let title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
    addBtn(layerBox, title, (e) => {
      layer.toggle();
      title = '图层-' + layer.className + '-' + (layer.visible? '显示': '隐藏');
      e.target.innerText = title;
    });
  });
}
export default layerControl;