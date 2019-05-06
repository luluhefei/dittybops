window.onscroll = function() {stickynav()};

var header = document.getElementById("mystickynav");
var sticky = header.offsetTop;

function stickynav() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

// MDB filter
$(function() {
var selectedClass = "";
$(".filter").click(function(){
selectedClass = $(this).attr("data-rel");
$("#merch-gallery").fadeTo(100, 0.1);
$("#merch-gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
setTimeout(function() {
$("."+selectedClass).fadeIn().addClass('animation');
$("#merch-gallery").fadeTo(300, 1);
}, 300);
});
});
