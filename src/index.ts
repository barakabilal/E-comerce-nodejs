import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
const port = 3005;

mongoose
  .connect("mongodb://127.0.0.1:27017/E-commerce")
  .then(() => console.log("Connected!"));
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`running in port ${port}`);
});
