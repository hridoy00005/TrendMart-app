import React, { useEffect, useState } from "react";
import {
  BillingAddress,
  OrderItems,
  PaymentForm,
  ShippingAddress,
} from "../components/checkout";
import PublicLayout from "../layouts/PublicLayout";
import { Steps, Spin } from "antd";
import { address, api } from "../api";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);
const stripePromise = loadStripe(
  "pk_test_51NiaBnG5LWC441mfYbPbZQmJUds51mpddRlrnqTLhjAhwIEL25lwyJc60DiJh9klxiiVerGjOvMFkazhPO1myfc200RMyIdDbf"
);

const Checkout = () => {
  const [current, setCurrent] = useState(2);
  const [shippingAddress, setShippingAddress] = useState("");
  const [billingAddress, setBillingAddress] = useState({});
  const [allAddress, setAllAddresses] = useState([]);
  const [loader, setLoader] = useState(false);
  const { cart } = useSelector((state) => state?.cart || []);
  //Fetching Addresses
  const fetchAddress = async () => {
    setLoader(true);
    try {
      const res = await api.get(address.getAddress);
      if (res.success) {
        setAllAddresses(res.result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  const handleChooseShipping = (value) => {
    setShippingAddress(value);
  };

  const createOnOrder = async(token) => {
    const items = cart?.map(ct=>({...ct?.product, ...ct}));
    const orderData = {
      shippingAddress,
      billingAddress,
      token,
      items
    }
    const res = await api.post('/order/create', {...orderData});
    if(res.success){
       // redirect order confirmation page
    }
    try {
    } catch (error) {
      console.log(error.message);
    }
  };
  const items = [
    {
      title: "Shipping Address",
      icon: <i className="fa-solid fa-truck-fast"></i>,
      content: (
        <Spin spinning={loader}>
          <ShippingAddress
            handleSelectAddress={handleChooseShipping}
            allAddress={allAddress}
            shippingAddress={shippingAddress}
          />
        </Spin>
      ),
    },
    {
      title: "Billing Address",
      icon: <i className="fa-solid fa-file-invoice"></i>,
      content: (
        <BillingAddress
          setBillingAddress={setBillingAddress}
          shippingAddress={shippingAddress}
          billingAddress={billingAddress}
          allAddress={allAddress}
        />
      ),
    },
    {
      title: "Payment",
      icon: <i className="fa-solid fa-credit-card"></i>,
      content: (
        <Elements stripe={stripePromise}>
          <PaymentForm createOnOrder={createOnOrder} />
        </Elements>
      ),
    },
  ];

  return (
    <PublicLayout>
      <div className="border-gray-100 p-5 rounded-lg bg-white">
        <h4 className="text-2xl font-semibold uppercase mb-5">Checkout</h4>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3 bg-white border-2 border-gray-300 shadow-sm rounded-lg p-3">
            <Steps current={current} items={items} className="mb-3" />
            <div className="rounded-md p-5">{items[current].content}</div>
            <div className="text-right mt-5">
              {current > 0 && (
                <button
                  onClick={() => setCurrent((prev) => prev - 1)}
                  className="mr-5"
                >
                  Previous
                </button>
              )}
              {current < 2 && (
                <button
                  disabled={
                    (current == 0 && !shippingAddress) ||
                    (current == 1 && !billingAddress)
                  }
                  onClick={() => setCurrent((prev) => prev + 1)}
                  className="mr-5 px-10 py-2 bg-black text-white"
                >
                  Next
                </button>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <OrderItems cart={cart} />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Checkout;
