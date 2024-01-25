import React from "react";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutreducer } from "../../../store/reducers/authReducer";

const Account = () => {
  const dispatch = useDispatch();

  const handlLogout = () => {
    dispatch(logoutreducer());
  };

  const itemsAccount = [
    {
      key: "1",
      label: (
        <Link to="/profile">
          <span className="mr-1">
            <i className="fa-solid fa-user"></i>
          </span>{" "}
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={handlLogout}>
          <span className="mr-1">
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>{" "}
          Logout
        </div>
      ),
    },
  ];
  return (
      <Dropdown menu={{ items: itemsAccount }} placement="bottomLeft" arrow className="my-auto">
        <Button className="text-white font-semibold shadow-xl">Account</Button>
      </Dropdown>
  );
};

export default Account;
