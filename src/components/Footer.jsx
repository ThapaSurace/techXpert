import React from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-yellowish mt-[-10px] md:mt-[-40px]">
      <div className="container py-10 md:py-28 px-4 md:px-0">
        <div className="flex flex-col mb-8">
          <span className="font-bold text-2xl">TechXpert</span>
          <span className="text-sm tracking-wide">
            Communicate. Collaborate. Create.
          </span>
        </div>

        <div className="md:grid md:grid-cols-5 md:gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <span className="text-2xl font-bold tracking-wider">Contact</span>
            <div className="grid grid-cols-2 gap-y-4 tracking-wider">
              <div>
                500 Terry Francine Street <br /> San Francisco, CA 94158
              </div>
              <div>
                General Inquiries: <br />
                123-456-7890
              </div>
              <div>
                Sales: <br />
                info@mysite.com
              </div>
              <div>
                Customer Care: <br />
                info@mysite.com
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 tracking-wider">
            <span className="text-2xl font-bold">Quick Links</span>
            <ul>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 tracking-wider">
            <span className="text-2xl font-bold ">Follow</span>

            <div>
              <p>Sign up to get the latest news on our product.</p>
              <span className="mb-1">Email:</span>
              <div className="flex h-10">
                <input
                  type="text"
                  className="h-full border-2 border-gray-950"
                />
                <button className="bg-black text-white h-full px-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="md:flex md:justify-center md:ms-14">
            <ul className="text-4xl font-bold tracking-widest flex md:flex-col gap-2 mt-6">
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
