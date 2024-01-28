import React, { useEffect, useState } from "react";
import AccountLayout from "../layouts/AccountLayout";
import AddressForm from "../components/address/AddressForm";
import { address, api } from "../api";
import { notify } from "../utils/notification";
import AddressCard from "../components/address/AddressCard";

const Address = () => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddress = async () => {
    try {
      const res = await api.get(address.getAddress);
      if (res.success) {
        console.log(res.result);
        setAddresses(res.result);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(addresses);

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <AccountLayout>
      <AddressForm fetchAddress={fetchAddress} />
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-3">
        {addresses.map((address)=>(
          <AddressCard key={address._id} adata={address} fetchAddress={fetchAddress} />
        ))}
        
        {/* <AddressCard />
        <AddressCard /> */}
      </div>
    </AccountLayout>
  );
};

export default Address;
