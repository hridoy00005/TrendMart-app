import React, { useEffect, useState } from "react";
import { api } from "../api/apiConfigaration";
import { category } from "../api";
import { Carousel, Rate, Spin } from "antd";
import { Link } from "react-router-dom";
import Title from "../components/commons/Title";
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

  const NextArrow = ({ className, onClick }) => {
    return (
      <button
        className={className}
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "white",
          color:'#3c3c3c',
          opacity:'0.7',
          border:'1px solid #3c3c3c'
        }}
        onClick={onClick}

      >
        <span className="text-[#3c3c3c]"><i className="fa-solid fa-chevron-right"></i></span>
        
      </button>
    );
  };
  const PrevArrow = ({ className, onClick, style }) => {
    return (
      <button
        className={className}
        style={{
          ...style,
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: "white",
          color:'#3c3c3c',
          opacity:'0.7',
          border:'1px solid #3c3c3c'
        }}
        onClick={onClick}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    );
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
        <div className="px-5 rounded-lg border border-[lightgray]">
          <Carousel
            {...settings}
            prevArrow={<PrevArrow />}
            nextArrow={<NextArrow />}
          >
            {trendingProducts?.map(({ _id, ...product }) => (
              <Link key={_id} className="my-7" to={`/productdetails/${_id}`}>
                <ProductCard data={product} />
              </Link>
            ))}
          </Carousel>
        </div>
      </Spin>
    </div>
  );
};

export default TrendingProducts;

const settings = {
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
