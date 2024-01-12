import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router"; 

const App = () => {
  //kolla att BrowserRouter och Router finns
  
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
