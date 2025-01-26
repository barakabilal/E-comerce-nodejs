import mongoose, { Schema,Document } from "mongoose";
export interface IProduct extends Document{
    title: string;
    image:string
    price: number;
    stock:number;
    category:string;
    manufacturer:string;
}

const productSchema = new Schema({
    title: { type: String, required: true }, // Product name (e.g., "iPhone 14")
    image: { type: String, required: true }, // URL or path to the product image
    price: { type: Number, required: true }, // Product price
    stock: { type: Number, required: true, default: 0 }, // Available stock
    category: { type: String, required: true }, // Product category (e.g., "Phone", "Laptop")
    manufacturer: { type: String, required: true } // Manufacturer/brand (e.g., "Apple", "Samsung")
});
const ProductModel=mongoose.model<IProduct>('product',productSchema)
export default ProductModel;