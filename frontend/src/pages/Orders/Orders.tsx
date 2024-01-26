import { OrderContextProvider } from "../../contexts/OrderContext";
import OrderModal from "../../components/OrderModal/OrderModal";

const Orders: React.FC = () => {
    return (
        <OrderContextProvider>
            <OrderModal />
        </OrderContextProvider>
    )
}

export default Orders