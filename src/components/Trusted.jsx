import React from "react";
import img1 from "../assets/tech-img1.webp"
import img2 from "../assets/tech-img2.webp"
import img3 from "../assets/tech-img3.webp"
import img4 from "../assets/tech-img4.webp"
import img5 from "../assets/tech-img5.webp"
import img6 from "../assets/tech-img6.webp"
import img7 from "../assets/tech-img7.webp"
import img8 from "../assets/tech-img8.webp"

const Trusted = () => {
  return (
    <div className="lg:mt-[-100px] mt-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#FFD7ef"
          fillOpacity="1"
          d="M0,64L60,80C120,96,240,128,360,149.3C480,171,600,181,720,170.7C840,160,960,128,1080,106.7C1200,85,1320,75,1380,69.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="bg-pinkish h-full pb-28">
        <div className="container">
          <h1>
            Trusted Among Industry Leaders
          </h1>
          <p className="max-w-xl tracking-wider leading-snug">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptate deserunt similique aliquid? Debitis, repellat, enim,
            reprehenderit velit labore sequi qui officiis corrupti
            exercitationem at vel odio commodi. Natus, ullam.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mt-10">
            <div className=" w-24"><img src={img1} alt="img" className="w-full h-full object-cover" /></div>
            <div className=" w-24"><img src={img2} alt="img" className="w-full h-full object-cover" /></div>
            <div className=" w-24"><img src={img3} alt="img" className="w-full h-full object-cover" /></div>
            <div className=" w-24"><img src={img4} alt="img" className="w-full h-full object-cover" /></div>
            <div className=" w-24"><img src={img5} alt="img" className="w-full h-full object-cover" /></div>
            <div className=" w-24"><img src={img6} alt="img" className="w-full h-full object-cover" /></div>
            <div className=" w-24"><img src={img7} alt="img" className="w-full h-full object-cover" /></div>
            <div className=" w-24"><img src={img8} alt="img" className="w-full h-full object-cover" /></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
