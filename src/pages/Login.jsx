import React, { useState } from "react";
import { CButton, CInput } from "../components/commons";
import { Link, useNavigate } from "react-router-dom";
import { api, auth } from "../api";
import { useDispatch } from "react-redux";
import { loginReducer } from "../store/reducers/authReducer";
import { notify } from "../utils/notification";
import { Spin } from "antd";

const Login = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loding, setLoding] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginState({ ...loginState, [name]: value });
  };

  const hendleLogin = async () => {
    setLoding(true);
    try {
      const res = await api.post(auth.login, loginState);
      notify(res);
      if (res.success) {
        dispatch(loginReducer({ user: res?.user, token: res?.token }));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    setLoding(false);
  };

  const disabled = !loginState.email || !loginState.password;
  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center">
      <div className="w-[98%] sm:w-96 md:w-[450px] h-full p-3 bg-slate-400 shadow-lg rounded-lg">
        <Spin spinning={loding}>
          <h2 className="text-center bg-slate-700 py-3 text-white text-xl font-bold rounded-lg">
            Login
          </h2>
          <CInput
            label="Email"
            type="text"
            placeholder="Enter Email"
            name="email"
            value={loginState.email}
            onChange={handleChange}
          />
          <CInput
            label="Password"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={loginState.password}
            onChange={handleChange}
          />

          <span className="flex justify-between ">
            <Link
              className="text-sm text-blue-900 hover:text-white hover:underline hover:font-semibold"
              to="/forget-password"
            >
              Forgot Password?
            </Link>
            <Link
              className="text-sm text-blue-900 hover:text-white hover:underline hover:font-semibold"
              to="/registration"
            >
              Create New Account
            </Link>
          </span>
          <CButton name="Login" onClick={hendleLogin} disabled={disabled} />
        </Spin>
      </div>
    </div>
  );
};

export default Login;
