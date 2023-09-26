// Challange2: Speed detector
// Instructions: 
// run 'node challange2.js' on your terminal
// used prompt module
// run npm install prompt-sync
const prompt = require("prompt-sync")();

function drivingPoints(speed) { 
    const speedLimit = 70;
    const speedAllowable = 75;
    const kmPerPoint = 5;

    if (speed < speedAllowable) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

console.log("********************************Speed detector********************************")

// prompt user to enter driving speed
const speedInput = prompt("\'Sir do you know how fast you where driving?\' ");
const speed = parseFloat(speedInput);

if (!isNaN(speed)) {
    drivingPoints(speed);
} else {
    console.log("\'That wasn\'t what I asked you. Step out of the car and give me your vehicle speed in numbers.. \n The speed limit is 70 km/h \'");
}