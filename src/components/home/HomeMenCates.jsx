import React, { useEffect, useState } from "react";
import Title from "../commons/Title";
import { api, category } from "../../api";
import { Rate, Spin } from "antd";
import { Link } from "react-router-dom";
import { ProductCard } from "../commons/ProductCard";

export const HomeMenCates = () => {
  const id = "65c495d3aec8c88e9ddaacf5";
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
    <div className="mb-10">
      <Title
        text="Men's"
        image="https://assets-v2.lottiefiles.com/a/446bf0de-1166-11ee-9648-6f0e04280ac8/xjElzeFKXo.gif"
      />
      <Spin spinning={loader} size="large">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 p-7 border border-[lightgray] rounded-lg shadow">
          {menuList?.products?.map(
            ({_id, ...product}, idx) =>
              idx < 10 && (
                <Link
                  key={_id}
                  to={`/productdetails/${_id}`}
                  // className="hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black px-3"
                >
                  <ProductCard data={product} />
                  {/* <img src="/img/default.jpg" alt="item" /> */}
                  {/* <div className="relative">
                    {product?.discountAvailable && (
                      <p className="absolute z-40 right-[5px] bg-gray-900 bg-opacity-30 rounded-lg mt-1 px-[2px] text-sm font-semibold text-yellow-300">
                        -
                        {Math.ceil(
                          100 - product?.discountPrice / (product?.price / 100)
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
                      className="text-[13px]"
                      dangerouslySetInnerHTML={{ __html: product?.description }}
                    ></h3>
                    <div>
                      {product?.discountAvailable ? ( //Here problem with discount true or false
                        <h3 className="text-red-600">
                          Price: ৳{product?.discountPrice}{" "}
                          <del className="text-xs text-gray-500">
                            ৳{product?.price}
                          </del>
                        </h3>
                      ) : (
                        <h3 className="text-red-600">
                          Price: ৳{product?.price}
                        </h3>
                      )}
                    </div>
                    <Rate
                      className="text-xs"
                      allowHalf
                      defaultValue={Math.random() * 5 + 1}
                    />
                  </div> */}
                </Link>
              )
          )}
          <div className="col-span-2 sm:col-span-5 text-right">
            <Link
              to={`/categories/${id}`}
              className=" hover:underline hover:text-sky-600 hover:cursor-pointer font-semibold text-[404040]"
            >
              {"See More >>"}
            </Link>
          </div>
        </div>
      </Spin>
    </div>
  );
};
