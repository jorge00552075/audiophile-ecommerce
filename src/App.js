import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Header from "./components/section/Header";
// import Home from "./pages/Home";
// import Category from "./pages/Category";
import Footer from "./components/section/Footer";
// import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Home exact path="/" />
        <Category exact path="/:id" />
        <ProductDetail path="/product/:id" /> */}
        <Checkout />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
