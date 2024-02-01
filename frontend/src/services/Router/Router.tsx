import { Routes, Route } from 'react-router-dom'
import { routerType } from '../../types/router.types'
import RouterData from '../RouterData/RouterData'

/**
 * Router component responsible for defining and rendering routes based on RouterData.
 *
 * This component maps over the RouterData to create route components for each specified path and element.
 *
 * @component
 * @returns {JSX.Element} JSX for the Router component.
 */
const Router: React.FC = () => {
    const pageRoutes = RouterData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return (
        <Routes>
            {pageRoutes}
        </Routes>
    )
}

export default Router;