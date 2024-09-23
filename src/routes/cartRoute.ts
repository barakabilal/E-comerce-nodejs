import express from "express";
import { getcartofuser } from "../cartservices/cartservice";
import validateJWT from "../middlewares/cartmiddleware";
const router = express.Router();

router.get("/",validateJWT, async (req, res) => {
    const userId=(req as any).user._id;
const result =await getcartofuser({userId})
res.send(result.data).status(200)

});
export default router
