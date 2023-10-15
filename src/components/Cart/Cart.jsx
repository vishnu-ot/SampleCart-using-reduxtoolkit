import React from "react";
import CartItem from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
function Cart() {
  const { cart } = useSelector((state) => state.cart);

  let cartTot = cart.reduce((acc, curr) => {
    return acc + curr.count * curr.price;
  }, 0);

  return cart.length ? (
    <div>
      <h3 style={{ textAlign: "center" }}>Cart items</h3>
      {cart.map((cartProduct) => {
        return (
          <CartItem cartProduct={cartProduct}  cart={cart} />
        );
      })}

      <div className="total-section">
        <h3>Total : {cartTot}</h3>
      </div>
    </div>
  ) : (
    <div>
      <h3>Cart is empty </h3>
    </div>
  );
}

export default Cart;
