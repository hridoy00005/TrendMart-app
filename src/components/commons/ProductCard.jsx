import { Rate } from "antd";

export const ProductCard = ({ data = {} }) => {
  return (
    <div className="p-4 relative border z-40 border-[lightgray] rounded-md hover:scale-[103%] transition duration-[0.4s] cursor-pointer hover:shadow-lg hover:text-black">
      <div className="relative">
        {data?.discountAvailable && (
          <p className="absolute z-40 right-[5px] bg-gray-900 bg-opacity-30 rounded-lg mt-1 px-[2px] text-sm font-semibold text-yellow-300">
            -{Math.ceil(100 - data?.discountPrice / (data?.price / 100))}%
          </p>
        )}
        <img
          src={data?.images[0]}
          alt=""
          className="aspect-[9/10] min-h-[100px] w-full"
        />
      </div>

      <div className="">
        <h3 className="font-semibold w-[210px] overflow-hidden text-ellipsis whitespace-nowrap">{data?.name}</h3>
        {/* <h3
          className="text-[12px]"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></h3> */}
        <div>
          {data?.discountAvailable ? ( //Here is a problem with discount true or false
            <h3 className="text-red-600 text-sm">
              Price: ৳{data?.discountPrice}{" "}
              <del className="text-xs text-gray-500">৳{data?.price}</del>
            </h3>
          ) : (
            <h3 className="text-red-600 text-sm">Price: ৳{data?.price}</h3>
          )}
        </div>
        <Rate
          className="text-xs"
          allowHalf
          defaultValue={Math.random() * 5 + 1}
        />
      </div>
    </div>
  );
};
