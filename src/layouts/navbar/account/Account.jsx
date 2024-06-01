import React from "react";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutreducer } from "../../../store/reducers/authReducer";

const Account = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handlLogout = () => {
    dispatch(logoutreducer());
  };

  const itemsAccount = [
    {
      key: "1",
      label: (
        <Link to="/orders" className="text-[0.8rem]">
          <span className="mr-1">
            <i className="fa-solid fa-user"></i>
          </span>{" "}
          Account
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={handlLogout} className="text-[0.8rem]">
          <span className="mr-1">
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>{" "}
          Logout
        </div>
      ),
    },
  ];
  return (
      <Dropdown menu={{ items: itemsAccount }} placement="bottomRight" arrow className="my-auto">
        <div className="">
          <img className="w-[30px] h-[30px] rounded-full" src={user?.avatar}/>
        </div>
      </Dropdown>
  );
};

export default Account;
