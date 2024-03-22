import { Tooltip } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/reducers/cartReducer";

const CartDelete = ({idx}) => {
    const dispatch = useDispatch();

    const handleDelete = ()=>{
        dispatch(deleteProduct(idx));
    }
  return (
    <Tooltip title="Delete" color="red" size="small" onClick={handleDelete}>
      <span className="hover:text-rose-600 cursor-pointer transition duration-[0.4s] ml-1">
        <i className="fa-regular fa-trash-can"></i>
      </span>
    </Tooltip>
  );
};

export default CartDelete;
