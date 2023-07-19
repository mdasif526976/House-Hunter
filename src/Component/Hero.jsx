import React from "react";
import background from "../images/way-white-house.jpg";
const Hero = () => {
  return (
    <div
      className="flex justify-center items-center bg-cover h-[600px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col">
        <h1 className="text-7xl text-white w-[80%]">
          Sell or rent properties with Us .
        </h1>
        <div className="bg-white inset-0 bg-opacity-25 py-10 px-5 backdrop-blur-sm rounded-2xl my-20 flex justify-center">
          <div className="flex flex-col">
            <label htmlFor="countries" className="block mb-2 text-xl "></label>
            <select
              id="countries"
              className="bg-gray-50 border border-yellow-300 outline-none
            font-bold text-xl rounded-lg focus:ring-yellow-500 focus:selection:bg-white
                focus:border-yellow-500 block w-full px-12 py-4"
            >
              <option className="hover:bg-yellow-500" value="Dhaka">
                Dhaka
              </option>
              <option value="all"> Choose your City</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Shylhet">Shylhet</option>
              <option value="Bogra">Bogra</option>
              <option value="Brahmanbaria">Brahmanbaria</option>
            </select>
          </div>
          <input type="submit" value="Serach" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
