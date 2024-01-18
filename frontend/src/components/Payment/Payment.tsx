import { CustomerDetails, CardDetails } from "../../types/checkout.types"
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";


const Payment = ({ customerDetails, cardDetails, orderDetails, order, onPaymentComplete }) => {
//hantera betalning
//implementera betalningslogik och välja payment service (Stripe)
  const processPayment = async () => {
    
    try {
      
      console.log("Orderuppgifter i Payment:", customerDetails, cardDetails, orderDetails);
      
      const response = await sendPaymentRequest(order);
        if(response) {
          createOrder(order){
        }

    } catch (error) {
      //hantera fel
      console.error(error);
    }
  }

    return (
        <div>
          < ConfirmationModal />
        </div>
      );
}

export default Payment

// const processPayment = async () => {
//   //initiera betalningsprocessen
//   try {
//     // Gör något med orderuppgifterna här
//     console.log("Orderuppgifter i Payment:", customerDetails, cardDetails, orderDetails);
//     //anropa payment service
//     const paymentResponse = await stripeService.processPayment(customerDetails, cardDetails, order);

//     const { url, sessionId } = await paymentResponse.json();
//     localStorage.setItem("session-id", sessionId);
//     window.location = url;

//     // När betalningen är genomförd, anropa onPaymentComplete
//     onPaymentComplete();
//   } catch (error) {
//     //hantera fel
//     console.error('Payment error:', error);
//   }
// }