import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import StripeComponent from "../StripeComponent/StripeComponent"

const stripePK = "pk_test_51NmuBaFM2JYZGY8M8NqY4NlRTBMOPrmjrY0jMN8CoNkDDEOxjCzO33vEOBG5jryFzQENHDLkeVkFaNVPJeRBueP000vOCLVT2Z"
const stripePromise = loadStripe(stripePK)

/**
 * Component for handling Stripe payments.
 * @returns {JSX.Element} JSX for the StripePayment component.
 */
const StripePayment: React.FC = () => {
    return (
        <Elements stripe={ stripePromise }>
                <StripeComponent />
        </Elements>
    )
}

export default StripePayment