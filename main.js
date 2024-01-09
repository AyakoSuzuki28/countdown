'use strict';

{
  function check(){
    // 残り時間　＝　終了時刻　‐　現在時刻
    let countdown = endTime - new Date().getTime();
    // (3)タイマーの終了
    if (countdown < 0){
      clearInterval(intervalId);
      countdown = 3 * 1000;
      btn.disabled = false;
    }

    // ミリ秒を秒へ
    const totalSeconds = Math.floor(countdown / 1000);
    // 分
    const minutes = Math.floor(totalSeconds / 60);
    // 秒
    const seconds = totalSeconds % 60;

    const minutesFormatted = String(minutes).padStart(2,'0');
    const secondsFormatted = String(seconds).padStart(2,'0');
    
    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  const stopBtn = document.getElementById('stopBtn')
  const minutesInput = document.getElementById('minutes');
  let endTime;
  let intervalId;

  //(1) 終了時刻
    btn.addEventListener('click',() => {
      // 分数を整数として取得
      const minutes = parseInt(minutesInput.value,10);
      endTime = new Date().getTime() + minutes * 60 * 1000;

      btn.disabled = true;
      // (2)残り時間
      intervalId = setInterval(check,100);
    })

    // ストップボタン
    stopBtn.addEventListener('click',() =>{
      // タイマー停止
      clearInterval(intervalId);
      // スタートボタンを有効化
      btn.disabled = false;
      // タイマー表示のリセット
      timer.textContent = '00:00';
    })

}