import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.css";
import background from "../../../images/background.png";
const Signup = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const signup = (data) => {
    console.log(data);
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((userData) => {
        if (userData.message) {
          alert(userData.message);
          return;
        }
        console.log(userData);
        localStorage.setItem("userdata", JSON.stringify(userData));
      })
      .catch((err) => console.log(err));
  };
  const user = localStorage.getItem("userData");
  console.log(user);
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        style={myStyle}
        className="flex flex-col w-80  h-80 p-5 rounded-xl shadow"
        onSubmit={handleSubmit(signup)}
      >
        <h1 className="text-center border-b-2 pb-4 text-xl">Signup Now</h1>

        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input type="text" {...register("name")} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input type="email" {...register("email")} />
        </div>
        <input className="" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Signup;
