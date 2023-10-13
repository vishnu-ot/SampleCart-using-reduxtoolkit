import React from "react";

function Product({ id, title, image }) {
  return (
    <div>
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Product;
