// import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter bg-opacity-0 text-left">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          Signup
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">Username</label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:text-blue-600 hover:underline mt-4 inline-block"
          >
            Already Have An Account?
          </a>
          <div>
            <button className="btn btn-block btn-sm border border-slate-700 text-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
