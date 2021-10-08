import { useState, useEffect, useLayoutEffect } from "react";

import { useParams } from "react-router";

import PageTitle from "../components/section/PageTitle";
import ProductCard from "../components/section/ProductCard";
import FeatureRow from "../components/section/FeatureRow";
import About from "../components/section/About";
import dataJson from "../data.json";

import styles from "../pages/Category.module.css";

function Category() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const category = dataJson.filter((item) => item.category === params.slug);
    setData(category);
  }, [params.slug]);

  useLayoutEffect(() => window.scrollTo(0, 0));

  if (data === null) return <div className="loader"></div>;

  const products = data.map((item, i) => (
    <ProductCard data={data[i]} key={Math.trunc(Math.random() * 10000)} />
  ));

  return (
    <main>
      <PageTitle title={params.slug} />
      <section className={styles.section}>
        <div className={styles.section__content}>{products}</div>
      </section>
      <FeatureRow />
      <About />
    </main>
  );
}

export default Category;
