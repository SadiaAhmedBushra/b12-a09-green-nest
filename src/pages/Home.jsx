import React from "react";
import { Navigate } from "react-router";
import TopRatedIndoorPlants from "./TopRatedIndoorPlants";
import MeetOurGreenExperts from "./MeetOurGreenExperts";
import PlantCareTipsSection from "./PlantCareTipsSection";

const Home = (plants) => {
  // return <Navigate to="/"></Navigate>;
  return (
    <main className="mt-4">
      <div className="grid grid-cols-12 gap-5 justify-items-center">
        <div className="col-span-12 lg:col-span-9">
          <TopRatedIndoorPlants plants={plants}></TopRatedIndoorPlants>
          <MeetOurGreenExperts></MeetOurGreenExperts>
        </div>

        <div className="col-span-12 lg:col-span-3 flex justify-end"></div>
      </div>

      {/* {state === "loading" ? <LoadingPage /> : <Outlet />} */}

      <section>
        <PlantCareTipsSection />
      </section>
    </main>
  );
};

export default Home;
