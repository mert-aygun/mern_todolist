const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.listen(5000, () => {
  console.log("Server Started");
});

app.post("/", (req, res) => {
  console.log("There was a message!");
});
app.post("/create", (req, res) => {
  const newItem = req.body.newItem;
  const response = `New Item added: ${newItem}`;
  res.send(response);
});
app.get("/delete", (req, res) => {
  res.send("Okay");
});
