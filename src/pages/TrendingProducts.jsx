import React, { useEffect, useState } from "react";
import { api } from "../api/apiConfigaration";
import { category } from "../api";
import { Rate, Spin } from "antd";
import { Link } from "react-router-dom";

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
    <div className="mt-8 sm:mt-5">
      <center>
        <h1 className="text-2xl mb-1">Trending Now</h1>
        <Spin spinning={loader} size="large">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 bg-white rounded-lg p-2 min-h-[30vh]">
            {trendingProducts?.map((product) => (
              <Link
                key={product._id}
                to={`/productdetails/${product?._id}`}
                className="hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black"
              >
                <img
                  src={product?.images[0]}
                  alt=""
                  className="h-[220px] w-full"
                />
                <div className="">
                  <h3 className="font-semibold">{product?.name}</h3>
                  <h3 className="text-[13px]">{product?.description}</h3>
                  <div>
                    {!product?.discountAvailable ? ( //Here is a problem with discount true or false
                      <h3 className="text-red-600">
                        Price: ৳{product?.discountPrice}{" "}
                        <del
                          className="text-[13px
                        ]"
                        >
                          ৳{product?.price}
                        </del>
                      </h3>
                    ) : (
                      <h3 className="text-red-600">Price: {product?.price}</h3>
                    )}
                  </div>
                  <h3>
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={(Math.random()*5)+1} />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </Spin>
      </center>
    </div>
  );
};

export default TrendingProducts;
