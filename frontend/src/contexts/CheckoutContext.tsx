import { useNavigate } from "react-router-dom"
import { PaymentIntentResult } from "@stripe/stripe-js"
import { createContext, useContext, useState, useEffect, ReactNode, Dispatch } from "react"

/**
 * Interface defining the shape of the checkout context.
 */
export interface CheckoutContextProps{
    isPaymentSuccessful: boolean
    setIsPaymentSuccessful: Dispatch<boolean>
    paymentResponse: PaymentIntentResult
    setPaymentResponse: Dispatch<PaymentIntentResult>
    customerDetailsFormData: object
    isCheckoutModalOpen: boolean
    handleCustomerDetailsInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCheckoutButtonClick: () => void
    startNavigationTimer: () => void
}

/**
 * Context for managing checkout-related state and actions.
 */
export const CheckoutContext = createContext<CheckoutContextProps | undefined>(undefined);

/**
 * Custom hook to access the checkout context.
 * @returns {CheckoutContextProps} The checkout context.
 */
export const useCheckoutContext = (): CheckoutContextProps => {
    const context = useContext(CheckoutContext);
    if(!context){
        throw new Error("Unable to load context");
    }

    return context
}

/**
 * Provider component for the checkout context.
 * Manages checkout-related state and provides access to it.
 * @param {React.FC<{ children: ReactNode}>} children - The child components.
 * @returns {JSX.Element} JSX for the CheckoutContextProvider component.
 */
export const CheckoutContextProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
    const navigationTimerLimit = 20;
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState<boolean>(false);
    const [paymentResponse, setPaymentResponse] = useState<PaymentIntentResult>(null!);
    const [customerDetailsFormData, setCustomerDetailsFormData] = useState<object>({
            legal_name: '',
            family_name: '',
            email_address: '',
            phone_number: '',
            address_line_1: '',
            address_line_2: '',
            address_line_3: ''
        })
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    /**
     * Handles changes in customer details input fields.
     * @param {React.ChangeEvent<HTMLInputElement>} e - The event object.
     */
    const handleCustomerDetailsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCustomerDetailsFormData(prevFormData => ({...prevFormData, [id]: value}));
    }

    /**
     * Handles the checkout button click event.
     */
    const handleCheckoutButtonClick = () => {
        setIsCheckoutModalOpen(true);
        navigate("/checkout");
    }

    /**
     * Starts a timer to navigate to the home page after a specified time limit.
     */
    const startNavigationTimer = () => {
		const intervalId = setInterval(() => {
            navigate("/");
		}, navigationTimerLimit * 1000);
		return()=>{
			clearInterval(intervalId);
		}
    }

    return ( 
        <CheckoutContext.Provider value={{
            isPaymentSuccessful,
            setIsPaymentSuccessful,
            paymentResponse,
            setPaymentResponse,
            customerDetailsFormData,
            isCheckoutModalOpen,
            handleCustomerDetailsInputChange,
            handleCheckoutButtonClick,
            startNavigationTimer
                }}>
            { children }
        </CheckoutContext.Provider>
    );
}   