// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
app.options('*', cors()) 
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {

  response.send(`/get-never-responds and /post-never-responds`)
});

app.get("/get-never-responds", function(request, response) {

  console.log(`this will never reponse`)
});


app.post("/post-never-responds", function(request, response) {

  console.log(`this will never reponse`)
});

app.post("/post-late-responds", function(request, response) {

  console.log(`this will never reponse`)
  setTimeout(()=>{
      response.send(`/post-late-responds now`)
  }, 300000)
});

app.get("/get-late-responds", function(request, response) {

   setTimeout(()=>{
      response.send(`/get-late-responds now`)
  }, 300000)
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
