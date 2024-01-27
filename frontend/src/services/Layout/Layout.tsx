import Header from '../../components/PageHeader/Header.tsx';
import { Outlet } from "react-router";
import Footer from '../../components/PageFooter/Footer.tsx';
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
        <>
            <CartContextProvider>
                <Header />
            </CartContextProvider>
                <Outlet />
                <Footer />
        </>
    );
};

export default Layout;