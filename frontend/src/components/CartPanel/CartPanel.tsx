import { PropsWithChildren } from "react"
import CartModal from "../../components/CartModal/CartModal"
import { useCartContext } from "../../contexts/CartContext"

/**
 * Component for rendering the cart panel.
 * @component
 * @returns {JSX.Element} - CartPanel component
 */
const CartPanel: React.FC<PropsWithChildren<{}>> = () => {
    const {
        isCartModalOpen
    } = useCartContext();

    return (
    <>
    {
        isCartModalOpen && <CartModal />
    }
    </>
    );
}

export default CartPanel