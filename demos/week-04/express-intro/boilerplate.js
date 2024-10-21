import express from "express";

const app = express();

app.get("/", function (request, response) {
  response.json("This is the root route.");
});

app.listen(8080, function () {
  console.log("App is running on PORT 8080");
});
