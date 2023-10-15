import React from "react";
import { addToCart, addProductsToCart } from "../../redux/cart";
import { useDispatch, useSelector } from "react-redux";
import "./Product.css";
function Product({ product }) {
  const { id, title, image, price } = product;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  // isInCart method to check whether the particular product is present in cart or not
  const isInCart = (id) => {
    return !!cart?.find((item) => item.id === id);
  };

  //   productCount method is used to return number of items of a particualr product in this cart
  let productCount = (id) => {
    return cart.map((product) => {
      if (product.id === id) {
        return product.count;
      }
    });
  };

  return (
    <div className="product-item">
      <img src={image} alt="" className="product-image" />
      <h2>{title}</h2>
      <h3>{price}</h3>
      {isInCart(id) ? (
        <button onClick={() => dispatch(addProductsToCart(product.id))}>
          <span>{productCount(id)}</span>Added to cart
        </button>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      )}
    </div>
  );
}

export default Product;
