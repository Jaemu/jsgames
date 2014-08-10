var MPiece = (function($, createjs){
	
		var defaults = {
			thing : 'hi'
		};

		var carousel, stage, shape, domElement;
		canvas = document.getElementById('canvas');
		stage = new createjs.Stage(canvas);
		shape = new createjs.Shape();

		var init = function(params){
			defaults = $.extend(defaults, params, {});

			$('#carousel').on('mouseup', this.handleClick)
			.on('mouseover', clearCanvas)
			.on('mouseout', handleClick);

			$(window).on('ready', this.onLoad);
		};

		var onLoad = function(){
			carousel = document.getElementById('carousel');
			domElement = new createjs.DOMElement(carousel);
			shape.graphics.beginFill('rgba(255,255,0,1)').drawRoundRect(0, 0, 120, 120, 10);
			stage.addChild(shape);
			stage.update();
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

	return {
		init: init
	};

})(jQuery, createjs);

MPiece.init();