import React from "react";
import { Link, useLocation } from "react-router-dom";

const Register = () => {
  const location = useLocation();

  return (
    <>
      <div className="w-screen h-[75px] z-10 bg-zinc-200 fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="flex text-4xl mr-4 font-bold items-center sm:text-3xl">
              <Link to="/">UI-UX</Link>
            </h1>
          </div>
          <div className="hidden md:flex pr-4">
            <button className="border-none bg-transparent text-black mr-4">
              <Link to="/login">Log in</Link>
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-52 text-center text-3xl">{location.pathname}</h1>
        </div>
      </div>
    </>
  );
};

export default Register;
