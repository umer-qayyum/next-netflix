'use client'
import Link from "next/link";
import React, { useState } from "react";


import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="w-full border-b-2">
        
        <div className="max-w-[1300px]  mx-auto py-5 md:px-0 px-5">
          <div className="flex justify-between">
            <div className="w-[30%] ">
              <img className="w-40 h-10" src="/logo.png" alt="logo" />
            </div>
            {toggle ? (
              <AiOutlineClose
                onClick={() => setToggle(!toggle)}
                className="text-black text-2xl md:hidden block"
              />
            ) : (
              <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className="text-black text-2xl md:hidden block"
              />
            )}
            
            <ul className="hidden md:flex w-[40%] justify-around font-semibold pt-2">
              <Link href='/' className="hover:bg-slate-500 duration-300 px-4 py-2 rounded-lg">Home</Link>
              <Link href="/about" className="hover:bg-slate-500 duration-300 px-4 py-2 rounded-lg">About</Link>
              <Link href='/movie' className="hover:bg-slate-500 duration-300 px-4 py-2 rounded-lg">Movies</Link>
              <Link href='/contact' className="hover:bg-slate-500 duration-300 px-4 py-2 rounded-lg">Contact</Link>
            </ul>

            {/* responsive */}

            <ul
              className={` justify-center items-center font-semibold  duration-300 md:hidden flex flex-col gap-16 text-white text-xl bg-black fixed w-full h-screen ${
                toggle ? "left-0" : "left-[-100%]"
              }  top-[82px] `}
            >
              <Link href='/'>Home</Link>
              <Link href='/about'>About</Link>
              <Link href='/movie'>Movies</Link>
              <Link href='/contact'>Contact</Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
