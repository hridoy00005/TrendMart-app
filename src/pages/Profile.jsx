import React from "react";
import { BasicInfo, EmailUpdate, PasswordUpdate } from "../components/profile";
import AccountLayout from "../layouts/AccountLayout";
const Profile = () => {
  return (
    <AccountLayout>
      <BasicInfo />
    </AccountLayout>
  );
}

export default Profile