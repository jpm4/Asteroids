(function() {
  window.Asteroids = window.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(options) {
    this.game = options.game;
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.isWrappable = true;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    if (!this.isWrappable && this.game.isOutOfBounds(this.pos)) {
      this.game.remove(this);
    }
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var distance = Math.sqrt(Math.pow(this.pos[0] - otherObject.pos[0], 2) +
                            Math.pow(this.pos[1] - otherObject.pos[1], 2));
    if (distance < (this.radius + otherObject.radius)) {
      return true;
    }
    return false;
  };

  MovingObject.prototype.collideWith = function(otherObject) {

  };

})();
