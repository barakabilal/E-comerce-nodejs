import express from "express";
import { addeditemtocart, checkoutcart, clearcart, deleteitemcart, getcartofuser, updqteitemincart } from "../SERVICES/cartservice";
import validateJWT from "../middlewares/cartmiddleware";
const router = express.Router();

router.get("/", validateJWT, async (req, res) => {
  try {
    const userId = (req as any).user._id;
    const result = await getcartofuser({ userId });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({ message: "Failed to fetch cart", error });
  }
});

router.delete("/", validateJWT, async (req, res) => {
  try {
    const userId = (req as any).user._id;
    const result = await clearcart({ userId });
    res.status(200).send(result.data);
  } catch (error) {
    res.status(500).send({ message: "Failed to clear cart", error });
  }
});

router.post("/items", validateJWT, async (req, res) => {
  try {
    const userId = (req as any).user._id;
    const { productId, quantity } = req.body;
    const result = await addeditemtocart({ productId, userId, quantity });
    res.status(result.statuscode).send(result.data);
  } catch (error) {
    res.status(500).send({ message: "Failed to add item to cart", error });
  }
});

router.put("/items", validateJWT, async (req, res) => {
  try {
    const userId = (req as any).user._id;
    const { productId, quantity } = req.body;
    const result = await updqteitemincart({ productId, userId, quantity });
    res.status(result.statuscode).send(result.data);
  } catch (error) {
    res.status(500).send({ message: "Failed to update item in cart", error });
  }
});

router.delete("/items/:productId", validateJWT, async (req, res) => {
  try {
    const userId = (req as any).user._id;
    const { productId } = req.params;
    const result = await deleteitemcart({ productId, userId });
    res.status(result.statuscode).send(result.data);
  } catch (error) {
    res.status(500).send({ message: "Failed to delete item from cart", error });
  }
});

router.post('/checkout', validateJWT, async (req, res) => {
  try {
    const userId = (req as any).user._id;
    const { adress } = req.body;
    const result = await checkoutcart({ userId, adress });
    res.status(result.statuscode).send(result.data);
  } catch (error) {
    res.status(500).send({ message: "Failed to checkout cart", error });
  }
});

export default router;



