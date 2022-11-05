"use strict";

const { events } = require("./events");

require("./system");
require("./manager");

events.on("new-flight", (flightInfo)=>{

    setTimeout(()=>{
		events.emit('took-off', flightInfo);
        console.log(`pilot: flight '${flightInfo.id}' took of.`);
    }, 4000);

    setTimeout(()=>{
		events.emit('arrived', flightInfo);
        console.log(`piolt: flight '${flightInfo.id}' arrived.`);
    }, 7000);
    
});