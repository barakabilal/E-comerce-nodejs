const ProductShowcase=()=>    {

return(
    <div className="h-screen  bg-slate-800 m-3 ">
         {/* Idesign of the points */}
        <style>{` /* Floating Points Animation Styles */
.point-1 {
  top: 30%;
  left: 25%;
  animation-delay: 0s;
}

.point-2 {
  top: 70%;
  right: 30%;
  animation-delay: 1s;
}

.point-3 {
  bottom: 40%;
  left: 60%;
  animation-delay: 2s;
}

.point-4 {
  top: 15%;
  left: 45%;
  animation-delay: 0.5s;
}

.point-5 {
  top: 85%;
  left: 15%;
  animation-delay: 1.5s;
}

.point-6 {
  top: 55%;
  right: 20%;
  animation-delay: 2.5s;
}

.point-7 {
  top: 25%;
  right: 45%;
  animation-delay: 3s;
}

.point-8 {
  bottom: 65%;
  left: 35%;
  animation-delay: 0.3s;
}

.point-9 {
  top: 45%;
  left: 75%;
  animation-delay: 1.8s;
}

.point-10 {
  bottom: 25%;
  right: 15%;
  animation-delay: 2.2s;
}

.point-11 {
  top: 60%;
  left: 10%;
  animation-delay: 0.8s;
}

.point-12 {
  top: 35%;
  right: 35%;
  animation-delay: 1.3s;
}

.point-13 {
  bottom: 55%;
  left: 80%;
  animation-delay: 2.8s;
}

.point-14 {
  top: 75%;
  left: 50%;
  animation-delay: 0.2s;
}

.point-15 {
  top: 20%;
  left: 70%;
  animation-delay: 1.7s;
}

.point-16 {
  bottom: 30%;
  right: 40%;
  animation-delay: 2.3s;
}

.point-17 {
  top: 50%;
  left: 5%;
  animation-delay: 0.7s;
}

.point-18 {
  top: 80%;
  right: 10%;
  animation-delay: 1.2s;
}

.point-19 {
  bottom: 45%;
  left: 90%;
  animation-delay: 2.7s;
}

.point-20 {
  top: 40%;
  left: 40%;
  animation-delay: 0.4s;
}

.point-21 {
  top: 65%;
  right: 50%;
  animation-delay: 1.6s;
}

.point-22 {
  bottom: 60%;
  left: 20%;
  animation-delay: 2.1s;
}

.point-23 {
  top: 10%;
  right: 25%;
  animation-delay: 0.9s;
}

.point-24 {
  top: 90%;
  left: 65%;
  animation-delay: 1.4s;
}

.point-25 {
  bottom: 20%;
  left: 55%;
  animation-delay: 2.6s;
}

.point-26 {
  top: 45%;
  right: 5%;
  animation-delay: 0.1s;
}

.point-27 {
  top: 25%;
  left: 85%;
  animation-delay: 1.9s;
}

.point-28 {
  bottom: 75%;
  right: 60%;
  animation-delay: 2.4s;
}

.point-29 {
  top: 55%;
  left: 30%;
  animation-delay: 0.6s;
}

.point-30 {
  top: 85%;
  right: 45%;
  animation-delay: 1.1s;
}

/* Base animation for all points */
[class*="point-"] {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #ff6b35;
  border-radius: 50%;
  opacity: 0.3;
  animation: shimmer 3s ease-in-out infinite;
}

/* Shimmer animation */
@keyframes shimmer {
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

/* Variations for different sizes */
.point-1, .point-7, .point-13, .point-19, .point-25 {
  width: 12px;
  height: 12px;
  opacity: 0.4;
}

.point-3, .point-9, .point-15, .point-21, .point-27 {
  width: 6px;
  height: 6px;
  opacity: 0.25;
}

.point-5, .point-11, .point-17, .point-23, .point-29 {
  width: 10px;
  height: 10px;
  opacity: 0.35;
}

/* Slower animation for some points */
.point-2, .point-8, .point-14, .point-20, .point-26 {
  animation-duration: 4s;
}

/* Faster animation for some points */
.point-4, .point-10, .point-16, .point-22, .point-28 {
  animation-duration: 2s;
}

/* Alternative shimmer with movement */
.point-6, .point-12, .point-18, .point-24, .point-30 {
  animation: shimmer-move 5s ease-in-out infinite;
}

@keyframes shimmer-move {
  0%, 100% {
    opacity: 0.2;
    transform: scale(0.8) translateY(0px);
  }
  25% {
    opacity: 0.5;
    transform: scale(1) translateY(-5px);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2) translateY(0px);
  }
  75% {
    opacity: 0.5;
    transform: scale(1) translateY(5px);
  }
}`}
        </style>
    {/* Intersection Points */}

<div className="point-1"></div>
<div className="point-2"></div>
<div className="point-3"></div>
<div className="point-4"></div>
<div className="point-5"></div>
<div className="point-6"></div>
<div className="point-7"></div>
<div className="point-8"></div>
<div className="point-9"></div>
<div className="point-10"></div>
<div className="point-11"></div>
<div className="point-12"></div>
<div className="point-13"></div>
<div className="point-14"></div>
<div className="point-15"></div>
<div className="point-16"></div>
<div className="point-17"></div>
<div className="point-18"></div>
<div className="point-19"></div>
<div className="point-20"></div>
<div className="point-21"></div>
<div className="point-22"></div>
<div className="point-23"></div>
<div className="point-24"></div>
<div className="point-25"></div>
<div className="point-26"></div>
<div className="point-27"></div>
<div className="point-28"></div>
<div className="point-29"></div>
<div className="point-30"></div>
{/**the product showcase */}
<div className="container flex flex-row gap-40 justify-center h-full items-center ">
    <div className="bg-white w-96 h-min">hello</div>
    <div className="bg-white w-96 h-min"> hello</div>
    
</div>
    </div>
)

}
export default ProductShowcase