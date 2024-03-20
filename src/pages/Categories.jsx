import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { InputNumber, Pagination, Rate, Slider, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { category, product } from "../api/endpoints";

const Categories = () => {
  const { id } = useParams();
  const [minPrice, setMinprice] = useState(1);
  const [maxPrice, setMaxprice] = useState(1000);
  const [menuList, setMenuList] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleChange = (price) => {
    setMinprice(price[0]);
    setMaxprice(price[1]);
  };

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

  // console.log(`menu list ${menuList}`);
  console.log(menuList);

  useEffect(() => {
    fetchItems();
  }, [id]);
  return (
      <div className=" min-h-screen grid grid-cols-12">
        <div className="col-span-12 sm:col-span-2 mr-2">
          <h2 className="text-lg font-bold border-b border-black">Filter</h2>
          {/* Filtering Price */}
          <div className="my-2">
            <h3 className="font-semibold">Price</h3>
            <div className="flex justify-between text-sm">
              <p>Min</p>
              <p>Max</p>
            </div>
            <Slider
              min={1}
              max={1000}
              range={{
                draggableTrack: true,
              }}
              defaultValue={[1, 1000]}
              onChange={handleChange}
            />
            <div className="flex justify-between">
              <InputNumber
                min={1}
                max={1000}
                style={{
                  width: "60px",
                }}
                value={minPrice}
                onChange={handleChange}
              />
              <InputNumber
                min={1}
                max={1000}
                style={{
                  width: "60px",
                }}
                value={maxPrice}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-10 ">
          {/* Products Categories */}
          <div className="flex flex-wrap justify-around items-end border py-3 bg-slate-300 border-blue-950 text-black text-base sm:text-lg font-semibold rounded-lg mb-3">
            {menuList?.subcategories?.map((subcategory) => (
              <Link
                key={subcategory._id}
                className="bg-slate-30 hover:bg-blue-900 text-center py-1 px-3 rounded-lg hover:text-white"
              >
                <h2>{subcategory.title}</h2>
              </Link>
            ))}
          </div>

          {/* Products section */}
          <Spin spinning={loader} size="large">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 bg-white border border-black rounded-lg p-2">
            {menuList?.products?.map((product) => (
              <Link key={product._id} to={`/productdetails/${product?._id}`} className="hover:scale-105 transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black">
                {/* <img src="/img/default.jpg" alt="item" /> */}
                <img
                  src={product?.images[0]}
                  alt=""
                  className="h-[220px] w-full"
                />
                <div className="">
                  <h3 className="font-semibold">{product?.name}</h3>
                  <h3 className="text-[13px]">{product?.description}</h3>
                  <div>
                    {!product?.discountAvailable ? ( //Here problem with discount true or false
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
                    <Rate className="text-sm" allowHalf defaultValue={3.5} />
                  </h3>
                </div>
              </Link>
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
        </div>
      </div>
  );
};

export default Categories;
