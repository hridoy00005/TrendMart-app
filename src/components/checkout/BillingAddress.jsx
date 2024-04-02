import { Checkbox } from "antd";
import { CInput, CSelect } from "../commons";
import districts from "../../utils/geo_bd/districts.json";
import upazila from "../../utils/geo_bd/upazila.json";
import { useState } from "react";

export const BillingAddress = ({
  shippingAddress,
  allAddress = [],
  billingAddress,
  setBillingAddress,
}) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };
  const [sameChecked, setSameChecked] = useState(false);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);

  const selectDistrict = (districtName) => {
    setBillingAddress({ ...billingAddress, district: districtName });
    const { id } = districts.find((ds) => ds.name === districtName);
    const filteredUpazilas = upazila.filter((up) => up.district_id === id);
    setFilteredUpazilas([...filteredUpazilas.map((upz) => upz.name)]);
  };

  //need to implement ui for checkbox for ask to user is it same as shipping
  const onSameAsShipping = (e) => {
    setSameChecked(e.target.checked);
    const findSelectShipping = allAddress?.find(
      (ad) => ad?._id === shippingAddress
    );
    setBillingAddress({ ...findSelectShipping });
  };

  return (
    <div>
      <Checkbox onChange={onSameAsShipping} checked={sameChecked}>
        Same as shipping
      </Checkbox>
      <div className="grid grid-cols-2 gap-x-5">
        <CInput
          size="large"
          label="Name"
          disabled={sameChecked}
          placeholder="Name"
          value={billingAddress?.name}
          name="name"
          onChange={handleInput}
        />
        <CInput
          label="Phone"
          size="large"
          disabled={sameChecked}
          placeholder="Phone number"
          name="phone"
          value={billingAddress?.phone}
          onChange={handleInput}
        />
        <CSelect
          label="District"
          showSearch
          disabled={sameChecked}
          placeholder="Select District"
          options={districts.map((dst) => dst.name)}
          onChange={selectDistrict}
          value={billingAddress.district}
        />
        <CSelect
          label="Upazila"
          showSearch
          disabled={sameChecked}
          placeholder="Select Upazila"
          options={filteredUpazilas}
          onChange={(upazila) => {
            setBillingAddress({ ...billingAddress, upazila: upazila });
          }}
          value={billingAddress.upazila}
        />
        <CInput
          label="Address"
          isTextArea
          disabled={sameChecked}
          placeholder="Address"
          name="address"
          value={billingAddress?.address}
          onChange={handleInput}
        />
      </div>
    </div>
  );
};
