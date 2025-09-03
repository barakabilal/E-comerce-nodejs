import { Divider } from "@mui/material";
import { Heart, RotateCcw, Shield, Star, Truck, Zap } from "lucide-react";

import ProductGallery from "../components/ui/carousel";
import TabbedProductInfo from "../components/utils/TabbedProductInfo";

const ProductShowcase = () => {
  return (

    <div className="h-max bg-slate-800 m-2">

      {/* Floating Points Animation Styles */}
      <style>
        {`
          .point-1 { top: 30%; left: 25%; animation-delay: 0s; }
          .point-2 { top: 70%; right: 30%; animation-delay: 1s; }
          .point-3 { bottom: 40%; left: 60%; animation-delay: 2s; }
          .point-4 { top: 15%; left: 45%; animation-delay: 0.5s; }
          .point-5 { top: 85%; left: 15%; animation-delay: 1.5s; }
          .point-6 { top: 55%; right: 20%; animation-delay: 2.5s; }
          .point-7 { top: 25%; right: 45%; animation-delay: 3s; }
          .point-8 { bottom: 65%; left: 35%; animation-delay: 0.3s; }
          .point-9 { top: 45%; left: 75%; animation-delay: 1.8s; }
          .point-10 { bottom: 25%; right: 15%; animation-delay: 2.2s; }
          .point-11 { top: 60%; left: 10%; animation-delay: 0.8s; }
          .point-12 { top: 35%; right: 35%; animation-delay: 1.3s; }
          .point-13 { bottom: 55%; left: 80%; animation-delay: 2.8s; }
          .point-14 { top: 75%; left: 50%; animation-delay: 0.2s; }
          .point-15 { top: 20%; left: 70%; animation-delay: 1.7s; }
          .point-16 { bottom: 30%; right: 40%; animation-delay: 2.3s; }
          .point-17 { top: 50%; left: 5%; animation-delay: 0.7s; }
          .point-18 { top: 80%; right: 10%; animation-delay: 1.2s; }
          .point-19 { bottom: 45%; left: 90%; animation-delay: 2.7s; }
          .point-20 { top: 40%; left: 40%; animation-delay: 0.4s; }
          .point-21 { top: 65%; right: 50%; animation-delay: 1.6s; }
          .point-22 { bottom: 60%; left: 20%; animation-delay: 2.1s; }
          .point-23 { top: 10%; right: 25%; animation-delay: 0.9s; }
          .point-24 { top: 90%; left: 65%; animation-delay: 1.4s; }
          .point-25 { bottom: 20%; left: 55%; animation-delay: 2.6s; }
          .point-26 { top: 45%; right: 5%; animation-delay: 0.1s; }
          .point-27 { top: 25%; left: 85%; animation-delay: 1.9s; }
          .point-28 { bottom: 75%; right: 60%; animation-delay: 2.4s; }
          .point-29 { top: 55%; left: 30%; animation-delay: 0.6s; }
          .point-30 { top: 85%; right: 45%; animation-delay: 1.1s; }

          [class*="point-"] {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #ff6b35;
            border-radius: 50%;
            opacity: 0.3;
            animation: shimmer 3s ease-in-out infinite;
          }

          @keyframes shimmer {
            0%, 100% { opacity: 0.2; transform: scale(0.8); }
            50% { opacity: 0.8; transform: scale(1.2); }
          }

          .point-1, .point-7, .point-13, .point-19, .point-25 { width: 12px; height: 12px; opacity: 0.4; }
          .point-3, .point-9, .point-15, .point-21, .point-27 { width: 6px; height: 6px; opacity: 0.25; }
          .point-5, .point-11, .point-17, .point-23, .point-29 { width: 10px; height: 10px; opacity: 0.35; }

          .point-2, .point-8, .point-14, .point-20, .point-26 { animation-duration: 4s; }
          .point-4, .point-10, .point-16, .point-22, .point-28 { animation-duration: 2s; }
          .point-6, .point-12, .point-18, .point-24, .point-30 { animation: shimmer-move 5s ease-in-out infinite; }

          @keyframes shimmer-move {
            0%, 100% { opacity: 0.2; transform: scale(0.8) translateY(0px); }
            25% { opacity: 0.5; transform: scale(1) translateY(-5px); }
            50% { opacity: 0.8; transform: scale(1.2) translateY(0px); }
            75% { opacity: 0.5; transform: scale(1) translateY(5px); }
          }
        `}
      </style>

      {/* Floating Points */}
      {Array.from({ length: 30 }, (_, i) => (
        <div key={i} className={`point-${i + 1}`}></div>
      ))}

      {/* Product Showcase */}
      <div className="container flex flex-row gap-36 justify-center h-full items-center">
        <div className="w-1/3 h-2/3 mt-6">
          <img
            className="border rounded-md"
            src="https://m.media-amazon.com/images/I/81nvxIhrYKL._AC_SL1500_.jpg"
            alt="the place of the image"
          />
        </div>

        <div className="w-3/6 h-2/3">
          <h1 className="text-white font-bold text-6xl">
            Pro Gaming Beast X1
          </h1>
          <h2 className="text-white mt-5 text-xl">
            Ultimate gaming powerhouse with cutting-edge specs designed for 4K gaming, streaming, and content creation.
          </h2>

          <div className="flex flex-row gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 text-orange-500 fill-orange-500"
              />
            ))}
          </div>

          <div className="flex items-baseline gap-4 mt-4">
            <span className="text-4xl font-bold text-orange-400">$2,499</span>
            <span className="text-2xl text-slate-400 line-through">$2,999</span>
            <span className="px-3 py-1 bg-orange-500 rounded-lg text-sm font-bold">
              Save $500
            </span>
            <span className="px-3 py-1 flex flex-row bg-orange-500 rounded-lg text-sm font-bold">
               <Zap className="w-4 h-4" />
                BEST SELLER
            </span>
         
          </div>
             <div className="flex flex-row w-full gap-3 container mt-6">
                <button className="bg-orange-500 w-2/3  h-11 rounded-lg text-xl font-bold text-white">Add to cart</button>
                <div className="border rounded-lg border-white border-3px w-1/3 flex flex-row gap-3"> <Heart  className="text-white h-min w-min mt-2 ml-2" /> <button className=" text-xl font-bold text-white ">wishlist</button></div>
                
            </div>
            <h1 className="h-6"></h1>
            <Divider orientation="horizontal" className="bg-white "/>
            <div className="flex flex-row gap-14 justify-center items-center mt-3">
               <div className="flex items-center gap-2  text-orange-400">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">2-Year Warranty</span>
                </div>
                 <div className="flex items-center gap-2  text-orange-400">
                  <Truck className="w-5 h-5" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                  <div className="flex items-center gap- ml-3  text-orange-400">
                  <RotateCcw className="w-5 h-5" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
            </div>
        </div>
      </div>
      <h2 className=" mt-4 text-center font-bold text-2xl bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent ">
              Product Overview
            </h2>
     {/**the product overview */}
     <div className="flex flex-row gap-9">
<div className="flex-1"> <TabbedProductInfo></TabbedProductInfo></div>
<div className="flex-1"> <ProductGallery></ProductGallery></div>


     </div>
     <Divider className="bg-white"></Divider>
     <h1 className=" mt-4 text-center font-bold text-2xl bg-gradient-to-r from-orange-600 to-white bg-clip-text text-transparent ">
              Payment proccess
            </h1>
            {/* payment method*/}

            <div className="flex justify-center items-center h-3/5 w-4/5">
               <div className=" bg-slate-50/20 w-full h-full rounded-lg border-none">
                   <h2>2.499 $</h2>
                   <h2></h2>
                   <h3></h3>
               </div>
            </div>
    </div>
  );
};

export default ProductShowcase;
