import Header from '../Header/Header.tsx';
import { Outlet } from "react-router";
import Footer from '../Footer/Footer.tsx';
import CartProvider from ""

const Layout = () => {
    return (
        <>
        <CartProvider>
            <Header />
            <Outlet />
            <Footer />
        </CartProvider>
        </>
    );
};

export default Layout;