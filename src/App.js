import React from 'react';

import Header from './components/section/Header';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
// import Speakers from './pages/Speakers';
// import Earphones from './pages/Earphones';
import Footer from './components/section/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <Headphones />
      {/* <Speakers />
      <Earphones /> */}
      <Footer />
    </React.Fragment>
  );
}

export default App;
