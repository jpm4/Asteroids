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

    var img = new Image();
    img.src = 'assets/asteroids.png';
    this.imgParams = {
      img: img,
      sx: Math.floor(Math.random()*4) * 72,
      sy: Math.floor(Math.random()*3) * 72,
      swidth: 72,
      sheight: 72,
      width: 64,
      height: 64
    };

  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#777777";
  Asteroid.RADIUS = 25.0;

  Asteroid.prototype.draw = function(ctx) {
    ctx.drawImage(
      this.imgParams.img,
      this.imgParams.sx,
      this.imgParams.sy,
      this.imgParams.swidth,
      this.imgParams.sheight,
      this.pos[0] - this.imgParams.width / 2,
      this.pos[1] - this.imgParams.height / 2,
      this.imgParams.width,
      this.imgParams.height
    );

    var TO_RADIANS = Math.PI/180;

  };

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  };

})();
