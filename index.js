const express = require("express");
const app = express();
const PORT = process.env.PORT || 3200;
const Users = require("./Router/index");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(new Date());
});
app.use("/api/users", Users);

const Run = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Shah:aYSDOnZcCy9vIbwN@cluster0.qgtzqqu.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected!"));
  return app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
};
Run();
