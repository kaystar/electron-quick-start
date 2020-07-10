document.getElementById("mybody").addEventListener("click", clickFunction);
document.getElementById("mybody").addEventListener("keypress", keyFunction);


var vid = document.getElementById("myVideo");
var statusElement = document.getElementById("demo");
var currentlyPlaying = 1;
var currentlPlayingTime;

var src1 = "https://www.youtube.com/embed/7XhYS3WFt58?controls=1&autoplay=1&mute=0";
var src2 = "https://www.youtube.com/embed/I-EIVlHvHRM?autoplay=1&mute=0";
var src3 = "https://www.youtube.com/embed/y3RIHnK0_NE?autoplay=1&mute=0";

// document.getElementById("myButton").addEventListener("click", console.log("test"));

function clickFunction() {
  currentlPlayingTime = vid.currentTime;
  if (currentlyPlaying === 1) {
      vid.src = src2;
      currentlyPlaying = 2;
      statusElement.innerText = 'Mouse clicked! Playing video #2';
      animate()
  }
  else if (currentlyPlaying === 2){
    vid.src = src1;
    currentlyPlaying = 1;
    statusElement.innerText = 'Mouse clicked! playing video #1'
    animate()
    // TweenMax.to("#controls", 2, {opacity:0, x:50});

}
  else {
      vid.src = src1;
      currentlyPlaying = 1;
      statusElement.innerText = 'Mouse clicked! Playing video  #1';
      animate()
  }
//   vid.load();
  vid.addEventListener('loadedmetadata', function () {
      vid.currentTime = currentlPlayingTime;
  }, false);
}

function keyFunction() {
    currentlPlayingTime = vid.currentTime;
    if (currentlyPlaying === 1) {
        vid.src = src3;
        currentlyPlaying = 3;
        statusElement.innerText = 'Keypress! Playing video #3';
        animate()
    } 
    else if (currentlyPlaying === 3){
        vid.src = src1;
        currentlyPlaying = 1;
        statusElement.innerText = 'Keypress! playing video #1'
        animate()
        // TweenMax.to("#controls", 2, {opacity:0, x:50});

    }
    else {
        vid.src = src1;
        currentlyPlaying = 1;
        statusElement.innerText = 'Keypress! playing video #1';
        animate()
    }
    // vid.load();
    vid.addEventListener('loadedmetadata', function () {
        vid.currentTime = currentlPlayingTime;
    }, false);
  }

//   GSAP animation controls
  TweenMax.from("#status", 1, { opacity: 0, x:-50, delay: 1.25});
  TweenMax.from("#controls", 1, {opacity:0, x:50, delay:1});

  function animate() {
    TweenMax.from("#demo", 0.5, {opacity:0, x:-25, delay:1});

  }
