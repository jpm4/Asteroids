(function() {
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function(){
    this.asteroids = [];
  };

  Game.DIM_X = 400;
  Game.DIM_Y = 200;
  Game.NUM_ASTEROIDS = 10;

  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(
        new Asteroids.Asteroid({ pos: this.randomPosition() })
      );
    }
  };

  Game.prototype.randomPosition = function() {
    return [Math.random() * Game.DIM_X, Math.random() * Game.DIM_Y];
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect();
    this.asteroids.forEach(function(asteroid){
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.asteroids.forEach(function(asteroid){
      asteroid.move();
    });
  };

})();
