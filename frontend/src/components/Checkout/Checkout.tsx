import { useState } from "react";
import { useStripe } from '@stripe/react-stripe-js';
import CartModal from "../CartModal/CartModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
//import Payment from "../Payment/Payment";
import { Order, CustomerDetails, CardDetails, OrderDetails } from "../../types/checkout.types"; 

interface CheckoutProps {
  //cart: 
}

const Checkout: React.FC<CheckoutProps>  = ({ cart }) => {
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false); 
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const stripe = useStripe();

  //kolla e
  const handlePayment = (e) => {
    e.preventDefault();
    
    const customerDetails: CustomerDetails = {
      firstName: e.target["first-name"].value,
      lastName: e.target["last-name"].value, 
      email: e.target["email"].value, 
      phone: e.target["phone"].value, 
      address: {
        street: e.target["street"].value, 
        zipCode: e.target["zip-code"].value, 
        country: e.target["country"].value, 
      }
    }
    
    const cardDetails: CardDetails = {
      number: e.target["card-number"].value,
      expirations: e.target["street"].value,
      cvc: e.target["cvc"].value
    }

    const orderDetails: OrderDetails = {
      //e.cartModal?
    }

    const order: Order = {
      customerDetails, 
      cardDetails, 
      orderDetails
    }

    const handleProcessPayment = async () => {
      console.log("Från handleProcessPayment");
      try {
        const result = await stripe.confirmPayment(/* Confirmation options? */);

        if (result.error) {
          setShowError(true);
          setErrorMessage(result.error.message);
        } else {
          setShowConfirmation(true);
        }
      } catch (error) {
        setShowError(true);
        setErrorMessage("An error occurred during payment confirmation.");
      }
    }

    await handleProcessPayment();

    const handleRetryPayment = () => {
      setShowError(false);
      setShowConfirmation(false);
      setErrorMessage("");
      //kanske e.target.reset(); för att tömma formuläret? Eller setCustomerDetails(null);
    };
  

  return (
    //kolla CartModal, eller annat sätt?
    <div className="container checkOut-div">
      <CartModal />
        <form autoComplete="on" onSubmit={handlePayment}>
          <input type="text" id="first-name" placeholder="Förnamn"></input>
          <input type="text" id="last-name" placeholder="Efternamn"></input>
          <input type="text" id="street" placeholder="Gata"></input>
          <input type="text" id="zip-code" placeholder="Postnummer"></input>
          <input type="text" id="country" placeholder="Land"></input>
          <input type="text" id="email" placeholder="E-post"></input>
          <input type="text" id="phone" placeholder="Telefon"></input>
          <input type="text" id="cardholders-name" placeholder="Kortinnehavare"></input>
          <input type="text" id="card-number" placeholder="Kortnummer"></input>
          <input type="text" id="card-expiration" placeholder="MM/YY (Expiration)"></input>
          <input type="text" id="cvc" placeholder="CVC"></input>
          <button type="submit" id="pay-for-cart" className="appButton">Gå till betalning</button>
        </form>

        {showConfirmation && (
        <ConfirmationModal
          showConfirmation={showConfirmation}
          showError={showError}
          errorMessage={errorMessage}
          handleRetryPayment={handleRetryPayment}
          order={order}
        />
      )}
    </div>
  );
}

export default Checkout