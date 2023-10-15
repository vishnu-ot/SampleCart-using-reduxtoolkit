import React from "react";
import products from "../../api/api.json";
import Product from "../Product/Product";
import "./ProductGallary.css";
function ProductGallary() {
  return (
    <div className="product-gallary">
      {products.map((product) => {
        return <Product product={product}  />;
      })}
    </div>
  );
}

export default ProductGallary;
