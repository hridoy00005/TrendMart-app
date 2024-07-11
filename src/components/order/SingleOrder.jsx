import { Tag } from "antd";

export const SingleOrder = ({ data }) => {
  return (
    <div className="p-4 border border-[lightgray] rounded-lg hover:scale-[103%] transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black">
      <div className="relative mb-3">
        {/* {data?.discountAvailable && (
          <p className="absolute z-40 right-[5px] bg-gray-900 bg-opacity-30 rounded-lg mt-1 px-[2px] text-sm font-semibold text-yellow-300">
            -{Math.ceil(100 - data?.discountPrice / (data?.price / 100))}%
          </p>
        )} */}
        <img
          src={data?.items[0]?.images?.[0]}
          alt=""
          className="aspect-[9/10] min-h-[100px] w-full"
        />
      </div>

      <div className="">
          <Tag className="mb-3" color={getStatusColor(data?.status)}>{data?.status}</Tag>
          <div className="text-sm text-gray-500 flex justify-between">
            <span>Qtc : {data?.items?.length}</span>
            <span>Price: {data?.totalPrice}</span>
          </div>
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "warning";
    case "Accepted":
      return "success";
    case "Shipped":
      return "primary";
    default:
      break;
  }
};
