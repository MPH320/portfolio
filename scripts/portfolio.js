var string = window.location.href;
var middleItem;
var firstItem;

var getit = new Array();
getit=string.split("?");
getit = unescape(getit[1]);

var itemOne = {
    title: 'Bloc-Jams',
    description: 'A digital music player built with jQuery, javascript, html and css.',
    artURL: 'assets/images/bloc-jams.png',
    pageURL: 'portfolio.html?Jams'
}

var itemTwo = {
    title: 'Camp Roanoke',
    description: 'A procedurally generated brawler for up to four players.',
    artURL: 'assets/images/roanoke.jpg',
    pageURL: 'portfolio.html?Roanoke'
}

var itemThree = {
    title: 'Bloc-Jams-Angular',
    description: 'Bloc Jams rebuilt using angular.',
    artURL: 'assets/images/bloc_jams_angular.png',
    pageURL: 'portfolio.html?3'
}

var itemFour = {
    title: 'Four',
    description: 'TSit ex vocibus legendos. Sed id liber atomorum. Dicat sapientem no eum. Mei prima definiebas eu, mel graecis corpora honestatis eu.',
    artURL: 'assets/images/thumbs/4.png',
    pageURL: 'portfolio.html?4'
}

var itemFive = {
    title: 'Five',
    description: 'Melius blandit nec ex. Qui omnes scaevola in, noster verterem quaerendum ut nam. At mel solet iracundia. Mel eu propriae iracundia, eum tation laoreet id. Iuvaret instructior id pro, ea per nisl offendit ocurreret.',
    artURL: 'assets/images/thumbs/5.png',
    pageURL: 'portfolio.html?5'
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
    
    if (getit == "Jams")
    {
        lastItem = 1;
    }
    else if(getit == "Roanoke")
    {
        lastItem = 2;
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

