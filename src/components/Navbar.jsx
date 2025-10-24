import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { FaRegUser, FaUserAlt, FaUserCircle } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";
import { AuthContext } from "../provider/AuthProvider";
import { MdLogout, MdOutlineLogin } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [dropdown, setDropdown] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex flex-row ">
          <h1 className="text-[#008000] text-xl font-bold">GreenNest</h1>
          <PiPlant size={17} className="text-[#008000]" />
        </div>

        <div className="nav flex lg:flex-row flex-col justify-between items-center gap-1 lg:gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <div
            className=""
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer"
          >
            {user ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-8 h-8 rounded-full bg-base-100"
              />
            ) : ""}
          </div>

          {/* {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-primary p-3 flex items-center gap-2"
            >
              <MdLogout size={20} /> Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary p-3 flex items-center gap-2"
            > <MdOutlineLogin size={20}/>
              Log In
            </Link>
          )} */}

          {user &&
            dropdown && ( 
              <div className="absolute right-0 z-10 mt-12 bg-white rounded p-3 flex flex-col gap-2 ">
                <span className="">{user.displayName}</span>{" "}
                <span className="text-xs">{user && user.email}</span>
                <button
                  onClick={handleLogOut}
                  className="btn btn-primary flex items-center gap-2"
                >
                  <MdLogout size={18} /> Log Out
                </button>
              </div>
            )}

          {!user && ( 
            <div className="flex lg:flex-row flex-col gap-2">
              <Link
                to="/auth/login"
                className="btn btn-primary flex items-center gap-2"
              >
                <MdOutlineLogin size={18} /> Log In
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-base-100 flex items-center gap-2"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
