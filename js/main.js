// Page Load Overlay


$(document).ready(function() {
  $('.overlay').delay(300).fadeOut('200');
});



// Espace ---------------------------------------



// Click on text to show more:

$(document).ready(function() {
  $(".title").click(function() {
    $(this).next().slideToggle();
  })
});




// Click on image to enlarge them, and display background overlay

$(document).ready(function() {
  $(".small").click(function() {
    $(this).toggleClass("large");
    $(".background").toggleClass("show");
  })
});







function makeFullScreen(divObj) {
  if (!document.fullscreenElement && // alternative standard method
    !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (divObj.requestFullscreen) {
      divObj.requestFullscreen();
    } else if (divObj.msRequestFullscreen) {
      divObj.msRequestFullscreen();
    } else if (divObj.mozRequestFullScreen) {
      divObj.mozRequestFullScreen();
    } else if (divObj.webkitRequestFullscreen) {
      divObj.webkitRequestFullscreen();
    } else {
      console.log("Fullscreen API is not supported");
    }

  } else {

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }

  }
}










// Projects  ---------------------------------------



// When click on view, go next:

$(document).ready(function() {
  $(".view").click(function() {
    $(this).addClass("hidden");
    $(this).prev().removeClass("hidden");
  })

});
