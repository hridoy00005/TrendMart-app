import React from "react";
import AccountLayout from "../layouts/AccountLayout";
import { Link } from "react-router-dom";
import { Pagination, Rate } from "antd";

const Orders = () => {
  return (
    <AccountLayout>
      <div className="gap-5 bg-white border rounded-lg p-2">
            <div className="mx-auto my-3">
              <Link to="/productdetails" className="flex">
                {/* <img src="/img/default.jpg" alt="item" /> */}
                <img
                  src="/img/t-shirt2.jpg"
                  alt=""
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] hover:border hover:border-black"
                />
                <div className="ml-2">
                  <p className="text-[13px] max-w-[220px] font-semibold">
                    Mens t-shirt black tri-blend crew 3 sizes available
                  </p>
                  <div className="text-sm">
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={3.5} />
                  </div>
                  <p className="text-red-600">Price: $12</p>
                </div>
              </Link>
            </div>

            <div className="mx-auto col-span-6 mb-3">
              <Link to="/productdetails" className="flex">
                <img
                  src="/img/t-shirt3.jpg"
                  alt="item"
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] hover:border hover:border-black"
                />
                <div className="ml-2">
                  <p className="text-[13px] max-w-[220px] font-semibold">
                    Mens t-shirt black tri-blend crew 3 sizes available
                  </p>
                  <div className="text-sm">
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={4.0} />
                  </div>
                  <p className="text-red-600">Price: $40</p>
                </div>
              </Link>
            </div>

            <div className="mx-auto col-span-6">
              <Link to="/productdetails" className="flex">
                <img
                  src="/img/t-shirt4.jpg"
                  alt="item"
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] hover:border hover:border-black"
                />
                <div className="ml-2">
                  <p className="text-[13px] max-w-[220px] font-semibold">
                    Mens t-shirt black tri-blend crew 3 sizes available
                  </p>
                  <div className="text-sm">
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={3.5} />
                  </div>
                  <p className="text-red-600">Price: $50</p>
                </div>
              </Link>
            </div>

            {/* Pagination */}
            <div className="col-span-12  mt-2 text-center">
              <Pagination
                defaultCurrent={1}
                total={100}
                showSizeChanger={false}
              />
            </div>
          </div>
    </AccountLayout>
  )
}

export default Orders