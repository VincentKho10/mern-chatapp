// import React from "react";
import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const Signup = () => {
  const [signup, setSignup] = useState({
    full_name: "",
    username: "",
    password: "",
    confirm_password: "",
    gender: "",
  });

  const { loading, doSignup } = useSignup(signup);

  const fieldChangeHandler = (e) => {
    const { name, value } = e.target;
    let newSignup = { ...signup, [name]: value };
    setSignup(newSignup);
  };

  const signUp = async (e) => {
    e.preventDefault();
    await doSignup(signup);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0 text-left">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Signup
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form onSubmit={signUp}>
          <div>
            <label className="label p-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              name="full_name"
              onChange={fieldChangeHandler}
            />
          </div>
          <div>
            <label className="label p-2">Username</label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              name="username"
              onChange={fieldChangeHandler}
            />
          </div>
          <div>
            <label className="label p-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              name="password"
              onChange={fieldChangeHandler}
            />
          </div>
          <div>
            <label className="label p-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              name="confirm_password"
              onChange={fieldChangeHandler}
            />
          </div>
          <GenderCheckbox changeHandler={fieldChangeHandler} />
          <Link
            to="/login"
            className="text-sm hover:text-blue-600 hover:underline mt-4 inline-block"
          >
            Already Have An Account?
          </Link>
          <div>
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <button className="btn btn-block btn-sm border border-slate-700 text-sm mt-2">
                Sign Up
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
