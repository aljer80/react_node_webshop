/**
 * Interface representing the configuration of a route in the application router.
 * @interface routerType
 * @property {string} title - The title of the route.
 * @property {string} path - The path of the route.
 * @property {JSX.Element} element - The React JSX element associated with the route.
 */
export interface routerType {
    title: string;
    path: string;
    element: JSX.Element;
}