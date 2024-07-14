import React from "react";
import PublicLayout from "./PublicLayout";
import { Link, useLocation } from "react-router-dom";

const AccountLayout = ({ children }) => {
  const location = useLocation();
  const onActive = (activeBar) => {
    return location?.pathname === activeBar
      ? "account-option-active"
      : "account-option";
  };
  return (
    <PublicLayout>
      <div className=" min-h-screen">
        {/* Accounts Categories */}
        <div className="flex justify-center gap-x-5 py-3 text-base sm:text-lg font-semibold rounded-lg mb-3">
          <Link to="/orders">
            <span className={onActive("/orders")}>Orders</span>
          </Link>
          <Link
            to="/favourites"
          >
            <span className={onActive("/favourites")}>Favourites</span>
          </Link>
          <Link
            to="/address"
          >
            <span className={onActive("/address")}>Address</span>
          </Link>
          <Link
            to="/profile"
          >
            <span className={onActive("/profile")}>Profile</span>
          </Link>
        </div>

        {/* Products section */}
        <div className=" border border-gray-200 shadow text-black rounded-lg p-2">
          {children}
        </div>
      </div>
    </PublicLayout>
  );
};

export default AccountLayout;
