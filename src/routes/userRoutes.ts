import express from "express";
import { register,Login } from "../UserService/userservices";

const router =express.Router()

router.post('/register',async(req,res)=>{
    if (!req.body || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.password) {
        return res.status(400).send( { error: "Missing data", statuscode: 400 } );
    } 
    
    const {firstname,lastname,email,password}=req.body
const result=await register({firstname,lastname,email,password})

res.status(result.statuscode).json(result.data)
})
router.get("/login",async(req,res)=>{
    if (!req.body || !req.body.email || !req.body.password) {
        return res.status(400).send( { error: "Missing data", statuscode: 400 } );
    }
     const { email, password } = req.body;
     const result = await Login({ email, password });
     res.status(result.statuscode).json(result.data)
     

})
export default router 


