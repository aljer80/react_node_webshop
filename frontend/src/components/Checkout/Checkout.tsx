import CartModal from "../CartModal/CartModal";
import Payment from "../Payment/Payment";
import { Order, CustomerDetails, CardDetails, OrderDetails } from "../../types/checkout.types"; 

const Checkout = ({ cart }) => {
  //kolla e
  const handlePayment = (e) => {
    e.preventDefault();
    
    const customerDetails = {
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
    
    const cardDetails = {
      number: e.target["card-number"].value,
      expirations: e.target["street"].value,
      cvc: e.target["cvc"].value
    }

    const orderDetails = {
      //e.cartModal?
    }

    const order = {
      customerDetails, 
      //cardDetails, 
      orderDetails
    }
    
    // Fortsätt med beställningen eller skicka den till en annan komponent för hantering
    handleProcessPayment(order);
   
    //kolla alla const
    //navigera till payment för hantering av själva betalningen, bädda in order som prop
  };

  const handleProcessPayment = (order) => {
    console.log("Från handlePaymentComplete");
    //det som ska hända när betalningen är genomförd, navigera till Confirmation
  }

    return (
      //kolla CartModal, eller annat sätt?
        <div>
          < CartModal />
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
        </div>
      );
}

export default Checkout