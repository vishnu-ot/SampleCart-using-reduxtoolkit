import React from "react";
import products from "../../api/api.json";
import Product from "../Product/Product";
import './ProductGallary.css'
function ProductGallary({cart,setCart}) {
  return (
    <div className="product-gallary">
      {products.map((product) => {
        return <Product {...product} cart={cart} setCart={setCart}/>;
      })}
    </div>
  );
}

export default ProductGallary;
