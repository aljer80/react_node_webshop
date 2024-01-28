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
            <OrderModal />
        </OrderContextProvider>
    )
}

export default Orders