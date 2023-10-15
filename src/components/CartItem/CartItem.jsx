import React from "react";
import { decreaseProductsFromCart } from "../../redux/cart";
import "./CartItem.css";
import { addProductsToCart } from "../../redux/cart";
import { useSelector, useDispatch } from "react-redux";
function CartItem({ cartProduct, setCart, cart }) {
  const { title, image, price, count, id } = cartProduct;
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div>
        <img src={image} alt="" style={{ width: "50px", height: "40px" }} />
        <h4>{title}</h4>
      </div>

      <div className="btn-grp">
        <button onClick={() => dispatch(addProductsToCart(id))}>+</button>
        <h6>{count}</h6>
        <button onClick={() => dispatch(decreaseProductsFromCart(id))}>
          -
        </button>
      </div>
    </div>
  );
}

export default CartItem;
