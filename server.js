//----CODE ALONG ------///
import fs from "fs";
import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";
import { request } from "http";

dotenv.config();
const app = express();
const port = 5000;

//Here we will create our routes for our GET Request to recieve our DATA.
//Here we Created to GET REQUEST to allow us to grab DATA From both of out HTML Files

app.get("/", (req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.write(data);
    res.end();
  });
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}`);
});

// JSON Data Push
// app.use(express.static(path.join(".", "public")));

const data = fs.readFileSync((".", "data.json"));
console.log(JSON.parse(data));

const parsedData = JSON.parse(data);

// request.body.task;
// const task = request.body.task;
// parsedData.push({ task: task });

// const stringifiedData = JSON.stringify(parsedData);
// fs.writeFileSync((".", "data.json")),
//   stringifiedData,
//   (err = res.redirect("/"));
