import "./App.css";
import Navbar from "./components/navbar";
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const product = [
    {
      price: 99,
      name: "pulsar",
      quantity: 0,
    },
    {
      price: 100,
      name: "duke",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(product);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = (index) => {
    let newproductList = [...productList];
    newproductList.map((product) => {
      product.quantity = 0;
      setProductList(newproductList);
      setTotalAmount(0);
    });
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1); // this will remove the item from the array
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name,price) =>{
    let newproductList = [...productList];
    newproductList.push(
      {
        name:name,
        price:price,
        quantity:0
      });
      setProductList(newproductList);
  }

  return (
    <React.Fragment>
      <Navbar />
      <main className="container mt-5">
      <AddItem addItem = {addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </React.Fragment>
  );
}

export default App;
