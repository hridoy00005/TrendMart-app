// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { EventButton, EventInput } from "../Shared";
// import { api, auth } from "../../api";
// import { updateProfile } from "../../store/authSlice";
// import { Spin } from "antd";

// const EmailUpdate = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   const [update, setUpdate] = useState({
//     email: "",
//     password: "",
//   });

//   const [emailUpdateLoader, setEmailUpdateLoader] = useState(false);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setUpdate({ ...update, [name]: value });
//   };

//   const onEmailUpdate = async () => {
//     setEmailUpdateLoader(true);
//     try {
//       const result = await api.put(auth.updateEmail, user.id, update);
//       if (result?.success) {
//         notify(result);
//         dispatch(updateProfile(update));
//       } else {
//         notify(result);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setEmailUpdateLoader(false);
//   };

//   const disabled = !update.email || !update.password;
//   return (
//     <div className=" bg-gray-200 p-5 rounded mb-5 shadow-lg">
//       <Spin spinning={emailUpdateLoader}>
//         <h2 className=" text-xl font-bold pb-4 text-center uppercase">
//           Change Email
//         </h2>

//         <EventInput
//           className="mb-3"
//           label="Current Email"
//           value={user.email}
//           disabled={true}
//         />

//         <EventInput
//           className="mb-3"
//           label="New Email"
//           type="email"
//           value={update.email}
//           name="email"
//           onChange={onChange}
//           placeholder="Enter Email"
//         />

//         <EventInput
//           label="Current Password"
//           type="password"
//           value={update.password}
//           name="password"
//           onChange={onChange}
//           placeholder="*******"
//         />

//         <div className="mt-5 text-end">
//           <EventButton
//             btnText="Update"
//             className="event-btn-primary"
//             onClick={onEmailUpdate}
//             disabled={disabled}
//           />
//         </div>
//       </Spin>
//     </div>
//   );
// };

// export default EmailUpdate;

import React from 'react'

const EmailUpdate = () => {
  return (
    <div>EmailUpdate</div>
  )
}

export default EmailUpdate