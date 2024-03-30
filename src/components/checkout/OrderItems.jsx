import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const OrderItems = () => {
  const { cart } = useSelector((state) => state?.cart || []);
  const [totalPrice, setTotalPrice] = useState();
  let price = 0;
  useEffect(()=>{
    
    cart.forEach(({ product, quantity }) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        price +=  ((product?.discountAvailable ? product?.discountPrice : product?.price) * quantity);
    })
    setTotalPrice(price);
  },[])

  return (
    <div className="bg-white border-2 border-gray-300 shadow-sm rounded-lg p-3">
      <h6 className="text-lg font-semibold mb-6">Order Items</h6>
      {cart?.map(({ product, quantity, size }, idx) => (
        <div className="mb-2 border-b-2 pb-2 border-gray-300" key={idx}>
          <div className="flex justify-between">
            <div>
              <p className="text-gray-600 font-bold">{product?.name}</p>
              {product?.product?.sizeAvailable && <p>Size: {size?.name}</p>}
              <p>
                Price: USD{" "}
                {product?.discountAvailable
                  ? product?.discountPrice
                  : product?.price}{" "}
                X {quantity}
              </p>
              <p>Quantity: {quantity}</p>
            </div>
            <img
              src={product?.images[0] || "/assets/logo.png"}
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>
      ))}

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg">Total Price:</div>
          <div className="w-[62%] h-[1px] bg-gray-600"></div>
          <div className="font-bold text-gray-00">USD { totalPrice+80}</div>
        </div>
      </div>
    </div>
  );
};
