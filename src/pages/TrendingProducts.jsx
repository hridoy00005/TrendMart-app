import React, { useEffect, useState } from "react";
import { api } from "../api/apiConfigaration";
import { category } from "../api";
import { Rate, Spin } from "antd";
import { Link } from "react-router-dom";
import Title from "../components/commons/Title";
import Slider from "react-slick";
import { ProductCard } from "../components/commons/ProductCard";

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
  return (
    <div className="mb-10">
      <Title
        text="Trending"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAQiQn9M1YMUXwtazWYFTYd9cBO4BQatkSYpRfLCLQhw&s"
      />
      <Spin spinning={loader} size="large">
        <div className="px-5 py-7 rounded-md border border-[lightgray]">
          <Slider {...settings}>
            {trendingProducts?.map(({ _id, ...product }) => (
              <Link
                key={_id}
                to={`/productdetails/${_id}`}
              >
                <ProductCard data={product} />
              </Link>
            ))}
          </Slider>
        </div>
      </Spin>
    </div>
  );
};

export default TrendingProducts;

const settings = {
  arrows: true,
  // autoplay: true,
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
