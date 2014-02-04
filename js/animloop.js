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

var CanvasGame = (function($){

	//Global paramters for your game loop
	//The purpose of these is to hold references to your game elements
	//and things like jquery objects that are expensive to create on each loop
	var init1,
		init2,
		init3,
		$canvas,
		context;

	var init = function(params){
		//This enables you to pass a js object
		//as an argument to your game loop and initializes variables based on them.
		this.init1 = params.init1 || {};
		this.init2 = params.init2 || {};
		this.init3 = params.init3 || {};

		//Get the canvas element, grab the 2d context to be able to manipulate it from each of the helper functions
		this.canvas = document.getElementById("canvas-name");
	    this.context = canvas.getContext("2d");

	};

	var run = function(e){
		//Prevent the click event from performing its default behavior of propogating
		e.preventDefault();
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
        window.requestAnimFrame(loop);
    };
   var update = function() {
        //define position updating logic here
    }

	function draw() {
	  //define image drawing (read: context updating) logic here
	}

	//This return statement should contain a js object
	//of every "public" function for your module
	return{
		init: init,
		run: run
	};	


})(jQuery);

$(document).ready(function(){
	var params = {
		init1: 1,
		init2: 2,
		init3: 3
	};
	//initialize module
	var animloop = CanvasGame.init(params);

	//Register event listener on canvas element
	this.on('click', '.canvas', function(e){
		animloop.run(e);
	});
});