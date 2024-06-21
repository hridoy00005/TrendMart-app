import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export const PaymentForm = ({ createOnOrder }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardNumberElement);
    const { token, error } = await stripe.createToken(cardElement);
    if (!stripe || !elements) {
      return;
    }
    if (error) {
      console.error(error);
    } else {
      createOnOrder(token.id);
      // Make API call to your server to handle payment method
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <div className="text-gray-600 mb-2">Card Number</div>
        <div className="border rounded-md px-5 py-3">
          <CardNumberElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mb-5">
        <div className="mb-4">
          <div className="text-gray-600 mb-2">Expiration Date</div>
          <div className="border rounded-md px-5 py-3">
            <CardExpiryElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="text-gray-600 mb-2">CVC</div>
          <div className="border rounded-md px-5 py-3">
            <CardCvcElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-[#1e1e1e] text-white px-32 py-2 rounded-full"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
    </form>
  );
};
