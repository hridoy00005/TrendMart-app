import React, { useEffect, useState } from "react";
import { api } from "../api/apiConfigaration";
import { category } from "../api";
import { Rate, Spin } from "antd";
import { Link } from "react-router-dom";
import Title from "../components/commons/Title";
import Slider from "react-slick";

var settings = {
  // arrows:true,
  autoplay:true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};

const TrendingProducts = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProducts = async () => {
    setLoader(true);
    try {
      const res = await api.get(
        category.getSingleCategory + "65c495d3aec8c88e9ddaacf5"
      );
      if (res?.success) {
        setTrendingProducts(res?.result.products);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(trendingProducts);
  return (
    <div className="mb-10">
      <Title text="Trending" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQiQn9M1YMUXwtazWYFTYd9cBO4BQatkSYpRfLCLQhw&s" />
      <Spin spinning={loader} size="large">
        {/* <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 bg-white rounded-lg p-2 min-h-[30vh]"> */}
        {/* <Carousel arrows autoplay dots={false} slidesToShow={5} slidesToScroll={1}> */}
        <Slider {...settings} className="pl-2">
          {trendingProducts?.map((product) => (
            <Link
              key={product._id}
              to={`/productdetails/${product?._id}`}
              className="hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black px-1"
            >
              <img
                src={product?.images[0]}
                alt=""
                className="h-[200px] w-full"
              />
              <div className="">
                <h3 className="font-semibold">{product?.name}</h3>
                <h3 className="text-[12px]" dangerouslySetInnerHTML={{ __html: product?.description }}></h3>
                <div>
                  {!product?.discountAvailable ? ( //Here is a problem with discount true or false
                    <h3 className="text-red-600 text-sm">
                      Price: ৳{product?.discountPrice}{" "}
                      <del
                        className="text-[13px
                        ]"
                      >
                        ৳{product?.price}
                      </del>
                    </h3>
                  ) : (
                    <h3 className="text-red-600 text-sm">Price: {product?.price}</h3>
                  )}
                </div>
                <h3 className="text-sm">
                  Rating:{" "}
                  <Rate
                    className="text-sm"
                    allowHalf
                    defaultValue={Math.random() * 5 + 1}
                  />
                </h3>
              </div>
            </Link>
          ))}
          </Slider>
        {/* </Carousel> */}

        {/* </div> */}
      </Spin>
    </div>
  );
};

export default TrendingProducts;
