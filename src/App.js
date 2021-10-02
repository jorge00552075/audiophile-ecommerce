import React from "react";

import { Route, Switch } from "react-router-dom";

import Header from "./components/section/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/section/Footer";
import Checkout from "./pages/Checkout";

function App() {
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
