$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.mobile-nav-wrapper').click(function() {
    
    if (!active1) $(this).find('.sphere-1').css({ 'transform': 'translate(0px,65px)'});
    else $(this).find('.sphere-1').css({'transform': 'none'}); 
        
     if (!active2) $(this).find('.sphere-2').css({ 'transform': 'translate(40px,40px)'});
    else $(this).find('.sphere-2').css({ 'transform': 'none'});
        
      if (!active3) $(this).find('.sphere-3').css({'transform': 'translate(65px,0px)'});
    else $(this).find('.sphere-3').css({'transform': 'none'});
        
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
      
    });
});