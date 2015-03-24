(function() {
  window.Asteroids = window.Asteroids || {};

  var Ship = Asteroids.Ship = function(options){
    options.vel = options.vel || [0, 0];
    options.color = options.color || Ship.COLOR,
    options.radius = options.radius || Ship.RADIUS

    Asteroids.MovingObject.call(this, options);
    var img = new Image();
    img.src = 'assets/ship.png';
    this.imgParams = {
      img: img,
      width: 72,
      height: 72
    };
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

  Ship.prototype.direction = function() {
    var xVel = this.vel[0];
    var yVel = this.vel[1];
    return Math.atan2(yVel, xVel) - Math.PI/2;
  }

  Ship.prototype.draw = function(ctx) {
    var x = this.pos[0] - this.imgParams.width / 2 + 32;
    var y = this.pos[1] - this.imgParams.height / 2 + 32;

    Asteroids.Util.drawRotatedImage(
      ctx,
      ctx.drawImage.bind(ctx,
        this.imgParams.img,
        - this.imgParams.width / 2,
        - this.imgParams.height / 2,
        this.imgParams.width,
        this.imgParams.height
      ),
      x,
      y,
      this.direction()
    );

    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    //
    // ctx.arc(
    //   this.pos[0],
    //   this.pos[1],
    //   this.radius,
    //   0,
    //   2 * Math.PI,
    //   false
    // );
    //
    // ctx.fill();
  }

})();
