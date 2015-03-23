(function() {
  window.Asteroids = window.Asteroids || {};

  var GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval(function() {
      this.game.step();
      this.game.draw(this.ctx);
    }, 20);
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
