
  (function ($) {
  
  "use strict";

    // Pre Loader Navbar
    
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // definir a duração entre colchetes   
    });

    // Link Personalizado

    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 350);
  }
});
    
  })(window.jQuery);


