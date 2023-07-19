import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ styled }) => {
  return (
    <div className={styled}>
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
  );
};

export default Menu;
