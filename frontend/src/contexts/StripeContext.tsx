import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { loadStripe, Stripe } from "@stripe/stripe-js"

/**
 * Context for providing the Stripe object throughout the application.
 */
export interface StripeContextProps{
    children: ReactNode
}

const stripePK = "pk_test_51NmuBaFM2JYZGY8M8NqY4NlRTBMOPrmjrY0jMN8CoNkDDEOxjCzO33vEOBG5jryFzQENHDLkeVkFaNVPJeRBueP000vOCLVT2Z"

/**
 * Context for providing the Stripe object throughout the application.
 */
export const StripeContext = createContext<Stripe | undefined>(undefined);

/**
 * Hook to access the Stripe context.
 * @returns {Stripe} The Stripe object.
 */
export const useStripeContext = (): Stripe => {
    const context = useContext(StripeContext);
    if(!context){
        throw new Error("Unable to load context");
    }

    return context
}

/**
 * Provider component for the Stripe context.
 * Initializes the Stripe instance and provides it to the context.
 * @param {StripeContextProps} children - The child components.
 * @returns {JSX.Element} JSX for the StripeContextProvider component.
 */
export const StripeContextProvider: React.FC<StripeContextProps> = ({ children }) => {
    const [stripe, setStripe] = useState<Stripe | null>(null);

    useEffect(() => {
        let isMounted = true
        const initStripe = async () => {
            const stripeInstance: Stripe | null = await loadStripe(stripePK || undefined);
            if(isMounted){
                setStripe(stripeInstance);
            }
        }

        initStripe();

        return () => {
            isMounted = false
        }
    },[]);

    return ( 
        <StripeContext.Provider value={ stripe !== null ? stripe : undefined }>
            { children }
        </StripeContext.Provider>
    );
}   