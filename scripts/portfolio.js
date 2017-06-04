var string = window.location.href;
var middleItem;
var firstItem;

var getit = new Array();
getit=string.split("?");
getit = unescape(getit[1]);

var itemOne = {
    title: 'Bloccit',
    description: 'Reddit clone built using ruby on rails.',
    artURL: 'assets/images/bloccit.jpg',
    pageURL: 'portfolio.html?bloccit'
}

var itemTwo = {
    title: 'Bloc-Jams-Angular',
    description: 'A music app built using angular.',
    artURL: 'assets/images/angular-jams.png',
    pageURL: 'portfolio.html?angularjams'
}

var itemThree = {
    title: 'Pong',
    description: 'Pong made with javascript animations.',
    artURL: 'assets/images/pong.jpg',
    pageURL: 'portfolio.html?pong'
}

var itemFour = {
    title: 'Bloc-Jams',
    description: 'A digital music player built with jQuery, javascript, html and css.',
    artURL: 'assets/images/bloc-jams.png',
    pageURL: 'portfolio.html?jams'
}

var itemFive = {
		title: 'Five',
    description: 'Lorem ipsum dolor sit amet, usu at aliquip consequat posidonium, possim eruditi dignissim vim ad. Ut sea verear expetenda maluisset, no mollis dolores conclusionemque mel.',
    artURL: 'assets/images/thumbs/5.png',
    pageURL: 'portfolio.html?0'
}

var itemSix = {
    title: 'Six',
    description: 'Lorem ipsum dolor sit amet, usu at aliquip consequat posidonium, possim eruditi dignissim vim ad. Ut sea verear expetenda maluisset, no mollis dolores conclusionemque mel. Duo in quaestio delicata. Quo ut propriae tractatos consequat, at vix porro dolores mandamus.',
    artURL: 'assets/images/thumbs/6.png',
    pageURL: 'portfolio.html?0'
}

var items = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];

var itemLength = items.length;

var lastItem;

var changeItems = function(){
    
	console.log(lastItem);
	
    if(lastItem==1)
    {
        middleItem = lastItem-1;
        firstItem = itemLength-1; 
    }
    else if (lastItem==0)
    {
        middleItem=itemLength-1;
        firstItem=middleItem-1;
    }
    else{
        middleItem = lastItem-1;
        firstItem = middleItem-1;
    }
    
    $('.one').attr("src", items[firstItem].artURL);
    $('.two').attr("src", items[middleItem].artURL);
    $('.three').attr("src", items[lastItem].artURL);
    
    $('h1.portfolio').text(items[middleItem].title);
    $('h2.portfolio').text(items[middleItem].description);
		$('.portfolio-img').attr("src", items[middleItem].artURL);
}

var last = function(){
    
     if(lastItem == 0)
    {
        lastItem = itemLength-1;
    }
    else{
        lastItem-=1;
    }
    
    changeItems();
}

var next = function(){
    
    if(lastItem == itemLength-1)
    {
        lastItem = 0;
    }
    else if(lastItem == 0) {
        lastItem = 1;
    }
    else{
        lastItem+=1;
    }
    
    changeItems();
}

var firstLink = function () {
    
    var temp = items[firstItem].pageURL; 
    window.location.href = temp;    
    string = temp;
    getit=string.split("?");
    getit = unescape(getit[1]);
    setActive();
}

var lastLink = function () {
    
    var temp = items[lastItem].pageURL; 
    window.location.href = temp;    
    string = temp;
    getit=string.split("?");
    getit = unescape(getit[1]);
    setActive();
}

var setActive = function(){
	
		console.log("Hey");
    
    if (getit == "Bloccit" || getit)
    {
        lastItem = 1;
    }
    else if(getit == "AngularJams")
    {
        lastItem = 2;
    }
	else if(getit == "Pong")
    {
        lastItem = 3;
    }
	 else if(getit == "Jams")
    {
        lastItem = 4;
    }
    else {
        lastItem = getit;
			
    }
}

$(document).ready(function() {
    
    $('.next').click(next);
    $('.last').click(last);
    $('.one').click(firstLink);
    $('.three').click(lastLink);
    
    setActive();
    changeItems();

});

