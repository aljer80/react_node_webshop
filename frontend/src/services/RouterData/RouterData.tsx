import { routerType } from "../../types/router.types"
import Shop from "../../pages/Shop/Shop";
import Cart from "../../pages/Cart/Cart";
import Checkout from "../../pages/Checkout/Checkout";
import Orders from "../../pages/Orders/Orders";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Error from "../../pages/Error/Error";

/**
 * Array containing route data for various pages.
 * @type {routerType[]}
 */
// about us
const RouterData: routerType[] = [
    {
        path:"",
        element: <Shop />,
        title: "Shopping page"
    },
    {
        path:"/about/policies",
        element: <AboutUs />,
        title:"About page"
    },
    {
        path:"/orders",
        element: <Orders />,
        title:"Orders page"
    },
    {
        path:"/cart",
        element: <Cart />,
        title:"Shopping cart page"
    },
    {
        path:"/checkout",
        element: <Checkout />,
        title:"Checkout page"
    },
    {
        path:"*",
        element: <Error />,
        title:"Error page"
    }

];

export default RouterData