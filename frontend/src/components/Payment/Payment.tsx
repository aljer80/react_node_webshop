import { CustomerDetails, CardDetails } from "../../types/checkout.types"


const Payment = ({ customerDetails, cardDetails, orderDetails, order, onPaymentComplete }) => {
//hantera betalning
//implementera betalningslogik och välja payment service (Stripe)
  const processPayment = async () => {
    //initiera betalningsprocessen
    try {
      // Gör något med orderuppgifterna här
      console.log("Orderuppgifter i Payment:", customerDetails, cardDetails, orderDetails);
      //anropa payment service
      const paymentResponse = await stripeService.processPayment(customerDetails, cardDetails, order);

      const { url, sessionId } = await paymentResponse.json();
      localStorage.setItem("session-id", sessionId);
      window.location = url;

      // När betalningen är genomförd, anropa onPaymentComplete
      onPaymentComplete();
    } catch (error) {
      //hantera fel
      console.error('Payment error:', error);
    }
  }
    return (
        <div>
          <section>
            <h2>Orderöversikt</h2>
            <p><strong>Kund: </strong> {customerDetails}</p>
            <p><strong>Beställning:</strong> {orderDetails}</p>
          </section>
          <button onClick={processPayment}>Betala</button>
        </div>
      );
      //Ev lägga till en tillbaka knapp ifall man behöver gå tillbaka och ändra i formuläret
}

export default Payment