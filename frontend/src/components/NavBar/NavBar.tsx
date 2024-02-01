import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"
import CartCounter from "../CartCounter/cartCounter";

/**
 * PageHeader is a functional React component representing the header section of a web page.
 * @component
 */
const Navbar: React.FC = () => {
    const {
        cart,
        setIsCartModalOpen
    } = useCartContext();

    return(
        <nav>
            <label className="navButton"><Link to="/cart">Kundvagn <CartCounter /></Link></label>
            <label className="navButton"><Link to="/">Shop</Link></label>
            <label className="navButton"><Link to="/checkout" onClick={() => setIsCartModalOpen(true)}>Betalning</Link></label>
            <label className="navButton"><Link to="/orders">Ordrar</Link></label>
            <label className="navButton"><Link to="/about/policies">Om oss</Link></label>
        </nav>
    );
}

export default Navbar