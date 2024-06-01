import React from "react";

const Title = ({ text, image }) => {
  return (
    <div className="flex border-b border-gray-400 pb-2 mb-4">
      <img src={image} className="w-8 h-8 mr-2 rounded-lg" /><span className=" text-2xl">{text}</span>
    </div>
  );
};

export default Title;
