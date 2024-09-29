import Usermodel from "../models/Usermodel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
interface RegisterParams{
    firstname:string,
    lastname:string,
    email: string,
    password:string,
}

export const register=async({firstname,lastname,email,password}:RegisterParams)=>{
const findUser= await Usermodel.findOne({email});
if(findUser){
    return {data:"user already exist ",statuscode:400} 
}
const hashedPassword=await bcrypt.hash(password,10);
const newuser=  new Usermodel({firstname,lastname,email,password:hashedPassword});
newuser.save()
return {data:generatejwt({email,lastname,firstname}) , statuscode:200}
}
interface LoginParams{
    email: string,
    password:string,
}
export const Login=async({email,password}:LoginParams)=>{
    const findUser= await Usermodel.findOne({email});
    if(!findUser){
        return {data:"incorrect password or email",statuscode:400} 
    }
    const passwordMatch=bcrypt.compare(password,findUser.password)
   if(!passwordMatch){
return {data:"incorrect password or email",statuscode:400}
   }
return {data:generatejwt({email,lastname:findUser.lastname,firstname:findUser.firstname}),statuscode:200};
}
const generatejwt=(data:any)=>{
return jwt.sign(data,'OjSDG50F7Scx2jCjZOCYP7wpMEsOyVq6',)
}