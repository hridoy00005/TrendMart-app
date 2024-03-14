import React, { useState } from 'react'
import { Button, InputNumber, Modal, Radio, Rate, Space, Spin } from "antd";


const ProductSizes = ({sizes=[], setSize}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  console.log();
  return (
    <div className="pb-5">
            <p>Size</p>
            <div className="pl-2 pb-1">
              <Radio.Group defaultValue="S" onChange={(e)=>{setSize(e.target.value)}}>
                <Space>
                  {/* {sizes.map((availableSize)=(<Radio.Button key={availableSize._id} value={availableSize.name} disabled={availableSize.quantity<1}>S</Radio.Button>))} */}
                  <Radio.Button value="S">S</Radio.Button>
                  <Radio.Button value="M">M</Radio.Button>
                  <Radio.Button value="L">L</Radio.Button>
                  <Radio.Button value="XL">XL</Radio.Button>
                  <Radio.Button value="XXL">XXL</Radio.Button>
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
                    <td className="border py-2 sm:py-3 font-semibold">
                      Chest(Inc)
                    </td>
                    <td className="border px-2 sm:px-4">38.5</td>
                    <td className="border px-2 sm:px-4">40.2</td>
                    <td className="border px-2 sm:px-4">41.7</td>
                    <td className="border px-2 sm:px-4">43.3</td>
                    <td className="border px-2 sm:px-4">44.8</td>
                  </tr>
                  <tr>
                    <td className="border py-2 sm:py-3 font-semibold">
                      Length(Inc)
                    </td>
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
  )
}

export default ProductSizes