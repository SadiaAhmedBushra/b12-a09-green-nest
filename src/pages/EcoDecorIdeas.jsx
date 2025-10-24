import React from "react";
import eco1 from "../assets/eco1.jpg";
import eco2 from "../assets/eco2.jpg";
import eco3 from "../assets/eco3.jpg";
import eco4 from "../assets/eco4.jpg";

const EcoDecorIdeas = () => {
  return (
    <div className="my-10 lg:my-15 lg:w-4/5 w-full mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Check Out Eco Decor Ideas To Transform Your Space
      </h1>
      <div className="bg-[#E6FFE6] shadow rounded-2xl flex flex-row items-center justify-start gap-3 mb-8 lg:p-0 p-2">
        <div className="lg:p-5 rounded bg-white">
          <img src={eco1} alt="" className="transform transition-transform duration-300 hover:scale-105 w-200 lg:w-70 h-50 rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-accent text-2xl">
            1. Frame Windows With Tall Plants
          </h2>
          <p className="text-lg">
            Place large leafy plants like rubber or areca palm near windows to create a fresh, natural look while filtering sunlight and purifying the air.{" "}
          </p>
        </div>
      </div>

      <div className="bg-[#E6FFE6] shadow rounded-2xl flex flex-row items-center justify-start gap-3 mb-8 lg:p-0 p-2">
        
        <div className="flex flex-col gap-2 lg:ml-5">
          <h2 className="font-bold text-accent text-2xl">
            2. Urban Jungle or Solo Statement
          </h2>
          <p className="text-lg">
            If you prefer a minimalist look, choose to place the plant as a
            centrepiece for a shelf or table to grab eyeballs. If you want to
            create an urban jungle, try a perfect mix of tall, trailing, bushy
            filler versions, say areca palm, pothos and peace lily.{" "}
          </p>
        </div>
        <div className="lg:p-5 rounded bg-white">
          <img src={eco2} alt="" className="transform transition-transform duration-300 hover:scale-105 w-200 lg:w-70 h-50 rounded" />
        </div>
      </div>

      <div className="bg-[#E6FFE6] shadow rounded-2xl flex flex-row items-center justify-start gap-3 mb-8 p-2 lg:p-0">
        <div className="lg:p-5 rounded bg-white">
          <img src={eco3} alt="" className="transform transition-transform duration-300 hover:scale-105 w-200 lg:w-70 h-50 rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-accent text-2xl">
            3. Deck a Wall in Green
          </h2>
          <p className="text-lg">
            Turn a monotonous wall into a lively green spot with mounted
            planters, floating shelves, or vertical plant stands. Besides
            enhancing visual appeal, it adds a refreshing touch while saving
            floor space.{" "}
          </p>
        </div>
      </div>

      <div className="bg-[#E6FFE6] shadow rounded-2xl flex flex-row items-center justify-start gap-3 mb-8 p-2 lg:p-0">
       
        <div className="flex flex-col gap-2 lg:ml-5">
          <h2 className="font-bold text-accent text-2xl">
            4. Hang Plants For Depth & Dimension
          </h2>
          <p className="text-lg">
            Suspend plants in macrame hangers, wall hooks, or ceiling mounts to
            create a floating effect. It adds beauty, depth and dimension to
            your apartment, no matter its size. Best try it out trailing plants
            like pothos, ivy, or string of pearls.{" "}
          </p>
        </div>
         <div className="lg:p-5 rounded bg-white">
          <img src={eco4} alt="" className="transform transition-transform duration-300 hover:scale-105 w-200 lg:w-70 h-50 rounded" />
        </div>
      </div>
    </div>
  );
};

export default EcoDecorIdeas;
