import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountLayout from "../layouts/AccountLayout";
import { Pagination, Rate, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { wish } from "../api";

const Fabourites = () => {
  const [wisiList, setWishList] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchWishList = async () => {
    setLoader(true);
    try {
      const res = await api.get(wish.getWish);
      setWishList(res.result[0].products);
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchWishList();
  }, []);
  return (
    <AccountLayout>
      <Spin spinning={loader}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 bg-white p-2 min-h-screen">
          {wisiList?.map((item, idx) => (
            <div className="mx-auto hover:shadow-lg hover:border hover:border-gray-300" key={idx}>
              <Link
                to={`/productdetails/${item?._id}`}
                className="hover:text-black"
              >
                <img
                  src={item?.images[0]}
                  alt=""
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] "
                />
                <div className="">
                  <h3 className="text-base max-w-[220px]">{item?.title}</h3>
                  <h3 className="text-red-600">
                    Price: ${item?.discountPrice}{" "}
                    <del className="text-sm text-gray-400">${item?.price}</del>
                  </h3>
                  <h3 className="text-sm">
                    Rating:{" "}
                    <Rate
                      className="text-sm"
                      allowHalf
                      defaultValue={Math?.random() * 5 + 1}
                    />
                  </h3>
                </div>
              </Link>
            </div>
          ))}

          {/* Pagination */}
          <div className="col-span-2 sm:col-span-4 mt-2 text-center">
            <Pagination
              defaultCurrent={1}
              total={100}
              showSizeChanger={false}
            />
          </div>
        </div>
      </Spin>
    </AccountLayout>
  );
};

export default Fabourites;
