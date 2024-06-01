import React from 'react'
import PublicLayout from './PublicLayout'
import { Link, useLocation } from 'react-router-dom'

const AccountLayout = ({children}) => {
    const location = useLocation();
  return (
    <PublicLayout>
      <div className=" min-h-screen">
          {/* Accounts Categories */}
          <div className="flex flex-wrap justify-around items-end border border-slate-300 py-3 bg-gray-100 text-black text-base sm:text-lg font-semibold rounded-lg mb-3">
            <Link to={"/orders"} className={location?.pathname==="/orders"?"account-option-active":"account-option"}>
              <h2>Orders</h2>
            </Link>
            <Link to={"/favourites"} className={location?.pathname==="/favourites"?"account-option-active":"account-option"}>
              <h2>Fabourites</h2>
            </Link>
            <Link to={"/address"} className={location?.pathname==="/address"?"account-option-active":"account-option"}>
              <h2>Address</h2>
            </Link>
            <Link to={"/profile"} className={location?.pathname==="/profile"?"account-option-active":"account-option"}>
              <h2>Profile</h2>
            </Link>
          </div>

          {/* Products section */}
          <div className=" border border-slate-300 text-black rounded-lg p-2">
            {children}
          </div>
      </div>
    </PublicLayout>
  )
}

export default AccountLayout