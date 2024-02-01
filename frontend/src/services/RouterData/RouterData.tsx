import { routerType } from "../../types/router.types"
import Shop from "../../pages/Shop/Shop";
import Cart from "../../pages/Cart/Cart";
import Checkout from "../../pages/Checkout/Checkout";
import Orders from "../../pages/Orders/Orders";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Error from "../../pages/Error/Error";

/**
 * RouterData is an array of routerType objects defining routes and corresponding React components.
 *
 * Each routerType object includes a path (route URL), element (React component), and title (route title).
 *
 * @type {routerType[]}
 */
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