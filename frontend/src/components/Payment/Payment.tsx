import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CustomerDetails, CardDetails } from "../../types/checkout.types"
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";


const Payment = ({ customerDetails, cardDetails, orderDetails, order, onPaymentSuccess, onPaymentError }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentConfirmation = async () => {
    if (!stripe || !elements) {
      onPaymentError('Stripe.js has not yet loaded.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      onPaymentError(error.message);
    } else {
      // Send the payment method and other order details to your server
      // for server-side payment processing using the order object
      const result = await fetch('/your-server-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentMethod: paymentMethod.id,
          order,
        }),
      }).then((response) => response.json());

      if (result.error) {
        onPaymentError(result.error);
      } else {
        onPaymentSuccess();
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handlePaymentConfirmation();
  };

  return (
    <div className="container payment-div"></div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit">BETALA</button>
      </form>
  );
};
//     return (
//         <div>
//           < ConfirmationModal />
//         </div>
//       );
// }

export default Payment


// const ConfirmationModal = ({ customerDetails, order, showSuccess, showError, successMessage, errorMessage  }) => {}
// try {
      
//   const { paymentIntent, error } = await stripe.confirmPayment();

//   if(error) {
//     if (error.type === "card_error" || error.type === "validation_error") {
//       onError(error.message);
//     } else if (error.type === "invalid_request_error") {
//       onError("Invalid request or 3DS authentication failure");
//     } else {
//       onError("An unknown error occurred");
//     }
//   } else {
//     //succesful payment
//     console.log("Orderuppgifter i Payment:", customerDetails, cardDetails, orderDetails);
//     createOrder(order);
//     localStorage.removeItem("cart");
//   }
// } catch (error) {
//   console.log(error);
// }