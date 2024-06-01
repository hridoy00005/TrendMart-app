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
    <nav className="hidden py-1 sm:flex sticky border-b sm:py-2 md:py-4 top-0 z-[999] bg-[#1e1e1e] sm:px-20 mb-3">
      <div className="flex justify-between w-full h-full text-gray-300 text-[0.85rem]">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-8" />
        </Link>
        <Categories />
        <div className="flex items-center gap-3 my-auto">
          <Link to="/cart">
            <Badge
              count={length}
              color="white"
              size="small"
              style={{color:'#1e1e1e'}}
            >
              <span className=" text-gray-300 hover:text-white text-[1rem]">
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </Badge>
          </Link>
          {/* <Link to="/favourites">
            <div className="duration-[0.4s] hover:text-rose-700 rounded-lg cursor-pointer">
              <i className="fa-regular fa-heart"></i>
            </div>
          </Link> */}
          {isAuthenticate ? (
            <Account />
          ) : (
            <Link
              to="/login"
              className="my-auto cursor-pointer hover:bg-slate-300 duration-[0.4s] hover:text-black rounded-lg p-1"
            >
              <i className="fa-regular fa-user"></i>
              <span className="ml-1">Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
