import { BrowserRouter } from 'react-router-dom'
import Router from './services/Router/Router'
import Layout from './services/Layout/Layout'
import { CartContextProvider } from "./contexts/CartContext"
import { CheckoutContextProvider } from "./contexts/CheckoutContext"

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