import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSquareGithub,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#161617] w-full px-8 py-[50px]">
      <div className="max-w-[1300px] max-auto ">
        <div className="block md:flex  justify-between px-4">
          <h1 className="text-4xl text-white md:text-start text-center py-3">Technical world</h1>
          <div className="flex text-white md:px-0 px-14 py-3 ">
            <FaFacebook className="text-3xl mx-4" />
            <FaInstagram className="text-3xl mx-4" />
            <FaTwitter className="text-3xl mx-4" />
            <FaSquareGithub className="text-3xl mx-4" />
          </div>
        </div>
        <div className="px-4 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-1 md:col-span-1  p-4">
            <ul>
              <li className="font-bold text-white my-4">Company</li>
              <li className="text-white my-2">Home</li>
              <li className="text-white my-2">Contact us</li>
              <li className="text-white my-2">About us</li>
              <li className="text-white my-2">Get started</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 p-4">
            <ul>
              <li className="font-bold text-white my-4">Services</li>
              <li className="text-white my-2">App design</li>
              <li className="text-white my-2">web design</li>
              <li className="text-white my-2">Logo design</li>
              <li className="text-white my-2">Banner design</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 p-4">
            <ul>
              <li className="font-bold text-white my-4">Account</li>
              <li className="text-white my-2">Profile</li>
              <li className="text-white my-2">My account</li>
              <li className="text-white my-2">Preference</li>
              <li className="text-white my-2">Purchase</li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1   p-4">
            <ul>
              <li className="font-bold text-white my-4">Courses</li>
              <li className="text-white my-2">HTML & CSS</li>
              <li className="text-white my-2">javascript</li>
              <li className="text-white my-2">Photography</li>
              <li className="text-white my-2">photoshop</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1   p-4">
          <h1 className="font-bold text-white my-4">Subscribe</h1>
          <div className="flex flex-col gap-5">
          <input className=" p-2 rounded-lg bg-[#161617] border" placeholder="Enter email"/>
           <button className="p-2 rounded-lg bg-slate-200 border ">Subscribe</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
