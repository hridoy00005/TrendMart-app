import React, { useEffect, useState } from "react";
import AccountLayout from "../layouts/AccountLayout";
import { Link } from "react-router-dom";
import { Pagination, Select, Spin } from "antd";
import { api } from "../api/apiConfigaration";
import { SingleOrder } from "../components/order/SingleOrder";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [filter, setFilters] = useState({
    status: "",
  });
  const [loader, setLoader] = useState(false)

  const fetchAllOrders = async () => {
    setLoader(true)
    try {
      const res = await api.get("/order", { ...filter });
      setAllOrders(res?.result);
    } catch (error) {
      console.log(error.message);
    }
    setLoader(false)
  };

  const handleFilter = (value) => {
    setFilters({ ...filter, status: value });
  };

  useEffect(() => {
    fetchAllOrders();
  }, [filter]);
  return (
    <AccountLayout>
      <div className="gap-5 bg-white rounded-lg p-2">
        <div className="mx-auto my-3">
          <div className="grid grid-cols-4 gap-x-5 w-full">
            <div className="col-span-5 sm:col-span-1 pr-5 sm:border-r mb-5 sm:mb-0 w-full">
              <div className="w-full">
                <div className="font-thin mb-3">Select Status</div>
                <Select
                  className="w-full"
                  size="middle"
                  value={filter.status}
                  onChange={handleFilter}
                >
                  <Select.Option key="">All</Select.Option>
                  <Select.Option key="Pending">Pending</Select.Option>
                  <Select.Option key="Accepted">Accepted</Select.Option>
                  <Select.Option key="Shipped">Shipped</Select.Option>
                  <Select.Option key="Delivered">Delivered</Select.Option>
                </Select>
              </div>
            </div>
            <div className="col-span-5 sm:col-span-3">
              <Spin spinning={loader}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
                  {allOrders?.map((ord) => (
                    <Link key={ord?._id} to={`/orders/${ord?.orderId}`}>
                      <SingleOrder data={ord} />
                    </Link>
                  ))}
                </div>
              </Spin>

              <div className="w-full mt-2 text-center">
                <Pagination
                  defaultCurrent={1}
                  total={100}
                  showSizeChanger={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccountLayout>
  );
};

export default Orders;
