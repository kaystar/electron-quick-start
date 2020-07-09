document.getElementById("myButton").addEventListener("click", myFunction);
document.getElementById("mybody").addEventListener("keypress", myFunction2);

(function(){
    document.addEventListener('DOMContentLoaded', init, false);
    frameTwo();

    });
// function myFunction(){
//   console.log('asd');
// }

var vid = document.getElementById("myVideo");
var statusElement = document.getElementById("status");
var currentlyPlaying = 1;
var currentlPlayingTime;

var src1 = "https://www.youtube.com/embed/7XhYS3WFt58?controls=0";
var src2 = "https://www.youtube.com/embed/_yhtJLlvnwE";
var src3 = "https://www.youtube.com/embed/R2pIutTspQA";


document.getElementById("myButton").addEventListener("click", console.log("test"));

function myFunction() {
  currentlPlayingTime = vid.currentTime;
  if (currentlyPlaying === 1) {
      vid.src = src2;
      currentlyPlaying = 2;
      statusElement.innerText = 'Going to play video #2..';
  } else {
      vid.src = src1;
      currentlyPlaying = 1;
      statusElement.innerText = 'Going to play video #1..';
  }
//   vid.load();
  vid.addEventListener('loadedmetadata', function () {
      vid.currentTime = currentlPlayingTime;
  }, false);
}

function myFunction2() {
    currentlPlayingTime = vid.currentTime;
    if (currentlyPlaying === 1) {
        vid.src = src3;
        currentlyPlaying = 3;
        statusElement.innerText = 'Going to play video #3..';
    } 
    else if (currentlyPlaying === 3){
        vid.src = src1;
        currentlyPlaying = 1;
        statusElement.innerText = 'Going to paly video #1'
    }
    else {
        vid.src = src2;
        currentlyPlaying = 1;
        statusElement.innerText = 'Going to play video #1..';
    }
    // vid.load();
    vid.addEventListener('loadedmetadata', function () {
        vid.currentTime = currentlPlayingTime;
    }, false);
  }
  TweenMax.to(".myvideo", {rotation: 27, x: 100, duration: 1});

  function frameTwo() {
    TweenMax.set([
        myVideo,
      // glow2_1
    ], {opacity:1});
    TweenMax.set([myVideo], {opacity: 0}); 

    var tl = new TimelineMax({});
    tl.from([myVideo],  0.3, {x:70, opacity:0}, "+=0.4");

  }