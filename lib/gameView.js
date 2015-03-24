(function() {
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx, img){
    this.game = game;
    this.ctx = ctx;
    this.backgroundImg = img;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval(function() {
      this.game.step();
      this.ctx.drawImage(this.backgroundImg, 0, 0);
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function() {
    var ship = this.game.ship;
    key('w', function() { ship.power([0, -1]); });
    key('s', function() { ship.power([0,  1]); });
    key('a', function() { ship.power([-1, 0]); });
    key('d', function() { ship.power([1,  0]); });
    key('space', function() { ship.fireBullet(); });
  };
})();
