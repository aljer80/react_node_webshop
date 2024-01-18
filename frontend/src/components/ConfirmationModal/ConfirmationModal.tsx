import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const ConfirmationModal = ({ customerDetails, order }) => {

  const [isPaymentVerified, setIsPaymentVerified]= useState(false)
  const history = useHistory();

  const verifyPayment = async () => {
    try {
      const response = await fetch(/* mitt fetch-anrop */)
      const { verified } = await response.json();  //kollar vad det blir för svar

      if(verified) {
        setIsPaymentVerified(true);
        localStorage.removeItem("session-id");
        // createOrder();
        } else {
            setIsPaymentVerified(false);
        }
    } catch (error) {
      console.log(error);
    }
  }  

    useEffect(() => {
      verifyPayment();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        localStorage.clear();
        history.push("/");
      }, 10000);

      return () => clearTimeout(timeoutId);
    }, [isPaymentVerified, history]);

    const handleSuccessfulRequestTimed = () => {
      console.log("Clicked on Ok");
    }

    const handleRetryRequest = () => {
      //skicka en ny betalning
    }

  return isPaymentVerified ? (
    <div className="payment_verified">
      <h1>Tack för ditt köp!</h1>
      <p>Betalning genomfördes för: {customerDetails.firstName} {customerDetails.lastName}<br/>
        En orderbekräftelse har skickats till din E-post. </p>
      <button onClick={handleSuccessfulRequestTimed}>Ok</button>
    </div>
    ) : (
      <div className="payment_verified">
          <h1>Ditt köp blev inte slutfört, <br/> Var god försök igen!</h1> <br/>
          <h3>Kontakta vår support om problemet kvarstår.</h3> <br />
          <h3> Kundtjänstens öppettider är: mån-fre: 9-20 | lör-sön: 10-18 </h3>
          <h3>Telefon: 0771-42 42 42 <br/>
          E-post:<a href="mailto:alexandra.jernberg@medieinstitutet.se">kundtjanst@padelracket.se</a></h3><br/>            
          <button onClick={handleRetryRequest}>Försök igen</button>
      </div>
    );
}

export default ConfirmationModal

{/* <div>
          <section>
            <h2>Orderöversikt</h2>
            <p><strong>Kund: </strong> {customerDetails}</p>
            <p><strong>Beställning:</strong> {orderDetails}</p>
          </section>
          <button onClick={processPayment}>Betala</button>
        </div> */}