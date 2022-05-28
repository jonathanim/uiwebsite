import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className="w-full my-20 h-full">
      <div className="w-full h-full bg-slate-800 absolute  mix-blend-overlay">
        <div className="max-w-[850px] mx-auto my-15">
          <div className="text-center p-10">
            <h2 className="text-3xl text-slate-300 my-10">Pricing</h2>
            <h3 className="text-5xl font-bold text-slate-200 mb-5">
              The right price for your everyday security.
            </h3>
            <p className="text-2xl py-5 text-slate-300">
              lorGubergren sadipscing eirmod est lorem amet, amet diam et
              gubergren tempor stet tempor justo invidunt eos, amet sed no
              sit.em15
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 m-5 w-full mx-auto">
            <div className="bg-slate-300 rounded-xl p-5 shadow-xl shadow-gray-700">
              <div className="bg-pink-500 p-3 rounded-xl text-center">
                <span className="text-slate-300 text-2xl">Basic</span>
              </div>
              <div className="text-center mt-3">
                <p className="text-2xl flex justify-center">
                  $49
                  <span className="text-[15px] flex flex-col flex-end">
                    /mo
                  </span>
                </p>
              </div>
              <div className="flex flex-col justify-center items-start">
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> 24/7
                  Customer Service Support
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> Cloud
                  Security
                </p>
                <p className="flex py-4">
                  <XIcon className="w-5 mr-4 text-red-600" /> Malware Protection
                </p>
                <p className="flex py-4">
                  <XIcon className="w-5 mr-4 text-red-600" /> IP Security
                </p>
              </div>
            </div>
            <div className="bg-slate-300 rounded-xl p-5 shadow-xl shadow-gray-700">
              <div className="bg-indigo-500 p-3 rounded-xl text-center">
                <span className="text-slate-300 text-2xl">Enhanced</span>
              </div>
              <div className="text-center mt-3">
                <p className="text-2xl flex justify-center">
                  $69<span>/mo</span>
                </p>
              </div>
              <div>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> Includes all
                  Basic Features
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> Malware
                  Protection
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> IP Security
                </p>
                <p className="flex py-4">
                  <XIcon className="w-5 mr-4 text-red-600" /> Anti Fraud
                  Protection
                </p>
              </div>
            </div>
            <div className="bg-slate-300 rounded-xl p-5 shadow-xl shadow-gray-700">
              <div className="bg-green-500 p-3 rounded-xl text-center">
                <span className="text-slate-300 text-2xl">Ultimate</span>
              </div>
              <div className="text-center mt-3">
                <p className="text-2xl flex justify-center">
                  $99<span>/mo</span>
                </p>
              </div>
              <div>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> Include all
                  Enhanced Features
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> Anti Fraud
                  Protection
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> CLoud
                  management Tools
                </p>
                <p className="flex py-4">
                  <CheckIcon className="w-5 mr-4 text-green-500" /> Unlimited
                  VPN Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
