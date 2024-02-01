import Header from "../../components/PageHeader/PageHeader"
import { Outlet } from "react-router"
import Footer from "../../components/PageFooter/PageFooter"

/**
 * Layout component representing the layout structure of a web page.
 *
 * This component includes a header, an outlet (for rendering nested routes), and a footer.
 *
 * @component
 * @returns {JSX.Element} JSX for the Layout component.
 */
const Layout: React.FC = () => {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    );
}

export default Layout