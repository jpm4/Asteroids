(function() {
  window.Asteroids = window.Asteroids || {};

  var Game = Asteroids.Game = function(dimX, dimY){
    this.dimX = dimX;
    this.dimY = dimY;
    this.asteroids = [];
    this.addAsteroids();
    this.bullets = [];
    this.ship = new Asteroids.Ship({ pos: this.randomPosition(), game: this });
  };

  Game.NUM_ASTEROIDS = 20;

  Game.prototype.addAsteroids = function() {
    for(var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(
        new Asteroids.Asteroid({ pos: this.randomPosition(), game: this })
      );
    }
  };

  Game.prototype.randomPosition = function() {
    return [Math.random() * this.dimX, Math.random() * this.dimY];
  };

  Game.prototype.draw = function(ctx) {
    // ctx.clearRect(0, 0, this.dimX, this.dimY);
    this.allObjects().forEach(function(object){
      object.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach(function(object){
      object.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var x = pos[0];
    var y = pos[1];

    x = x < 0 ? x + this.dimX : x;
    y = y < 0 ? y + this.dimY : y;
    var newX = x % this.dimX;
    var newY = y % this.dimY;

    return [newX, newY];
  };

  Game.prototype.checkCollisions = function() {
    var game = this;
    for(var i = 0; i < this.allObjects().length - 1; i++) {
      for(var j = i + 1; j < this.allObjects().length; j++) {
        var object = this.allObjects()[i];
        var otherObject = this.allObjects()[j];
        if ( object.isCollidedWith(otherObject) ) {
          object.collideWith(otherObject);
          otherObject.collideWith(object);
        }
      }
    }
  };

  Game.prototype.remove = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      var idx = this.asteroids.indexOf(obj);
      this.asteroids.splice(idx, 1);
    }
    if (obj instanceof Asteroids.Bullet) {
      var idx = this.bullets.indexOf(obj);
      this.bullets.splice(idx, 1);
    }

  };

  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.allObjects = function() {
    return this.asteroids.concat([this.ship]).concat(this.bullets);
  };

  Game.prototype.add = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    }
    if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  };

  Game.prototype.isOutOfBounds = function(pos) {
    var x = pos[0];
    var y = pos[1];
    return x < 0 || x > this.dimX || y < 0 || y > this.dimY;
  };

})();
