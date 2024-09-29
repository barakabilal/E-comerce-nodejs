import express from "express"
import { getALLproducts } from "../SERVICES/productservices"


const router=express.Router()
router.get('/',async(req,res)=>{
const result =await getALLproducts()
res.send(result)
})
export default router