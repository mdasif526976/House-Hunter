import React, { useState } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";

const Main = () => {
  const [modalOpen, setOpen] = useState(false);
  const modalToggle = () => {
    setOpen(!modalOpen);
  };
  return (
    <div className="">
      <Navbar modalToggle={modalToggle} />
      <Outlet />
      <Footer />
      {/* <div
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  
     flex justify-center items-center"
        >
        </div> */}
    </div>
  );
};

export default Main;
