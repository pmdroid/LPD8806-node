LPD8806-node
============

Asyncronous lib that implements the LPD8806 protocol.

```
    var LPD8806 = require('LPD8806');
    var ledstrip = new LPD8806(32, '/dev/spidev1.0');

    ledstrip.fillRGB(200,200,200);

    //Available Funtions:

    ledstrip.updateBrightness(0.5); //Value must be between 0.0 and 1.0
    ledstrip.update(); //To write the new Buffer
    ledstrip.fillRGB(0, 0, 255); //RED, GREEN, BLUE
    ledstrip.fillHSV(0.0, 100.0, 100.0); //HSV Values
    ledstrip.allOFF();
    ledstrip.setPixel(new Color({r: 0, g: 0: b: 255}));
    ledstrip.setPixelRGB(0, 0, 255); //RED, GREEN, BLUE
    ledstrip.setPixelHSV(0.0, 100.0, 100.0) //HSV Values
    ledstrip.setPixelOff(pixelNumber);
```

Check /examples for usage examples.
Feel free to contribute.


Special thanks to [pmdroid](https://github.com/pmdroid)



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

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/pmdroid/lpd8806-node/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

