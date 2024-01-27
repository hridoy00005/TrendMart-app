import React from "react";
import { Link } from "react-router-dom";
import AccountLayout from "../layouts/AccountLayout";
import { Pagination, Rate } from "antd";

const Fabourites = () => {
  return (
    <AccountLayout>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 bg-white border border-black rounded-lg p-2">
            <div className="mx-auto">
              <Link to="/productdetails">
                {/* <img src="/img/default.jpg" alt="item" /> */}
                <img
                  src="/img/t-shirt2.jpg"
                  alt=""
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] hover:border hover:border-black"
                />
                <div className="">
                  <p className="text-[13px] max-w-[220px]">
                    Mens t-shirt black tri-blend crew 3 sizes available
                  </p>
                  <p className="text-red-600">Price: $12</p>
                  <p className="text-sm">
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={3.5} />
                  </p>
                </div>
              </Link>
            </div>

            <div className="mx-auto">
              <Link to="/productdetails">
                <img
                  src="/img/default.jpg"
                  alt="item"
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] hover:border hover:border-black"
                />
                <div className="">
                  <p className="text-[13px] max-w-[220px]">
                    Mens t-shirt black tri-blend crew 3 sizes available
                  </p>
                  <p className="text-red-600">Price: $10,500</p>
                  <p className="text-sm">
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={5} />
                  </p>
                </div>
              </Link>
            </div>

            <div className="mx-auto">
              <Link to="/productdetails">
                <img
                  src="/img/t-shirt3.jpg"
                  alt="item"
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] hover:border hover:border-black"
                />
                <div className="">
                  <p className="text-[13px] max-w-[220px]">
                    Mens t-shirt black tri-blend crew 3 sizes available
                  </p>
                  <p className="text-red-600">Price: $40</p>
                  <p className="text-sm">
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={3} />
                  </p>
                </div>
              </Link>
            </div>

            <div className="mx-auto">
              <Link to="/productdetails">
                <img
                  src="/img/t-shirt4.jpg"
                  alt="item"
                  className="aspect-[9/10] min-w-[180px] max-w-[220px] h-[220px] hover:border hover:border-black"
                />
                <div className="">
                  <p className="text-[13px] max-w-[220px]">
                    Mens t-shirt black tri-blend crew 3 sizes available
                  </p>
                  <p className="text-red-600">Price: $50</p>
                  <p className="text-sm">
                    Rating:{" "}
                    <Rate className="text-sm" allowHalf defaultValue={2.5} />
                  </p>
                </div>
              </Link>
            </div>

            {/* Pagination */}
            <div className="col-span-2 sm:col-span-4 mt-2 text-center">
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

export default Fabourites