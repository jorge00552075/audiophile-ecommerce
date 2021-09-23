import React from 'react';

import Hero from '../components/section/Hero';
import FeatureRow from '../components/section/FeatureRow';
import FeaturedProducts from '../components/section/FeaturedProducts';
import About from '../components/section/About';

function Home() {
  return (
    <main>
      <Hero />
      <FeatureRow />
      <FeaturedProducts />
      <About />
    </main>
  );
}

export default Home;
