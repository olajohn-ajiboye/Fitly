$(function() {
  // scroll to top
  $(".scroll-to-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });

  // burgor button change shape to x button
  $(".the-button").on("click", function() {
    $("html,body").toggleClass("overlay");
    $(this).toggleClass("transformed");
    $(".navbar-collapse").toggleClass("show");
    $(".navbar").toggleClass("navbar-show-mobile");
  });

  $("body").on("click", function(e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $("html,body").removeClass("overlay");
      $(".navbar-collapse").removeClass("show");
      $(".the-button").removeClass("transformed");
      $(".navbar").removeClass("navbar-show-mobile");
    }
  });
  $(".navbar").on("click", function(e) {
    e.stopPropagation();
  });

  // Owl Carousel - run only below 600px width
  $("#owl-slider").owlCarousel({
    dots: false,
    nav: false,
    loop: true,
    margin: 50,
    responsive: {
      0: {
        items: 1.2,
        margin: 20
      },
      768: {
        items: 1.8
      },
      1025: {
        items: 3,
        loop: false
      }
    }
  });
});
