import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import TopRatedIndoorPlants from "../pages/TopRatedIndoorPlants";
import MeetOurGreenExperts from "../pages/MeetOurGreenExperts";
import PlantCareTipsSection from "../pages/PlantCareTipsSection";
import Footer from "../components/Footer";
import SocialLogIn from "../components/SocialLogIn";

const HomeLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="mt-4">
        <div className="grid grid-cols-12 gap-5 justify-items-center">
          <div className="col-span-12 lg:col-span-9">
            <TopRatedIndoorPlants />
            <MeetOurGreenExperts />
          </div>

          <div className="col-span-12 lg:col-span-3 flex justify-end">
            {/* <SocialLogIn /> */}
          </div>
        </div>

        <Outlet />

        <section>
          <PlantCareTipsSection />
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
