(function() {
  window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = function(){};

  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function() {};
    Surrogate.prototype = ParentClass.prototype;
    Surrogate.prototype.parent = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randomVec = function(length) {
    var angle = (Math.random() * 2 * Math.PI);
    var xVel = Math.cos(angle) * length;
    var yVel = Math.sin(angle) * length;
    return [xVel, yVel];
  };

  Util.drawRotatedImage = function(ctx, drawImageFn, x, y, angle){

      // move to the middle of where we want to draw our image
      ctx.translate(x, y);

      // rotate around that point, converting our
      // angle from degrees to radians
      ctx.rotate(angle);

      // draw it up and to the left by half the width
      // and height of the image
      drawImageFn.apply(ctx);


      ctx.rotate(- (angle));
      ctx.translate(-x, -y);
  };

})();
