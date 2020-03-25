const express = require("express");
// const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

require("./controllers/html.js")(app);
require("./controllers/api.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
