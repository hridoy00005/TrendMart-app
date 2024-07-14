import { useParams } from "react-router-dom";
import AccountLayout from "../layouts/AccountLayout";
import { api } from "../api";
import { useEffect, useState } from "react";
import { Table } from "antd";
import dayjs from "dayjs";
import { OrderAddress } from "../components/orderDetails";

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
          <OrderAddress addressData={orderData?.billingAddress} title="Billing Address" />
          <OrderAddress addressData={orderData?.shippingAddress} title="Shipping Address" />
        </div>
        <div className="mb-8 md:mb-5">
          <h2 className="text-xl font-semibold mb-3">Items</h2>
          <Table
            loading={loader}
            dataSource={orderData?.items}
            columns={columns}
            rowKey={(row)=>row?._id}
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
