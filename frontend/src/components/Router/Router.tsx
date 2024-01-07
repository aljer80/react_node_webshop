import { Routes, Route } from "react-router-dom"; 
import { routerType } from "../../types/router.types";
import RouterData from "../RouterData/RouterData"

const Router = () => {
    const pageRoutes = RouterData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });
    
    return <Routes>{pageRoutes}</Routes>;
};

export default Router;