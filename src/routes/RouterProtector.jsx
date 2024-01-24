import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// const { isAuthenticate } = useSelector((state) => state.auth);
const isAuthenticate = true;

export const AuthProtector = ({ elememnt }) => {
  if (isAuthenticate) {
    return <Navigate to={"/"} />;
  } else return elememnt;
};

export const PrivateRoute = ({ elememnt }) => {
  if (isAuthenticate) {
    return elememnt;
  } else return <Navigate to={"/login"} />;
};
