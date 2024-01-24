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
      <label className="font-semibold">{label}</label>
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
