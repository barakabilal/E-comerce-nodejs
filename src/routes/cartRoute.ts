import express from "express";
import { addeditemtocart,checkoutcart ,clearcart, deleteitemcart, getcartofuser, updqteitemincart, } from "../SERVICES/cartservice";
import validateJWT from "../middlewares/cartmiddleware";
const router = express.Router();

router.get("/", validateJWT, async (req, res) => {
  const userId = (req as any).user._id;
  const result = await getcartofuser({ userId });
  res.send(result.data).status(200);
});
router.delete("/", validateJWT, async (req, res) => {
  const userId = (req as any).user._id;
  const result = await clearcart({ userId });
  res.send(result.data).status(200);
});

router.post("/items", validateJWT, async (req, res) => {
    const userId = (req as any).user._id;
    const {productId, quantity } = req.body;
    const result =await addeditemtocart({productId,userId,quantity})
res.send(result.data).status(result.statuscode)
});
router.put("/items", validateJWT, async (req, res) => {
  const userId = (req as any).user._id;
  const {productId, quantity } = req.body;
  const result =await updqteitemincart({productId,userId,quantity})
res.send(result.data).status(result.statuscode)
});
router.delete("/items/:productId", validateJWT, async (req, res) => {
  const userId = (req as any).user._id;
  const {productId } = req.params;
  const result =await deleteitemcart({productId,userId})
res.send(result.data).status(result.statuscode)
});
router.post('/checkout',validateJWT, async (req, res) => {
  const userId = (req as any).user._id;
 const {adress}=req.body
  const result = await checkoutcart({ userId , adress});
res.send(result.data).status(result.statuscode)
})

export default router;


