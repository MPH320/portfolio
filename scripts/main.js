var addSpans = function(thing) 
{
	thing.find(".letter").hover
    (
        function() 
        {
            var $thisLetter = $( this );
            
            $thisLetter.addClass('animated bazinga');
            
            setTimeout(function(){ 

                $thisLetter.removeClass('animated bazinga');

            }, 1000);
              
        }
    );
}

$(document).ready(function() 
{
    var $textToAnimate = $(".animated-text");
    
    $textToAnimate.each(function( index ) 
    {    
        $( this ).html( $( this ).html().replace(/./g, "<span class=\"letter\">$&</span>").replace(/\s/g, " "));
        addSpans($( this ));
    });
    
    //remove animation from empty spaces
    $textToAnimate.find($("span:contains(' ')")).before( " " );
    $textToAnimate.find($("span:contains(' ')")).remove();
});