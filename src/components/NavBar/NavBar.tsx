"use client"
import React, { useRef } from "react";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";






export default function NavBar() {
    const inputRef = useRef<HTMLInputElement | null>(null);
   
  return (
    <nav className="flex flex-col sm:flex-row sm:items-center justify-between gap-2  px-4 py-3  md:px-6 lg:px-8   ">
     
        <div className="left uppercase">
          <select name="language ">
            <option selected>En </option>
            <option>Ar </option>
          </select>
          <select className="curresncy">
            <option selected> USD</option>
            <option > UK</option>
          </select>
        </div>
        <div className="right flex flex-col sm:flex-row gap-2 sm:gap-4 self-end ">
        
            <div className="flex gap-1 items-center font-semi-bold">
              <MdPersonOutline size={20}/>
              <span>My profile</span>
            </div>
        
          <div className="cart relative flex items-center">
            <span>0 </span> items
            <span className="abosolute right-0 text-[0.7rem] -top-4 text-gray-400">
              $0,00{" "}
            </span>
          </div>
          <div className="searh flex gap-2 items-center">
            <input type="search" ref={inputRef} id="search" name="search"  className="border px-2 py-1 focus:outline-mColor border-gray-300 rounded-md focus:border-gray-300 outline:none" />
            <CiSearch size={20} className="cursor-pointer" onClick={()=> inputRef.current?.focus() } />
          </div>
        </div>

    
    </nav>
  );
}
