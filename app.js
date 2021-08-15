import express from "express";

const app = express();

app.listen(3000, function () {
  console.log("start! express server on port 3000");
});

app.get("/", function (req, res) {
  res.send("<h1>hi friend!</h1>");
});