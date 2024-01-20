import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ConfirmationModalProps {
  showConfirmation: boolean;
  showError: boolean;
  errorMessage: string;
  handleRetryPayment: () => void;
  order: Order;
}

//Container för Error och Success

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ 
  showConfirmation,
  showError,
  errorMessage,
  handleRetryPayment,
  order,
}) => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     localStorage.clear();
  //     navigate("/");
  //   }, 5000);
  //   return () => clearTimeout(timeoutId);
  // }, [showConfirmation, navigate]);

  const handleSuccessfulRequestTimed = () => {
    localStorage.clear();
    navigate("/");
  }
  
  const handleRetryRequest = () => {
    handleRetryPayment();
  };

  return (
    <div className="confirmation-modal">
      {showConfirmation && (
        <div className="payment-success">
          <h1>Tack för ditt köp!</h1>
          <p>
            Betalning genomfördes för: {customerDetails.firstName} {customerDetails.lastName}
            <br />En orderbekräftelse har skickats till din E-post.
          </p>
          <button onClick={handleSuccessfulRequestTimed}>Ok</button>
        </div>
      )}
      {showError && (
        <div className="error-message">
          <p>{errorMessage}</p>
          <button onClick={handleRetryRequest}>Försök igen</button>
        </div>
      )}
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

{/* <div className="payment-success">
      <h1>Tack för ditt köp!</h1>
      <p>Betalning genomfördes för: {customerDetails.firstName} {customerDetails.lastName}<br/>
        En orderbekräftelse har skickats till din E-post. </p>
      <button onClick={handleSuccessfulRequestTimed}>Ok</button>
    </div>
    ) : (
      <div className="payment-error">
          <h1>Ditt köp blev inte slutfört, <br/> Var god försök igen!</h1> <br/>
          <h3>Kontakta vår support om problemet kvarstår.</h3> <br />
          <h3> Kundtjänstens öppettider är: mån-fre: 9-18 | lör-sön: 10-14 </h3>
          <h3>Telefon: 0771-42 42 42 <br/>
          E-post:<a href="mailto:alexandra.jernberg@medieinstitutet.se">kundtjanst@padelracket.se</a></h3><br/>            
          <button onClick={handleRetryRequest}>Försök igen</button>
      </div> */}