
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      /**
      * owl carousel cloned prev/next blocks to allow infinite loop,
      * so you must to init canvas after every change
      * 
      * P.S. change event fires also on owl carousel init, so no need to init canvas before
      */
      onChanged: function(e) {
        progressSim('.my_canvas');
      },
      autoplay:true, 
      autoplayTimeout:3000, 
      autoplayHoverPause:true,
      loop:true,
      margin:20,
      nav:true,
      dots:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });
  });
  