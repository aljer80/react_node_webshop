import { PropsWithChildren } from "react"
import CartModal from "../../components/CartModal/CartModal"
import { useCartContext } from "../../contexts/CartContext"

const CartPanel: React.FC<PropsWithChildren<{}>> = () => {
    const cartContext = useCartContext();
    return (
    <>
    {
        cartContext.isCartModalOpen && <CartModal />
    }
    </>
    );
}

export default CartPanel