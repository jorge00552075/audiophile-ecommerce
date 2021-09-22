import React from 'react';
import Hero from '../components/section/Hero';
import FeatureRow from '../components/section/FeatureRow';
import FeaturedProducts from '../components/section/FeaturedProducts';
import Footer from '../components/section/Footer';
// eslint-disable-next-line
import styles from '../components/section/Hero';

function Home() {
  return (
    <main>
      <Hero />
      <FeatureRow />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}

export default Home;
