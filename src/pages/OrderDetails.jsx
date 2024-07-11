import { useParams } from "react-router-dom";
import AccountLayout from "../layouts/AccountLayout";
import { api } from "../api";
import { useEffect, useState } from "react";
import { Table } from "antd";
import dayjs from "dayjs";

export const OrderDetails = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = useState({});
  const [loader, setLoader] = useState(false);

  const fetchSingleOrder = async () => {
    setLoader(true)
    try {
      const res = await api.get(`/order/${orderId}`);
      setOrderData(res?.result);
    } catch (error) {
      console.log(error.message);
    }
    setLoader(false)
  };

  useEffect(() => {
    fetchSingleOrder();
  }, []);

  const columns = [
    { key: "serial", title: "#", render: (record,_,idx) => idx + 1 },
    {
      key: "image",
      title: "Image",
      render: (item) => (
        <div>
          <img src={item?.images[0]} className="w-[60px] h-[60px]" />
        </div>
      ),
    },
    {
      key: "name",
      title: "Name",
      render: (item) => (
        <div>
          <div className="font-semibold">{item?.name}</div>
          {item?.sizeAvailable && <div>Size: {item?.size?.size?.name}</div>}
        </div>
      ),
    },
    { key: "quantity", dataIndex: "quantity", title: "Quantity" },
    {
      key: "price",
      title: "Price",
      render: (item) => <>৳{(item?.discountAvailable? item?.discountPrice:item?.price) * item?.quantity}</>,
    },
  ];
  return (
    <AccountLayout>
      <div className="">
        <div className="text-3xl font-bold text-primary mb-4">
          Order Details
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 md:mb-5">
          <div className="font-semibold mb-8 md:mb-5 mt-3">
            Order Id: <span className="font-normal">{orderData?.orderId}</span>
          </div>
          <div className="flex justify-between mb-8 md:mb-5">
            <div className="font-semibold">
              Status: <span className="font-normal">{orderData?.status}</span>
            </div>
            <div className="font-semibold">
              Ordered At:{" "}
              <span className="font-normal">
                {dayjs(orderData?.createdAt).format("DD MMM YY : T hh:MM a")}
              </span>
            </div>
          </div>
          <div className="border rounded-lg shadow p-3">
            <h2 className="text-xl font-semibold">Billing Address</h2>
            <div>{orderData?.billingAddress?.name}</div>
            <div>{orderData?.billingAddress?.address}</div>
            <div>
              {orderData?.billingAddress?.upazila}, {orderData?.billingAddress?.district}
            </div>
            {orderData?.billingAddress?.phone && <div>phone: {orderData?.billingAddress?.phone}</div>}
            <div>email: {orderData?.billingAddress?.email}</div>
          </div>
          <div className="border rounded-lg shadow p-3">
            <h2 className="text-xl font-semibold">Shipping Address</h2>
            <div>{orderData?.shippingAddress?.name}</div>
            <div>{orderData?.shippingAddress?.address}</div>
            <div>
              {orderData?.shippingAddress?.upazila}, {orderData?.shippingAddress?.district}
            </div>
            {orderData?.shippingAddress?.phone && (
              <div>phone: {orderData?.shippingAddress?.phone}</div>
            )}
          </div>
        </div>
        <div className="mb-8 md:mb-5">
          <h2 className="text-xl font-semibold mb-3">Items</h2>
          <Table
            loading={loader}
            dataSource={orderData?.items}
            columns={columns}
          />
        </div>
        <div className="flex justify-end mb-8 md:mb-5">
          <div className="font-semibold text-xl">
            Total Price: ৳
            <span className="font-normal">{orderData?.totalPrice}</span>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};
