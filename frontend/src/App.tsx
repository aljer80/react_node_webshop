import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './services/Router/Router'
import Layout from './services/Layout/Layout'
import { CartContextProvider } from "./contexts/CartContext"
import { CheckoutContextProvider } from "./contexts/CheckoutContext"

/**
 * Main App component serving as the entry point for the React application.
 * It sets up the BrowserRouter and includes the Router component for managing routes.
 * @component
 * @returns {JSX.Element} - App component
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
  )
}
export default App
