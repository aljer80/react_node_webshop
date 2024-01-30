import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"

const Navbar: React.FC = () => {
    const {
        cart,
        setIsCartModalOpen
    } = useCartContext();

    return(
        <nav>
        <label className="navButton"><Link to="/">Shop</Link></label>
        <label className="navButton"><Link to="/cart">Kundvagn<span className="cartCounter">{cart.length}</span></Link></label>
        <label className="navButton"><Link to="/checkout" onClick={() => setIsCartModalOpen(true)}>Betalning</Link></label>
        <label className="navButton"><Link to="/orders">Ordrar</Link></label>
        <label className="navButton"><Link to="/about/policies">Om oss</Link></label>
        </nav>
    );
}

export default Navbar