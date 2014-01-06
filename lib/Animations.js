var Color = require("color"),
    sleep = require('sleep');

var ledCount = 32;
    _step = 0,
    start = 0;

var Animations = function(leds){
    ledCount = leds || ledCount;
}

Animations.prototype.Colors = function(LPD8806, step){
    var colors = [
        {r:255,g:0,b:0},
        {r:0,g:255,b:0},
        {r:0,g:0,b:255}
    ];

    for(var i =0; i < 4; i++){
        var level = 0.01,
            dir = step;
        while(level >= 0.0){
            LPD8806.fill(new Color(colors[i]).alpha(level));
            if(level >= 0.99){
                dir =- step;
            }
            level += dir;
            sleep.usleep(4000);
        }
    }
}

Animations.prototype.Rainbow = function(LPD8806){
    for(var i = 0; i < 384; i++){
        var amt = 1;
        for(var p = 0; p < ledCount; p++){
            var color = (p + _step) % 384;
            LPD8806.setPixel(start + p, LPD8806.wheel_color(color));
        }
        LPD8806.update();
        _step += amt;
        var overflow = _step - 384;
        if(overflow >= 0){
            _step = overflow;
        }
    }
}

module.exports = Animations;