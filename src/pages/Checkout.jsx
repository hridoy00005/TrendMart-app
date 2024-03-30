import { useState } from "react";
import { BillingAddress, OrderItems, ShippingAddress } from "../components/checkout";
import PublicLayout from "../layouts/PublicLayout";
import { Steps } from "antd";

const Checkout = () => {
  const [current, setCurrent] = useState(0);

  const items = [
    {
      title: "Shipping Address",
      icon: <i className="fa-solid fa-truck-fast"></i>,
      content: <ShippingAddress />,
    },
    {
      title: "Billing Address",
      icon: <i className="fa-solid fa-file-invoice"></i>,
      content: <BillingAddress />,
    },
    {
      title: "Payment",
      icon: <i className="fa-solid fa-credit-card"></i>,
    },
  ];

  return (
    <PublicLayout>
      <div className="border-gray-100 p-5 rounded-lg bg-white">
        <h4 className="text-2xl font-semibold uppercase mb-5">Checkout</h4>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3 bg-white border-2 border-gray-300 shadow-sm rounded-lg p-3">
            <Steps current={current} items={items} className="mb-3" />
            <div className="bg-slate-200 rounded-md p-5">
              {items[current].content}
            </div>
            <div className="text-right mt-5">
              {/* <EShopButton
              v-if="current > 0"
              btn-text="Previous"
              onclick="handlePrev"
              className="mr-5"
            /> */}
              {/* <EShopButton
              v-if="current < 2"
              btn-text="Next"
              onclick="handleNext"
              disabled="(current == 0 && shippingDisabled) || (current == 1 && billingDisabled)"
            /> */}
            </div>
          </div>
          <div className="col-span-2">
            <OrderItems />
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Checkout;
