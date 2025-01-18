import React from "react";
import { DiVim } from "react-icons/di";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="shadow-topShadow">
      <div className="container grid  grid-cols-2 md:grid-cols-6 grid-row-2 gap-8 md:gap-y-20 py-4 justify-center">
        <article className="col-span-2 md:col-span-2 space-y-5">
          <h2 className="tracking-wider text-3xl  font-bold uppercase text-gray-300">
            bouncer
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae excepturi veritatis atque voluptatem doloribus in,
            praesentium dolores consequuntur sint cumque.
          </p>
        </article>
        <article className="col-span-2 md:col-span-2 space-y-5">
          <h3 className=" font-semibold text-lg  capitalize text-gray-800">follow us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae.
          </p>
          <div className="icons flex gap-4">
            <a target="_blank"><FaFacebookF className="text-blue-950 cursor-pointer" size={20} /></a>
            <a target="_blank"><FaTwitter className="text-blue-400 cursor-pointer" size={20} /></a>
          </div>
        </article>
        <article className="col-span-2 md:col-span-2 space-y-5">
          <h2 className="font-semibold text-xl capitalize text-gray-800">contact us</h2>
          <article className="space-y-1">
            <p>My company, 4578 marmona road glasgow</p>
            <p>d04 89gr</p>
            <p>call us now: 0123-456-789</p>
            <p>Email: support@whatever.com</p>
          </article>
        </article>
        
            <div className="col-span-1 space-y-5">
                <h4 className="text-lg font-semibold capitalize">information</h4>
                <ul className="flex flex-col gap-2">
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">about us</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">information</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">privacy policy</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">items condition</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 space-y-5">
                <h4 className="text-lg font-semibold capitalize">services</h4>
                <ul className="flex flex-col gap-2">
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">about us</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">information</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">privacy policy</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">items condition</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 space-y-5">
                <h4 className="text-lg font-semibold capitalize">extras</h4>
                <ul className="flex flex-col gap-2">
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">about us</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">information</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">privacy policy</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">items condition</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 space-y-5">
                <h4 className="text-lg font-semibold capitalize">my accounts</h4>
                <ul className="flex flex-col gap-2">
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">about us</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">information</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">privacy policy</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">items condition</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 space-y-5">
                <h4 className="text-lg font-semibold capitalize">user links</h4>
                <ul className="flex flex-col gap-2">
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">about us</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">information</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">privacy policy</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">items condition</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-1 space-y-5">
                <h4 className="text-lg font-semibold capitalize">our offers</h4>
                <ul className="flex flex-col gap-2">
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">about us</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">information</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">privacy policy</a>
                    </li>
                    <li>
                         <a href="" target="_blank" className="capitalize text-gray-800">items condition</a>
                    </li>
                </ul>
            </div>

      </div>
    </footer>
  );
}
