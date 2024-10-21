import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.send("Hello, world!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
