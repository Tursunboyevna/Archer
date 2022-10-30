const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementById("close");
const sidebarClose = document.getElementById("sidebarClose");




btn.onclick = function () {
    modal.style.display = "block";
    modal.style.width="100%"
}


span.onclick = function () {
    modal.style.width="0%"
    $("#wrapper").style.width="0%"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.width="0%"
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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
        }
        al++;
      };
    })        
  }
  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

