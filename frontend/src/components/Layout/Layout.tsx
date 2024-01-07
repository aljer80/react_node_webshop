import Header from '../Header/Header.tsx';
import { Outlet } from "react-router";
import Footer from '../Footer/Footer.tsx';

const Layout = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
};

export default Layout;