import React, { useState } from 'react'
import { CButton, CInput } from '../components/commons'
import { api, auth } from '../api';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const[check, setCheck] = useState(false);

    const handleChange= (e)=>{
        setEmail(e.target.value);
    }

    const hendleSubmit= async()=>{
        setLoading(true);
        setCheck(true);
        try {
            const res = await api.post(auth.forgetPass, email);
            if(res)console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    const disabled = !(email.indexOf("@")>=0 && email.indexOf(".com")>=0);
  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center">
      <div className="w-[98%] sm:w-96 md:w-[450px] h-full p-3 bg-slate-400 shadow-lg rounded-lg">
        <h2 className="text-center bg-slate-700 py-3 text-white text-xl font-bold rounded-lg">Enter Email to Confirm Account</h2>
        <CInput label="Email" type="text" placeholder="Enter Your Email" name="email" value={email} onChange={handleChange}  />        
        
        <CButton name="Send" onClick={hendleSubmit} disabled={disabled} />
      {check && <h2 className='text-center font-semibold text-blue-800 pt-2'>Check Your Email and Confirm</h2>}
      </div>
    </div>
  )
}

export default ForgetPassword