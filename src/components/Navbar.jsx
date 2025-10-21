import React from "react";
import { Link, NavLink } from "react-router";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <h1 className="text-[#008000] text-xl font-bold">GreenNest</h1>
      </div>

      <div className="nav flex justify-between items-center gap-1 lg:gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/profile">My Profile</NavLink>
      </div>


      <div className="login-btn flex gap-2">
        {/* <img src={userImg} alt="" /> */}
        <Link to="/auth/login" className="btn btn-primary p-3"><FaUserAlt /> Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
