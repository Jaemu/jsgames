var MPiece = (function($, createjs){
	
		var defaults = {
			thing : 'hi'
		};

		var carousel, stage, shape, domElement, particle;
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.setFPS(30);


		var init = function(params){
			defaults = $.extend(defaults, params, {});

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
			shape = new createjs.Shape();
			particle = new createjs.Shape();

			particle.x = 0;
			particle.y = 50;
			particle.graphics.beginFill('rgba(255,0,0,1)').drawCircle(0, 0, 40);
			stage.addChild(particle);

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

		var tick = function(e){
			particle.x = particle.x + 10;
			if (particle.x > stage.canvas.width) { particle.x = 0; }
			stage.update(e);
		};

	return {
		init: init
	};

})(jQuery, createjs);
MPiece.init();