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
