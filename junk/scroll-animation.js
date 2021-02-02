
//scroll animation
//scroll animation
//scroll animation

const html = document.documentElement;
const canvas = document.getElementById("lifestyle-video");
const context = canvas.getContext("2d");

const frameCount = 153;

const currentFrame = index => (`images/video/every-other/frame-${index.toString().padStart(3, '0')}.jpg`);


const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);


canvas.width=1920;
canvas.height=1080;

img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

var breakpoint = false;

var breakpoint1 = 2000;
var breakpoint2 = 50000;

$(window).scroll(function() {
  //if lower than hero, then scroll video
  if ($(this).scrollTop() > breakpoint1 && $(this).scrollTop() < breakpoint2 ) {
    $(".movie-container canvas").css("position", "fixed");
     changeFrame();
  }
  // if above the hero
  if ($(this).scrollTop() < breakpoint1) { // && breakpoint
    $(".movie-container canvas").css("position", "static");

     doOtherStuff();
  }
  if($(this).scrollTop() > breakpoint2) {
    $(".movie-container canvas").css("position", "static");
  }

  

  
});

function changeFrame() {
  let videoHeight = 9460;
  //scrolltop is top position of canvas
  const scrollTop = html.scrollTop;

  //end value 
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = (Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
    )); //- 64;

    // console.log("HTML scroll top: " + html.scrollTop);
    // console.log("Scroll Fraction: " + scrollFraction);
     console.log("Frame index: " + frameIndex);
    // console.log("max scroll top: " + maxScrollTop)

  requestAnimationFrame(() => updateImage(frameIndex + 1))
}

function doStuff() {
  console.log('we passed the breakpoint, do stuff');
}
function doOtherStuff() {
  breakpoint = false;
}



preloadImages()
