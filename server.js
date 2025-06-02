import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hello World</h2>");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
