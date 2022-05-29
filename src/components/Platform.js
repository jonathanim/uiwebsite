import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const Platform = () => {
  return (
    <div name="platform" className="w-full my-20 h-full">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl text-gray-500 text-center py-10">
          Voluptua sit nonumy sit ipsum sit eirmod, aliquyam takimata amet
          dolores voluptua gubergren, dolore labore dolor et diam sed est sed
          stet magna, aliquyam dolor.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        <div className="flex">
          <div>
            <CheckIcon className="w-7 mr-4 text-green-600" />
          </div>
          <div className="">
            <h3 className="font-bold text-lg">Notifications</h3>
            <p className="text-lg pt-2 pb-4">
              Et clita et sea eos lorem tempor eos amet sanctus dolor, et ipsum
              ea eirmod accusam dolores, erat vero accusam.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <CheckIcon className="w-7 mr-4 text-green-600" />
          </div>
          <div className="">
            <h3 className="font-bold text-lg">Notifications</h3>
            <p className="text-lg pt-2 pb-4">
              Et clita et sea eos lorem tempor eos amet sanctus dolor, et ipsum
              ea eirmod accusam dolores, erat vero accusam.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <CheckIcon className="w-7 mr-4 text-green-600" />
          </div>
          <div className="">
            <h3 className="font-bold text-lg">Notifications</h3>
            <p className="text-lg pt-2 pb-4">
              Et clita et sea eos lorem tempor eos amet sanctus dolor, et ipsum
              ea eirmod accusam dolores, erat vero accusam.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <CheckIcon className="w-7 mr-4 text-green-600" />
          </div>
          <div className="">
            <h3 className="font-bold text-lg">Notifications</h3>
            <p className="text-lg pt-2 pb-4">
              Et clita et sea eos lorem tempor eos amet sanctus dolor, et ipsum
              ea eirmod accusam dolores, erat vero accusam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
