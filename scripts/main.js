var stopAnimation = function(thing) {
      $('span').on('animationend oanimationend webkitAnimationEnd', function () {
          $(this).removeClass('animated bazinga');
      });
}

var addSpans = function(thing) 
{
	thing.find("span").hover
    (
        function() 
        {
            $( this ).addClass('animated bazinga');
        }, function() {
            stopAnimation(this);
        }
    );
}

$(document).ready(function() 
{
    var $textToAnimate = $(".animated-text");
    
    $textToAnimate.each(function( index ) 
    {    
        $( this ).html( $( this ).html().replace(/./g, "<span>$&</span>").replace(/\s/g, " "));
        addSpans($( this ));
    });
    
    //remove animation from empty spaces
    $textToAnimate.find($("span:contains(' ')")).before( " " );
    $textToAnimate.find($("span:contains(' ')")).remove();
});