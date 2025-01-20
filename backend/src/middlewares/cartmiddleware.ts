import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import Usermodel from "../models/Usermodel";
interface extendrequest extends Request{
    user?:any
}
const validateJWT = async (req: extendrequest, res: Response, next: NextFunction) => {
  const headertoken = req.get("authorization");
  if (!headertoken) {
    return res.status(401).json({ message: "No token provided" });
  }
  const authtoken = headertoken.split(" ")[1];
  if (!authtoken) {
    return res.status(401).json({ message: "Invalid token" });
  }
  jwt.verify(authtoken, "OjSDG50F7Scx2jCjZOCYP7wpMEsOyVq6", async(err, payload) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (!payload) {
      return res.status(401).json({ message: "Invalid token" });
    }
     const userpayload=payload as {
        email:string,
        firstname:string,
        lastname:string
    }
    const user = await Usermodel.findOne({ email: userpayload.email });
    req.user=user
    next();
  });
};
export default validateJWT