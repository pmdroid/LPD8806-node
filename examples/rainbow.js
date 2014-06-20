var LPD8806 = require('LPD8806');
var ledCount = 96;
var leds = new LPD8806(ledCount, '/dev/spidev1.0');

/** process.nextTick to avoid blocking it all the time */
function rainbow(brightness){

	var _step = 0;
  var start = 0;
  
  brightness = brightness || 1.0;
  leds.setMasterBrightness(brightness);
  var i = 0;

  function performStep() {
    var amt = 1;
    for(var p = 0; p < ledCount; p++){
      var color = (p + _step) % 384;
      leds.setPixel(start + p, leds.wheel_color(color));
    }
    leds.update();
    _step += amt;
    var overflow = _step - 384;
    if(overflow >= 0){
      _step = overflow;
    }

    if (++i >= 384) {
      return;
    }
    setTimeout(performStep, 80);
  }
  performStep();
}

rainbow(0.8);