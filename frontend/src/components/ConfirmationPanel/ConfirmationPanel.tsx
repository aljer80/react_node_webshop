import Success from "../SuccessPanel/SuccessPanel";
import Error from "../ErrorPanel/Error";
import { useCartContext } from "../../contexts/CartContext";
import { useCheckoutContext } from "../../contexts/CheckoutContext";
import { useOrderContext } from "../../contexts/OrderContext";
import { useProductContext } from "../../contexts/ProductContext";


const ConfirmationPanel: React.FC = () => {
  const { isPaymentSuccessful, paymentResponse } = useCheckoutContext();
  const { cart } = useCartContext();

  const isSuccess = isPaymentSuccessful;
  const response = paymentResponse;

  return (
    <div className="container" id="confirmationPanel-div">
      {isSuccess ? <Success data={response} /> : <Error data={response} />}
    </div>
  );
};

// const ConfirmationPanel: React.FC = () => {
//   //Definiera data i 
//   const isSuccess: boolean = data["isSucces"] //varifrån kommer data? hur får jag den dit?
//   const response: any = data["data"]

//   return (
//     <div className="container" id="confirmationPanel-div">
//         {isSuccess ? <Success data={ response } /> : <Error data={response} />}
//     </div>
//   )
// }


export default ConfirmationPanel