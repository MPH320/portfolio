var string = window.location.href;
var middleItem;
var firstItem;

var getit = new Array();
getit=string.split("?");
getit = unescape(getit[1]);

var itemOne = {
    title: 'Bloc-Jams',
    description: 'Lorem ipsum dolor sit amet, usu dicant tacimates dissentias ne, mei error principes no. Nulla consulatu suscipiantur mea eu, modo voluptatum ut mel. Dicat commodo adolescens te duo. Eam ut ubique appareat reprimique, ubique accumsan phaedrum no cum. Mei mollis aperiam eruditi no, movet noluisse his eu.',
    artURL: 'assets/images/bloc-jams.png',
    pageURL: 'portfolio.html?Jams'
}

var itemTwo = {
    title: 'Camp Roanoke',
    description: 'Sit an semper iriure fierent. Ne eam utinam democritum. Per diam clita ne. Sea et timeam pericula.',
    artURL: 'assets/images/roanoke.jpg',
    pageURL: 'portfolio.html?Roanoke'
}

var itemThree = {
    title: 'Three',
    description: 'Labore malorum lobortis eum in, mel ex dicat utroque invenire, quando periculis qui id. Duo minim accusamus in. Unum dicunt mediocritatem cum id, pri in omittam tractatos abhorreant. Ea enim quaeque mea.',
    artURL: 'assets/images/thumbs/3.png',
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

