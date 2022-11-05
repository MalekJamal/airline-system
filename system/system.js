"use strict";

require("../pilot/pilot");
require("../manager/manager");
const { events } = require("../events");

events.on("new-flight", (flightInfo) => {
  console.log(`fligth{
event: new-flight,
date: ${flightInfo.date},
details:{
airline: ${flightInfo.airline},
Pilot Name: ${flightInfo.pilotName},
destination: ${flightInfo.destination},
ID: ${flightInfo.id},
}
}`);
});

events.on("took-off", (flightInfo) => {
  console.log(`fligth{
event: took-off,
date: ${flightInfo.date},
details: {
airline: ${flightInfo.airline},
Pilot Name: ${flightInfo.pilotName},
destination: ${flightInfo.destination},
ID: ${flightInfo.id},
	}
}`);
});

events.on("arrived", (flightInfo) => {
  console.log(`fligth { event: arrived, date: ${flightInfo.date},
details:{
airline: ${flightInfo.airline},
Pilot Name: ${flightInfo.pilotName},
destination: ${flightInfo.destination},
ID: ${flightInfo.id},
}
}`);
});
