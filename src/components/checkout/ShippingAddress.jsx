import React from "react";
import { Link } from "react-router-dom";

export const ShippingAddress = () => {
  return (
    <React.Fragment>
      <div
        // v-if="!loading && allAddress?.result?.length === 0"
        className="text-center"
      >
        <Link
          to="/account"
          className="py-2 px-2 bg-theme-color text-white rounded-lg"
        >
          + Add Address
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-x-5">
        {/* <a-radio-group v-model="selectAddress" @change="handleChooseAddress">
            <a-radio v-for="address of allAddress.result" :value="address?._id" className="mb-5">
                <div className="px-5">
                    <p className="font-semibold text-lg">{{ address?.firstName + " " + address?.lastName }}</p>
                    <p className="text-base">{{ address?.apertment }} , {{ address?.address }}</p>
                    <p className="text-base">{{ address?.city }}, {{ address?.state }}-{{ address?.zipCode }} , {{
                        address?.country }}</p>
                    <p className="text-base"> <i className="fa-solid fa-phone text-sm mr-2"></i>{{ address?.phone }}</p>
                </div>
            </a-radio>
        </a-radio-group> */}
      </div>
    </React.Fragment>
  );
};
