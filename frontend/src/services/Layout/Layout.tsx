import Header from "../../components/PageHeader/PageHeader"
import { Outlet } from "react-router"
import Footer from "../../components/PageFooter/PageFooter"

const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;