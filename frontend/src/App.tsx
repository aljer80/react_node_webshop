import { BrowserRouter } from 'react-router-dom'
import Router from './services/Router/Router'
import Layout from './services/Layout/Layout'
import { CartContextProvider } from "./contexts/CartContext"
import { CheckoutContextProvider } from "./contexts/CheckoutContext"

/**
 * The component responsible for configuring and rendering routes in the application.
 * Uses React Router's routing capabilities to map URLs to components.
 *
 * @returns {JSX.Element} The JSX element representing the router configuration.
 */
function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <CheckoutContextProvider>
          <Router />
          <Layout />
        </CheckoutContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App