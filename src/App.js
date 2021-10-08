import React, { useEffect, useContext, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/section/Header";
import Home from "./pages/Home";
import Footer from "./components/section/Footer";
import CartContext from "./context/cart-context";

const Checkout = React.lazy(() => import("./pages/Checkout"));
const Category = React.lazy(() => import("./pages/Category"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

function App() {
  const context = useContext(CartContext);
  let items = context.cart;

  useEffect(() => {
    let prevItems = JSON.parse(localStorage.getItem("cart")) ?? [];
    context.refreshCart(prevItems);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<div className="loader">...</div>}>
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
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
