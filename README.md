LPD8806-node
============

Install.

    npm install lpd8806

    var LPD8806 = require('LPD8806');
    LPD8806 = new LPD8806(32, '/dev/spidev0.0');
    LPD8806.fillRGB(0, 0, 255);

    Available Funtions:

    LPD8806.updateBrightness(0.5); //Value must Between 0.0 and 1.0
    LPD8806.update(); //To write the new Buffer
    LPD8806.fillRGB(0, 0, 255); //ROT, GREEN, BLUE
    LPD8806.fillHSV(0.0, 100.0, 100.0); //HSV Values
    LPD8806.allOFF();
    LPD8806.setPixel(new Color({r: 0, g: 0: b: 255}));
    LPD8806.setPixelRGB(0, 0, 255); //ROT, GREEN, BLUE
    LPD8806.setPixelHSV(0.0, 100.0, 100.0) //HSV Values
    LPD8806.setPixelOff(pixelNumber);


The MIT License (MIT)

Copyright (c) 2014 Pascal M.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.