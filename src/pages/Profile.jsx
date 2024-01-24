import React, { useState } from "react";
import { Link } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import { InputNumber, Pagination, Rate, Slider } from "antd";

const Profile = () => {
  const [minPrice, setMinprice] = useState(1);
  const [maxPrice, setMaxprice] = useState(1000);

  const handleChange = (price) => {
    setMinprice(price[0]);
    setMaxprice(price[1]);
  };
  return (
    <PublicLayout>
      <div className=" min-h-screen grid grid-cols-12">
        {/* <div className="col-span-12 sm:col-span-2 mr-2"> */}
        {/* <h2 className="text-lg font-bold border-b border-black">Filter</h2> */}
        {/* Price Filtering */}
        {/* <div className="my-2">
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
        </div> */}
        {/* </div> */}

        <div className="col-span-12  ">
          {/* Products Categories */}
          <div className="flex flex-wrap justify-around items-end border py-3 bg-slate-300 border-blue-950 text-black text-base sm:text-lg font-semibold rounded-lg mb-3">
            <Link to={"/orders"} className="bg-slate-30 hover:bg-blue-900 text-center py-1 px-3 rounded-lg hover:text-white">
              <h2>Orders</h2>
            </Link>
            <Link to={"/fabourites"} className="bg-slate-30 hover:bg-blue-900 text-center py-1 px-3 rounded-lg hover:text-white">
              <h2>Fabourites</h2>
            </Link>
            <Link to={"/address"} className="bg-slate-30 hover:bg-blue-900 text-center py-1 px-3 rounded-lg hover:text-white">
              <h2>Address</h2>
            </Link>
            <Link to={"/accounts"} className="bg-slate-30 hover:bg-blue-900 text-center py-1 px-3 rounded-lg hover:text-white">
              <h2>Account</h2>
            </Link>
          </div>

          {/* Products section */}
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
        </div>
      </div>
    </PublicLayout>
  );
};

export default Profile;
