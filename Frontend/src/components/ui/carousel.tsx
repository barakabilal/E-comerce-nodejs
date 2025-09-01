import { useState } from "react";

const carousel = () => {
  const [index, setIndex] = useState<number>(0);
  const images = [
    'https://hp.widen.net/content/pun3rwanmz/webp/pun3rwanmz.png?dpi=72&color=ffffff00&w=270',
    'https://cdn.mos.cms.futurecdn.net/UE3nLeNY8p5g84mstLamsD.jpg',
    'https://cdn.pixabay.com/photo/2022/09/25/22/25/iphone-7479302_640.jpg',
    'https://static1.pocketnowimages.com/wordpress/wp-content/uploads/styles/xxlarge/public/2022-04/LI%20Samsung%20Galaxy%20S22%20Ultra%20Back%20Angled%20Shot.jpg?q=50&fit=crop&w=825&dpr=1.5'
  ];

  return (
    <>
      <div className="h-screen flex justify-center items-center bg-slate-800 w-full m-1">
        {/* product overview */}
        <div className="bg-slate-700/50 justify-center w-4/12 h-5/6 gap-6 rounded-lg border-non flex flex-col">
          <div className="basis-2/3 ml-3 mr-3 mt-6 h-96 bg-white rounded-lg border-none">
            <img className="object-cover h-full w-full" src={images[index]} alt="" />
          </div>

          <div className="basis-1/3 m-3 rounded-lg border-none">
            <div className="flex flex-row gap-2">
           {images.map((element, indexs) => {
            return( <button onClick={()=>{setIndex(indexs)}} className={`relative rounded-lg overflow-hidden w-10 flex-1 h-28 transition-all duration-200 ${
                      index === indexs ? 'ring-2 border-orange-500' : 'hover:scale-105'
                    }`}><img src={element} alt={`${index}`} /></button>
)
           
  // return something
})}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default carousel;
