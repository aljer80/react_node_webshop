import { routerType } from "../../types/router.types";
import Products from "../Products/Products";

const RouterData: routerType[] = [
    {
    title:"Products", 
    path: "",
    element: <Products /> //JSX.Element;
    }

]

export default RouterData;