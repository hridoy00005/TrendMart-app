import React, { useEffect, useState } from "react";
import Title from "../commons/Title";
import { api, category } from "../../api";
import { Rate, Spin } from "antd";
import { Link } from "react-router-dom";

export const HomeWomenCates = () => {
  const id = "65c4966aaec8c88e9ddaacfd";
  const [loader, setLoader] = useState(false);
  const [menuList, setMenuList] = useState([]);

  const fetchItems = async () => {
    setLoader(true);
    try {
      const res = await api.get(category.getSingleCategory + id);
      if (res.success) {
        setMenuList(res.result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div className="border mb-10 rounded-lg shadow">
      <Title text="Women's" image="https://cdn.dribbble.com/users/2212220/screenshots/5808617/girl-walking_dribble.gif" />
      <Spin spinning={loader} size="large">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 p-2">
          {menuList?.products?.map((product,idx) => idx<10 && (
            <Link
              key={product._id}
              to={`/productdetails/${product?._id}`}
              className="hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black px-3"
            >
              {/* <img src="/img/default.jpg" alt="item" /> */}
              <div className="relative">
                  {product?.discountAvailable && (
                    <p className="absolute z-40 right-[5px] bg-gray-900 bg-opacity-30 rounded-lg mt-1 px-[2px] text-sm font-semibold text-yellow-300">
                      -
                      {Math.ceil(
                        product?.discountPrice / (product?.price / 100)
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
                <h3 className="text-[13px]" dangerouslySetInnerHTML={{ __html: product?.description }}></h3>
                <div>
                  {product?.discountAvailable ? ( 
                    <h3 className="text-red-600">
                      Price: ৳{product?.discountPrice}{" "}
                      <del
                        className="text-xs text-gray-500"
                      >
                        ৳{product?.price}
                      </del>
                    </h3>
                  ) : (
                    <h3 className="text-red-600">Price: ৳{product?.price}</h3>
                  )}
                </div>
                  <Rate className="text-xs" allowHalf defaultValue={Math.random() * 5 + 1} />
              </div>
            </Link>
          ))}
          <div className="col-span-2 sm:col-span-5 text-right">
            <Link to={`/categories/${id}`} className=" hover:underline hover:text-sky-600 hover:cursor-pointer font-semibold text-[404040]">
              {"See More >>"}
            </Link>
          </div>
        </div>
      </Spin>
    </div>
  );
};
