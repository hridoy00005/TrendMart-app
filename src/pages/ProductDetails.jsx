import React, { useEffect, useState } from "react";
import { Rate, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { product } from "../api/endpoints";
import { useParams } from "react-router-dom";
import {
  ProductSizes,
  ProductSlider,
  Quantity,
} from "../components/productDetails";
import { useDispatch } from "react-redux";
import { addCart } from "../store/reducers/cartReducer";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(); //Fatched Product
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState();
  const [loader, setLoader] = useState(false);
  const [currentImage, setCurrentImage] = useState(); // current image

  // Adding to Cart
  const handleAddToCart = () => {
    const payload = { product: singleProduct, quantity, size };
    console.log("Payload");
    console.log(payload);
    dispatch(addCart(payload));
  };

  //Fetch Product
  const fetchProduct = async () => {
    try {
      setLoader(true);
      const res = await api.get(product.getProduct + id);
        setSingleProduct(res.result);
        setCurrentImage(res.result.images[0]);
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(singleProduct);
  return (
      <div className="grid grid-cols-12 bg-white p-2">
        {/*Product Images */}
        <div className="col-span-12 sm:col-span-6 sm:mr-3">
          <Spin spinning={loader}>
            <img
              src={currentImage ? currentImage : singleProduct?.images[0]}
              alt="Image"
              className=" h-[350px] mb-2 mx-auto"
            />
          </Spin>
          {/* slider */}
          <div>
            <ProductSlider
              images={singleProduct?.images}
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
            />
          </div>
        </div>

        {/* Product Informations */}
        <div className="col-span-12 sm:col-span-6 text-sm">
          <h2 className="text-xl font-extrabold pb-3">{singleProduct?.name}</h2>
          <div className="text-base" id="descript" dangerouslySetInnerHTML={{__html:singleProduct?.description}}></div>
          <h5 className="font-semibold">
            Rating: <Rate className="text-sm" allowHalf defaultValue={3.5} />
          </h5>
          <h5 className="pb-3">
            <span className="font-semibold">Type:</span>{" "}
            {singleProduct?.subcategory?.title}
          </h5>

          {/* Price */}
          {singleProduct?.discountAvailable ? (
            <div className="font-semibold pb-3">
              <span className="text-lg text-red-600">
                Price: ৳{singleProduct?.discountPrice}{" "}
              </span>
              <del className="text-xs text-gray-500">
                ৳{singleProduct?.price}
              </del>
              <span className="bg-red-600 rounded-lg px-2 text-xs text-white mx-2">
                -
                {(
                  100 -
                  (singleProduct?.discountPrice / singleProduct?.price) * 100
                ).toFixed(2)}
                %
              </span>
            </div>
          ) : (
            <div className="font-semibold mb-3">
              <span className="text-lg text-red-600">
                Price: ৳{singleProduct?.price}
              </span>
            </div>
          )}

          {/* Sizes of the Product */}
          {singleProduct?.sizeAvaible === true && (
            <ProductSizes
            singleProduct={singleProduct}
              size={size}
              setSize={setSize}
            />
          )}

          {/* Quantity */}
          <Quantity quantity={quantity} setQuantity={setQuantity} />

          {/* Add Button */}
          <div className="text-center font-semibold sm:text-left w-full">
            <button
              type="button"
              className="border py-3 sm:py-4 px-3 sm:px-4 mb-3 rounded duration-[.4s] bg-orange-600 hover:bg-red-600 text-white"
              onClick={handleAddToCart}
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
  );
};

export default ProductDetails;
