import mongoose, { Schema,Document } from "mongoose";
export interface IProduct extends Document{
    title: string;
    image:string
    price: number;
    stock:Number

}

const productSchema=new Schema({
    title: {type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    stock:{type:Number,required:true,default:0}
})
const ProductModel=mongoose.model<IProduct>('product',productSchema)
export default ProductModel;