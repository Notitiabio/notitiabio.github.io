$(document).ready(function () {

  //open person modal
  $('figure.person').click(function (event) {
    toggleModal(event);
  });
  $('.definition').click(function(event) {
    toggleModal(event);
  });

  function toggleModal(myEvent) {
    var modal = "#" + myEvent.currentTarget.id + "-modal";

    var span = $("close");
    $(modal).css("display", "block");

    //close modal with click outside modal
    $(modal).click(function () {
      $(modal).css("display", "none");

    });
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
    }
  })
  

/*
  //scroll
  $(window).on('scroll', function (e) {
    var top = $(window).scrollTop() + $(window).height(), isVisible = top > $('#asdf').offset().top;
 
    //$('#container').toggleClass('animate', isVisible);
    //console.log("hello");
 });
*/


//scroll animation
//scroll animation
//scroll animation
const html = document.documentElement;
const canvas = document.getElementById("lifestyle-video");
const context = canvas.getContext("2d");

const frameCount = 305;

const currentFrame = index => (`images/video/frame-${index.toString().padStart(3, '0')}.jpg`);


const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    console.log("am i ever here?");
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

$(window).scroll(function() {
  
  //if lower than hero, then scroll video
  if ($(this).scrollTop() > 500 && !breakpoint ) {
    $(".movie-container").css("position", "fixed");
     changeFrame();
  }
  // if above the hero
  if ($(this).scrollTop() < 400 && breakpoint ) {
    $(".movie-container").css("position", "relative");
     doOtherStuff();
  }

  

  
});

function changeFrame() {
  const scrollTop = html.scrollTop;
  
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
    );
  requestAnimationFrame(() => updateImage(frameIndex + 1))
}

function doStuff() {
  breakpoint = true;
  console.log('we passed the breakpoint, do stuff');
}
function doOtherStuff() {
  breakpoint = false;
  console.log('were above the breakpoint, do other stuff');
}



preloadImages()


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

});

//  http://api.edamam.com/auto-complete?q=rou&limit=10&app_id=$90aa6a3e&app_key=$24f01456634cdf030a22c0e6bb73f0a3



