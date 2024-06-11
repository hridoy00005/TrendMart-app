import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { InputNumber, Pagination, Rate, Slider, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { category, product } from "../api/endpoints";
import { ProductCard } from "../components/commons/ProductCard";

const Categories = () => {
  const { id } = useParams(); //Get id from url
  const [minPrice, setMinprice] = useState(1);
  const [maxPrice, setMaxprice] = useState(1000);
  const [menuList, setMenuList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState();
  const [selectedSubId, setSelectedSubId] = useState();
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

  // Filtering selected Subcategoriy
  const selectedSubcategory = ({ subcategory }) => {
    // const filteredProducts = menuList?.products.filter(
    //   (product) => product?.subcategory === subcategory?._id
    // );
    setSelectedSubId(subcategory?._id);
    setFilteredProducts(
      menuList?.products.filter(
        (product) => product?.subcategory === subcategory?._id
      )
    );
  };
  console.log("filteredProducts");
  console.log(filteredProducts);
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
        {/* Products Subcategories */}
        <div className="flex flex-wrap justify-start text-sm font-semibold rounded-lg mb-5">
          {menuList?.subcategories?.map((subcategory) => (
            <div
              key={subcategory?._id}
              onClick={() => selectedSubcategory({ subcategory })}
              className={`${(selectedSubId === subcategory?._id)?"border py-1 px-2 mr-1 rounded-lg bg-[#1e1e1e] text-gray-300 cursor-pointer":"border py-1 px-2 mr-1 rounded-lg hover:bg-[#1e1e1e] hover:text-gray-300 cursor-pointer"}`}
            >
              <h2>{subcategory?.title}</h2>
            </div>
          ))}
        </div>

        {/* Products section */}
        <Spin spinning={loader} size="large">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 rounded-lg">
            {filteredProducts
              ? filteredProducts?.map(({ _id, ...product }) => (
                  <Link key={_id} to={`/productdetails/${_id}`}>
                    <ProductCard data={product} />
                  </Link>
                ))
              : menuList?.products?.map(({ _id, ...product }) => (
                  <Link key={_id} to={`/productdetails/${_id}`}>
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

export default Categories;
