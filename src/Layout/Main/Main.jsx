import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
