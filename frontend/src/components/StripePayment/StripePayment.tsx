import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentElement from '../PaymentElement/PaymentElement';

const stripePK = "pk_test_51NmuBaFM2JYZGY8M8NqY4NlRTBMOPrmjrY0jMN8CoNkDDEOxjCzO33vEOBG5jryFzQENHDLkeVkFaNVPJeRBueP000vOCLVT2Z";
const stripePromise = loadStripe(stripePK);

const StripePayment: React.FC = () => {
    return (
        <Elements stripe={ stripePromise }>
            <PaymentElement />
        </Elements>
    )
}

export default StripePayment