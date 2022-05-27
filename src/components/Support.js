import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { VideoCameraIcon, SupportIcon } from "@heroicons/react/solid";

import supportImage from "../assets/big-img.jpeg";

const Support = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImage}
          alt="support"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-4xl font-bold py-6 text-center">
            Assisting all clients
          </h3>
          <p className="text-3xl py-4 text-slate-300">
            Aliquyam ipsum erat lorem lorem invidunt dolores, eos lorem voluptua
            diam tempor takimata est rebum ea. Accusam sanctus sea ea et, diam
            voluptua et eos ipsum amet voluptua rebum, magna.
          </p>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <PhoneIcon className="p-4 w-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">
                Voluptua aliquyam voluptua amet dolores justo diam no diam sea
                magna, rebum ut amet rebum et gubergren erat nonumy, vero.
              </p>
            </div>
            <div className="bg-slate-300 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <SupportIcon className="p-4 w-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Voluptua aliquyam voluptua amet dolores justo diam no diam sea
                magna, rebum ut amet rebum et gubergren erat nonumy, vero.
              </p>
            </div>
            <div className="bg-slate-300 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <VideoCameraIcon className="p-4 w-16 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6">Media</h3>
              <p className="text-gray-600 text-xl">
                Voluptua aliquyam voluptua amet dolores justo diam no diam sea
                magna, rebum ut amet rebum et gubergren erat nonumy, vero.
              </p>
            </div>
            <div className="bg-slate-300 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us
                <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
