import React, { useEffect, useState } from "react";
import { InputNumber, Pagination, Rate, Slider, Spin } from "antd";
import { Link, useParams } from "react-router-dom";
import { api, subcategory } from "../api";
import { ProductCard } from "../components/commons/ProductCard";

const Subcategories = () => {
  const { id } = useParams(); //Subcategory Id
  
  const [minPrice, setMinprice] = useState(1);
  const [maxPrice, setMaxprice] = useState(1000);
  const [productList, setProductList] = useState([]); //Products
  const [loader, setLoader] = useState(false); //Loader

  const handleChange = (price) => {
    setMinprice(price[0]);
    setMaxprice(price[1]);
  };

  //Fetching Subcategories
  const fetchItems = async () => {
    setLoader(true);
    try {
      const res = await api.get(subcategory.getSubcategory + id);
      if (res.success) {
        setProductList(res.result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  console.log(productList);
  useEffect(() => {
    fetchItems();
  }, [id]);
  return (
      <div className=" min-h-screen grid grid-cols-12 mt-5">
        <div className="col-span-12 sm:col-span-2 bg-gray-100 px-4 rounded-lg">
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

        <div className="col-span-12 sm:col-span-10 ml-5">
          {/* Products section */}
          <Spin spinning={loader} size="large">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 rounded-lg">
              {productList?.map(({ _id, ...product }) => (
                <Link
                  key={_id}
                  to={`/productdetails/${_id}`}
                >
                  <ProductCard data={product} />
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

export default Subcategories;
