import React from "react";
import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  return (
    <div className="h-[480px] w-full my-5 mx-auto relative rounded-lg shadow-lg p-4 flex flex-col bg-white hover:scale-105 transition-transform duration-300">
      <div className="absolute top-2 right-2 bg-[#AAFF00] font-bold px-3 py-2 rounded-full">
        ⭐ {plant.rating}
      </div>

      <img
        src={plant.image}
        alt={plant.plantName}
        className="w-full h-84 rounded object-cover mb-4"
      />

      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{plant.plantName}</h2>
        <p className="text-base-300 text-lg font-semibold">${plant.price}</p>
      </div>

      {/* Spacer to push button to bottom */}
      <div className="mt-auto">
        <Link
          to={`/plantdetails/${plant.plantId}`}
          className="btn btn-primary block text-white text-center px-4 py-2 rounded hover:bg-base-200 hover:text-black font-semibold transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PlantCard;
