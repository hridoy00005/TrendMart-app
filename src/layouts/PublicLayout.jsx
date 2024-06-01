import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import NavbarMobile from "./NavbarMobile";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <div className="text-right text-sm bg-gray-100 text-slate-500 pr-8 pt-1 rounded-b-md">
        Hotline:111000
      </div>
      <Navbar />
      <div className="bg-white min-h-screen relative sm:px-20">
        <div className=" mx-auto">{children}</div>
      </div>
        <Footer />
        <NavbarMobile />
    </div>
  );
};

export default PublicLayout;
