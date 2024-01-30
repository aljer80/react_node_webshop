import { useCheckoutContext } from "../../contexts/CheckoutContext"

const CheckoutForm: React.FC = () => {
    const {
        customerDetailsFormData,
        handleCustomerDetailsInputChange
    } = useCheckoutContext();

    return (
        <form id="customer-details" autoComplete="on">
            <input type="text" id="legal_name" placeholder="Förnamn" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["legal_name"]}></input>
            <input type="text" id="family_name" placeholder="Efternamn" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["family_name"]}></input>
            <input type="text" id="email_address" placeholder="E-post" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["email_address"]}></input>
            <input type="number" id="phone_number" placeholder="Telefon" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["phone_number"]}></input>
            <input type="text" id="address_line_1" placeholder="Gatuadress" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["address_line_1"]}></input>
            <input type="text" id="address_line_2" placeholder="Postnummer" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["address_line_2"]}></input>
            <input type="text" id="address_line_3" placeholder="Ort" onChange={handleCustomerDetailsInputChange} value={customerDetailsFormData["address_line_3"]}></input>
        </form>
    );
}

export default CheckoutForm