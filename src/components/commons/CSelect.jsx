import { Select } from "antd";
import React from 'react'

const CSelect = ({
    label,
    className = "w-full",
    size = "large",
    placeholder,
    options = [],
    onChange,
    disabled=false,
    value,
    showSearch
  }) => {
  return (
    <div className="grid grid-cols-1">
      <h2 className="font-semibold">{label}</h2>
      <Select
        onChange={onChange}
        value={value}
        disabled={disabled}
        className={className}
        size={size}
        showSearch={showSearch}
        placeholder={placeholder}
      >
        {options.map((opt) => (
          <Select.Option key={opt}>{opt}</Select.Option>
        ))}
      </Select>
      {/* {console.log(selectType, state.selectType)} */}
    </div>
  )
}

export default CSelect