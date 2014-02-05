//Paul Irish's requestAnimationFrame polyfill
//http://www.paulirish.com/

window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame    ||
	      function( callback ){
	        window.setTimeout(callback, 1000 / 60);
	      };
})();

var CanvasGame = (function(){

	//Global paramters for your game loop
	//The purpose of these is to hold references to your game elements
	//and things like jquery objects that are expensive to create on each loop
	var defaults = {
		init1: {},
		init2: {},
		init3: {}
		},
		canvas,
		context,
		$container,
		height = 0,
		width = 0,
		particles;

	var init = function(params, e){
		e.preventDefault();
		//This enables you to pass a js object
		//as an argument to your game loop and initializes variables based on them.
		defaults = $.extend(defaults, params || {});

		//Get the canvas element, grab the 2d context to be able to manipulate it from each of the helper functions
		canvas = document.getElementById('game');
		$container = $('.canvas-container');

		//Set canvas height and width to size of container for responsive goodness
		canvas.height = 694;
		canvas.width = $container.innerWidth();
		console.log(canvas.height + ", " + canvas.width);
	    context = canvas.getContext("2d");

	    particles = [];
	    var color = "";
	    for(var i = 0; i < 3; i++) {
	        var sub = Math.floor(100 + Math.random() * 156).toString(16);
	        color += (sub.length == 1 ? "0" + sub : sub);
	    }
	    var count = 200;
	    var angle = (Math.PI * 2) / count;
	    while(count--) {
	     
	        var randomVelocity =  Math.random() * 5;
	        var particleAngle = count * angle;
	     
	        particles[200-count-1] = new Particle(
	            {x:e.offsetX, y:e.offsetY}, null,
	            {
	            x: Math.cos(particleAngle) * randomVelocity,
	            y: Math.sin(particleAngle) * randomVelocity
	            },'blue', true);
	        particles[200-count-1].setColor(color);
	      }
	      run(e);
	};

	var plotParticles = function(){
		var currentParticles = [];
          for (var i = 0; i < particles.length; i++) {
            var particle = particles[i];
            var pos = particle.pos;
         
            // If we're out of bounds, drop this particle and move on to the next
            if (pos.x <= 100 || pos.x >= canvas.width || pos.y <= 0 || pos.y >= canvas.height){
                continue;
            } 
            else{
                 // Move our particles
            particle.move();
         
            // Add this particle to the list of current particles
            currentParticles.push(particle);
          }
         
          // Update our global particles, clearing room for old particles to be collected   
        }      
        particles = currentParticles;
	};

	var drawParticles = function(){
		for (var i = 0; i < particles.length; i++) {
            context.fillStyle = particles[i].color;
            var position = particles[i].pos;
            context.fillRect(position.x, position.y, 4, 4);
        }
	};

	var run = function(e){
		//Replace this if with your halt condition
		//This can be replaced with a "while(true)", but this will have serious performance implications
		if(particles.length > 1)
		{       
		  //Private animation loop functions
		  
		  //Resets the canvas to its initial state	
          clear();
          //Update position of all elements on the canvas
          update();
          //Draw updated elements
          draw();
          //Add current context to the animation frame queue
          queue();
        }
        else{
           clear();
        }
	};

	var queue = function () {
		//Add the animation loop to the frame queue
        window.requestAnimFrame(run);
    };
   var update = function() {
        //define position updating logic here
        plotParticles();
    };

	var draw = function() {
	  //define image drawing (read: context updating) logic here
	  drawParticles();
	};

	var clear = function(){
		canvas.width = canvas.width;
	};

	
	//This return statement should contain a js object
	//of every "public" function for your module
	return{
		init: init
	};	


})();

$(document).ready(function(){
	var $this = $(this),
		local_defaults = {
			init1: 1,
			init2: 2,
			init3: 3,
			height: 694
		};	
	//initialize module

	//Register event listener on canvas element
	$this.on('click', '.canvas-container', function(e){
		var anim = CanvasGame.init(local_defaults, e);
	});
});