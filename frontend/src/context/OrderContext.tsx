import { PropsWithChildren, createContext, useState, useContext } from "react";
import { Order } from "../types/order.types";
//importera andra kontexter?


interface OrderContextProps {
    order: Order,
    orderNumber: number,
    setOrderNumber: (value: number) => void
}

export const OrderContext = createContext<OrderContextProps | undefined>(undefined);

    export const useOrderContext = () => {
        const context:OrderContextProps | undefined = useContext(OrderContext);
        if(!context){
            throw new Error("Unable to load context!")
        }
        return context
    }


function OrderProvider({ children }: PropsWithChildren) {

    const [order, setOrder] = useState<Order>({
        //items: orderItem,
      })

    
      const [orderNumber, setOrderNumber] = useState(0);

    return (
        <OrderContext.Provider value={{
            order,
            orderNumber, 
            setOrderNumber,
        }}>
            {children}
        </OrderContext.Provider>
    );
}

export default OrderProvider;


const [showConfirmation, setShowConfirmation] = useState<boolean>(false); 
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  

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

    // const orderDetails: OrderDetails = {
    //   //e.cartModal?
    // }

    // const order: Order = {
    //   customerDetails, 
    //   cardDetails, 
    //   orderDetails
    // }

    // const handleProcessPayment = async () => {
    //   console.log("Från handleProcessPayment");
    //   try {
    //     const result = await stripe.confirmPayment(/* Confirmation options? */);

    //     if (result.error) {
    //       setShowError(true);
    //       setErrorMessage(result.error.message);
    //     } else {
    //       setShowConfirmation(true);
    //     }
    //   } catch (error) {
    //     setShowError(true);
    //     setErrorMessage("An error occurred during payment confirmation.");
    //   }
    // }

    // await handleProcessPayment();

    // const handleRetryPayment = () => {
    //   setShowError(false);
    //   setShowConfirmation(false);
    //   setErrorMessage("");
    //   //kanske e.target.reset(); för att tömma formuläret? Eller setCustomerDetails(null);
    // };
  
