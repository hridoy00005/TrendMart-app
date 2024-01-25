import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthProtector = ({ elememnt }) => {
const { isAuthenticate } = useSelector((state) => state.auth);
  if (isAuthenticate) {
    return <Navigate to={"/"} />;
  } else return elememnt;
};

export const PrivateRoute = ({ elememnt }) => {
const { isAuthenticate } = useSelector((state) => state.auth);
  if (isAuthenticate) {
    return elememnt;
  } else return <Navigate to={"/login"} />;
};
