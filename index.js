const express = require("express");
const app = express();
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

console.log(credentials);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App started");
});
