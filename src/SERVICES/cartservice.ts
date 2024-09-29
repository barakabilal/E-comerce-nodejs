import { cartModel, Icartitem } from "../models/cartModel";
import { Iorderitem, Iorder, orderModel } from "../models/orderModel";
import ProductModel from "../models/productModel";
interface createcart {
  userId: string;
}
const createcart = async ({ userId }: createcart) => {
  const cart = await cartModel.create({
    userId,
    totalamount: 0,
    status: "active",
  });
  cart.save();
};
interface getcartofuser {
  userId: string;
}

export const getcartofuser = async ({ userId }: getcartofuser) => {
  const cart = await cartModel.findOne({ userId, status: "active" });
  if (!cart) {
    const createdcart = await createcart({ userId });
    return { data: createdcart, statuscode: 200 };
  }

  const resultcart = await { data: cart, statuscode: 200 };
  return resultcart;
};
interface clearcart {
  userId: string;
}
export const clearcart = async ({ userId }: clearcart) => {
  const { data: cart, statuscode } = await getcartofuser({ userId });
  if (!cart) {
    return { data: "cart not found", statuscode: 400 };
  }
  cart.items = [];
  cart.totalamount = 0;
  const updatedcart = await cart.save();
  return { data: updatedcart, statuscode };
};
interface addedtocartanitem {
  productId: any;
  quantity: number;
  userId: string;
}
export const addeditemtocart = async ({
  productId,
  userId,
  quantity,
}: addedtocartanitem) => {
  const { data: cart, statuscode } = await getcartofuser({ userId });
  if (!cart) {
    return { data: "cart not found", statuscode: 400 };
  }
  const ifthereincart = cart.items.find((p) => {
    p.product == productId;
  });
  if (ifthereincart) {
    return { data: "already exist", statuscode: 400 };
  }

  const product = await ProductModel.findById(productId);
  if (!product) {
    return { data: "product not found", statuscode: 400 };
  }
  if (product.stock < quantity) {
    return { data: "product not in stock", statuscode: 400 };
  }
  cart.items.push({
    product: productId,
    unitprice: product.price,
    quantity: quantity,
  });

  cart.totalamount += product.price * (quantity as any);
  const cartsaved = await cart.save();
  return { data: cartsaved, statuscode: 200 };
};
interface updateditemincart {
  productId: any;
  quantity: number;
  userId: string;
}
export const updqteitemincart = async ({
  productId,
  userId,
  quantity,
}: updateditemincart) => {
  const { data: cart, statuscode } = await getcartofuser({ userId });
  if (!cart) {
    return { data: "cart not found", statuscode: 400 };
  }
  const product = await ProductModel.findById(productId);
  if (!product) {
    return { data: "product not found", statuscode: 400 };
  }
  if (product.stock < quantity) {
    return { data: "product not in stock", statuscode: 400 };
  }
  const checkquantityproduct = cart.items.find((p) => {
    p.product == productId;
  });
  if (!checkquantityproduct) {
    return { data: "product not in cart", statuscode: 400 };
  }
  if (checkquantityproduct.quantity > quantity) {
    const newquantity = checkquantityproduct.quantity - quantity;
    cart.totalamount =
      cart.totalamount - checkquantityproduct.unitprice * newquantity;
    checkquantityproduct.quantity = quantity;
  }
  if (checkquantityproduct.quantity < quantity) {
    const newquantity = quantity - checkquantityproduct.quantity;
    cart.totalamount =
      cart.totalamount + checkquantityproduct.unitprice * newquantity;
    checkquantityproduct.quantity = quantity;
  }
  const updatedcart = await cart.save();
  return { data: updatedcart, statuscode: 200 };
};
interface deleteitemcart {
  productId: any;
  userId: string;
}
export const deleteitemcart = async ({ productId, userId }: deleteitemcart) => {
  const { data: cart, statuscode } = await getcartofuser({ userId });
  if (!cart) {
    return { data: "cart not found", statuscode: 400 };
  }
  const deleteditems = cart.items.find((p) => {
    p.product == productId;
  });
  cart.totalamount =
    cart.totalamount -
    (deleteditems as Icartitem).unitprice *
      (deleteditems as Icartitem).quantity;
  cart.items = cart.items.filter((p) => {
    p.product != productId;
  });
  const newcart = await cart.save();
  return { data: newcart, statuscode: 200 };
};
interface checkoutcart {
  userId: string;
  adress: string;
}
export const checkoutcart = async ({ userId, adress }: checkoutcart) => {
  if (!adress) {
    return { data: "adress is required", statuscode: 400 };
  }
  const { data: cart, statuscode } = await getcartofuser({ userId });
  if (!cart) {
    return { data: "cart not found", statuscode: 400 };
  }
  const orderitems:Iorderitem[]=[]
  for (const item of cart.items) {
    const product = await ProductModel.findById(item.product);
    if (!product) {
      return { data: "product not found", statuscode: 404 };
    }
    const orderitem: Iorderitem ={
producttitle:product.title,
unitprice:item.unitprice,
quantity:item.quantity,
image:product.image,

    }
    orderitems.push(orderitem)
  }
  const order= await orderModel.create({
    adress,userId,orderitems,total:cart.totalamount
  })
 const ordercompleted= await order.save()
 cart.status="completed"
 await cart.save()
  return {data:ordercompleted,statuscode:200}
};
