(function() {
  window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(options){
    Asteroids.MovingObject.call(this, {
      pos: options.pos,
      vel: options.vel || Asteroids.Util.randomVec((Math.random()*2 + 1)),
      color: options.color || Asteroid.COLOR,
      radius: options.radius || Asteroid.RADIUS,
      game: options.game
    });

  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#333333";
  Asteroid.RADIUS = 20.0;

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
