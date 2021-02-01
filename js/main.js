$(document).ready(function () {

  //open person modal
  $('figure.person').click(function (event) {
    toggleModal(event);
  });
  $('.definition').click(function(event) {
    toggleModal(event);
  });
  $('.contact-us').click(function(event) {
    toggleModal(event);
  });

  function toggleModal(myEvent) {
    var modal = "#" + myEvent.currentTarget.id + "-modal";

    $(modal).css("display", "block");

    $("span").click(function() {
      $(modal).css("display", "none");
    });

    //close modal with click outside modal
    /*
    $(modal).click(function (event) {
      console.log(event);
      if(event.target.classname == "person-modal-content") {

        return;
      }
      
      $(modal).css("display", "none");

    });
    */
  }

  // expanded progress bar info 
  $('.progress').click(function () {

    if ($(this).next().css("display") == "none") {
      $(this).next().css("display", "block");
    }
    else {
      $(this).next().css("display", "none");
    }
  });

  //open  nav
  $(".hamburger").click(function() {

    if($(".sidenav").css("width") == "0px"){
      $(".sidenav").css("width", "150px");
      $("main").css("margin-left", "150px");
    }
  });
  
  //collapse nav
  $("main").click(function() {

    if($(window).width() < 700 && $(".sidenav").css("width") == "150px") {
      console.log('here');

      $(".sidenav").css("width", "0px");
      $("main").css("margin-left", "0px");
      $(".hamburger").css("display", "block");
    }
  });
  


//scroll animation
//scroll animation
//scroll animation
/*
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
*/
//end of scroll animation
 document.addEventListener('aos:in:custom', ({ detail }) => {
  console.log('animated in', detail);
  transform: scale(.5);  
  //$("kid").css("width", "90%");
});

document.addEventListener('aos:out:custom', ({ detail }) => {
  console.log('animated out', detail);
  $("kid").css("width", "100%");
});


//slideshow
//slideshow
//slideshow
/*
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

$(".dot").click(function() {
  let slideNum = $(this).substring(4, 5)
  console.log(slideNum);
  currentSlide($);
});


function showSlides(n) {
  console.log("Current slide: " + n);
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-slide";
}
*/
});

//  http://api.edamam.com/auto-complete?q=rou&limit=10&app_id=$90aa6a3e&app_key=$24f01456634cdf030a22c0e6bb73f0a3



