import React from "react";
import Product from "./Product.js";

export default function productList(props) {
  // console.log(props);
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          resetQuantity={props.resetQuantity}
          removeItem={props.removeItem}
          index={i}
        />
      );
    })
  ) : (
    <h1>No items in the cart</h1>
  );
}
