import express from "express";
import { addeditemtocart, getcartofuser } from "../cartservices/cartservice";
import validateJWT from "../middlewares/cartmiddleware";
const router = express.Router();

router.get("/", validateJWT, async (req, res) => {
  const userId = (req as any).user._id;
  const result = await getcartofuser({ userId });
  res.send(result.data).status(200);
});
router.post("/items", validateJWT, async (req, res) => {
    const userId = (req as any).user._id;
    const {productId, quantity } = req.body;
    const result =await addeditemtocart({productId,userId,quantity})
res.send(result.data).status(result.statuscode)
});

interface addedtocartanitem{
    productId: string;
    quantity:number;
    userId: string;
}
export default router;
