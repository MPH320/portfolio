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

var sendEmail = function() {
	var text = $("textarea[name='text']").val();
	var email = $("input[name='email']").val();
	var senderName = $("input[name='name']").val();
	
	emailjs.send("gmail","template_dnkogWqP",{name: senderName, notes: text, email: email});
	$("#form-main").hide();
	$(".thanks").css("display","block");
};

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