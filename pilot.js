"use strict";

const { events } = require("./events");

require("./system");
require("./manager");

events.on("new-flight", (flightInfo)=>{

    setInterval(()=>{
        console.log(`pilot:flight '${flightInfo.id}' took of`)
		events.emit('took-off', flightInfo)
    }, 4000);

    setInterval(()=>{
        console.log(`piolt:fligth '${flightInfo.id}' arrived`)
		events.emit('arrived', flightInfo)
    }, 7000)
})