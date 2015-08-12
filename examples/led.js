var robot = require("../bin/main.js");

robot.init({ serialport: "/dev/tty.usbserial-DA017JTX" });

robot.on('ready', function() {
    this.led('spot');
});
