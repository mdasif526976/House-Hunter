import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const signup = (data) => {
    console.log(data);
    fetch("http://localhost:5000/user", {
      method: "Get",
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
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col w-72 p-5 rounded-xl shadow"
        onSubmit={handleSubmit(signup)}
      >
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

export default Login;
