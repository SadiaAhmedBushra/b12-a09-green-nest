import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="max-w-11/12 mx-auto min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-1/2 mx-auto">
      <Outlet></Outlet>

      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
