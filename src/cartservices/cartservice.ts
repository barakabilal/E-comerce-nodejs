import { cartModel } from "../models/cartModel"
import ProductModel from "../models/productModel";
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

const resultcart= await {data:cart,statuscode:200}
return resultcart
}
interface addedtocartanitem{
    productId: any;
    quantity:Number;
    userId: string;
}
export const addeditemtocart=async({productId,userId,quantity}:addedtocartanitem)=>{
const {data:cart,statuscode} =  await getcartofuser({userId})
if(!cart){
    return {data:"cart not found",statuscode:400}
}
const ifthereincart=cart.items.find((p)=>{p.product==productId})
if(ifthereincart){
  return {data:"already exist" ,statuscode:400}
}

const product= await ProductModel.findById(productId)
if(!product){
    return {data:"product not found",statuscode:400}
}
if(product.stock < quantity){
    return {data:"product not in stock",statuscode:400}
}
cart.items.push({product:productId,unitprice:product.price,quantity:quantity})

cart.totalamount+=product.price*(quantity as any)
    const cartsaved= await cart.save()
return {data:cartsaved,statuscode:200}
}
