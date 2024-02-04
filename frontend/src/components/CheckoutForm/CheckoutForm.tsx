import { useCheckoutContext } from "../../contexts/CheckoutContext"

const CheckoutForm: React.FC = () => {
    const {
        customerDetailsFormData,
        handleCustomerDetailsInputChange
    } = useCheckoutContext();

    return (
        <form id="customer-details" autoComplete="on">
            <input 
            type="text" 
            id="legal_name" 
            placeholder="Förnamn"
            required
            onChange={handleCustomerDetailsInputChange} 
            value={customerDetailsFormData["legal_name"]}>
            </input>

            <input 
            type="text" 
            id="family_name" 
            placeholder="Efternamn"
            required
            onChange={handleCustomerDetailsInputChange} 
            value={customerDetailsFormData["family_name"]}>
            </input>

            <input type="email" 
            id="email_address" 
            placeholder="E-post"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" 
            title="Please enter a valid email address." 
            onChange={handleCustomerDetailsInputChange} 
            value={customerDetailsFormData["email_address"]}>
            </input>

            <input 
            type="number" 
            id="phone_number" 
            placeholder="Telefon"
            title="Telefonnummer måste bestå av minst 9 siffror"
            onChange={handleCustomerDetailsInputChange} 
            value={customerDetailsFormData["phone_number"]}>
            </input>
            
            <input 
            type="text" 
            id="address_line_1" 
            placeholder="Gatuadress"
            required
            onChange={handleCustomerDetailsInputChange} 
            value={customerDetailsFormData["address_line_1"]}>
            </input>

            <input 
            type="text" 
            id="address_line_2" 
            placeholder="Postnummer"
            pattern="\d{5}"
            title="Postnummer måste bestå av 5 siffror"
            required
            onChange={handleCustomerDetailsInputChange} 
            value={customerDetailsFormData["address_line_2"]}>
            </input>

            <input 
            type="text" 
            id="address_line_3" 
            placeholder="Ort"
            required
            onChange={handleCustomerDetailsInputChange} 
            value={customerDetailsFormData["address_line_3"]}>
            </input>
        </form>
    );
}

export default CheckoutForm