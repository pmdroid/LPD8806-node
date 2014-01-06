var io = require('socket.io').listen(80);
var LPD8806 = require('LPD8806'),
    Color = require('color');

LPD8806 = new LPD8806();

io.sockets.on('connection', function (socket) {
    socket.on('setColor', function (data) {
        LPD8806.fill(new Color({r: data.red, g: data.green, b: data.blue}));
    });
    socket.on('setBrightness', function (data) {
        LPD8806.updateBrightness(parseFloat(data.brightness));
    });
});