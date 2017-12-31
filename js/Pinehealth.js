
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
$(function(){

  var navButton = $('.nav-button')

  navButton.on('click', function(e) {
    e.preventDefault();
    // toggle nav state
    $('body').toggleClass('nav-visible')
  });
}); 




