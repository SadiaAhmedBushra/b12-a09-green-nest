import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import TopRatedIndoorPlants from "../pages/TopRatedIndoorPlants";
import PlantCareTipsSection from "../pages/PlantCareTipsSection";
import MeetOurGreenExperts from "../pages/MeetOurGreenExperts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PlantDetails from "../pages/PlantDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    // errorElement: <ErrorPage />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    //   {
    //     path: "/plant",
    //     element: <TopRatedIndoorPlants />,
    //   },
      {
        path: "/tip",
        element: <PlantCareTipsSection></PlantCareTipsSection>,
      },
      {
        path: "/expert",
        element: <MeetOurGreenExperts></MeetOurGreenExperts>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
        {
           path: "/auth/login",
    element: <Login></Login>, 
        },
        {
           path: "/auth/register",
    element: <Register></Register>, 
        },
    ]
  },
  {
    path: "/plantdetails/:plantId",
    element: <PrivateRoute> 
      <PlantDetails></PlantDetails>
    </PrivateRoute>,
    loader: ()=> fetch("/plants.json"),
  },
  {
    path: "/profile",
    element: <h2>My Profile</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
