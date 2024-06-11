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
              {singleProduct?.sizes.map((singleSize) => (
                <Radio.Button
                  key={singleSize._id}
                  value={JSON.stringify(singleSize)}
                  disabled={singleSize?.quantity < 1}
                >
                  {singleSize?.size?.name}
                </Radio.Button>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </div>
      <div className="">
        <h5>
          <span className="underline text-sky-600 text-[13px] cursor-pointer" onClick={showModal}>Size Guide</span>
        </h5>
        <Modal
          title="Size Guide"
          open={isModalOpen}
          onCancel={closeModal}
          footer={false}
        >
          <table className="border w-full text-center">
            <tr className="text-base sm:text-lg">
              <th>Size Direction</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>XXL</th>
            </tr>
            <tr>
              <td className="border py-2 sm:py-3 font-semibold">Chest(Inc)</td>
              <td className="border px-2 sm:px-4">38.5</td>
              <td className="border px-2 sm:px-4">40.2</td>
              <td className="border px-2 sm:px-4">41.7</td>
              <td className="border px-2 sm:px-4">43.3</td>
              <td className="border px-2 sm:px-4">44.8</td>
            </tr>
            <tr>
              <td className="border py-2 sm:py-3 font-semibold">Length(Inc)</td>
              <td className="border">26.7</td>
              <td className="border">27.5</td>
              <td className="border">28.1</td>
              <td className="border">29.1</td>
              <td className="border">29.9</td>
            </tr>
          </table>
        </Modal>
      </div>
    </div>
  );
};

export default ProductSizes;
