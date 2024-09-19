import express from "express"
import { getALLproducts } from "../ProductService/productservices"


const router=express.Router()
router.get('/',async(req,res)=>{
const result =await getALLproducts()
res.send(result)
})
export default router