import React from "react";
import { Link } from "react-router-dom";
import { Radio, Space } from "antd";

export const ShippingAddress = ({
  handleSelectAddress,
  allAddress = [],
  shippingAddress,
}) => {
  return (
    <React.Fragment>
      <div className="text-center mb-5">
        <Link to="/address" className="py-2 px-2 text-white rounded-lg">
          <span className="bg-[#1e1e1e] rounded py-3 px-10">
            {allAddress?.length !== 0 ? "Add New Address" : "+ Add Address"}
          </span>
        </Link>
      </div>
      <Radio.Group
        onChange={(e) => handleSelectAddress(e.target.value)}
        value={shippingAddress}
      >
        <Space direction="vertical" size="large">
          {allAddress?.map((ad) => (
            <Radio
              value={ad?._id}
              key={ad?._id}
              className="w-full p-5 rounded-lg shadow-sm border hover:shadow-md"
            >
              <div className="px-5">
                <p className="font-semibold text-lg">{ad?.name}</p>
                <p className="text-base">{ad?.address}</p>
                <p className="text-base">
                  {ad?.upazila}, {ad?.district} , Bangladesh
                </p>
                <p className="text-base">
                  {" "}
                  <i className="fa-solid fa-phone text-sm mr-2"></i>
                  {ad?.phone}
                </p>
              </div>
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </React.Fragment>
  );
};
