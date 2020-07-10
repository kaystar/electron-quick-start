document.getElementById("mybody").addEventListener("click", myFunction);
document.getElementById("mybody").addEventListener("keypress", myFunction2);


var vid = document.getElementById("myVideo");
var statusElement = document.getElementById("demo");
var currentlyPlaying = 1;
var currentlPlayingTime;

var src1 = "https://www.youtube.com/embed/7XhYS3WFt58?controls=0&autoplay=1&mute=0";
var src2 = "https://www.youtube.com/embed/_yhtJLlvnwE?autoplay=1&mute=0";
var src3 = "https://www.youtube.com/embed/y3RIHnK0_NE?autoplay=1&mute=0";

// document.getElementById("myButton").addEventListener("click", console.log("test"));

function myFunction() {
  currentlPlayingTime = vid.currentTime;
  if (currentlyPlaying === 1) {
      vid.src = src2;
      currentlyPlaying = 2;
      statusElement.innerText = 'Going to play video #2..';
      animate()
  } else {
      vid.src = src1;
      currentlyPlaying = 1;
      statusElement.innerText = 'Going to play video #1..';
      animate()
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
        animate()
    } 
    else if (currentlyPlaying === 3){
        vid.src = src1;
        currentlyPlaying = 1;
        statusElement.innerText = 'Going to play video #1'
        animate()
        // TweenMax.to("#controls", 2, {opacity:0, x:50});

    }
    else {
        vid.src = src2;
        currentlyPlaying = 1;
        statusElement.innerText = 'Going to play video #1..';
        animate()
    }
    // vid.load();
    vid.addEventListener('loadedmetadata', function () {
        vid.currentTime = currentlPlayingTime;
    }, false);
  }

  TweenMax.from("#controls", 1, {opacity:0, x:50, delay:1});

  function animate() {
    TweenMax.from("#demo", 0.75, {opacity:0, y:-25, delay:1});

  }
