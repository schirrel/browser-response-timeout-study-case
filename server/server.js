const express = require("express");
const app = express();

app.get("/", function(request, response) {

  response.send(`/get-never-responds and /post-never-responds`)
});

app.get("/get-never-responds", function(request, response) {
  console.log(`this will never reponse`)
});

app.post("/post-never-responds", function(request, response) {
  console.log(`this will never reponse`)
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
