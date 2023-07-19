import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Menu from "./Menu";
// ..
AOS.init();
const Navbar = ({ modalToggle }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="p-8 bg-white">
      {/* for web */}
      <div className="md:flex justify-between items-center hidden ">
        <div className="brand">
          <p className="text-2xl font-semibold">House Hunter</p>
        </div>
        <div className="menu">
          <Menu styled="menu flex gap-10" />
        </div>
        <div className="rightMenu">
          <button
            onClick={() => modalToggle()}
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
      {/* mobile menu  */}
      <div className="flex flex-col md:hidden">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">House Hunter</p>
          <div className="flex gap-2">
            <button>
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
            </button>
            {isOpen ? (
              <svg
                onClick={() => setOpen(!isOpen)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setOpen(!isOpen)}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            )}
          </div>
        </div>
        {isOpen && (
          <div
            data-aos="fade-left"
            className="menu flex px-5
            items-c gap-8 mt-5 flex-col   "
          >
            <div className="">
              <Menu styled="flex flex-col gap-8" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
