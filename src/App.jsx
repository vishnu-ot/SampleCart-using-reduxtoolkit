import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header/Header";
import ProductGallary from "./components/ProductGallary/ProductGallary";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        <ProductGallary />
        <Cart />
      </div>
    </>
  );
}

export default App;
