import React from "react";

function About() {
  return (
    <div className="w-full my-8">
      <div className="flex flex-col text-center justify-center items-center my-5">
        <h2 className=" flex text-4xl font-bold p-5">
          Trusted by users accross the globe.
        </h2>

        <div className="flex justify-center items-center w-96">
          <h3 className="flex text-2xl p-10 text-center text-gray-500">
            Private clouds are typically more secure than public clouds, as
            they're usually dedicated to a single group or user and rely on that
            group or user's firewall. The isolated nature of these clouds helps
            them stay secure from outside attacks since they're only accessible
            by one organization.
          </h3>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 text-center justify-center items-center">
        <div className="border p-6 rounded-xl bg-zinc-200 m-2 shadow-2xl">
          <h2 className="text-indigo-600 text-6xl font-bold">100%</h2>
          <p className="text-xl text-gray-700">Completion</p>
        </div>
        <div className="border p-6 rounded-xl bg-zinc-200 m-2 shadow-2xl ">
          <h2 className="text-indigo-600 text-6xl font-bold">24/7</h2>
          <p className="text-xl text-gray-700">Support</p>
        </div>
        <div className="border p-6 rounded-xl bg-zinc-200 m-2 shadow-2xl ">
          <h2 className="text-indigo-600 text-6xl font-bold">1M+</h2>
          <p className="text-xl text-gray-700">Transactions</p>
        </div>
      </div>
    </div>
  );
}

export default About;
