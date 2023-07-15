import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  const message = process.env.MESSAGE || "Default message";
  res.send(message);
});

export const start = () =>
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
