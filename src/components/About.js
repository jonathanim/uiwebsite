import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-fit md:h-full mt-14">
      <div className="flex flex-col text-center justify-center items-center my-5">
        <h2 className=" flex text-5xl font-bold p-5 my-10">
          Trusted by users accross the globe.
        </h2>

        <div className="flex flex-col justify-center items-center md:grid grid-cols-2 text-center md:items-stretch my-5">
          <h3 className="grid text-2xl p-5 md:mx-auto m-5 bg-indigo-600 text-white rounded-xl md:w-[70%] shadow-2xl shadow-gray-400">
            Private clouds are typically more secure than public clouds, as
            they're usually dedicated to a single group or user and rely on that
            group or user's firewall.
          </h3>
          <h3 className="grid text-2xl p-5 md:mx-auto m-5 bg-indigo-600 text-white rounded-xl md:w-[70%] shadow-2xl shadow-gray-400">
            The isolated nature of these clouds helps them stay secure from
            outside attacks since they're only accessible by one organization.
          </h3>
        </div>
      </div>
      <div className=" md:grid md:grid-cols-3 text-center justify-center items-center my-10 ">
        <div className="border p-6 rounded-xl bg-zinc-200 shadow-2xl m-6">
          <h2 className="text-indigo-600 text-6xl font-bold">100%</h2>
          <p className="text-xl text-gray-700">Completion</p>
        </div>
        <div className="border p-6 rounded-xl bg-zinc-200 shadow-2xl m-6">
          <h2 className="text-indigo-600 text-6xl font-bold">24/7</h2>
          <p className="text-xl text-gray-700">Support</p>
        </div>
        <div className="border p-6 rounded-xl bg-zinc-200 shadow-2xl m-6">
          <h2 className="text-indigo-600 text-6xl font-bold">1M+</h2>
          <p className="text-xl text-gray-700">Transactions</p>
        </div>
      </div>
    </div>
  );
}

export default About;
