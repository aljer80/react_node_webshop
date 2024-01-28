import { useCheckoutContext } from "../../contexts/CheckoutContext"

const CheckoutForm: React.FC = () => {
    const {
        customerDetailsFormData,
        handleCustomerDetailsInputChange
    } = useCheckoutContext()

     return (
        <form id="customer-details" autoComplete="on">
            <input type="text" id="legal_name" placeholder="First name" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["legal_name"]}></input>
            <input type="text" id="family_name" placeholder="Last name" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["family_name"]}></input>
            <input type="text" id="email_address" placeholder="Email" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["email_address"]}></input>
            <input type="number" id="phone_number" placeholder="Phone" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["phone_number"]}></input>
            <input type="text" id="address_line_1" placeholder="Street address" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["address_line_1"]}></input>
            <input type="text" id="address_line_2" placeholder="Post code" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["address_line_2"]}></input>
            <input type="text" id="address_line_3" placeholder="City" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["address_line_3"]}></input>
        </form>
    );
}

export default CheckoutForm