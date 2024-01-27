import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import { updateProfile } from "../../store/reducers/authReducer";
import { notify } from "../../utils/notification";
import { api, auth } from "../../api";
import {CInput,CButton} from "../commons"

const BasicInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [update, setUpdate] = useState({
    name: user?.name,
    phone: user?.phone,
    avatar: user?.avatar,
  });

  //Loaders
  const [loading, setLoading] = useState(false);
  const [fileLoading, setFileLoading] = useState(false);

  const onProfileUpdate = async () => {
    setLoading(true);
    try {
      const result = await api.post(auth.editProfile, {profileData: update});
      notify(result);
      if (result?.success) {
        dispatch(updateProfile(update));
      } 
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUpdate({ ...update, [name]: value });
  };

  // File Updating
  const handleFile = async (e) => {
    setFileLoading(true);
    try {
      const result = await api.fileUpload(e.target.files[0]);
      if (result?.success) {
        setUpdate({ ...update, avatar: result.url });
      } 
    } catch (error) {
      console.log(error);
    }
    setFileLoading(false);
  };

  const disabled =
    !update.name ||
    !update.phone ||
    (update.name == user?.name &&
      update.phone == user?.phone &&
      update.avatar == user.avatar);

  return (
    <div className=" bg-gray-200 p-5 rounded mb-5 shadow-lg">
      <Spin spinning={loading}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <CInput label="Name" type="text" name="name" value={update.name} onChange={onChange}  />
        <CInput label="Phone" type="text" name="phone" value={update.phone} onChange={onChange}  />
        <Spin spinning={fileLoading}>
            <div className="m-auto">
              <img
                alt=""
                src={update.avatar}
                className="w-[80px] h-[80px] rounded-full "
              />
              <input type="file" onChange={handleFile} />
            </div>
          </Spin>
        <CButton className="mx-auto my-auto" name="Update" onClick={onProfileUpdate} disabled={disabled} />
        </div>
      </Spin>
    </div>
  );
};

export default BasicInfo;
