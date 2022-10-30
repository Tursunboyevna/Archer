const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const sidebarClose = document.getElementById("sidebarClose");




btn.onclick = function () {
    modal.style.display = "block";
    modal.style.width="100%"
}
// btn2.onclick = function () {
//     modal.style.display = "block";
// }
// btn3.onclick = function () {
//     modal.style.display = "block";
// }


span.onclick = function () {
    // modal.style.display = "none";
    modal.style.width="0%"
    $("#wrapper").style.width="0%"
}
// span2.onclick = function () {
//     modal2.style.display = "none";
// }
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
  
  /* CANVAS JS */
  function progressSim(selector) {
    $(selector).each(function() {
      const $item = $(this);
  
      // prevent double initializetion of canvas
      if ($item.data('initilized') === true) {
        return;
      }
  
      const percent = $item.data('percent');
  
      let ctx = $item.get(0).getContext('2d'),
          cw = ctx.canvas.width,
          ch = ctx.canvas.height,
          al = 0,
          sim = setInterval(progress, 25);
  
      // mark already initialized canvases to prevent double init
      $item.data('initilized', true);
  
      function progress() {
        let start = 4.72,
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
  
        ctx.clearRect(0, 0, cw, ch);
        ctx.lineWidth = 7;
        ctx.fillStyle = '#000';
        ctx.strokeStyle = "#000";
        ctx.textAlign = 'center';
        ctx.font="30px Arial";
        ctx.fillText(al + '%', cw * .5, ch * .5 + 2, cw);
        ctx.beginPath();
        ctx.arc(80, 80, 70, start, diff / 10 + start, false);
        ctx.stroke();
        if (al >= percent) {
          clearTimeout(sim);
          // Add scripting here that will run when progress completes
        }
        al++;
      };
    })        
  }

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    // $("##sidebar-wrapper").style.right=0
    
    
});
// sidebarClose.click(function(e) {
//   e.preventDefault();
//  $(document).ready(function(){
//   $("button").click(function(){
//     $("p").hide(1000);
//   });
// });
  
// });
