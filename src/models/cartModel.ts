import mongoose, { ObjectId, Schema } from "mongoose";
import { IProduct } from "./productModel";
const cartstatusenum=["active","completed"]
export interface Icartitem extends Document {
    product :IProduct;
    unitprice:number;
    quantity:number;
}
export interface Icart extends Document {
    userId:ObjectId|string;
    items:Icartitem[];
    totalamount:number ;
    status:"active"|"completed"//when the client want to confirm his cart to an order it's became completed
}
const cartitemschema=new Schema({
    product:{type:Schema.Types.ObjectId,ref:"product",required:true },
    quantity:{type:Number,required:true },
    unitprice:{type:Number,required:true}
})
const cartschema= new Schema({
    userId:{type:Schema.Types.ObjectId,ref:"user",required:true },
    items:[cartitemschema],
    totalamount:{type:Number,required:true},
    status:{type:String,enum :cartstatusenum,required:true}
})
export const cartModel=mongoose.model<Icart>("cart",cartschema)