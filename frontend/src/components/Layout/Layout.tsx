import Header from '../Header/Header.tsx';
import { Outlet } from "react-router";
import Footer from '../Footer/Footer.tsx';
import { CartContextProvider } from '../../contexts/CartContext.tsx';
import { OrderContextProvider } from '../../contexts/OrderContext.tsx';

/**
 * Layout component serving as the overall structure for the application.
 * It includes the header, the main content (provided by the React Router Outlet), and the footer.
 * @component
 * @returns {JSX.Element} - Layout component
 */
const Layout = () => {
    return (
        <div id="layout-div" role="group">
            <CartContextProvider>
                <Header />
            </CartContextProvider>
                <Outlet />
                <Footer />
        </div>
    );
};

export default Layout;