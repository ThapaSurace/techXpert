import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="py-2 px-2 md:px-0 sticky top-0 w-full bg-white z-50">
      <div className="container flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-2xl">TechXpert</span>
          <span className="text-sm tracking-wide">
            Communicate. Collaborate. Create.
          </span>
        </div>
        <div>
          <div className="md:flex gap-8 items-center hidden">
            <ul className="  md:flex gap-8 tracking-wider">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Product</li>
              <li className="cursor-pointer">Pricing Plan</li>
              <li className="cursor-pointer">Login</li>
            </ul>
            <button className="btn bg-yellowish border border-black hover:bg-black hover:text-yellowish transition duration-300 ease-in-out">
              Get Started
            </button>
          </div>
          <GiHamburgerMenu size={40} className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
