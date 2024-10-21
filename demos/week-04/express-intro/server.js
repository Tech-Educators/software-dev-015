// import express from our node_modules
import express from "express";

// instantiate our express app
const app = express();

// this is our data, normally we will retrieve this from a database
const data = [
  { title: "Star Wars", year: 1977 },
  { title: "Star Wars V", year: 1980 },
  { title: "Star Wars VI", year: 1983 },
  { title: "Star Wars I", year: 1999 },
];

// create endpoints/routes
// GET
// http://localhost:8080
app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

// http://localhost:8080/starwars
app.get("/starwars", function (request, response) {
  response.json(data);
});

// POST
app.post("/starwars", function (request, response) {
  response.json("This is a POST endpoint.");
});

// start our server
app.listen(8080, function () {
  console.log("App is running on port 8080");
});
