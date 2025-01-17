"use client"
import React, { useState } from "react";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBarsProgress } from "react-icons/fa6";
export default function NavBar() {
    const path = usePathname();
    const [openNav , setOpenNav] = useState(false)
  return (
    <nav >
      <div className="flex justify-between p-8 md:p-16 lg:p-20 fixed inset-0 ">
        <div className="left ">
          <select name="language">
            <option>En </option>
            <option>Ar </option>
          </select>
          <select className="curresncy">
            <option className="uppercase"> USD</option>
            <option className="uppercase"> UK</option>
          </select>
        </div>
        <div className="right">
          <div>
            <div>
              <MdPersonOutline />
              <span>My profile</span>
            </div>
          </div>
          <div className="cart relative ">
            <span>0 </span> items
            <span className="abosolute right-0 -top-4 text-gray-400">
              $0,00{" "}
            </span>
          </div>
          <div className="searh">
            <input type="text" name="search" />
            <CiSearch />
          </div>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center ">
        <article>
        <h1 className="uppercase tracking-wider text-sColor text-shadow text-4d">bouncer</h1>
        <span className="md:hidden " onClick={()=>setOpenNav(!openNav)}>
            <FaBarsProgress />
        </span>
        </article>
        

        <ul>
            <li className="flex-col gap-4 md:flex-row ">
              <li>  
                <Link href="home" className={`${path == ""?"text-mColor":""} uppercase`}>Home</Link> 
              </li>
              <li>  
                <Link href="/iphone" className={`${path == "/iphone"?"text-mColor":""} uppercase`}>iphone</Link> 
              </li>
              <li>  
                <Link href="/ipad" className={`${path == "/ipad"?"text-mColor":""} uppercase`}>ipad</Link> 
              </li>
              <li>  
                <Link href="/macbook" className={`${path == "/macbook"?"text-mColor":""} uppercase`}>macbokk</Link> 
              </li>
              <li>  
                <Link href="/accessors" className={`${path == "/accessors"?"text-mColor":""} uppercase`}>accessors</Link> 
              </li>
            </li>
        </ul>
      </div>
    </nav>
  );
}
