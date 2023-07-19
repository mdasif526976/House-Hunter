import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.css";
const Signup = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const signup = (data) => {
    console.log(data);
    console.log("dfs");
    // fetch("http://localhost:5000/user", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((userData) => {
    //     if (userData.message) {
    //       alert(userData.message);
    //       return;
    //     }
    //     console.log(userData);
    //     localStorage.setItem("userdata", JSON.stringify(userData));
    //   })
    //   .catch((err) => console.log(err));
  };
  const user = localStorage.getItem("userData");
  console.log(user);
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className=" py-3 flex rounded-xl border border-yellow-500 p-5 flex-col w-[400px] "
        onSubmit={handleSubmit(signup)}
      >
        <h1 className="text-center mt-2 py-0 font-bold text-2xl">Signup Now</h1>

        <div className=" py-4 flex flex-col ">
          <input
            className="focus:outline-none border-b-2 border-yellow-500 py-2"
            type="text"
            placeholder="Enter your name here"
            {...register("name", { required: "This Feild is required" })}
          />
          {errors.name && (
            <p className="text-red-500 mb-1" role="alert">
              {errors.name?.message}.
            </p>
          )}
        </div>
        <div className=" py-4 flex flex-col">
          <input
            className="focus:outline-none border-b-2 border-yellow-500 py-2"
            placeholder="Enter your email here"
            type="email"
            {...register("email", { required: "Enter your Email" })}
          />
        </div>
        <div className=" py-4 flex flex-col">
          <label className="pb-4" htmlFor="">
            Account Type
          </label>
          <select
            className="py-4 rounded focus:outline-none px-5 bg-white border-yellow-500 border"
            defaultValue="houseRenter"
            type="text"
            {...register("account-type")}
          >
            <option className=" focus:outline-none" value="houseRenter">
              House Renter
            </option>
            <option value="houseOwner">House Owner</option>
          </select>
        </div>
        <div className=" py-4 flex flex-col ">
          <input
            className="focus:outline-none border-b-2 border-yellow-500 py-2"
            type="numbar"
            placeholder="Enter your phoneNumbar here"
            {...register("phoneNumbar", {
              required: "This Feild is required",
              maxLength: {
                value: 14,
                message: "Phone Numbar must be Bangladeshi sim",
              },
            })}
          />
          {errors.phoneNumbar && (
            <p className="text-red-500 mb-1">{errors.phoneNumbar?.message}.</p>
          )}
        </div>
        <div className=" py-4 flex flex-col ">
          <input
            className="focus:outline-none border-b-2 border-yellow-500 py-2"
            type="password"
            placeholder="Enter your password here"
            {...register("password", {
              required: "Enter your Password",
              minLength: {
                value: 8,
                message:
                  "Your password must be at least 8 characters or longer",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 mb-1">{errors.password?.message}.</p>
          )}
        </div>
        <input
          className="w-full mt-4 py-4 text-white text-xl font-bold
          hover:text-yellow-500 hover:bg-white hover:border hover:border-yellow-400
           bg-yellow-500 rounded"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Signup;
