import Header from '../Header/Header.tsx';
import { Outlet } from "react-router";
import Footer from '../Footer/Footer.tsx';
import { ProductProvider } from '../../context/ProductContext.tsx';


const Layout = () => {
    return (
        <>
        {/* <CartProvider> */}
        < ProductProvider>
            <Header />
            <Outlet />
            <Footer />
        </ProductProvider>
        {/* </CartProvider> */}
        </>
    );
};

export default Layout;