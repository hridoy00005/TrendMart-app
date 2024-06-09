import React, { useEffect, useState } from "react";
import { api } from "../api/apiConfigaration";
import { category } from "../api";
import { Rate, Spin } from "antd";
import { Link } from "react-router-dom";
import Title from "../components/commons/Title";
import Slider from "react-slick";

var settings = {
  arrows: true,
  autoplay: true,
  infinite: true,
  dots: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
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
      <Title
        text="Trending"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQiQn9M1YMUXwtazWYFTYd9cBO4BQatkSYpRfLCLQhw&s"
      />
      <Spin spinning={loader} size="large">
        <div className="">
          <Slider
            {...settings}
            className=" pl-2 grid grid-cols-2 sm:grid-cols-5"
          >
            {trendingProducts?.map((product) => (
              <Link
                key={product._id}
                to={`/productdetails/${product?._id}`}
                className="hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black p-3"
              >
                <div className="relative">
                  {product?.discountAvailable && (
                    <p className="absolute z-40 right-[5px] bg-gray-900 bg-opacity-30 rounded-lg mt-1 px-[2px] text-sm font-semibold text-yellow-300">
                      -
                      {Math.ceil(
                        100-(product?.discountPrice / (product?.price / 100))
                      )}
                      %
                    </p>
                  )}
                  <img
                    src={product?.images[0]}
                    alt=""
                    className=" hover:scale-105 transition duration-[0.4s] aspect-[9/10] min-h-[100px] w-full"
                  />
                </div>

                <div className="">
                  <h3 className="font-semibold">{product?.name}</h3>
                  <h3
                    className="text-[12px]"
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                  ></h3>
                  <div>
                    {product?.discountAvailable ? ( //Here is a problem with discount true or false
                      <h3 className="text-red-600 text-sm">
                        Price: ৳{product?.discountPrice}{" "}
                        <del className="text-xs text-gray-500">
                          ৳{product?.price}
                        </del>
                        {/* <span className="text-xs text-[#444444]">
                          {" "}
                          -
                          {Math.ceil(
                            product?.discountPrice / (product?.price / 100)
                          )}
                          %
                        </span> */}
                      </h3>
                    ) : (
                      <h3 className="text-red-600 text-sm">
                        Price: ৳{product?.price}
                      </h3>
                    )}
                  </div>
                  <Rate
                    className="text-xs"
                    allowHalf
                    defaultValue={Math.random() * 5 + 1}
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </Spin>
    </div>
  );
};

export default TrendingProducts;
