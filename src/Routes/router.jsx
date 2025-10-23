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
import LoadingPage from "../pages/LoadingPage";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    // errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/plants",
        element: <TopRatedIndoorPlants />,
      },
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
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
  },
  {
    path: "/profile",
    element:       <PrivateRoute>
        <MyProfile />
      </PrivateRoute>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
