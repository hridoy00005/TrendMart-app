import React from "react";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";

const Account = () => {
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
        <Link to="/logout">
          <span className="mr-1">
            <i className="fa-solid fa-right-from-bracket"></i>
          </span>{" "}
          Logout
        </Link>
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
