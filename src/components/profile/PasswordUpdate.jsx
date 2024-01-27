// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { EventButton, EventInput } from "../Shared";
// import { api, auth } from "../../api";
// import { logoutStore } from "../../store/authSlice";
// import { notify } from "../../utils";
// import { Spin } from "antd";

// const PasswordUpdate = () => {
//   const { user } = useSelector((state) => state.auth);

//   const [update, setUpdate] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [changePasswordLoader, setChangePasswordLoader] = useState(false);

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setUpdate({ ...update, [name]: value });
//   };

//   const dispatch = useDispatch();

//   const onLogout = async () => {
//     setChangePasswordLoader(true);
//     try {
//       const result = await api.post(auth.logout);
//       if (result.success) {
//         dispatch(logoutStore());
//       }
//       else {
//         notify(result);
//       }
//     } catch (error) {}

//     setChangePasswordLoader(false);
//   };

//   const handleUpdate = async () => {
//     setChangePasswordLoader(true);
//     try {
//       const result = await api.put(auth.updatePassword, user.id, update);
//       if (result?.success) {
//         onLogout();
//       }
//       notify(result);
//     } catch (error) {
//       console.log(error);
//     }
//     setChangePasswordLoader(false);
//   };

//   const disabled =
//     !update.currentPassword ||
//     !update.newPassword ||
//     update.newPassword != update.confirmPassword;
//   return (
//     <div className=" bg-gray-200 p-5 rounded mb-5 shadow-lg">
//       <Spin spinning={changePasswordLoader}>
//         <h2 className="text-xl font-bold pb-4 text-center uppercase">Change Password</h2>
//         <EventInput
//           className="mb-3"
//           label="Current Password"
//           type="password"
//           value={update.currentPassword}
//           name="currentPassword"
//           onChange={onChange}
//           placeholder="*******"
//         />

//         <EventInput
//           className="mb-3"
//           label="New Password"
//           type="password"
//           value={update.newPassword}
//           name="newPassword"
//           onChange={onChange}
//           placeholder="*******"
//         />

//         <EventInput
//           className="mb-3"
//           label="Confirm Password"
//           type="password"
//           value={update.confirmPassword}
//           name="confirmPassword"
//           onChange={onChange}
//           placeholder="*******"
//         />

//         <div className="mt-5 text-end">
//           <EventButton
//             btnText="Update"
//             className='event-btn-danger'
//             onClick={handleUpdate}
//             disabled={disabled}
//           />
//         </div>
//       </Spin>
//     </div>
//   );
// };

// export default PasswordUpdate
import React from 'react'

function PasswordUpdate() {
  return (
    <div>PasswordUpdate</div>
  )
}

export default PasswordUpdate