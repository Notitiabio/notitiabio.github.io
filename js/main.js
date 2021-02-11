$(document).ready(function () {

  //open person modal
  $('figure.person').click(function (event) {
    toggleModal(event);
  });
  $('.definition').click(function(event) {
    toggleModal(event);
  });
  $('.contact-us').click(function(event) {
    // $(".modal").addClass("is-active");
    // $("html").addClass("is-clipped");
    toggleModal(event);
  });

  function toggleModal(myEvent) {
    var modal = "#" + myEvent.currentTarget.id + "-modal";

    $(modal).css("display", "block");

    $("span").click(function() {
      $(modal).css("display", "none");
    });
  }

  //open  nav
  $(".hamburger").click(function() {

    if($(".top-nav").css("right") != "0px") {
      $(".top-nav").css("right", "0px");
    }
    else {
      $(".top-nav").css("right", "-1000px");
    }
  });

  //open nav dropdown
  $(".dropdown").click(function() {
    $(".dropdown-content").css("display", "block");
  });
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown')) {
      $(".dropdown-content").css("display", "none");
      // var dropdowns = document.getElementsByClassName("dropdown-content");
      // var i;
      // for (i = 0; i < dropdowns.length; i++) {
      //   var openDropdown = dropdowns[i];
      //   if (openDropdown.classList.contains('show')) {
      //     openDropdown.classList.remove('show');
      //   }
      // }
    }
    if($(".top-nav").css("right") == "0px") {
      $(".top-nav").css("right", "-1000px");
    }
  }

  //open modal


  
 document.addEventListener('aos:in:custom', ({ detail }) => {
  console.log('animated in', detail);
  transform: scale(.5);  
  //$("kid").css("width", "90%");
});

document.addEventListener('aos:out:custom', ({ detail }) => {
  console.log('animated out', detail);
  $("kid").css("width", "100%");
});

//carousel
//carousel
//carousel
//carousel
const carousel = document.querySelector(".carousel");
const nextButton = document.querySelector(".carousel-control-next");
const prevButton = document.querySelector(".carousel-control-prev");
const carouselItems = document.querySelectorAll(".carousel-item");
const carouselImages = document.querySelectorAll(".carousel-item img");
const indicatorLi = document.querySelectorAll(".carousel-indicator-li");
const indicatorUl = document.querySelector(".carousel-indicators ul");
var itemCount = carouselItems.length;
var timeCount = 0;
var indicatorUlWidth = indicatorUl.offsetWidth;
var tempUrl = "";
var imgCounter = 0;
var timeInterval = 0;
var imgUrls = [];
var indicatorWidth = indicatorUlWidth/(itemCount+1.5);

carouselImages.forEach((item, i) => {
  imgUrls[i] = item.src;
});


window.addEventListener('resize',()=>{
  indicatorUlWidth = indicatorUl.offsetWidth;
  indicatorWidth = indicatorUlWidth/(itemCount+1.5);
  indicatorLi.forEach((item, i) => {
    item.style.width = indicatorWidth+"px";
    item.style.height = (indicatorWidth/1.777)+"px";
  });
});

indicatorLi.forEach((item, i) => {
  item.style.width = indicatorWidth+"px";
  item.style.height = (indicatorWidth/1.777)+"px";
  tempUrl = imgUrls[i];
  item.style.backgroundImage = "url('" + tempUrl + "')";
  item.addEventListener('click',()=>{
    removeActiveStatus();
    addActiveStatus(i);
    clearInterval(autoTimer);
  })
});

nextButton.addEventListener('click',() =>{
  var itemIndex = 0;
  carouselItems.forEach((item, i) => {
    if(item.classList.contains("active"))
    {
      itemIndex = i;
    }
  });
  removeActiveStatus();
  itemIndex++;
  if(itemIndex >= itemCount)
  {
    itemIndex = 0;
  }
  addActiveStatus(itemIndex);
});

prevButton.addEventListener('click',()=> {
  carouselItems.forEach((item, i) => {
    if(item.classList.contains("active"))
    {
      itemIndex = i;
    }
  });
  removeActiveStatus();
  itemIndex--;
  if(itemIndex < 0){
    itemIndex = itemCount-1;
  }
  addActiveStatus(itemIndex);
});

function removeActiveStatus(){
  carouselItems.forEach((item, i) => {
    item.classList.remove("active");
    indicatorLi[i].classList.remove("active");
  });
}

function addActiveStatus(target){
  carouselItems[target].classList.add("active");
  indicatorLi[target].classList.add("active");
}

});

// //require captcha 
// $("form").submit(function(event) {

//   var recaptcha = $("#g-recaptcha-response").val();
//   if (recaptcha === "") {
//      event.preventDefault();
//      alert("Please check the recaptcha");
//   }
// });

//  http://api.edamam.com/auto-complete?q=rou&limit=10&app_id=$90aa6a3e&app_key=$24f01456634cdf030a22c0e6bb73f0a3



