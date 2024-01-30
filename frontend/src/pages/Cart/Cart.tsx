import { PropsWithChildren } from "react"
import CartPanel from "../../components/CartPanel/CartPanel"

/**
 * Cart component responsible for rendering the cart modal.
 * This component wraps the CartModal component with CartContextProvider and CheckoutContextProvider.
 * @returns {JSX.Element} JSX for the Cart component.
 */
const Cart: React.FC<PropsWithChildren<{}>> = () => {
    return (
        <main>
            <CartPanel />
        </main>
    )
}

export default Cart