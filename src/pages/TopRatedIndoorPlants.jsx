import React from "react";
import usePlants from "../Hooks/usePlants";
import PlantCard from "../components/PlantCard";

const TopRatedIndoorPlants = () => {
  const { plants, loading, error } = usePlants();
  // console.log(plants);

  return (
    <div>
      <h1 className="text-3xl text-center font-bold my-4">
        Top Rated Indoor Plants
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-items-center">
        {plants.map((plant) => (
          <PlantCard plant={plant} key={plant.plantId}> </PlantCard>
        ))}
      </div>
    </div>
  );
};

export default TopRatedIndoorPlants;
