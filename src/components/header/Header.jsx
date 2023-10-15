import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
function Header() {
  const { cart } = useSelector((state) => state.cart);
  let totalCount = cart.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  return (
    <div className="header">
      <h3>Shpping Cart</h3>
      <h3 style={{ marginRight: "100px" }}>Total Cart items: {totalCount}</h3>
    </div>
  );
}

export default Header;
