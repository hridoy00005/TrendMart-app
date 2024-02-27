import React, { useEffect, useState } from "react";
import PublicLayout from "../layouts/PublicLayout";
import { Button, InputNumber, Modal, Radio, Rate, Space, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { product } from "../api/endpoints";
import { useParams } from "react-router-dom";
import { ProductSlider } from "../components/productDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(); //Fatched Product
  const [quantity, setQuantity] = useState(1);
  const [loader, setLoader] = useState(false);
  const [currentImage, setCurrentImage] = useState()// current image

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //Fetch Product
  const fetchProduct = async () => {
    setLoader(true);
    try {
      const res = await api.get(product.getProduct + id);
      if (res.success) {
        setSingleProduct(res.result);
        setCurrentImage(res.result.images[0])
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  //Quantity Changing
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const disabledMinus = quantity <= 1;
  console.log(currentImage);
  return (
    <PublicLayout>
      <div className="grid grid-cols-12 bg-white p-2">
        {/*Product Images */}
        <div className="col-span-12 sm:col-span-6 sm:mr-3">
          <Spin spinning={loader}>
            <img
              // src="/img/t-shirt2.jpg"
              src={currentImage?currentImage:singleProduct?.images[0]}
              alt="Image"
              className=" h-[350px] mb-2 mx-auto"
            />
          </Spin>
          {/* slider */}
          <div>
            <ProductSlider images={singleProduct?.images} currentImage={currentImage} setCurrentImage={setCurrentImage} />
          </div>
        </div>

        {/* Product Details */}
        <div className="col-span-12 sm:col-span-6 text-sm">
          <h2 className="text-xl font-extrabold pb-3">{singleProduct?.name}</h2>
          <p className="text-base">{singleProduct?.description}</p>
          <h5 className="font-semibold">
            Rating: <Rate className="text-sm" allowHalf defaultValue={3.5} />
          </h5>
          <h5 className="pb-3">
            <span className="font-semibold">Type:</span>{" "}
            {singleProduct?.subcategory?.title}
          </h5>

          {/* Price */}
          <div className="font-semibold pb-3">
            <span className="text-lg text-red-600">
              Price: ৳{singleProduct?.discountPrice}{" "}
            </span>
            <del className="text-xs text-gray-500">৳{singleProduct?.price}</del>
            <span className="bg-red-600 rounded-lg px-2 text-xs text-white mx-2">
              -
              {(
                100 -
                (singleProduct?.discountPrice / singleProduct?.price) * 100
              ).toFixed(2)}
              %
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

          {/* Quantity */}
          <div className="flex mb-3">
            <h2 className="mr-2 my-auto">Quantity: </h2>
            <button
              className={`${
                disabledMinus
                  ? "text-xs py-1 text-gray-300 border rounded-lg px-3"
                  : "text-xs py-1 hover:font-bold border rounded-lg px-3 hover:border-sky-500"
              }`}
              onClick={handleDecrease}
              disabled={disabledMinus}
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-[60px] border rounded-lg outline-none text-center py-1"
            />
            <button
              className="text-xs py-1 hover:font-bold border rounded-lg px-3 hover:border-sky-500"
              onClick={handleIncrease}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>

          {/* Add Button */}
          <div className="text-center font-semibold sm:text-left w-full">
            <button
              type="button"
              className="border py-3 sm:py-4 px-3 sm:px-4 mb-3 rounded bg-orange-600 hover:bg-red-600 text-white"
            >
              Add to Cart
            </button>
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
