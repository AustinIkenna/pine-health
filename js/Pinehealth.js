
// The following functions will be excuted whenever a scroll down occurs
// Hide firstHeader, 
// Move and fix the secondHeader to the top; 
// Displays logo on the secondHeader;
$(function(){

  $(window).on('scroll', function(event) {
    event.preventDefault();

    var scrollPage = $(window).scrollTop();

    if (scrollPage <= 50 ) {
      $("#firstHeader").show();
      $("#secondHeader").css({
        "top": "9.6%",
      });
      $("#secondHeader .logo").hide();          
    } else {
      $("#firstHeader").hide();
      $("#secondHeader").css({
        "top": "0%",
      });
      $("#secondHeader .logo").show();
    };
  });
});



// This function detects and adds and the .currentPage css styling to current pages
$(function(){
  $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {
      $(this).addClass('currentPage');
    }
  });
});  



// Mobile menu displays when menu icon is clicked
var navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", function (e) {
  e.preventDefault();

  // toggle nav state
  document.body.classList.toggle("nav-visible");
});



//Hide some links whenever the nav icon is clicked
$(function(){

// Ensures that Phone no and Login link is displayed on medium size screen whenever screen is resized
  $(window).on('resize', function(e) {
    /* Act on the event */
    var widthSize = $(window).width();

    if (widthSize >= 768) {
      $("#logIn").show();
      $(".hideOnClick").show();
    }   
  });
// Hide other links aside from login when nav icon is clicked
  $('.nav-button').on('click', function(e) {
    e.preventDefault();
    /* Act on the event */
    $(".hideOnClick").toggle();
  });
});

