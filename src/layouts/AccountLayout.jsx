import React from 'react'
import PublicLayout from './PublicLayout'
import { Link, useLocation } from 'react-router-dom'

const AccountLayout = ({children}) => {
    const location = useLocation();
  return (
    <PublicLayout>
      <div className=" min-h-screen grid grid-cols-12">
        <div className="col-span-12  ">
          {/* Products Categories */}
          
          <div className="flex flex-wrap justify-around items-end border py-3 bg-slate-300 border-blue-950 text-black text-base sm:text-lg font-semibold rounded-lg mb-3">
            <Link to={"/orders"} className={location?.pathname==="/orders"?"account-option-active":"account-option"}>
              <h2>Orders</h2>
            </Link>
            <Link to={"/fabourites"} className={location?.pathname==="/fabourites"?"account-option-active":"account-option"}>
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
          <div className=" bg-white border border-black rounded-lg p-2">
            {children}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}

export default AccountLayout