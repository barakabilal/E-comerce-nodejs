

const Header= () => {
  return (
    <div className="relative w-full h-screen overflow-hidden p-3">
      <style>{`
        .bg-gradient {
        background-color: #64748b;
        
        }
        
        .geometric-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.3;
        }
        
        .line {
          position: absolute;
          background: rgba(255, 255, 255, 0.2);
          transform-origin: center;
        }
        
        .line-1 {
          width: 1px;
          height: 300px;
          top: 20%;
          left: 10%;
          transform: rotate(45deg);
          animation: float1 6s ease-in-out infinite;
        }
        
        .line-2 {
          width: 1px;
          height: 200px;
          top: 60%;
          left: 20%;
          transform: rotate(-30deg);
          animation: float2 8s ease-in-out infinite;
        }
        
        .line-3 {
          width: 1px;
          height: 400px;
          top: 10%;
          right: 15%;
          transform: rotate(60deg);
          animation: float3 7s ease-in-out infinite;
        }
        
        .line-4 {
          width: 1px;
          height: 250px;
          bottom: 30%;
          right: 25%;
          transform: rotate(-45deg);
          animation: float1 9s ease-in-out infinite;
        }
        
        .line-5 {
          width: 1px;
          height: 350px;
          top: 40%;
          left: 70%;
          transform: rotate(120deg);
          animation: float2 5s ease-in-out infinite;
        }
        
        .line-6 {
          width: 1px;
          height: 180px;
          bottom: 20%;
          left: 40%;
          transform: rotate(-60deg);
          animation: float3 6s ease-in-out infinite;
        }
        
        .intersection-point {
          position: absolute;
          width: 4px;
          height: 4px;
          background:white;
          
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }
        
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
        
        .brand-text {
          font-family: 'Arial', sans-serif;
          font-weight: 700;
          font-size: 4.5rem;
          color: orange;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          letter-spacing: 2px;
          margin-bottom: 1rem;
          animation: slideInFromTop 1.2s ease-out;
        }
        
        .tagline {
          font-family: 'Arial', sans-serif;
          font-weight: 300;
          font-size: 1.5rem;
          color: white;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          letter-spacing: 4px;
          text-transform: uppercase;
          animation: slideInFromBottom 1.2s ease-out 0.3s both;
        }
        
        .underline {
          width: 100%;
          height: 4px;
          background: white;
          margin: 0.5rem 0;
          animation: expandWidth 1.5s ease-out 0.6s both;
        }
        
        @keyframes float1 {
          0%, 100% { transform: rotate(45deg) translateY(0px); }
          50% { transform: rotate(45deg) translateY(-20px); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: rotate(-30deg) translateY(0px); }
          50% { transform: rotate(-30deg) translateY(15px); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: rotate(60deg) translateY(0px); }
          50% { transform: rotate(60deg) translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { 
           color:white;
            transform: scale(1);
          }
          50% { 
            color:white;
          transform: scale(1.5);
          }
        }
        
        @keyframes slideInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromBottom {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandWidth {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .brand-text {
            font-size: 3rem;
            letter-spacing: 1px;
          }
          
          .tagline {
            font-size: 1.2rem;
            letter-spacing: 2px;
          }
          
          .line {
            opacity: 0.2;
          }
        }
        
        @media (max-width: 480px) {
          .brand-text {
            font-size: 2.5rem;
            letter-spacing: 0.5px;
          }
          
          .tagline {
            font-size: 1rem;
            letter-spacing: 1px;
          }
        }
      `}</style>

      {/* Gradient Background */}
      <div className="bg-slate-800 w-full h-full ">
        
        {/* Geometric Lines */}
        <div className="geometric-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="line line-5"></div>
          <div className="line line-6"></div>
          
          {/* Intersection Points */}
          <div className="intersection-point point-1"></div>
          <div className="intersection-point point-2"></div>
          <div className="intersection-point point-3"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="brand-text orange-400">
              B-Tech-Store
            </h1>
            
            <div className="underline mx-auto"></div>
            
            <p className="tagline mt-6">
              Find your gateway to tech
            </p>
          </div>
        </div>

        {/* Additional geometric elements for depth */}
        <div className="absolute top-10 left-10 w-20 h-20 border border-white opacity-20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-16 right-16 w-16 h-16 border border-white opacity-20 rotate-12 animate-bounce" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 border border-white opacity-30 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-1/3 left-10 w-12 h-12 border border-white opacity-30 rotate-45 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Header;