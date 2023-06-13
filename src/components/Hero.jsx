import React from 'react'
import hero from "../assets/hero.PNG"
import {BsShieldLockFill,BsFillOctagonFill,BsFillPeaceFill} from "react-icons/bs"

const Hero = () => {
  return (
    <div className='container flex flex-col md:flex-row gap-10 md:items-center  md:h-[calc(100vh-56px)] py-2 md:py-0'>
        <div className='flex-1 order-2 md:order-1'>
            <div className='text-2xl md:text-4xl lg:text-6xl tracking-wider font-light flex flex-col'><span className='mb-2'>Communicate.</span><span>Collaborate. Create.</span></div>
            <p className='text-lg lg:text-xl md:font-semibold tracking-widest max-w-md my-4 md:my-8 leading-7'>WeDu provides an effective and powerful way to manage your projects</p>
            <button className='btn bg-black text-white hover:bg-yellowish hover:text-black'>Get Started</button>
            <div className='flex flex-col md:flex-row gap-1 md:gap-10 mt-10 md:mt-14'>
                <div className='flex items-center gap-6 md:gap-2 capitalize'>
                    <BsShieldLockFill className='text-4xl md:text-6xl' />
                    <span className='text-xl md:text-base'>speed &  security</span>
                </div>
                <div className='flex items-center gap-6 md:gap-2 capitalize'>
                    <BsFillOctagonFill className='text-4xl md:text-6xl' />
                    <span className='text-xl md:text-base'>Flexibility &   Scalability</span>
                </div>
                <div className='flex items-center gap-6 md:gap-2 capitalize'>
                    <BsFillPeaceFill className='text-4xl md:text-6xl' />
                    <span className='text-xl md:text-base'>Better Collaboration </span>
                </div>
            </div>
        </div>
        <div className='flex-1 order-1 md:order-2'>
            <img src={hero} alt="/" className=' w-[90%] md:h-full md:w-full object-cover' />
        </div>
    </div>
  )
}

export default Hero