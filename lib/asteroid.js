(function() {
  window.Asteroids = window.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function(options){
    MovingObject.call(this, {
      pos: options.pos,
      vel: options.vel || Asteroids.Util.randomVec(10),
      color: options.color || Asteroid.COLOR,
      radius: options.radius || Asteroid.RADIUS
    });

  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "FFF";
  Asteroid.RADIUS = 20.0;



})();
