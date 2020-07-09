document.getElementById("myButton").addEventListener("click", myFunction);
document.getElementById("mybody").addEventListener("keypress", myFunction2);

// function myFunction(){
//   console.log('asd');
// }

var vid = document.getElementById("myVideo");
var statusElement = document.getElementById("status");
var currentlyPlaying = 1;
var currentlPlayingTime;

var src1 = "C:\\Users\\rocke\\Downloads\\oscar.mp4";

var src2 = "C:\\Users\\rocke\\Downloads\\oscar2.mp4";

var src3 = "C:\\Users\\rocke\\Downloads\\oscar2.mp4";


document.getElementById("myButton").addEventListener("click", console.log("test"));

function myFunction() {
  currentlPlayingTime = vid.currentTime;
  if (currentlyPlaying === 1) {
      vid.src = src2;
      currentlyPlaying = 2;
      statusElement.innerText = 'Going to play video2..';
  } else {
      vid.src = src1;
      currentlyPlaying = 1;
      statusElement.innerText = 'Going to play video1..';
  }
  vid.load();
  vid.addEventListener('loadedmetadata', function () {
      vid.currentTime = currentlPlayingTime;
  }, false);
}

function myFunction2() {
    currentlPlayingTime = vid.currentTime;
    if (currentlyPlaying === 1) {
        vid.src = src2;
        currentlyPlaying = 3;
        statusElement.innerText = 'Going to play video3..';
    } else {
        vid.src = src1;
        currentlyPlaying = 1;
        statusElement.innerText = 'Going to play video1..';
    }
    vid.load();
    vid.addEventListener('loadedmetadata', function () {
        vid.currentTime = currentlPlayingTime;
    }, false);
  }