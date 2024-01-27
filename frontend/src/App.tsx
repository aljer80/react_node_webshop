import { BrowserRouter } from "react-router-dom";
import Router from "./services/Router/Router"; 
import Layout from "./services/Layout/Layout";

/**
 * Main App component serving as the entry point for the React application.
 * It sets up the BrowserRouter and includes the Router component for managing routes.
 * @component
 * @returns {JSX.Element} - App component
 */
const App = () => {
  //kolla att BrowserRouter och Router finns
  
  return (
    <BrowserRouter>
      <Router />
      <Layout />
    </BrowserRouter>
  );
};

export default App;
