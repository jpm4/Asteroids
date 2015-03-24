(function() {
  window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(options){
    options.vel = options.vel || [0, 0];
    options.color = options.color || Ship.COLOR,
    options.radius = options.radius || Ship.RADIUS

    Asteroids.MovingObject.call(this, options);
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.COLOR = "#008844";
  Ship.RADIUS = 15.0;

  Ship.prototype.relocate = function(){
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    var xVel = this.vel[0];
    var yVel = this.vel[1];
    var sumVel = Math.abs(xVel) + Math.abs(yVel);

    var bulletVel = [xVel/sumVel * 8 + xVel, yVel/sumVel * 8 + yVel];

    var bullet = new Asteroids.Bullet({
      game: this.game,
      vel:  bulletVel,
      pos:  this.pos
    });
    this.game.add(bullet);
  };

})();
