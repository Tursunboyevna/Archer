const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const sidebarClose = document.getElementById("sidebarClose");
const wrapper = document.getElementById("wrapper");




btn.onclick = function () {
    modal.style.display = "block";
    modal.style.width="100%"
}
span.onclick = function () {
    // modal.style.display = "none";
    modal.style.width="0%"
    $("#wrapper").style.width="0%"
    $("#wrapper").removeClass('toggled');
}

window.onclick = function (event) {
    if (event.target == modal) {
        // modal.style.display = "none";
        modal.style.width="0%"
                // modal2.style.display = "none";
    }
}

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
  
// $("#menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").addClass("toggled");   
// });

// $("#sidebarClose").click(function(e) {
//   $("#wrapper").removeClass("toggled");   

 
// });

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  // document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  // document.getElementById("main").style.marginLeft= "0";
}