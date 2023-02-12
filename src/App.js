import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Product from "./screens/Product";
import Category from "./components/Category";
import CartScreen from "./screens/CartScreen";
import Receipt from "./screens/Receipt";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
