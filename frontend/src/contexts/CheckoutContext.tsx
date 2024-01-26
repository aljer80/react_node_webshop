import { useNavigate } from "react-router-dom";
import { PaymentIntentResult } from "@stripe/stripe-js";
import { createContext, useContext, useState, ReactNode, Dispatch } from "react";

export interface CheckoutContextProps{
    isPaymentSuccessful: boolean
    setIsPaymentSuccessful: Dispatch<boolean>
    paymentResponse: PaymentIntentResult
    setPaymentResponse: Dispatch<PaymentIntentResult>
    customerDetailsFormData: object
    isCheckoutModalOpen: boolean
    handleCustomerDetailsInputChange: (e:React.ChangeEvent<HTMLInputElement>) => void
    handleCheckoutButtonClick: () => void
    startNavigationTimer: () => void 
    handleConfirmationButtonClick: () => void 
}

export const CheckoutContext = createContext<CheckoutContextProps | undefined>(undefined);

export const useCheckoutContext = (): CheckoutContextProps => {
    const context = useContext(CheckoutContext);
    if(!context) {
        throw new Error("Unable to load Context")
    }
    return context
}

export const CheckoutContextProvider: React.FC<{ children: ReactNode }> =({children}) => {
    const navigationTimerLimit = 20;
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState<boolean>(false);
    const [paymentResponse, setPaymentResponse] = useState<PaymentIntentResult>(null!); // "null!" ok så länge det inte är null. Det enda som funkar, man vet inte vad PaymentIntentResult är
    const [customerDetailsFormData, setCustomerDetailsFormData] = useState<object>({
        legal_name: '',
        family_name: '',
        email_address: '',
        phone_number: '',
        address_line_1: '',
        address_line_2: '',
        address_line_3: ''
    })
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false)
    const handleCustomerDetailsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setCustomerDetailsFormData(prevFormData => ({...prevFormData, [id]: value}));
    }
    const handleCheckoutButtonClick = () => {
        setIsCheckoutModalOpen(true)
    }

    const handleConfirmationButtonClick = () => {
        confirmation();
    }

    const confirmation = () => {
        setCart([]);
        const navigate = useNavigate();
        navigate("/")
    }

    const startNavigationTimer = () => {
        const navigate = useNavigate();
        setInterval(() => {
            navigate("/")
        }, navigationTimerLimit * 1000)
    }

    return(
        <CheckoutContext.Provider value={{
            isPaymentSuccessful,
            setIsPaymentSuccessful,
            paymentResponse,
            setPaymentResponse,
            customerDetailsFormData,
            isCheckoutModalOpen,
            handleCustomerDetailsInputChange,
            handleCheckoutButtonClick,
            startNavigationTimer,
            handleConfirmationButtonClick
                }}>
            { children }
        </CheckoutContext.Provider>
    );
}