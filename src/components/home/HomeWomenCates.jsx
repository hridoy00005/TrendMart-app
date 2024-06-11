import React, { useEffect, useState } from "react";
import Title from "../commons/Title";
import { api, category } from "../../api";
import { Rate, Spin } from "antd";
import { Link } from "react-router-dom";
import { ProductCard } from "../commons/ProductCard";

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
    <div className="mb-10">
      <Title
        text="Women's"
        image="https://cdn.dribbble.com/users/2212220/screenshots/5808617/girl-walking_dribble.gif"
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
