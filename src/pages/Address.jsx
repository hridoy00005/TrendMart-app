import { useEffect, useState } from "react";
import AccountLayout from "../layouts/AccountLayout";
import AddressForm from "../components/address/AddressForm";
import { address, api } from "../api";
import AddressCard from "../components/address/AddressCard";
import { Spin } from "antd";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [loader, setLoader] = useState(false);

  //Fetching Addresses
  const fetchAddress = async () => {
    setLoader(true);
    try {
      const res = await api.get(address.getAddress);
      if (res.success) {
        console.log(res.result);
        setAddresses(res.result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <Spin spinning={loader} size="large">
      <AccountLayout>
        <AddressForm fetchAddress={fetchAddress} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center mt-3">
          {addresses.map((address)=>(
            <AddressCard key={address._id} adata={address} fetchAddress={fetchAddress} />
          ))}
        </div>
      </AccountLayout>
    </Spin>
    
  );
};

export default Address;
