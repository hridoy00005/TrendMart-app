import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // <footer className='w-full bottom-0 h-[80px] bg-slate-500'>Footer</footer>
    <footer className="bg-[#1e1e1e] mt-8 text-gray-300">
      <div className="grid grid-cols-12 sm:px-20">
        <div className="col-span-12 md:col-span-3 py-5 text-center md:text-left">
          <h1 className="text-lg md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
            About Us
          </h1>
          <p className="text-[12px] md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            voluptas alias ratione consequatur voluptatem praesentium.
          </p>
        </div>
        <div className="col-span-12 md:col-span-3 p-5 text-center">
          <h1 className="text-lg md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
            Address
          </h1>
          <ul className="text-[12px] md:text-sm">
            <li>Purbasha 30</li>
            <li>Akhalia East</li>
            <li>Sylhet, Bangladesh</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-3 p-5 text-center">
          <h1 className="text-lg md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
            Contact Us
          </h1>
          <ul className="text-[12px] md:text-sm">
            <li>
              <Link href="">Phone: 01254810125</Link>
            </li>
            <li>
              <Link href="">Email: etrandmart@gmail.com</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-3 py-5 text-center md:text-right">
          <h1 className="text-lg md:text-lg lg:text-xl font-semibold mb-1 sm:mb-2">
            Follow Us
          </h1>
          <ul className="text-[12px] md:text-sm">
            <li className="py-2">
              <Link to="" className="flex gap-5 justify-center md:justify-end">
                <i className="fa-brands fa-facebook  text-sky-600"></i>
                <i className="fa-brands fa-twitter  text-sky-500"></i>
                <i className="fa-brands fa-linkedin  text-sky-600"></i>
                <i className="fa-brands fa-whatsapp text-green-400"></i>
                <i className="fa-brands fa-instagram text-red-400"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <center className="py-2 m-0 w-full border-t border-white text-sm text-gray-300">
        {" "}
        Copyright @ {new Date().getFullYear()}
      </center>
    </footer>
  );
};

export default Footer;
