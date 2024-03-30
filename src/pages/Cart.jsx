import { useSelector } from "react-redux";
import { CartContainer } from "../components/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state?.cart || []);
  const { isAuthenticate } = useSelector((state) => state?.auth || []);

  return (
    <div className="">
      {cart?.length > 0 ? (
        <div>
          <div className="border-gray-300 p-5 rounded-lg bg-white">
            <CartContainer />
            <div className="text-center mt-10">
              <Link to={isAuthenticate ? "/checkout" : "/login"}>
                <span className="btn-class px-16 cursor-pointer">Checkout</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">You have no cart items</div>
      )}
    </div>
  );
};

export default Cart;
