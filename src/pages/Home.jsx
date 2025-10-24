import React from "react";
import { Navigate } from "react-router";
import TopRatedIndoorPlants from "./TopRatedIndoorPlants";
import MeetOurGreenExperts from "./MeetOurGreenExperts";
import PlantCareTipsSection from "./PlantCareTipsSection";
import { PiPlant } from "react-icons/pi";
import { motion } from "framer-motion";
import usePlants from "../Hooks/usePlants";
import { motion as fmMotion } from "framer-motion";
import ScrollTriggered from "../components/ScrollTriggered";
import EcoDecorIdeas from "./EcoDecorIdeas";
import DIYPlantProjectSection from "./DIYPlantProjectSection";
const Home = () => {
  const { plants, loading } = usePlants();

  // return <Navigate to="/"></Navigate>;
  return (
    <main className="mt-4">
      <section className="">
        <ScrollTriggered />
      </section>
    
          <TopRatedIndoorPlants plants={plants}></TopRatedIndoorPlants>
          <PlantCareTipsSection></PlantCareTipsSection>
          <MeetOurGreenExperts></MeetOurGreenExperts>
          <EcoDecorIdeas></EcoDecorIdeas>
          <DIYPlantProjectSection></DIYPlantProjectSection>
    
    

      {/* {state === "loading" ? <LoadingPage /> : <Outlet />} */}
    </main>
  );
};

export default Home;
