"use strict";

const fs = require("fs");
const { parse } = require("csv-parse");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./service-account.json");

initializeApp({
  credential: cert(serviceAccount),
});

const database = getFirestore();

fs.createReadStream("./part-time-indonesia.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", async function (data) {
    await database.collection("jobs").doc().set({
      date: data[1],
      company: data[2],
      title: data[3],
      location: data[4],
      description: data[5],
      level: data[6],
      type: data[7],
      function: data[8],
      industry: data[9],
      link: data[10],
    });
  });
