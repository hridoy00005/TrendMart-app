import { Checkbox, Tooltip } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartQuantity } from "../components/cart";

const Cart = () => {
  const { cart } = useSelector((state) => state?.cart || []);

  const [quantity, setQuantity] = useState();

  // Order Cornmirmation
  const handleConfirm = () => {};
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-3 sm:col-span-2 mr-2">
        <div className="border-b-2 border-black">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
            Your Cart
          </h1>
          <div className="mb-1">
            <Checkbox /> Select All
          </div>
        </div>
        <div className="p-2">
          {cart?.map((product, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 border border-gray-400 rounded-lg my-2"
            >
              {/* Image & Title */}
              <div className=" col-span-2 p-2 flex items-center">
                <Checkbox className="mr-2" />
                <span className="max-w-[100px] max-h-[150px] mr-2">
                  <img src={product?.product?.images[0]} alt="image" />
                </span>
                {product?.product?.name}
              </div>
              {/* Price */}
              <div className="col-span-1 my-auto">
                {product?.product?.discountAvailable ? (
                  <div className="">
                    <span className="font-semibold  mr-2">
                      ৳{product?.product?.discountPrice}
                    </span>
                    <del className="text-xs text-gray-500">
                      ৳{product?.product?.price}
                    </del>
                  </div>
                ) : (
                  <div className="font-semibold">
                    ৳{product?.product?.price}
                  </div>
                )}
              </div>
              {/* Quantity & Delete */}
              <div className="col-span-1 flex items-center">
                <CartQuantity
                  product={product}
                  quantity={quantity}
                  setQuantity={setQuantity}
                />
                <Tooltip title='Delete' color="red" size='small'>
                  <span className="hover:text-rose-600 cursor-pointer transition duration-[0.4s] ml-1">
                    <i className="fa-regular fa-trash-can mt-0"></i>
                  </span>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Order Confirm Area */}
      <div className="col-span-3 sm:col-span-1 shadow-lg p-2 rounded-lg max-h-[300px]">
        <div className="mb-2">
          <h3>Shipping Address</h3>
          <button className="text-sm border border-gray-300 hover:border-sky-500 hover:text-sky-700 w-full py-2 transition duration-[0.4s] rounded-lg">
            <span className="font-bold">+</span> Add A Address
          </button>
        </div>
        <div className="flex justify-between font-semibold">
          <h3>Total</h3>
          <p>৳810</p>
        </div>
        <button
          onClick={handleConfirm}
          className="mt-5 text-sm font-semibold border-4  bg-blue-950 text-white hover:text-green-300 w-full py-3 hover:shadow-xl hover:shadow-green-200 hover:scale-[0.98] transition duration-[0.2s] hover:border-green-300 rounded-lg mb-0"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
