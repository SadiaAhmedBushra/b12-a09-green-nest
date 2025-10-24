import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import errorPageImg from "../assets/pagenotfound.PNG"

const ErrorPage = () => {
  const error = useRouteError();
  return(
   
   <div className="w-11/12 mx-auto">
     <Navbar></Navbar>
    <div className="w-2/5 my-10 mx-auto ">
      <img className="mx-auto mt-20" src={errorPageImg} alt="" />
      </div>
    <Footer></Footer>
   </div>
 
  )
  
};

export default ErrorPage;