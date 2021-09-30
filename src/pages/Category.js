import { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";
import PageTitle from "../components/section/PageTitle";
import ProductCard from "../components/section/ProductCard";
import FeatureRow from "../components/section/FeatureRow";
import About from "../components/section/About";
import dataJson from "../data.json";
import styles from "../pages/Category.module.css";

function Category() {
  const [data, setData] = useState(null);
  const location = useLocation();
  const title = location.pathname.slice(1);

  useEffect(() => {
    const category = dataJson.filter((item) => item.category === title);
    setData(category);
  }, [title]);

  useLayoutEffect(() => window.scrollTo(0, 0));

  if (data === null) {
    return <h1 className={styles.error}>oops! Something went wrong! 😡</h1>;
  }

  return (
    <main>
      <PageTitle title={title} />
      <section className={styles.section}>
        <div className={styles.section__content}>
          {data.map((item, i) => (
            <ProductCard
              data={data[i]}
              key={Math.trunc(Math.random() * 10000)}
            />
          ))}
        </div>
      </section>
      <FeatureRow />
      <About />
    </main>
  );
}

export default Category;
