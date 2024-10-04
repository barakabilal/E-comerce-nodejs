import ProductModel from "../models/productModel"

 export const getALLproducts=async()=>{
 
return  await ProductModel.find()

}
export const seedproductsindb=async()=>{
    const products = [
        {
          title: "LAPTOP dell",
          price: 29.99,
          stock: 150,
          image: "https://nextlevelpc.ma/wp-content/uploads/2024/02/PC20Portable20Dell20Inspiron201620562520Prix20Maroc20Marrakech20Rabat20Casa_4.webp"
        },
        {
          title: "LAPTOP dell",
          price: 29.99,
          stock: 150,
          image: "https://nextlevelpc.ma/wp-content/uploads/2024/02/PC20Portable20Dell20Inspiron201620562520Prix20Maroc20Marrakech20Rabat20Casa_4.webp"
        },
        {
          title: "LAPTOP dell",
          price: 29.99,
          stock: 150,
          image: "https://nextlevelpc.ma/wp-content/uploads/2024/02/PC20Portable20Dell20Inspiron201620562520Prix20Maroc20Marrakech20Rabat20Casa_4.webp"
        },
        {
          title: "LAPTOP dell",
          price: 29.99,
          stock: 150,
          image: "https://nextlevelpc.ma/wp-content/uploads/2024/02/PC20Portable20Dell20Inspiron201620562520Prix20Maroc20Marrakech20Rabat20Casa_4.webp"
        },
        {
          title: "LAPTOP dell",
          price: 29.99,
          stock: 150,
          image: "https://nextlevelpc.ma/wp-content/uploads/2024/02/PC20Portable20Dell20Inspiron201620562520Prix20Maroc20Marrakech20Rabat20Casa_4.webp"
        },
    
      ];
      const existingproducts=await getALLproducts()
      if(existingproducts.length==0){
        await ProductModel.insertMany(products);
      }
    }


