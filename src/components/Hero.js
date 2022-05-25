import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import cyber from "../assets/cyber-image.png";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">Security at it's best</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full scale-[70%]" src={cyber} alt="/" />
        </div>
        <div
          className="md:absolute md:flex flex-col py-8 md:min-w-[760px] bottom-[15%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 md:bg-transparent rounded-xl text-center shadow-xl
        "
        >
          <p className="text-2xl mb-5">Data Services</p>
          <div className="block sm:flex justify-center items-center flex-wrap px-5 md:flex md:justify-between">
            <p className="inline-block md:flex px-4 py2 text-slate-500">
              <CloudUploadIcon className="inline-block h-6 text-indigo-600" />
              App Security
            </p>
            <p className="inline-block md:flex px-4 py2 text-slate-500">
              <DatabaseIcon className="inline-block h-6 text-indigo-600" />
              Dashboard Design
            </p>
            <p className="inline-block md:flex px-4 py2 text-slate-500">
              <ServerIcon className="inline-block h-6 text-indigo-600" />
              Cloud Data
            </p>
            <p className="inline-block md:flex px-4 py2 text-slate-500">
              <PaperAirplaneIcon className="inline-block h-6 text-indigo-600" />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
