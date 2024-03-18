import React from "react";

const Quantity = ({
  quantity = {},
  setQuantity
}) => {
  //Quantity Changing
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrease = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const disabledMinus = quantity <= 1;

  return (
    <div className="flex mb-3">
      <h2 className="mr-2 my-auto">Quantity: </h2>
      <button
        className={`${
          disabledMinus
            ? "text-xs py-1 text-gray-300 border rounded-lg px-3"
            : "text-xs py-1 hover:font-bold border rounded-lg px-3 hover:border-sky-500"
        }`}
        onClick={handleDecrease}
        disabled={disabledMinus}
      >
        <i className="fas fa-minus"></i>
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        className="w-[60px] border rounded-lg outline-none text-center py-1"
      />
      <button
        className="text-xs py-1 hover:font-bold border rounded-lg px-3 hover:border-sky-500"
        onClick={handleIncrease}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default Quantity;
