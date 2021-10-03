import React, { useState, useEffect, useContext } from "react";

import { Route, Switch } from "react-router-dom";

import Header from "./components/section/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/section/Footer";
import Checkout from "./pages/Checkout";
import CartContext from "./context/cart-context";

function App() {
  const [fetched, setFetched] = useState(false);

  const context = useContext(CartContext);
  let items = context.cart;

  useEffect(() => {
    let prevItems = JSON.parse(localStorage.getItem("cart")) || [];
    context.refreshCart(prevItems);
    setFetched(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:slug">
          <Category />
        </Route>
        <Route path="/product/:slug">
          <ProductDetail />
        </Route>
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
