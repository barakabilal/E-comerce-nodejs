import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes";
import { seedproductsindb}  from "./SERVICES/productservices";
import productsRoutes from "./routes/productsRoutes";
import cartRoute from "./routes/cartRoute";
import dotenv from "dotenv"
const app = express();
app.use(express.json());
const port = 3005;
dotenv.config()
mongoose
  .connect(process.env.DATABASE_URL||"")
  .then(() => console.log("Connected!"));
app.use("/user", userRoutes);
app.use("/products",productsRoutes)
app.use("/cart",cartRoute)
seedproductsindb()
app.listen(port, () => {
  console.log(`running in port ${port}`);
});

