import React from "react";
import {
  cartQuantityDecrease,
  cartQuantityIncrease,
  singleCartItemDelete,
} from "../../store/reducers/cartReducer";
import { useDispatch } from 'react-redux';

// eslint-disable-next-line react/prop-types
export const SingleCartItem = ({ cart = {}, idx }) => {
  const { product, quantity, size } = cart;

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={product?.images?.[0]} alt="" />
        </div>
        <div className="ml-4">
          <div className="font-bold text-sm mb-5">{product?.name}</div>
          {product?.sizeAvailable && (
            <div className="text-red-500 text-xs">Size: {size?.name}</div>
          )}
          {/* <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</a> */}
        </div>
      </div>
      <div className="text-center w-1/5 font-semibold text-sm">
        <span className="cart?.discountAvailable ? 'text-red-600' : ''">
          USD{" "}
          {product?.discountAvailable ? product?.discountPrice : product?.price}
        </span>
        {product?.discountAvailable && (
          <span className="text-gray-500">
            <s> USD {product?.price}</s>
          </span>
        )}
      </div>
      <div className="flex justify-center w-1/5">
        <button onClick={() => dispatch(cartQuantityDecrease({...cart,idx}))}>
          <span className="text-gray-600">
            <i className="fas fa-minus"></i>
          </span>
        </button>
        <span className="mx-2 border text-center w-8 bg-white">{quantity}</span>
        <button onClick={() => dispatch(cartQuantityIncrease({...cart,idx}))}>
          <span className="text-gray-600">
            <i className="fas fa-plus"></i>
          </span>
        </button>
      </div>

      <div className="text-center w-1/5 font-semibold text-sm">
        USD{" "}
        {(product?.discountAvailable
          ? product?.discountPrice
          : product?.price) * quantity}
      </div>
      <button
        onClick={() => dispatch(singleCartItemDelete({...cart, idx}))}
        className="absolute text-red-600 right-10"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </React.Fragment>
  );
};
