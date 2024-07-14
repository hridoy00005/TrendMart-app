import React, { useState } from "react";
import { Button, Modal, Radio, Space } from "antd";

const ProductSizes = ({
  singleProduct,
  setSelectedSize,
  selectedSize = {},
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // console.log(selectedSize)
  return (
    <div className="pb-5">
      <div className="flex items-center">
        <h5 className="font-semibold">Size : </h5>
        <div className="pl-2 pb-1">
          <Radio.Group
            defaultValue={selectedSize}
            onChange={(e) => {
              setSelectedSize(e.target.value);
            }}
          >
            <Space>
              {singleProduct?.sizes.map(({_id, quantity, sizeName}) => (
                <Radio.Button
                  key={_id}
                  value={_id}
                  disabled={quantity < 1}
                >
                  {sizeName?.toUpperCase()}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="">
        <h5>
          <span className="underline text-sky-600 text-xs cursor-pointer" onClick={showModal}>Size Guide</span>
        </h5>
      </div>
    </div>
  );
};

export default ProductSizes;
