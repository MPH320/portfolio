var resizeDelay = 1000;
var doResize = false;

$(document).ready(function()
{   
    $(window).resize(function() 
    {
      doResize = true;
    });
});

function getRandomWhite() 
{
  // creating a random number between 0 and 255
  var r = Math.floor(Math.random() * 255);
  var g = r;
  var b = r;
 
  // going from decimal to hex
  var hexR = r.toString(16);
  var hexG = g.toString(16);
  var hexB = b.toString(16);
 
  // making sure single character values are prepended with a "0"
  if (hexR.length == 1) 
  {
    hexR = "0" + hexR;
  }
 
  if (hexG.length == 1) 
  {
    hexG = "0" + hexG;
  }
 
  if (hexB.length == 1) 
  {
    hexB = "0" + hexB;
  }
 
  // creating the hex value by concatenatening the string values
  var hexColor = "#" + hexR + hexG + hexB;
   
  return hexColor.toUpperCase();
}

this.addEventListener("DOMContentLoaded", ready, true);

function ready(e) 
{
	var canvas;
	var canvasWidth;
	var canvasHeight;
	var ctx;
	var particles = [];
	 
	canvas = document.getElementById('my-Canvas');
	canvasWidth = window.innerWidth;
	canvasHeight = window.innerHeight;
	ctx = canvas.getContext('2d');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	
	Math.nRandom = function()
    {
		return Math.random() * 2 - 1;
	};
	
	var Particle = function() 
    {
		this.x = Math.random() * canvasWidth;
		this.y = Math.random() * canvasHeight;
		this.vx = Math.nRandom() * 100;
		this.vy = Math.nRandom() * 100;
		this.r = Math.random() * 2;
		this.dt = 0.025;
        //var color = getRandomColor();
        var color = getRandomWhite();

		this.update = function()
        {
			this.x += this.vx * this.dt;
			this.y += this.vy * this.dt;
		};
		 
		this.draw = function()
        {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
			ctx.closePath();
			ctx.fillStyle = color;
			ctx.fill();
		};
	};
	 
	function addParticles(nmbr) 
    {
		for(var i = 0; i < nmbr; i++) 
        {
			var p = new Particle;
			particles.push(p);
		};
	};
    
	addParticles(300);
	
	function redrawAndUpdate() 
    {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);	
		for (var i = 0; i < particles.length; i++) {
			 particles[i].update();
			 particles[i].draw();
		}
	}
    
    function reCanvas() 
    {
       canvasWidth = window.innerWidth;
	   canvasHeight = window.innerHeight;
	   canvas.width = canvasWidth;
	   canvas.height = canvasHeight;
	}
    
	setInterval(redrawAndUpdate, 50);
    
    var resizer = function () 
    {
      if (doResize) {
          reCanvas();
          addParticles(100);
          doResize = false;
      }
    };
    
    var resizerInterval = setInterval(resizer, resizeDelay);
    resizer();
}