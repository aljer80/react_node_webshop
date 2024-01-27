import { useEffect } from "react";
import { useCheckoutContext } from "../../contexts/CheckoutContext";

const Success: React.FC= () => {

  const {
    paymentResponse,
    handleConfirmationButtonClick
  } = useCheckoutContext();

  
  useEffect(() => {
    const navigate = useNavigate();
    setInterval(() => {
        navigate("/")
    }, 20 * 1000)
  },[]);


    return (
      <div id="successMessage">
        { paymentResponse }
        <button type="button" id="confirmation-button" className="appButton" title="confirmation" onClick={handleConfirmationButtonClick}>Ok</button>
      </div>
      );
}

export default Success