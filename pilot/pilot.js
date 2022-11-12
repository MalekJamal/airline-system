"use strict";

require('dotenv').config();
const io = require("socket.io-client");
const socket = io.connect(`${process.env.SERVER_URL}`);
const airlineSocket = io.connect(`${process.env.AIRLINE}`);

socket.on("new-flight", (flightInfo) => {
    setTimeout(() => {
        console.log(`pilot: flight '${flightInfo.id}' took of.`);
        airlineSocket.emit('took-off', flightInfo);
    }, 4000);


    setTimeout(() => {
        socket.emit('arrived', flightInfo);
        console.log(`piolt: flight '${flightInfo.id}' arrived.`);
    }, 7000);

});