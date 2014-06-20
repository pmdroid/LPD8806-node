var LPD8806 = require('LPD8806');

// npm install async
var async = require("async");

var leds = new LPD8806(96, '/dev/spidev1.0');

// Flash ledstrip by manipulation of the color brightness
function flash(r, g, b, speed){
  var i = 0;
  var step = speed;

  function performStep(){
    var level = 0.01,
    dir = step;
      
    async.whilst(function(){
      return (level >= 0.0);
    },function (callback) {
      setTimeout(function(){
        leds.setMasterBrightness(level);
        leds.fillRGB(r,g,b);
        if(level >= 0.99){
          dir =- step;
        }
        level += dir;
        callback();
      },4);
    }, function (err) {
      return;
    });
  }
  performStep();
}


// Fade color
flash(130,16,233, 0.01);

// Flash color
setTimeout(function(){
  flash(130,16,233, 0.09);
}, 20000);