import { createElement, addAreaBox, addBtn } from './dom';
import gifRecord from './gifRecord';

let snapshot = (btnBox, board) => {
  // 注册页面按钮事件
  let shotBox = addAreaBox(btnBox, '快照');
  let img = createElement('img');
  addBtn(shotBox, '快照', e => {
    let data = board.snapshot();
    img.src = data;
    imgViewBox.appendChild(img);
  });
  addBtn(shotBox, '导出快照', e => {
    board.download();
  });
  gifRecord(shotBox, board.ctx, 20);
}

export default snapshot;