/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SingleCartItem } from "./SingleCartItem";

export const CartContainer = () => {
  const { cart } = useSelector((state) => state?.cart || []);
  const getSubTotalPrice = useCallback(() => {
    let total = 0;
    cart?.forEach(({ product, quantity }) => {
      total +=
        (product?.discountAvailable ? product?.discountPrice : product?.price) *
        quantity;
    });
    return total;
  });

  const [subtotal, setSubtotal] = useState(getSubTotalPrice());

  useEffect(() => {
    setSubtotal(getSubTotalPrice());
  }, [cart, getSubTotalPrice]);
  return (
    <React.Fragment>
      <div className="p-10 border-b-2">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">{cart?.length} Item(s)</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
            Product Details
          </h3>
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
            Price
          </h3>
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
            Quantity
          </h3>
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
            Total
          </h3>
        </div>
        {cart?.map((crt, idx) => (
          <div
            key={idx}
            className="flex items-center relative hover:bg-gray-100 -mx-8 px-6 py-5"
          >
            <SingleCartItem cart={crt} idx={idx} />
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <Link to="/" className="font-semibold text-theme-light text-sm mt-10">
          <svg
            className="fill-current inline mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
          Continue Shopping
        </Link>
        <div className="w-1/4 px-8">
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Subtotal</span>
            <span className="font-semibold text-sm">USD {subtotal}</span>
          </div>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Shipping</span>
            <span className="font-semibold text-sm">USD 80</span>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>USD {subtotal+80}</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
