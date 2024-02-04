import { PropsWithChildren } from "react"
import { OrderContextProvider } from "../../contexts/OrderContext"
import OrderModal from "../../components/OrderModal/OrderModal"

/**
 * Orders component responsible for rendering the order modal.
 * This component wraps the OrderModal component with OrderContextProvider.
 * @returns {JSX.Element} JSX for the Orders component.
 */
const Orders: React.FC<PropsWithChildren<{}>> = () => {
    return (
        <OrderContextProvider>
            <main>
                <p id="order-message">CLICK ON AN ORDER TO EDIT OR DELETE IT <br />
                    The number is the order id, it cannot be changed. 
                </p>
                <OrderModal />
            </main>
        </OrderContextProvider>
    )
}

export default Orders