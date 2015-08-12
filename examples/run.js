var robot = require("../bin/main.js");

robot.init({ serialport: "/dev/tty.usbserial-DA017JTX" });

robot.on('ready', function() {
    // twirl towards freedom
    this.rotate(100);
});

robot.on('bump', function(bumpEvent) {
    console.log(bumpEvent.direction);
});