import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthProtector = ({ element }) => {
const { isAuthenticate } = useSelector((state) => state.auth);
  if (isAuthenticate) {
    return <Navigate to={"/"} />;
  } else return element;
};

export const PrivateProtector = ({ element }) => {
const { isAuthenticate } = useSelector((state) => state.auth);
  if (isAuthenticate) {
    return element;
  } else return <Navigate to={"/login"} />;
};
