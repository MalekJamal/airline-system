"use strict";

const { faker } = require("@faker-js/faker");
const { events } = require("./events");
const uuid = require("uuid");
const id = uuid.v4();


setInterval(() => {
    const flightInfo = {
        id: id,
        airline: `Royal Jordanian Airlines`,
        pilotName: faker.name.fullName(),
        date: new Date(),
        destination: faker.address.cityName()
    };
    console.log(`Manager: new flight with ID (${flightInfo.id}) have been scheduled Flight.`);
    events.emit('new-flight', flightInfo);
}, 10000);

events.on("arrived", (flightInfo) => {
    console.log(`Good job ${flightInfo.pilotName}, keep it up!`);
});

