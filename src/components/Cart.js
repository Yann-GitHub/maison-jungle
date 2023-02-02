import "../styles/Cart.css";
import { useState } from "react";

// function Cart() {
//   const monsteraPrice = 8;
//   const ivyPrice = 10;
//   const flowerPrice = 15;
//   return (
//     <div className="lmj-cart">
//       <h2>Panier</h2>
//       <ul>
//         <li>Monstera : {monsteraPrice}€</li>
//         <li>Lierre : {ivyPrice}€</li>
//         <li>Fleurs : {flowerPrice}€</li>
//       </ul>
//       Total : {monsteraPrice + ivyPrice + flowerPrice}€
//     </div>
//   );
// }

// function Cart() {
//   const monsteraPrice = 8;
//   const [cart, updateCart] = useState(0);

//   return (
//     <div className="lmj-cart">
//       <h2>Panier</h2>
//       <div>
//         Monstera : {monsteraPrice}€
//         <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
//       </div>
//       <h3>Total : {monsteraPrice * cart}€</h3>
//     </div>
//   );
// }

// function Cart() {
//   const monsteraPrice = 8;
//   const [cart, updateCart] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   return isOpen ? (
//     <div className="lmj-cart">
//       <button onClick={() => setIsOpen(false)}>Fermer</button>
//       <h2>Panier</h2>
//       <div>
//         Monstera : {monsteraPrice}€
//         <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
//       </div>
//       <h3>Total : {monsteraPrice * cart}€</h3>
//     </div>
//   ) : (
//     <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
//   );
// }

function Cart({ cart, updateCart }) {
  //const monsteraPrice = 8;
  // const [cart, updateCart] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price}€ x {amount}
        </div>
      ))}

      <h3>Total : {total}€</h3>
      <button onClick={() => updateCart([])}>Vider le panier</button>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
