var Particle = function(pos, target, vel, marker, usePhysics) {
	  // properties for animation
	  // and colouring
	  this.GRAVITY  = 0.06;

	  this.pos = {
	    x: pos.x || 0,
	    y: pos.y || 0
	  };

	  this.vel = {
	    x: vel.x || 10,
	    y: vel.y || 10
	  };

	  this.lastPos = {
	    x: this.pos.x,
	    y: this.pos.y
	  };

	  this.target = {
	    y: 0
	  };

	  this.usePhysics = usePhysics || false;

};

Particle.prototype.move = function(){
    this.lastPos.x = this.pos.x;
    this.lastPos.y = this.pos.y;

    this.vel.y += this.GRAVITY;
    this.pos.y += this.vel.y;

    this.pos.x += this.vel.x;
};

Particle.prototype.setColor = function(c){
    var rand = Math.floor(Math.random() * 10);
    this.color = (rand % 2 == 0 ? c : "#FFFFFF");
};