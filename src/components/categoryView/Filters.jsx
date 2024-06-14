import { Checkbox, InputNumber, Slider, Space } from "antd";
import { useEffect, useState } from "react";

export const Filters = ({ subcategories = [] }) => {
  const [minPrice, setMinprice] = useState(1);
  const [maxPrice, setMaxprice] = useState(1000);
  const [selectedSubId, setSelectedSubId] = useState([]);

  const handleChange = (price) => {
    setMinprice(price[0]);
    setMaxprice(price[1]);
  };

  useEffect(() => {
    setSelectedSubId([subcategories[0]?._id]);
  }, [subcategories]);
  return (
    <div className="col-span-12 sm:col-span-2 sticky top-28 bg-gray-100 px-4 py-4 rounded-lg max-h-[70vh] border-2 overflow-y-auto">
      {/* Filtering Price */}
      <div className="mb-8">
        <p className="font-medium">Price Range</p>
        <div className="flex justify-between text-sm">
          <p className="font-thin">Min</p>
          <p className="font-thin">Max</p>
        </div>
        <Slider
          min={1}
          max={1000}
          range={{
            draggableTrack: true,
          }}
          defaultValue={[1, 1000]}
          onChange={handleChange}
        />
        <div className="flex justify-between">
          <InputNumber
            min={1}
            max={1000}
            style={{
              width: "60px",
            }}
            value={minPrice}
            onChange={handleChange}
          />
          <InputNumber
            min={1}
            max={1000}
            style={{
              width: "60px",
            }}
            value={maxPrice}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="font-semibold rounded-lg mb-5">
        <h4 className="font-medium mb-2">Subcateogries</h4>
        <Checkbox.Group
          value={selectedSubId}
          onChange={(value) => setSelectedSubId(value)}
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
