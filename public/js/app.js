console.log("I work!");

$(document).ready(function () {
  $('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $('.sidenav').sidenav();

  $('.modal').modal();
  $("#modal").on("click", function() {
    console.log("modal clicked")
  });
        

});



