import React from "react";
import "./CartItem.css";
function CartItem({ cartProduct, setCart, cart }) {
  const { title, image, price, count, id } = cartProduct;
  console.log(cart);
  const addCartItemHandler = (id) => {
    setCart((prev) => {
      return prev.map((cartProduct) => {
        if (cartProduct.id === id) {
          return { ...cartProduct, count: cartProduct.count + 1 };
        } else return { ...cartProduct };
      });
    });
  };

  const decCartItemHandler = (id) => {
    if (count > 1) {
      setCart((prev) => {
        return prev.map((cartProduct) => {
          if (cartProduct.id === id) {
            return { ...cartProduct, count: cartProduct.count - 1 };
          } else return { ...cartProduct };
        });
      });
    } else {
      setCart((prev) => {
        return prev.filter((item) => item.id != id);
      });
    }
  };
  return (
    <div className="cart-item">
      <div>
        <img src={image} alt="" style={{ width: "50px", height: "40px" }} />
        <h4>{title}</h4>
      </div>

      <div className="btn-grp">
        <button onClick={() => addCartItemHandler(id)}>+</button>
        <h6>{count}</h6>
        <button onClick={() => decCartItemHandler(id)}>-</button>
      </div>
    </div>
  );
}

export default CartItem;
