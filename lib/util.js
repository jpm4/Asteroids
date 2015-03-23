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

})();
