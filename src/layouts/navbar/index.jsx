import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import { Input } from "antd";
import { Account } from "./account";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { isAuthenticate } = useSelector((state) => state.auth);
  return (
    <nav className="hidden sm:flex justify-between w-full h-full bg-sky-950 px-5 text-white mb-2">
      <Link to="/" className="py-1 sm:py-2 md:py-4 w-8 md:w-11">
        <img src={logo} alt="Logo" />
      </Link>
      <Categories />
      <div className="my-auto border pb-[1px] p-[2px] shadow-lg rounded-lg w-56 md:w-80 lg:w-96">
        <Input.Search placeholder="input search text" enterButton style={{}} />
      </div>
      <div className="flex gap-3 my-auto">
        <img src={cart} alt="" className="w-8 bg-slate-300 rounded-lg cursor-pointer" />
        {isAuthenticate ? (
          <Account />
        ) : (
            <Link to="/login" className="my-auto cursor-pointer hover:bg-slate-300 hover:text-black rounded-lg p-1">
              <i className="fa-regular fa-user"></i>{" "}
              <span className="ml-1">Login</span>
            </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
