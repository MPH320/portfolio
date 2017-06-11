var string = window.location.href;
var middleItem;
var firstItem;

var getit = new Array();
getit=string.split("?");
getit = unescape(getit[1]);

var itemOne = {
    title: 'Bloccit',
    description: 'Reddit clone built using Ruby on Rails.',
    artURL: 'assets/images/bloccit.jpg',
    pageURL: 'portfolio.html?bloccit',
		siteURL: 'https://mikesbloccit.herokuapp.com'
}

var itemTwo = {
    title: 'Angular Jams',
    description: 'A music app built using Angular.',
    artURL: 'assets/images/angular-jams.png',
    pageURL: 'portfolio.html?angularjams',
		siteURL: 'https://angular-jams.herokuapp.com/'
}

var itemThree = {
    title: 'HTMLShare',
    description: 'A collaborative HTML editing tool built using Meteor.',
    artURL: 'assets/images/htmlshare.jpg',
    pageURL: 'portfolio.html?htmlshare',
		siteURL: 'http://htmlshare.herokuapp.com/'
}

var itemFour = {
	title: 'Tweet Search',
    description: 'A tweet searcher built using PHP and Codebird to accesss the Twitter API.',
    artURL: 'assets/images/ts.jpg',
    pageURL: 'portfolio.html?tweetsearch',
		siteURL: 'http://tweetsearchphp.herokuapp.com/'
}

var itemFive = {
		title: 'Bloc-Jams',
    description: 'A digital music player built with jQuery, javascript, html and css.',
    artURL: 'assets/images/bloc-jams.png',
    pageURL: 'portfolio.html?jams',
		siteURL: 'http://the-bloc-jams.netlify.com/'
}

var itemSix = {
	title: 'Pong',
    description: 'Pong made with javascript animations.',
    artURL: 'assets/images/pong.jpg',
    pageURL: 'portfolio.html?pong',
		siteURL: 'http://mikespong.surge.sh/'
    
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
		$('.portfolio-img').attr("href", items[middleItem].siteURL);
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
    
    if (getit == "Bloccit" || getit === "undefined")
    {
        lastItem = 1;
    }
    else if(getit == "AngularJams")
    {
        lastItem = 2;
    }
	else if(getit == "HTMLShare")
    {
        lastItem = 3;
    }
	 else if(getit == "TweetSearch")
    {
        lastItem = 4;
    }
		else if(getit == "Jams")
    {
        lastItem = 5;
    }
		else if(getit == "Pong")
    {
        lastItem = 0;
    }
    else {
        lastItem = 1;
			
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

