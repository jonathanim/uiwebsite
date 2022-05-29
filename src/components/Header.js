import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-scroll";
import { Link as LI } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[75px] z-10 bg-zinc-200 fixed drop-shadow-lg mb-100px">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="flex text-4xl mr-4 font-bold items-center sm:text-3xl">
            <LI to="/">UI-UX</LI>
          </h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="hero" smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-50} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="support" smooth={true} offset={-100} duration={500}>
                Support
              </Link>
            </li>
            <li>
              <Link to="platform" smooth={true} offset={-200} duration={500}>
                Platform
              </Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            <LI to="/login">Log in</LI>
          </button>
          <button className="px-8 py-3">
            {" "}
            <LI to="/register">Sign up</LI>
          </button>
        </div>
        <div className="md:hidden mr-6" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li>
          <Link
            to="hero"
            onClick={handleClick}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            onClick={handleClick}
            smooth={true}
            offset={-50}
            duration={500}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="support"
            onClick={handleClick}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Support
          </Link>
        </li>
        <li>
          <Link
            to="platform"
            onClick={handleClick}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Platform
          </Link>
        </li>
        <li>
          <Link
            to="pricing"
            onClick={handleClick}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Pricing
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            <LI to="/login">Log in</LI>
          </button>
          <button className="px-8 py-3">
            {" "}
            <LI to="/register">Sign up</LI>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
