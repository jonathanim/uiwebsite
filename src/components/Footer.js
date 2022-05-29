import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full py-5 bg-slate-800 text-gray-300">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b-2 border-gray-600 py-7 px-4">
        <div className="text-center">
          <h5 className="font-bold text-xl">Links</h5>
          <ul>
            <li className="py-2">Cloud</li>
            <li className="py-2">Analytics</li>
            <li className="py-2">Documentation</li>
            <li className="py-2">API</li>
            <li className="py-2">Support</li>
          </ul>
        </div>
        <div className="text-center">
          <h5 className="font-bold text-xl">Social Media</h5>
          <ul className="flex justify-center items-center">
            <li className="py-4">
              <FaFacebook className="w-10 h-8" />
            </li>

            <li className="py-4">
              <FaInstagram className="w-10 h-8" />
            </li>
            <li className="py-4">
              <FaLinkedin className="w-10 h-8" />
            </li>
            <li className="py-4">
              <FaTwitter className="w-10 h-8" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center">©Jonathan Im </p>
      </div>
    </div>
  );
};

export default Footer;
