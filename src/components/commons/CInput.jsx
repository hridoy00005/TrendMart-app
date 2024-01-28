import { Input } from "antd";
import React from "react";

const CInput = ({
  label,
  className = "",
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="py-3">
      <h2 className="font-semibold">{label}</h2>
      <Input
        size="large"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CInput;
