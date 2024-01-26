import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
/**
 * NavBar component representing the navigation bar.
 * @component
 * @returns {JSX.Element} - NavBar component
 */
const NavBar: React.FC = () => {

    const {
        handleToggleCartModalClick
      } = useCartContext();

    return (
        <nav id="main-navbar">
            <li className="li-nav">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    style={{
                        textDecoration: 'none',
                        color: 'var(--main-text-color)',
                    }}
                    >
                    Hem
                </NavLink>
            </li>
            <li className="li-nav">
                <NavLink
                    to="/om-oss"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                    style={{
                        textDecoration: 'none',
                        color: 'var(--main-text-color)',
                    }}
                    >
                    Om oss
                </NavLink>
            </li>
            <FaShoppingBag id="cart-icon" onClick={handleToggleCartModalClick}/>
            {/* onClick={handleOpenCartModalClick} */}
        </nav>
    );
}

export default NavBar