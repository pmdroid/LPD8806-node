var LPD8806 = require('./lib/LPD8806'),
    Animations = require('./lib/Animations')

LPD8806 = new LPD8806(32, '/dev/spidev0.0');
Animations = new Animations(32);

Animations.Colors(LPD8806, 0.01);
Animations.Rainbow(LPD8806);
LPD8806.allOFF();