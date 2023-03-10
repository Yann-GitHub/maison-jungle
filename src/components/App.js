import { useState, useEffect } from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import Time from "./Time.js";
import "../styles/Layout.css";

function App() {
  // const [cart, updateCart] = useState([]);
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [isFooterShown, updateIsFooterShown] = useState(true);

  return (
    <div>
      <Banner>
        <Time />
        <div className="lmj-logoNtitle-container">
          <img src={logo} alt="La maison jungle" className="lmj-logo" />
          <h1 className="lmj-title">La maison jungle</h1>
        </div>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <button onClick={() => updateIsFooterShown(!isFooterShown)}>
        Cacher !
      </button>
      {isFooterShown && <Footer cart={cart} />}
    </div>
  );
}

export default App;
