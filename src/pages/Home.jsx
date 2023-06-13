import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import Service from "../components/Service";
import creative from "../assets/creative.PNG";
import { BsFillDiscFill,BsFileSpreadsheetFill } from "react-icons/bs";
import {FaBrush} from "react-icons/fa"
import Trusted from "../components/Trusted";
import Testomonial from "../components/Testomonial";
import Pricing from "../components/Pricing";
import bot from "../assets/bot.png"
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Introduction />
      <Service />

      <div className="container md:flex md:gap-60 md:items-center px-4 md:px-0">
        <div className="flex-1 mb-4 md:mb-0">
          <img src={creative} alt="creative" className="w-[80%] md:w-full md:h-full object-cover" />
        </div>
        <div className="flex-1">
          <h1>Built for Creatives, by Creatives</h1>
          <p className="text-gray-600 tracking-wider leading-normal">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="flex items-center gap-2"> 
              <BsFillDiscFill className="text-4xl" />
              <span className="text-sm text-gray-900">All-In-One Toolkit</span>
            </div>
            <div className="flex items-center gap-2"> 
              <BsFileSpreadsheetFill className="text-4xl" />
              <span className="text-sm text-gray-900">Integrated File Sharing</span>
            </div>
            <div className="flex items-center gap-2"> 
              <FaBrush className="text-4xl" />
              <span className="text-sm text-gray-900">Total Design Freedom</span>
            </div>
          </div>
        </div>
      </div>

      <Trusted />
      <Testomonial />
      <Pricing />

      <div className="container flex flex-col items-center">
        <h1 className="max-w-3xl text-center leading-relaxed mb-8">Get Ready to Maximize Your Productivity With Our Workflow Solutions</h1>
        <button className="btn bg-black text-white">Get Started</button>

      <div className="max-w-4xl">
      <img src={bot} alt="bot" className="w-full object-cover" />
      </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;
