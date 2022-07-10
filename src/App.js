
import './App.css';
import ProductsDisplay from "./views/ProductsDisplay"
import './views/ProductsDisplay.css'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
      <ProductsDisplay/>
</BrowserRouter>
  );
}

export default App;
