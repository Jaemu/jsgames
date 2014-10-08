/*
To do -- make a scratcher game.  
*/
var MPiece = (function($, createjs, hogan){
	
		var defaults = {
			thing : 'hi'
		};

		var carousel, stage, shape, domElement, particle, painting;
		var cover = [];
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.setFPS(30);


		var init = function(params){
			defaults = $.extend(defaults, params, {});
			defaults.template = hogan.compile('../views/game.mustache');
			/*$('#carousel').on('mouseup', this.handleClick)
			.on('mouseover', clearCanvas)
			.on('mouseout', handleClick);
			*/
			$(document).on('ready', onLoad);
		};

		var onLoad = function(e){
			/*shape.graphics.beginFill('rgba(255,255,0,1)').drawRoundRect(0, 0, 120, 120, 10);
			stage.addChild(shape);
			stage.update();
			*/

			canvas = document.getElementById('canvas');
			canvas.width = $('.canvas-container').width();
			canvas.height = $('.canvas-container').height();
			stage = new createjs.Stage(canvas);
			stage.enableDOMEvents(true);
			stage.enableMouseOver(60);
			shape = new createjs.Shape();
			var i = 0;
			for(i; i < canvas.height; i+=20){
				cover.push([]);
				var j = 0;
				for(j; j < canvas.width; j+=20){
					cover[i] = [];
					var temp = new createjs.Shape();
					temp.graphics.beginFill('rgba(0,0,0,1)').drawRect(j, i, 20, 20);
					temp.addEventListener('mouseover', onMouseOver);
					cover[i][j] = temp;
					stage.addChild(temp);
				}
			}
			
			
			stage.update();
			/*particle = new createjs.Shape();

			particle.x = 0;
			particle.y = 50;
			particle.graphics.beginFill('rgba(255,0,0,1)').drawCircle(0, 0, 40);
			stage.addChild(particle);
			*/
			//createjs.Ticker.stageFPS('60');
			createjs.Ticker.on("tick", tick);
		};
		var handleClick = function(e){
			stage.removeAllChildren();
			shape = new createjs.Shape();
			shape.graphics.beginFill('rgba(0,255,0,1)').drawRoundRect(0, 0, 120, 120, 10);
			stage.addChild(shape);
			stage.update();
		};
		var clearCanvas = function(e){
			stage.removeAllChildren();
			shape = new createjs.Shape();
			shape.graphics.beginFill('rgba(255,0,0,1)').drawRoundRect(0, 0, 120, 120, 10);
			stage.addChild(shape);
			stage.update();
		};

		var onMouseOver = function(event){
			var children = stage.getObjectsUnderPoint(stage.mouseX, stage.mouseY);
			for(var i = 0; i < children.length; i++){
				children[i].alpha -=.5;
				}
			};

		function tick(event) {
			stage.update(event);
		}

	return {
		init: init,
		defaults: defaults,
		onLoad: onLoad
	};

})(jQuery, createjs, window.Hogan);
