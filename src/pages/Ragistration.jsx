import React, { useState } from 'react'
import { CButton, CInput } from '../components/commons';
import { api, auth } from '../api';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

const Ragistration = () => {
  const [regState, setRegState] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  })

const [loding, setLoading] = useState(false);
const navigate = useNavigate();

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setRegState({...regState, [name]:value});
  }

  const handleRegistration = async()=>{
    setLoading(true);
    try {
      const res = await api.post(auth.registration, regState);
      if(res.success){
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  
  const disabled = !regState.name || !regState.email || !regState.password || (regState.password !== regState.confirmPassword);
  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center">
    <div className="w-[98%] sm:w-96 md:w-[450px] h-full p-3 bg-slate-400 shadow-lg rounded-lg">
      <h2 className="text-center bg-slate-700 py-3 text-white text-xl font-bold rounded-lg">Ragistration</h2>
      <CInput label="Name" type="text" placeholder="Enter Name" name="name" value={regState.name} onChange={handleChange}  />
      <CInput label="Email" type="email" placeholder="Enter Your Email" name="email" value={regState.email} onChange={handleChange}  />
      <CInput label="Phone" type="phone" placeholder="Enter Your Phone" name="phone" value={regState.phone} onChange={handleChange}  />
      <CInput label="Password" type="password" placeholder="Enter Password" name="password" value={regState.password} onChange={handleChange}  />
      <CInput label="Confirm Password" type="password" placeholder="Confirm Password" name="confirmPassword" value={regState.confirmPassword} onChange={handleChange}  />
      <Spin spinning={loding}>
      <CButton name="Submit" onClick={handleRegistration} disabled={disabled} />
      </Spin>
    </div>
  </div>
  )
}

export default Ragistration