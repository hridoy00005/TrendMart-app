import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pagination, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { category } from "../api/endpoints";
import { ProductCard } from "../components/commons/ProductCard";
import { Filters } from "../components/categoryView";

const CategoryView = () => {
  const { id } = useParams(); //Get id from url

  const [categoryDetails, setCategoryDetails] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchCategoryDetails = async (filters = {}) => {
    setLoader(true);
    try {
      const res = await api.get(category.getSingleCategory + id, {
        ...filters,
      });
      if (res.success) {
        setCategoryDetails(res.result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  useEffect(() => {
    fetchCategoryDetails();
  }, [id]);
  return (
    <div className=" min-h-screen grid grid-cols-12 mt-5">
      <Filters
        subcategories={categoryDetails?.subcategories}
        refetch={fetchCategoryDetails}
      />
      <div className="col-span-12 sm:col-span-10 ml-5">
        {/* Products section */}
        <Spin spinning={loader} size="large">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 rounded-lg">
            {categoryDetails?.products?.map(({ _id, ...product }) => (
              <Link key={_id} to={`/productdetails/${_id}`}>
                <ProductCard data={product} />
              </Link>
            ))}

            {/* Pagination */}
            {categoryDetails?.total > 0 && (
              <div className="col-span-2 sm:col-span-4 mt-2 text-center">
                <Pagination
                  defaultCurrent={1}
                  total={categoryDetails?.total}
                  showSizeChanger={false}
                  hideOnSinglePage
                />
              </div>
            )}
          </div>
        </Spin>
      </div>
    </div>
  );
};

export default CategoryView;
