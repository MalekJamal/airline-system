"use strict";


const io = require("socket.io")("4000");
const airline = io.of("/airline");

io.on("connection", socket => {

  socket.on("new-flight", (flightInfo) => {
    io.emit("new-flight", flightInfo)
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

  socket.on("arrived", (flightInfo) => {
    io.emit("arrived", flightInfo);
    console.log(`fligth { event: arrived, date: ${flightInfo.date},
  details:{
  airline: ${flightInfo.airline},
  Pilot Name: ${flightInfo.pilotName},
  destination: ${flightInfo.destination},
  ID: ${flightInfo.id},
  }
  }`);
  });
  airline.on("connection", socket => {
    socket.on("took-off", (flightInfo) => {
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
  });
});



