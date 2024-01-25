import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { PaymentMethodResult, PaymentIntentResult } from "@stripe/stripe-js";
import { sendPaymentRequest } from '../../utilities/ApiUtilities';
import { PaymentData } from '../../types/checkout.types';


const Checkout: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment= async (e: React.FormEvent) => {
    e.preventDefault();
    const body = e.target;

    if(!stripe || !elements) {
      throw new Error("Missing dependency")
    }
    const {paymentMethod}:PaymentMethodResult = await stripe.createPaymentMethod({
      type: "card", 
      card: elements.getElement(CardElement) as any
    });
    
    const data: PaymentData = {
      paymentMethodId: paymentMethod.id,
      currency: body.currency,
      amount: body.amount
    }

    const paymentIntent: PaymentIntentResult = await sendPaymentRequest(data);
  }
  //visa success eller error
  
  return (
      <form onSubmit={handlePayment}> 
        <CardElement />
        <button type="submit" id="pay-for-cart" className="appButton">Gå till betalning</button>
      </form>
  );
}

export default Checkout