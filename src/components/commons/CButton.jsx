import { Button } from "antd";
import React from "react";

const CButton = ({
  danger=false,
  className="mt-2 text-center",
  type = "primary",
  size = "large",
  name,
  value,
  onClick,
  disabled=false
}) => {
  return (
    <div className={className}>
      <Button
      className="bg-sky-400"
      danger={danger}
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
