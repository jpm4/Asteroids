(function() {
  window.Asteroids = window.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(options){
    options.color = options.color || Bullet.COLOR,
    options.radius = options.radius || Bullet.RADIUS
    Asteroids.MovingObject.call(this, options);
    this.isWrappable = false;
  };

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.COLOR = "#bb0000";
  Bullet.RADIUS = 4.0;

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
      this.game.remove(this);
    }
  };

})();
