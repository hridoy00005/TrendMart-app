import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export const PaymentForm = ({createOnOrder}) => {
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
      <label>
        Card Number
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
      </label>
      <label>
        Expiration Date
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
      </label>
      <label>
        CVC
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
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
