import { Result, Spin } from "antd";
import PublicLayout from "../layouts/PublicLayout";
import { Link, useParams } from "react-router-dom";
import { api } from "../api";
import { useEffect, useState } from "react";

export const OrderConfirmation = () => {
  const { orderId } = useParams();
  const [orders, setOrders] = useState({});
  const [loader, setloader] = useState(false);

  const fetchSingleOrder = async () => {
    setloader(true);
    try {
      const res = await api.get(`/order/${orderId}`);
      setOrders(res?.result);
    } catch (error) {
      console.log(error.message);
    }
    setloader(false);
  };

  useEffect(() => {
    fetchSingleOrder();
  }, []);

  return (
    <PublicLayout>
      <div className="mb-14">
        <Result
          icon={<i className="fa-regular fa-face-smile text-4xl"></i>}
          title="Thanks for shopping with us"
        />
        <div className="text-center">
          <Link to="/" className="underline text-[#556]">
            Go home
          </Link>
        </div>
      </div>
      <Spin spinning={loader}>
        <div className="text-center">
          <h6 className="mb-2 font-semibold">Order ID: {orders?.orderId}</h6>
          <p className="text-xl mb-4">Order to delivery:</p>
          <div>
            <p className="mb-2">
              <b>{orders?.shippingAddress?.name}</b>
            </p>
            <p>
              {orders?.shippingAddress?.address},{" "}
              {orders?.shippingAddress?.upazila}.
            </p>
            <p>{orders?.shippingAddress?.district}, Bangladesh.</p>
            <p>{orders?.shippingAddress?.phone}</p>
          </div>
        </div>
      </Spin>
    </PublicLayout>
  );
};
