import React from 'react'
import img1 from "../assets/service-img1.webp"
import img2 from "../assets/service-img2.webp"
import img3 from "../assets/service-img3.webp"
import img4 from "../assets/service-img4.webp"

const Service = () => {
  return (
    <div className='container my-20'>
      <h1>What We Offer</h1>
      <p className='max-w-xl tracking-wider leading-snug'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate deserunt similique aliquid? Debitis, repellat, 
        enim, reprehenderit velit labore sequi qui officiis corrupti exercitationem at vel odio commodi. Natus, ullam.</p>

        <div className='md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-10 mt-10'>
          <div className='mb-6 md:mb-0'>
            <img src={img1}  alt="img1" className='rounded-md shadow-sm mb-8 border-2 border-gray-900' />
            <h3 className='text-2xl font-bold tracking-wider'>Workflows That Work</h3>
            <p className='text-base text-gray-700 tracking-wider leading-snug mt-4 max-w-xs md:w-full'>I'm a paragraph. Click here to add your own text and edit me. 
              I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <div className='mb-6 md:mb-0'>
            <img src={img2} alt="img1"  className='rounded-md shadow-sm mb-8 border-2 border-gray-900'/>
            <h3 className='text-2xl font-bold tracking-wider'>All-In-One Solution</h3>
            <p className='text-base text-gray-700 tracking-wider leading-snug mt-4 max-w-xs md:w-full'>I'm a paragraph. Click here to add your own text and edit me. 
              I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <div className='mb-6 md:mb-0'>
            <img src={img3} alt="img1"  className='rounded-md shadow-sm mb-8 border-2 border-gray-900'/>
            <h3 className='text-2xl font-bold tracking-wider'>Comprehensive Customer Support</h3>
            <p className='text-base text-gray-700 tracking-wider leading-snug mt-4 max-w-xs md:w-full'>I'm a paragraph. Click here to add your own text and edit me. 
              I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
          <div>
            <img src={img4} alt="img1"  className='rounded-md shadow-sm mb-8 border-2 border-gray-900'/>
            <h3 className='text-2xl font-bold tracking-wider'>Smart Automation Tools</h3>
            <p className='text-base text-gray-700 tracking-wider leading-snug mt-4 max-w-xs md:w-full'>I'm a paragraph. Click here to add your own text and edit me. 
              I’m a great place for you to tell a story and let your users know a little more about you.</p>
          </div>
        </div>
    </div>
  )
}

export default Service