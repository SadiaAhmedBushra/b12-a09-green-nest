import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import TopRatedIndoorPlants from "../pages/TopRatedIndoorPlants";
import MeetOurGreenExperts from "../pages/MeetOurGreenExperts";
import PlantCareTipsSection from "../pages/PlantCareTipsSection";
import Footer from "../components/Footer";
import SocialLogIn from "../components/SocialLogIn";
import usePlants from "../Hooks/usePlants";
import LoadingPage from "../pages/LoadingPage";

const HomeLayout = () => {
  const { state } = useNavigation();
  const { plants, loading } = usePlants();

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div className="max-w-11/12 mx-auto">
      <nav>
        <Navbar></Navbar>
        {import.meta.env.VITE_name}
      </nav>

      <main className="mt-4">
        <Outlet /> {/* Only render the current route's component */}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
