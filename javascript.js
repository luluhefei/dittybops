window.onscroll = function() {stickynav()};

var header = document.getElementById("header");
// using .hasOwnProperty("offsetTop") along with this sanity check allows you to safely get this value
var sticky = header && header.hasOwnProperty("offsetTop") ? header.offsetTop : 0;

function stickynav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(function() {
  var selectedClass = "";
  $(".filter").click(function(){
    selectedClass = $(this).attr("data-rel");
    $(".filter").removeClass('active');
    $(this).toggleClass('active');


    $("#merch-gallery").fadeTo(100, 0.1);
    $("#merch-gallery div").not("."+selectedClass).fadeOut().removeClass('animation');

    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('animation');
      $("#merch-gallery").fadeTo(300, 1);
    }, 300);
});
});
