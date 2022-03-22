
const lowRider = document.querySelector('.low-rider');
const leverage = document.querySelector('.leverage');
const stop = document.querySelector('#stop');
const ff = document.querySelector('#ff');
const slo = document.querySelector('#slo');
const normal = document.querySelector('#normal');
const pick = document.querySelector('#pick');

lowRider.src = "a/money.mp3";
lowRider.load();

lowRider.volume = 0.5;

leverage.volume = 0.5;

stop.addEventListener('click', (e)=> {
    lowRider.pause();
    lowRider.currentTime = 0;
});
ff.addEventListener('click', (e)=> {
    lowRider.playbackRate = 2 ;
   // lowRider.currentTime = 0;
});

slo.addEventListener('click', (e)=> {
    lowRider.playbackRate = .3 ;
    //lowRider.currentTime = 0;
});

normal.addEventListener('click', (e)=> {
    lowRider.playbackRate = 1 ;
});

pick.addEventListener('change', (e)=> {
    let time = lowRider.currentTime;
    lowRider.src = e.target.value;
    lowRider.load();
    lowRider.play();
    lowRider.currentTime = time;

});
