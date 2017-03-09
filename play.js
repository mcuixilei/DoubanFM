var pause=document.getElementById('pause');
var start=document.getElementById('start');
var audio=document.getElementById('audio');
var jixu=document.getElementById('jixu');
var shijian=document.getElementById('shijian');
var jindu_=document.getElementById('jindu_');

var sound=document.getElementById('sound');
var yinliang_div=document.getElementById('yinliang_div');
var yinliang=document.getElementById('yinliang');
var shengyin=document.getElementById('shengyin');
function dingwei(event) {

    x_end = event.layerX-276;
    console.log(x_end);
    x_dur = jindu.clientWidth;
    console.log(x_dur);
    x_len = x_end / x_dur;
    console.log(x_len);
    if (x_len <= 0) {
        x_len = 0;
    } else if (x_len >= 1) {
        x_len = 1;
    } else {
        x_len = x_len;
    }

    jindu_.style.width = x_len * 100 + '%';
    //audio.currentTime = x_len * audio.duration;
    console.log(audio.currentTime);
    //jindu_cur();
}
jindu.onclick = dingwei;
sound.onmouseover=function(){
    sound.style.left='-65px';
    yinliang.style.visibility='visible';
    yinliang.style.width='100%';
    shijian.style.visibility='hidden';
};
sound.onmouseout=function (){
    sound.style.left='-3px';
    yinliang.style.visibility='hidden';
    yinliang.style.width='0%';
    setTimeout(function(){
        shijian.style.visibility='visible';
    },1000);

};

pause.onclick=function(){
    jixu.style.display='block'
    audio.pause();

};
start.onclick=function(){
    console.log('1');
    jixu.style.display='none';
    audio.play();

};


function show_jindu() {
    console.log('2');
    var tim1 = parseInt(audio.currentTime);
    var tim2 = parseInt(audio.duration);
    var s_time = tim2 - tim1;

    if (s_time % 60 < 10) {
        s_time = parseInt(s_time / 60) + ":0" + s_time % 60;
    } else {
        s_time = parseInt(s_time / 60) + ":" + s_time % 60;
    }

    shijian.innerHTML = '-' + s_time;
}


function jindu_cur() {

    jindu_.style.width = (audio.currentTime / audio.duration) * 100 + '%';

}
audio.addEventListener('loadedmetadata', function logg() {
    console.log('1');
    //song_start.style.display = "none";
    show_jindu();
    jindu_cur();

});
audio.ontimeupdate = function() {
    show_jindu();
    jindu_cur();


}



