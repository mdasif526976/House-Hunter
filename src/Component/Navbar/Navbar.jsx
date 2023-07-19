import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-8 bg-white">
      {/* for web */}
      <div className="flex justify-between items-center">
        <div className="brand">
          <p className="text-2xl font-semibold">House Hunter</p>
        </div>
        <div className="menu flex gap-10">
          <div className="flex">
            <NavLink
              to="/"
              className={({
                isActive,
              }) => ` flex items-center px-4 -mb-1 border-b-2 font-semibold hover:border-yellow-500 hover:text-yellow-500 ${
                isActive && "border-yellow-500 text-yellow-500"
              }
              text-[18px]`}
            >
              Home
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/property"
              className={({
                isActive,
              }) => ` flex items-center px-4 -mb-1 border-b-2 font-semibold hover:border-yellow-500 hover:text-yellow-500 ${
                isActive && "border-yellow-500 text-yellow-500"
              }
              text-[18px]`}
            >
              Property
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/contract"
              className={({
                isActive,
              }) => ` flex items-center px-4 -mb-1 border-b-2 font-semibold hover:border-yellow-500 hover:text-yellow-500 ${
                isActive && "border-yellow-500 text-yellow-500"
              }
              text-[18px]`}
            >
              Contract Us
            </NavLink>
          </div>
          <div className="flex">
            <NavLink
              to="/blog"
              className={({
                isActive,
              }) => ` flex items-center px-4 -mb-1 border-b-2 font-semibold hover:border-yellow-500 hover:text-yellow-500 ${
                isActive && "border-yellow-500 text-yellow-500"
              }
              text-[18px]`}
            >
              Blog
            </NavLink>
          </div>
        </div>
        <div className="rightMenu">
          <button
            className="flex items-center gap-1 text-xl font-semibold border-2
          p-3 rounded-xl text-yellow-500 hover:bg-yellow-500 hover:text-white border-yellow-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>Join Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
