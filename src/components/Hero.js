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
          <img className="w-full scale-[60%]" src={cyber} alt="/" />
        </div>
      </div>
      <div
        className="flex w-[60%] flex-col py-8 mx-auto bg-zinc-200 md:bg-transparent rounded-xl text-center shadow-xl
        "
      >
        <p className="text-2xl font-bold mb-5">Data Services</p>
        <div className="flex justify-center items-center flex-wrap px-5 md:justify-between">
          <p className="flex px-4 py2 text-slate-500">
            <CloudUploadIcon className="h-6 text-indigo-600" />
            App Security
          </p>
          <p className="flex px-4 py2 text-slate-500">
            <DatabaseIcon className="h-6 text-indigo-600" />
            Dashboard Design
          </p>
          <p className="flex px-4 py2 text-slate-500">
            <ServerIcon className="h-6 text-indigo-600" />
            Cloud Data
          </p>
          <p className="flex px-4 py2 text-slate-500">
            <PaperAirplaneIcon className="h-6 text-indigo-600" />
            API
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
