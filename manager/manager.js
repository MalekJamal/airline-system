"use strict";

const { faker } = require("@faker-js/faker");
const uuid = require("uuid");
const io = require("socket.io-client");
require('dotenv').config();
const socket = io.connect(`${process.env.SERVER_URL}`);

setInterval(() => {
    const flightInfo = {
        id: uuid.v4(),
        airline: `Royal Jordanian Airlines`,
        pilotName: faker.name.fullName(),
        date: new Date(),
        destination: faker.address.cityName()
    };
    socket.emit('new-flight', flightInfo);
    console.log(`Manager: new flight with ID (${flightInfo.id}) have been scheduled Flight.`);
}, 10000);

socket.on("arrived", (flightInfo) => {
    console.log(`Good job ${flightInfo.pilotName}, keep it up!`);
});