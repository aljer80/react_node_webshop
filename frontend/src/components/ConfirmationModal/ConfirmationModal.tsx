import { useState, useEffect } from "react";

const ConfirmationModal = () => {

  const [isPaymentVerified, setIsPaymentVerified]= useState(false)

  const verifyPayment = async () => {
    try {
      // const response = await fetch()...
      const { verified } = await response.json();  //kollar vad det blir för svar

      if(verified) {
        setIsPaymentVerified(true);
        localStorage.removeItem("session-id");
        } else {
            setIsPaymentVerified(false);
        }
    } catch (error) {
      console.log(error);
    }

    useEffect(() => {
      verifyPayment();
    }, []);

  }
  return isPaymentVerified ? (
    <div className="payment_verified">
      <h1>Tack för ditt köp!</h1>
      <p>Betalning genomfördes för: {customerDetails.firstName} {customerDetails.lastName}<br/>
        En orderbekräftelse har skickats till din E-post. </p>
    </div>
    ) : (
      <div className="payment_verified">
          <h1>Ditt köp blev inte slutfört, <br/> Var god försök igen!</h1> <br/>
          <h3>Kontakta vår support om problemet kvarstår.</h3> <br />
          <h3> Kundtjänstens öppettider är: mån-fre: 9-20 | lör-sön: 10-18 </h3>
          <h3>Telefon: 0771-42 42 42 <br/>
          E-post:<a href="mailto:alexandra.jernberg@medieinstitutet.se">kundtjanst@padelmania.se</a></h3><br/>            
      </div>
    );
}

export default ConfirmationModal