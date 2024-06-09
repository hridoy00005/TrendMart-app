import React, { useEffect, useState } from "react";
import { Rate, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { product, wish } from "../api/endpoints";
import { useNavigate, useParams } from "react-router-dom";
import {
  ProductSizes,
  ProductSlider,
  Quantity,
} from "../components/productDetails";
import { useDispatch } from "react-redux";
import { addCart } from "../store/reducers/cartReducer";
import { useSelector } from "react-redux";
import { notify } from "../utils/notification";

const ProductDetails = () => {
  const { isAuthenticate } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state?.cart || []);
  // console.log("cart");
  // console.log(cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [singleProduct, setSingleProduct] = useState(); //Fatched Product
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(JSON.stringify({}));
  const [loader, setLoader] = useState(false);
  const [currentImage, setCurrentImage] = useState(); // current image
  const [isLiked, setIsLiked] = useState(false);

  // Adding to Cart
  const handleAddToCart = () => {
    let existToCart = false;
    const selSize = JSON.parse(selectedSize);
    cart.map(({ product, size }) => {
      if (product?._id === singleProduct?._id) {
        if (singleProduct?.sizeAvailable && product?.sizeAvailable) {
          if (selSize.size?._id === size?.size?._id) existToCart = true;
        } else {
          existToCart = true;
        }
      }
    });
    if (!existToCart) {
      const payload = {
        product: singleProduct,
        quantity,
        size: selSize,
      };
      dispatch(addCart(payload));
      notify({ success: true, msg: "The product is added in the cart" });
    } else notify({ success: false, msg: "This product exists in the cart!" });
  };

  //Fetch Product
  const fetchProduct = async () => {
    try {
      setLoader(true);
      const res = await api.get(product.getProduct + id);
      setSingleProduct(res.result);
      setSelectedSize(res.result?.sizes[0]);
      setCurrentImage(res.result.images[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // Add to Wish list
  const handleFabourite = async () => {
    if (isAuthenticate) {
      try {
        const res = await api.post(wish.createWish, {
          productId: singleProduct?._id,
        });
        notify(res);
        setIsLiked(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
    }
  };

  // Wish List Checking
  const fetchWishList = async () => {
    try {
      const res = await api.get(wish.getWish);
      if (res.result[0].products.find((item) => item?._id === id)) {
        setIsLiked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchWishList();
  }, []);
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
        <div
          className="text-base"
          id="descript"
          dangerouslySetInnerHTML={{ __html: singleProduct?.description }}
        ></div>
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
        ) : (
          <div className="font-semibold mb-3">
            <span className="text-lg text-red-600">
              Price: ৳{singleProduct?.price}
            </span>
          </div>
        )}

        {/* Sizes of the Product */}
        {singleProduct?.sizeAvailable && (
          <ProductSizes
            singleProduct={singleProduct}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
        )}

        {/* Quantity */}
        <Quantity quantity={quantity} setQuantity={setQuantity} />

        {/* Add Buttons */}
        <div className="text-center font-semibold sm:text-left w-full">
          <button
            type="button"
            className="border py-3 px-3 sm:px-4 mb-3 mr-10 rounded duration-[.4s] bg-orange-600 hover:bg-red-600 text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          {/* Add to Wishlist */}
          <button
            className={`hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg rounded-lg p-2 ${
              isLiked ? "text-red-700" : "text-black"
            }`}
            onClick={handleFabourite}
          >
            {/* {isLiked ? (
              <i className="text-3xl mt-[1px] ml-[1px] fa-solid fa-heart"></i>
            ) : (
              <i className="text-3xl mt-[1px] ml-[1px] fa-regular fa-heart"></i>
            )} */}
            <i
              className={`text-3xl mt-[1px] ml-[1px] ${
                isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"
              }`}
            ></i>
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
