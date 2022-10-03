$(document).ready(function(){
  $('.slideshow-container').slick({
    arrows: true
  });

  $('.slideshow-container').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(".dot").removeClass("active");
    let e = $(".dot")[currentSlide];
    $(e).addClass("active");
  });
});

function nextSlide() {
  $('.slideshow-container').slick("slickNext");
}

function prevSlide() {
  $('.slideshow-container').slick("slickPrev");
}

function goToSlide(n) {
  $('.slideshow-container').slick("slickGoTo", n);
}
