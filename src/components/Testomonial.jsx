import React from "react";
import {HiDotsHorizontal} from "react-icons/hi"

const Testomonial = () => {
  return (
    <div className="container my-20">
      <h1>
        What Our Clients Say
      </h1>

      <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-6 md:gap-8 lg:gap-32 mt-10">
        <div className="test-card border-[3px] h-min overflow-hidden border-gray-950 text-gray-800 tracking-widest leading-normal">
          <div className=" bg-yellowish border-b-[3px] border-gray-950">
            <HiDotsHorizontal className="text-4xl ms-4" />
          </div>
          <p className="px-10 mt-10 tracking-wider leading-normal">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <div className="mt-10 p-10 flex justify-end">
          <span className="font-bold italic text-base font-serif">Zoro Senpai</span>
          </div>
        </div>
        <div className="test-card border-[3px] overflow-hidden border-gray-950 h-min text-gray-800 tracking-widest leading-normal">
          <div className=" bg-yellowish border-b-[3px] border-gray-950">
            <HiDotsHorizontal className="text-4xl ms-4" />
          </div>
          <p className="px-10 mt-10 tracking-wider leading-normal">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <div className="mt-10 p-10 flex justify-end">
          <span className="font-bold italic text-base font-serif">Luffy</span>
          </div>
        </div>
        <div className="test-card border-[3px] overflow-hidden border-gray-950 h-min text-gray-800 tracking-widest leading-normal">
          <div className=" bg-yellowish border-b-[3px] border-gray-950">
            <HiDotsHorizontal className="text-4xl ms-4" />
          </div>
          <p className="px-10 mt-10 tracking-wider leading-normal">
            “I'm a testimonial. Click to edit me and add text that says
            something nice about you and your services. Let your customers
            review you and tell their friends how great you are.”
          </p>
          <div className="mt-10 p-10 flex justify-end">
          <span className="font-bold italic text-base font-serif">Sanji</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;
