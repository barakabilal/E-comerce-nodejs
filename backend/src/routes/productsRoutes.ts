import express from "express"
import { getALLproducts } from "../SERVICES/productservices"


const router=express.Router()
router.get('/',async(req,res)=>{
    try{const result =await getALLproducts()
        res.send(result)}
catch(err){
    res.status(500).send("something went wrong!")
}
})
export default router