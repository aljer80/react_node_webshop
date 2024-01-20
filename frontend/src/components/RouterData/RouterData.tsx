import { routerType } from "../../types/router.types";
import DisclaimerPanel from "../DisclaimerPanel/DisclaimerPanel";
import Products from "../Products/Products";
import Error from "../Error/Error";
//kolla att importerna finns
// "fundera på att lägga till Om oss-sida"
//JSX.Elementen ska typbestämmas, t ex <Products /> ;

/**
 * Array containing data for routing in the application.
 * Each object represents a route with title, path, and associated React element.
 * @type {routerType[]}
 */
const RouterData: routerType[] = [
    {
    title:"Products", 
    path: "",
    element: <Products /> 
    },
    {
    title:"Policies", 
    path: "/policy",
    element: <DisclaimerPanel />
    },
    {
    title:"Not found!", 
    path: "*",
    element: <Error/> 
    }
]

export default RouterData;