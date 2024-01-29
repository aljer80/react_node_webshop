import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"

const Navbar: React.FC = () => {
    const {
        setIsCartModalOpen
    } = useCartContext()
    return(
        <>
        <label className="navButton"><Link to="/">Shop</Link></label>
        <label className="navButton"><Link to="/cart">Kundvagn</Link></label>
        <label className="navButton"><Link to="/checkout" onClick={() => setIsCartModalOpen(true)}>Checkout</Link></label>
        <label className="navButton"><Link to="/orders">Ordrar</Link></label>
        <label className="navButton"><Link to="/about/policies">Om oss</Link></label>
        </>
    )
}

export default Navbar