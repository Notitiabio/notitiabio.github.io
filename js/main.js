// Get the modal
//var modal = document.getElementById("myModal");

// Get the button that opens the modal

$(document).ready(function() {
  $('figure.person').click(function(event) {

    var modal = "#" + event.currentTarget.id + "-modal";
    var span = $("close");

    console.log(modal);

    //display modal
    $(modal).css("display", "block");

    //close modal with click outside modal
    $(modal).click(function() {
      $(modal).css("display", "none");
    });
  });

  $('section.pipeline').click(function(event) {
console.log("ehh");
    //display modal
    $(".nm108").css("display", "block");

    //close modal with click outside modal
    $(modal).click(function() {
      $(modal).css("display", "none");
    });
  });


});

var btn = document.getElementById("jeffrey");

//modal is name + modal
//var modal = btn+"-modal";

//console.log(modal);

/*

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/

