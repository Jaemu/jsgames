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
		context;

	var init = function(params){
		//This enables you to pass a js object
		//as an argument to your game loop and initializes variables based on them.
		this.defaults = $.extend(defaults, params || {});

		//Get the canvas element, grab the 2d context to be able to manipulate it from each of the helper functions
		this.canvas = document.getElementsByClassName('game');
	    this.context = this.canvas[0].getContext("2d");

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

	var draw = function() {
	  //define image drawing (read: context updating) logic here
	}

	//This return statement should contain a js object
	//of every "public" function for your module
	return{
		init: init,
		run: run
	};	


})();

$(document).ready(function(){
	var $this = $(this),
		local_defaults = {
			init1: 1,
			init2: 2,
			init3: 3
		};
	//initialize module
	var animloop = CanvasGame.init(local_defaults);

	//Register event listener on canvas element
	$this.on('click', '.game', function(e){
		animloop.run(e);
	});
});