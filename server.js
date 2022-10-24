//----CODE ALONG ------///
import fs from "fs";
import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";

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
