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

  $(".hamburger").click(function() {

    if($(".sidenav").css("width") == "0px"){
      $(".sidenav").css("width", "150px");
      $("main").css("margin-left", "-150px");
    }
  });
});

//  http://api.edamam.com/auto-complete?q=rou&limit=10&app_id=$90aa6a3e&app_key=$24f01456634cdf030a22c0e6bb73f0a3



