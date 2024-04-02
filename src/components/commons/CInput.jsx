import { Input } from "antd";
import React from "react";

const CInput = ({
  label,
  className = "",
  type = "text",
  placeholder,
  name,
  value,
  disabled=false,
  onChange,
  isTextArea = false,
}) => {
  return (
    <div className="py-3">
      <h2 className="font-semibold">{label}</h2>
      {isTextArea ? (
        <Input.TextArea
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          value={value}
          rows={4}
          onChange={onChange}
        />
      ) : (
        <Input
          size="large"
          type={type}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default CInput;
