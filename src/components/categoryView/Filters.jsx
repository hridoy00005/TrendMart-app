import { Checkbox, Slider, Space } from "antd";
import { useState } from "react";

export const Filters = ({ subcategories = [], refetch }) => {
  const [minPrice, setMinprice] = useState(100);
  const [maxPrice, setMaxprice] = useState(10000);
  const [selectedSubId, setSelectedSubId] = useState([]);

  const handleChange = ([minPrice,maxPrice]) => {
    setMinprice(minPrice);
    setMaxprice(maxPrice);
    refetch({minPrice,maxPrice, subcategory: selectedSubId})
  };

  const handleSelectSubcategory = (value) => {
    refetch({ subcategory: value });
    setSelectedSubId(value);
  };
  return (
    <div className="col-span-12 sm:col-span-2 sticky top-28 bg-gray-100 px-4 py-4 rounded-lg max-h-[70vh] border-2 overflow-y-auto">
      {/* Filtering Price */}
      <div className="mb-8">
        <p className="font-medium">Price Range</p>
        <div className="flex justify-between text-sm">
          <p className="font-thin">100</p>
          <p className="font-thin">10000</p>
        </div>
        <Slider
          min={100}
          max={10000}
          range
          step={100}
          defaultValue={[minPrice, maxPrice]}
          onChangeComplete={handleChange}
        />
      </div>
      <div className="font-semibold rounded-lg mb-5">
        <h4 className="font-medium mb-2">Subcateogries</h4>
        <Checkbox.Group
          value={selectedSubId}
          onChange={handleSelectSubcategory}
        >
          <Space direction="vertical">
            {subcategories?.map(({ _id, title }) => (
              <Checkbox key={_id} value={_id} className="font-light">
                {title}
              </Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </div>
    </div>
  );
};
