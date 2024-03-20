import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import { Badge, Input } from "antd";
import { Account } from "./account";
import logo from "../../assets/images/logo.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { isAuthenticate } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state?.cart || []);
  const length = cart.length;
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
        {/* <img
          src={cart}
          alt=""
          className="w-8 text-white hover:bg-slate-300 rounded-lg cursor-pointer"
        /> */}
        <Link to="/cart">
        <Badge count={length} className="w-8 hover:bg-slate-300 duration-[0.4s] text-white hover:text-gray-800 rounded-lg cursor-pointer">
            <i className="fa-solid fa-cart-shopping text-2xl mt-[5px] ml-[2px]"></i>
        </Badge></Link>
        <Link to="/fabourites">
        <div className="w-8 hover:bg-slate-300 duration-[0.4s] hover:text-rose-700 rounded-lg cursor-pointer">
          <i className="fa-regular fa-heart text-3xl mt-[1px] ml-[1px]"></i>
        </div></Link>
        {isAuthenticate ? (
          <Account />
        ) : (
          <Link
            to="/login"
            className="my-auto cursor-pointer hover:bg-slate-300 duration-[0.4s] hover:text-black rounded-lg p-1"
          >
            <i className="fa-regular fa-user"></i>{" "}
            <span className="ml-1">Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
