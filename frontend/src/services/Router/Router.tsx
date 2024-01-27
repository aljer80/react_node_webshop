import { Routes, Route } from "react-router-dom"; 
import { routerType } from "../../types/router.types";
import RouterData from "../RouterData/RouterData"

/**
 * Main Router component responsible for rendering routes based on the RouterData.
 * @component
 * @returns {JSX.Element} - Router component
 */
const Router = () => {
    const pageRoutes = RouterData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });
    
    return <Routes>{pageRoutes}</Routes>;
};

export default Router;