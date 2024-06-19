import React, { useEffect, useState } from "react";
import AccountLayout from "../layouts/AccountLayout";
import { Link } from "react-router-dom";
import { Pagination, Rate } from "antd";
import { api } from "../api/apiConfigaration";
import { ProductCard } from "../components/commons";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const fetchAllOrders = async () => {
    try {
      const res = await api.get("/order");
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);
  return (
    <AccountLayout>
      <div className="gap-5 bg-white rounded-lg p-2">
        <div className="mx-auto my-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
            <Link to="/productdetails">
              <ProductCard data={{}} />
            </Link>
          </div>
        </div>

        {/* Pagination */}
        <div className="col-span-12  mt-2 text-center">
          <Pagination defaultCurrent={1} total={100} showSizeChanger={false} />
        </div>
      </div>
    </AccountLayout>
  );
};

export default Orders;
