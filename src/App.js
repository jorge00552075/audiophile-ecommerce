import React from "react";

import Header from "./components/section/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Footer from "./components/section/Footer";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Category />
      <ProductDetail />
      <Footer />
    </React.Fragment>
  );
}

export default App;
