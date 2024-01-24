import { Button } from "antd";
import React from "react";

const CButton = ({
  className = "primary",
  type,
  size = "large",
  name,
  value,
  onClick,
  disabled=false
}) => {
  return (
    <div className="mt-2 text-center">
      <Button
        className={className}
        size={size}
        type={type}
        name={name}
        value={value}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </Button>
    </div>
  );
};

export default CButton;
