import React, { useState } from "react";
import { Button, InputNumber, Modal, Radio, Rate, Space, Spin } from "antd";

const ProductSizes = ({singleProduct, setSize, size={} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log("Product");
  console.log(singleProduct);
  console.log("size");
  console.log(size);
  setSize(singleProduct?.sizes[0]?.size?.name);
  return (
    <div className="pb-5">
      <p>Size</p>
      <div className="pl-2 pb-1">
        <Radio.Group
        defaultValue={singleProduct?.sizes[0]?.size?.name}
          onChange={(e) => {
            setSize(e.target.value);
            console.log("size seted")
          }}
        >
          <Space>
            {singleProduct?.sizes.map((singleSize)=>(<Radio.Button key={singleSize._id} value={singleSize?.size?.name} disabled={singleSize?.quantity<1}>{singleSize?.size?.name}</Radio.Button>))}
          </Space>
        </Radio.Group>
      </div>
      <div className="ml-2">
        <Button className="" onClick={showModal}>
          Size Guide
        </Button>
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
