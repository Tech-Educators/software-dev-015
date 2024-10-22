import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // we are telling the server we expect to recieve body inside teh request

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.post("/message", function (request, response) {
  const username = request.body.username;
  const message = request.body.message;
  console.log(username, message);
  // insert database request here
  response.json("You have called the /message endpoint with a POST method");
});

app.listen(8080, function () {
  console.log("App is running on PORT 8080");
});
