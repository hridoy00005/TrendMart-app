import React, { useState } from "react";
import { CButton, CInput } from "../components/commons";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginState, setLoginState] = useState({
    name:"",
    password:""
  })

const handleChange = (e)=>{
  const {name, value} = e.target;
  setLoginState({...loginState, [name]:value});
}

const hendleLogin = () =>{
  
}

const disabled = !loginState.name || !loginState.password;
  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center">
      <div className="w-[98%] sm:w-96 md:w-[450px] h-full p-3 bg-slate-400 shadow-lg rounded-lg">
        <h2 className="text-center bg-slate-500 py-3 text-white text-xl font-bold rounded-lg">Login</h2>
        <CInput label="Name" type="text" placeholder="Enter Name" name="name" value={loginState.name} onChange={handleChange}  />
        <CInput label="Password" type="password" placeholder="Enter Password" name="password" value={loginState.password} onChange={handleChange}  />
        
        <span className="flex justify-between ">
          <Link className="text-blue-900 hover:text-sky-600 hover:underline" to="/forgotPassword">Forgot Password?</Link>
          <Link className="text-blue-900 hover:text-sky-600 hover:underline" to="/registration">Create New Account</Link>
          </span>
        <CButton className="bg-sky-400" type="primary" name="Login" onClick={hendleLogin} disabled={disabled} />
      </div>
    </div>
  );
};

export default Login;
