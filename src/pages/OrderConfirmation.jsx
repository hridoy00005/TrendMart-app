import { Result } from "antd";
import PublicLayout from "../layouts/PublicLayout";
import { Link } from "react-router-dom";

export const OrderConfirmation = () => {
  return (
    <PublicLayout>
      <div className="mb-14">
        <Result
          icon={<i className="fa-regular fa-face-smile text-4xl"></i>}
          title="Thanks for shopping with us"
        />
        <div className="text-center">
            <Link to="/" className="underline text-[#556]">Go home</Link>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl mb-4">Order to delivery:</p>
        <div>
          <p className="mb-2">
            <b>John Kingdom</b>
          </p>
          <p>Habun Bepari, Aqua.</p>
          <p>Mymensingh 2200, Bangladesh</p>
          <p>01718781953</p>
        </div>
      </div>
    </PublicLayout>
  );
};
