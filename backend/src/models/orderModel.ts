import mongoose, { ObjectId, Schema } from "mongoose";
 export interface Iorderitem {
    producttitle:string;
   unitprice: number;
    quantity: number;
    image:string;
}
//schema model of orderitem
const orderitemSchema: Schema = new Schema({
    producttitle:{type:String,required:true},
    unitprice:{type:Number,required:true},
    quantity:{type:Number,required:true},
    image:{type:String,required: true }

})
//document of order completed
 export interface Iorder extends Document {
    orderitems: Iorderitem[];
    total:Number,
    adress:string,
    userId:ObjectId|string,
}
const Iorderschema=new Schema({
    orderitems: [orderitemSchema],
    total:{type:Number,required:true},
    adress:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId,ref:'user'},
})
export const orderModel=mongoose.model<Iorder>("order",Iorderschema)
