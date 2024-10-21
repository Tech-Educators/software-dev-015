import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // allow other servers (like our client) to access the API

app.get("/message", function (request, response) {
  response.json("Thomas Edison found 200 ways to NOT create a lightbulb.");
});

app.listen(8080, function () {
  console.log("Running on PORT 8080");
});
