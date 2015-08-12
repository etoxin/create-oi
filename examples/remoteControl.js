var robot = require("../bin/main.js");
var keypress = require('keypress');

var SPEED = 100; // 100mm/s

robot.init({ serialport: "/dev/tty.usbserial-DA017JTX" });

robot.on('ready', function() {
    var r = this;

    keypress(process.stdin);

    // listen for the "keypress" event
    process.stdin.on('keypress', function (ch, key) {
        if (key && key.ctrl && key.name == 'c') {
            process.stdin.pause();
        }

        // turn based on which bumper sensor got hit
        switch(key.name) {
            case 'right':
                r.rotate(-SPEED); // turn right
                r.wait(1000);
                break;
            case 'left':
                r.rotate(SPEED); // turn left
                r.wait(1000);
                break;
            case 'space':
                r.stop();
                break;
            case 'down':
                r.drive(-SPEED, 0);
                break;
            case 'up':
                r.drive(SPEED, 0);
                break;
        }

    });

    process.stdin.setRawMode(true);
    process.stdin.resume();
});
