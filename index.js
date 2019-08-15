

function scrollTop(){
  $(".jumper").on("click", function( e ) {
    $(".topnav a:not(:first-child)").css("display", "none");
    e.preventDefault();

    $("body, html").animate({ 
        scrollTop: $( $(this).attr('href') ).offset().top 
    }, slow);
  });
}


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

