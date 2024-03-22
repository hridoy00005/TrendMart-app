import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { quantityDecrease, quantityIncrease } from "../../store/reducers/cartReducer";

const CartQuantity = ({ product, quantity, setQuantity, idx }) => {
 const dispatch = useDispatch()
  //Quantity Changing
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleIncrease = () => {
    dispatch(quantityIncrease({product, idx}));
  };
  const handleDecrease = () => {
    product.quantity>1 && dispatch(quantityDecrease({product, idx}));
  };

  console.log("product is ");
  console.log(product);
  const disabledMinus = product.quantity <= 1;
  return (
    <div className="flex">
      <button
        className={`${
          disabledMinus
            ? "text-xs py-1 text-gray-300 border rounded-lg px-3 cursor-not-allowed"
            : "text-xs py-1 hover:font-bold border rounded-lg px-3 hover:border-sky-500  duration-[0.4s]"
        }`}
        onClick={handleDecrease}
        disabled={disabledMinus}
      >
        <i className="fas fa-minus"></i>
      </button>
      <input
        type="number"
        value={product?.quantity}
        onChange={handleQuantityChange}
        className="w-[60px] border rounded-lg outline-none text-center py-1"
      />
      <button
        className="text-xs py-1 hover:font-bold border rounded-lg px-3 hover:border-sky-500 duration-[0.4s]"
        onClick={handleIncrease}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default CartQuantity;
