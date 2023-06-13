import React from "react";

const Pricing = () => {
  return (
   <>
    <div className="bg-[#f9fafa]">
    <div className="container md:flex md:gap-12 md:items-center pt-20">
      <div className="mb-8 flex-1">
        <h1 className="max-w-[300px] leading-relaxed">Explore Our Pricing Options</h1>
        <p className="max-w-md leading-normal tracking-wider">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
          incidunt vero obcaecati fuga ipsam consectetur mollitia repudiandae
          harum corporis provident.
        </p>
        <button className="btn bg-black text-white mt-4">See more</button>
      </div>

      <div className="flex-1 z-0">
      <div className=" border-2 border-gray-950 rounded-lg w-[350px]  md:w-[80%] overflow-hidden">
        <div className="bg-black text-white px-6 py-8 text-lg flex flex-col gap-1">
          <span className="text-xl font-bold tracking-widest">Premium</span>
          <div className="relative ms-10 my-6">
            <span className="absolute left-[-35px]">US$</span>
            <span className=" text-5xl font-extrabold">50</span>
          </div>
          <div className="flex flex-col gap-2 text-sm mb-4 tracking-widest">
          <span>Every month</span>
          <p>Use this area to describe one of your memberships.</p>
          <span>Valid for 12 months</span>
          </div>
          <button className="btn bg-white text-black">Get started</button>
        </div>
        <div className="bg-pinkish">
          <ul className="px-6 py-8 flex flex-col gap-1">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f9fafa" fillOpacity="1" d="M0,224L80,197.3C160,171,320,117,480,106.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
</svg>
   </>
  );
};

export default Pricing;
