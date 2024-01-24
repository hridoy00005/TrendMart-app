import React, { useState } from "react";
import PublicLayout from "../layouts/PublicLayout";
import { Button, Modal, Radio, Rate, Space } from "antd";

const ProductDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <PublicLayout>
      <div className="grid grid-cols-12 bg-white p-2">
        <div className="col-span-12 sm:col-span-6 sm:mr-3">
          <img src="/img/t-shirt2.jpg" alt="Image" className=" h-[350px] mb-2 mx-auto" />
          <div>slider</div>
        </div>

        {/* Product Details */}
        <div className="col-span-12 sm:col-span-6 text-sm">
          <h2 className="text-xl font-extrabold pb-3">
            Mens T-Shirt Black Tri-Blend Crew
          </h2>
          <p className="font-semibold">
            Rating: <Rate className="text-sm" allowHalf defaultValue={3.5} />
          </p>
          <p className="pb-3">
            <span className="font-semibold">Brand:</span> Crew
          </p>

          {/* Price */}
          <div className="font-semibold pb-3">
            <span className="text-lg text-red-600">Price: US$12 </span>
            <del className="text-xs text-gray-500">US$15</del>
            <span className="bg-red-600 rounded-lg px-2 text-xs text-white mx-2">
              -20%
            </span>
          </div>

          {/* Sizes of the Product */}
          <div className="pb-5">
            <p>Size</p>
            <div className="pl-2 pb-1">
              <Radio.Group defaultValue="a">
                <Space>
                  <Radio.Button value="a">S</Radio.Button>
                  <Radio.Button value="b">M</Radio.Button>
                  <Radio.Button value="c">L</Radio.Button>
                  <Radio.Button value="d">XL</Radio.Button>
                  <Radio.Button value="e">XXL</Radio.Button>
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
          <div className="text-center font-semibold sm:text-left w-full">
          <button type="button" className="border py-3 sm:py-4 px-3 sm:px-4 mb-3 rounded bg-orange-600 hover:bg-red-600 text-white">Add to Cart</button>
          </div>
        </div>
        <div className="col-span-12 h-[1px] bg-gray-800 w-full mb-2"></div>

        {/* Review Section */}
        <div>
          <h2>Reviews</h2>
        </div>
      </div>
    </PublicLayout>
  );
};

export default ProductDetails;
