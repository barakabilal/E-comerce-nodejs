import { cartModel } from "../models/cartModel"
interface createcart{
    userId:string,
}
const createcart=async({userId}:createcart)=>{
const cart= await cartModel.create({userId,totalamount:0,status:"active"})
cart.save();
}
interface getcartofuser{
    userId:string
}

 export const getcartofuser=async({userId}:getcartofuser)=>{
const cart=await cartModel.findOne({userId,status:"active"})
if(!cart){
    const createdcart =await createcart({userId})
    return {data:createdcart,statuscode:200}
}
return {data:cart,statuscode:200}

}
