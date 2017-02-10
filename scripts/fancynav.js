$(document).ready(function() {

    var active1 = false;
    var active2 = false;
    var active3 = false;
    var active4 = false;
    
    var $sphere1 = $('.sphere-1');
    var $sphere2 = $('.sphere-2');
    var $sphere3 = $('.sphere-3');
    var $sphere4 = $('.sphere-mask');
    
    $sphere4.hover(function() {
            $(this).css({ 'background-color':'black'});
        }, function() {
            $(this).css({'background-color':'white'});
        })
    

    $('.mobile-nav-wrapper').click(function() {
        
        
        if (!active4) $sphere4.css({ 'background-color':'black'});
        else $sphere4.css({'background-color':'white'});  
        
        if ( $('.sphere-3').length ) {
            
            if (!active1) $sphere1.css({ 'transform':   'translate(0px,45px)'});
            else $sphere1.css({'transform': 'none'}); 

            if (!active2) $sphere2.css({ 'transform': 'translate(45px,45px)'});
            else $sphere2.css({ 'transform': 'none'});

            if (!active3) $sphere3.css({'transform': 'translate(45px,0px)'});
            else $sphere3.css({'transform': 'none'});

            active1 = !active1;
            active2 = !active2;
            active3 = !active3;
            active4 = !active4;
            
        } 
        else {
            if (!active1) $sphere1.css({ 'transform':   'translate(0px,45px)'});
            else $sphere1.css({'transform': 'none'}); 

            if (!active2) $sphere2.css({ 'transform': 'translate(45px,0px)'});
            else $sphere2.css({ 'transform': 'none'});

            active1 = !active1;
            active2 = !active2;
            active3 = !active3;
            active4 = !active4;
        }
    
    
      
    });
});
