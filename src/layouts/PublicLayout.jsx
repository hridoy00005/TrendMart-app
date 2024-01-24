import React from "react";
import Navbar from "./navbar";
import Footer from "./Footer";
import NavbarMobile from "./NavbarMobile";


const PublicLayout = ({ children }) => {
  return (
    <div className="bg-gray-200 min-h-screen relative">
      <div className="text-right text-sm text-slate-500 pr-8 pt-1">Hotline:111000</div>
      <Navbar />

      <div className=" sm:px-8 mx-auto">{children}</div>

      {/* This is footer section */}
      <Footer />

      {/* Footer Bar */}
      <NavbarMobile />
    </div>
  );
};

export default PublicLayout;
