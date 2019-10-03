import { createElement, addAreaBox, addBtn } from './dom';

let snapshot = (btnBox, board, imgViewBox) => {
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
  // gif录制
  let gifAni = new Topoboard.Animation();
  let addFrame = false;
  gifAni.onenterframe = function() {
      addFrame && gif && gif.addFrame(board.ctx, {copy: true, delay: 1000 / 60});
  };
  gifAni.start();

  let gif;
  addBtn(shotBox, '开始录制', e => {
    addFrame = ! addFrame;
    // 开始录制
    if(addFrame) {
      e.target.innerText = '结束录制';
      gif = new GIF({
        worker: 1,
        quality: 10,
        width: 512,
        height: 480
      });
      gif.on('finished', function(blob) {
        console.log('record finished');
        let data = URL.createObjectURL(blob);
        // 预览
        img.src = data;
        imgViewBox.appendChild(img);
        // 导出
        // download(data, 'board1');
      });
    }
    // 结束录制
    else {
      e.target.innerText = '开始录制';
      gif.render();
    }
  });
}

export default snapshot;