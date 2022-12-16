import React from "react";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <nav className="flex w-full h-[73px] items-center border-b-2 border-[#1B1B1B]">
      <div className="flex items-center justify-between w-screen mx-6 sm:mx-10 lg:mx-20 xl:mx-40">
        <h1>
          <a className="font-semibold text-xl" href="refresh">
            rahmanbax
          </a>
        </h1>

        <ul className="font-medium text-[#C6C6C6] gap-16 hidden lg:flex">
          <li>
            <a className="hover:text-[#9FFF40] transition ease-in-out" href="about">About</a>
          </li>
          <li>
            <a className="hover:text-[#9FFF40] transition ease-in-out" href="services">Services</a>
          </li>
          <li>
            <a className="hover:text-[#9FFF40] transition ease-in-out" href="portofolio">Portofolio</a>
          </li>
          <li>
            <a className="hover:text-[#9FFF40] transition ease-in-out" href="contact">Contact</a>
          </li>
        </ul>

        <img className="block lg:hidden fill-white" src={menu} />
      </div>
    </nav>
  );
};

export default Navbar;
