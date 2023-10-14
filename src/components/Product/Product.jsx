import React from "react";
import "./Product.css";
function Product({ id, title, image, cart, setCart, price }) {
  //  addToCartHandler method is used to add a product to cart for the first time
  const addToCartHandler = () => {
    let newItem = {
      id,
      title,
      image,
      price,
      count: 1,
    };
    setCart((prev) => {
      return [...prev, newItem];
    });
  };

  // isInCart method to check whether the particular product is present in cart or not
  const isInCart = (id) => {
    return !!cart?.find((item) => item.id === id);
  };

  // productAddHandler method is used to add count of the particular product in this cart
  const productAddHandler = (id) => {
    let itemIndex = cart?.findIndex((item) => item.id == id);
    setCart((prev) => {
      return prev.map((item, index) => {
        if (index === itemIndex) {
          return { ...item, count: item.count + 1 };
        } else {
          return { ...item };
        }
      });
    });
  };

  //   productDecreaseHandler method is used to decrease the  count of the particular product in this cart

  //   const productDecreaseHandler = (id) => {
  //     let itemIndex = cart.findIndex((item) => item.id == id);
  //     setCart((prev) => {
  //       return prev.map((item, index) => {
  //         if (index === itemIndex) {
  //           return { ...item, count: item.count - 1 };
  //         } else {
  //           return { ...item };
  //         }
  //       });
  //     });
  //   };

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
        <button onClick={() => productAddHandler(id)}>
          <span>{productCount(id)} </span>Added to cart
        </button>
      ) : (
        <button onClick={addToCartHandler}>Add to cart</button>
      )}
    </div>
  );
}

export default Product;
