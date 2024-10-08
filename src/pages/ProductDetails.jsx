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
    const selSize = singleProduct?.sizes?.find(
      ({ _id }) => _id === selectedSize
    );
    cart.map(({ product, size }) => {
      if (product?._id === singleProduct?._id) {
        if (singleProduct?.sizeAvailable && product?.sizeAvailable) {
          if (selSize?._id === size?._id) existToCart = true;
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
      notify({ success: true, msg: "The product is added to the cart" });
    } else
      notify({ success: false, msg: "Product already added to the cart!" });
  };

  //Fetch Product
  const fetchProduct = async () => {
    try {
      setLoader(true);
      const res = await api.get(product.getProduct + id);
      setSingleProduct(res.result);
      setSelectedSize(res.result?.sizes[0]?._id);
      setCurrentImage(res.result.images[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // Add to Wish list
  const handleFavourite = async () => {
    const productId = singleProduct?._id;
    if (isAuthenticate) {
      if (isLiked) {
        try {
          const res = await api.delete(wish.getWish, productId);
          notify(res);
          setIsLiked(false);
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const res = await api.post(wish.createWish, { productId });
          notify(res);
          setIsLiked(true);
        } catch (error) {
          console.log(error);
        }
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
  }, [isLiked]);
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
        <h2 className="text-xl font-bold pb-3">{singleProduct?.name}</h2>

        <h5 className="font-semibold">
          Rating : <Rate className="text-sm" allowHalf defaultValue={3.5} />
        </h5>
        <h5 className="pb-3">
          <span className="font-semibold">Type : </span>{" "}
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
              {Math.ceil(
                100 -
                  singleProduct?.discountPrice / (singleProduct?.price / 100)
              )}
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
        <div className="text-center font-semibold sm:text-left w-full flex item-center mt-10">
          <button
            type="button"
            className="border py-3 px-3 sm:px-4 mr-10 rounded duration-[.4s] bg-orange-600 hover:bg-red-600 text-white"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          {/* Add to Wishlist */}
          <button
            className={`hover:scale-110 transition duration-[0.4s] cursor-pointer bg-transparent ${
              isLiked ? "text-red-700" : "text-black"
            }`}
            onClick={handleFavourite}
          >
            {isLiked && (
              <span>
                <i className="text-3xl mt-[1px] ml-[1px] fa-solid fa-heart"></i>
              </span>
            )}
            {!isLiked && (
              <span>
                <i className="text-3xl mt-[1px] ml-[1px] fa-regular fa-heart"></i>
              </span>
            )}
          </button>
        </div>

        {/* Product Descrition */}
        <div className="mt-3">
          <h5 className="font-semibold mb-1">Description : </h5>
          <p
            className="text-sm"
            id="descript"
            dangerouslySetInnerHTML={{ __html: singleProduct?.description }}
          ></p>
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
