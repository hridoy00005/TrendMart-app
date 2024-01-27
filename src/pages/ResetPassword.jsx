import React, { useState } from 'react'
import { api, auth } from '../api';
import { useNavigate } from 'react-router-dom';
import { CButton, CInput } from '../components/commons';
import { Spin } from 'antd';

const ResetPassword = () => {
    const [reset, setReset] = useState({
        password:"",
        confirmPassword:""
      })

    const [loding, setLoading] = useState(false);
    const navigate = useNavigate();

const handleChange = (e)=>{
    const {name, value} = e.target;
    setReset({...reset, [name]:value});
  }

  const handleReset = async()=>{
    setLoading(true);
    try {
      const res = await api.post(auth.resetPass, reset);
      if(res.success){
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  const disabled = !reset.password || !reset.confirmPassword || (reset.password!==reset.confirmPassword);
  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center">
    <div className="w-[98%] sm:w-96 md:w-[450px] h-full p-3 bg-slate-400 shadow-lg rounded-lg">
      <h2 className="text-center bg-slate-700 py-3 text-white text-xl font-bold rounded-lg">Set New Password</h2>
      <CInput label="Password" type="password" placeholder="Enter Password" name="password" value={reset.password} onChange={handleChange}  />
      <CInput label="Confirm Password" type="password" placeholder="Confirm Password" name="confirmPassword" value={reset.confirmPassword} onChange={handleChange}  />
      <Spin spinning={loding}>
      <CButton name="Submit" onClick={handleReset} disabled={disabled} />
      </Spin>
    </div>
  </div>
  )
}

export default ResetPassword