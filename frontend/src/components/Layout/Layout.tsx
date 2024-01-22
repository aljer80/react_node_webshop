import Header from '../Header/Header.tsx';
import { Outlet } from "react-router";
import Footer from '../Footer/Footer.tsx';
import { ProductProvider } from '../../context/ProductContext.tsx';

/**
 * Layout component serving as the overall structure for the application.
 * It includes the header, the main content (provided by the React Router Outlet), and the footer.
 * @component
 * @returns {JSX.Element} - Layout component
 */
const Layout = () => {
    return (
        <div id="layout-div" role="group">
        {/* <CartProvider> */}
        < ProductProvider>
            <Header />
            <Outlet />
            <Footer />
        </ProductProvider>
        {/* </CartProvider> */}
        </div>
    );
};

export default Layout;