import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState("mens");

  const showDrawer = () => {
      setOpen(!open);
      setCategories("mens");
  };

  const onClose = () => {
      setOpen(false);
      setCategories("mens");
  };

  const handleCtegories = (item) => {
    setCategories(item);
  };

  return (
    <div className="sm:hidden sticky bottom-0 w-full px-8 py-5 bg-sky-950 text-white z-[10001]">
      <div className="flex justify-between">
        <Link to="#">
          {" "}
          <img src="/img/home.png" alt="" className="w-[30px]" />
        </Link>
        <button onClick={showDrawer}>
          {" "}
          <img src="/img/categories.png" alt="" className="w-[30px]" />
        </button>
        <Link to="#">
          {" "}
          <img src="/img/mobile-cart2.png" alt="" className="w-[30px]" />
        </Link>
        <Link to="#">
          {" "}
          <img src="/img/account.png" alt="" className="w-[30px]" />
        </Link>
      </div>

      {/* Drawer */}
      <Drawer
        zIndex={500}
        placement="bottom"
        width={500}
        onClose={onClose}
        open={open}
        size="300px"
      >
        <div className="grid grid-cols-2">
          <div className="border-r border-black h-full flex flex-col gap-3">
            <div
              onClick={() => handleCtegories("mens")}
              className="text-2xl font-semibold hover:bg-slate-100"
            >
              Men's
            </div>
            <div
              onClick={() => handleCtegories("womens")}
              className="text-2xl font-semibold hover:bg-slate-100"
            >
              Women's
            </div>
            <div
              onClick={() => handleCtegories("kids")}
              className="text-2xl font-semibold hover:bg-slate-100"
            >
              Kids
            </div>
          </div>
          <div>
            {categories === "mens" && (
              <div className="pl-3 text-lg font-semibold">
                <h2>T-Shirts</h2>
                <h2>Shirts</h2>
                <h2>Pants</h2>
                <h2>Shoes</h2>
                <h2>Accessories</h2>
              </div>
            )}
            {categories === "womens" && (
              <div className="pl-3 text-lg font-semibold">
                <h2>Sharee</h2>
                <h2>Borka</h2>
                <h2>Pants</h2>
                <h2>Shoes</h2>
                <h2>Accessories</h2>
              </div>
            )}
            {categories === "kids" && (
              <div className="pl-3 text-lg font-semibold">
                <h2>T-Shirts</h2>
                <h2>Shirts</h2>
                <h2>Pants</h2>
                <h2>Shoes</h2>
                <h2>Accessories</h2>
                <h2>Toys</h2>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavbarMobile;
