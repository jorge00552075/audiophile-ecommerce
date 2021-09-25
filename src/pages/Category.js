import { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router";
import dataJson from "../data.json";
import PageTitle from "../components/section/PageTitle";
import ProductCard from "../components/section/ProductCard";
import FeatureRow from "../components/section/FeatureRow";
import About from "../components/section/About";

function Category() {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const category = dataJson.filter(
      (item) => item.category === location.pathname.slice(1)
    );
    setData(category);
  }, [location.pathname]);

  useLayoutEffect(() => window.scrollTo(0, 0));

  if (data === null) {
    return <h1>NO DATA</h1>;
  }

  return (
    <main>
      <PageTitle title={location.pathname.slice(1)} />
      {data.map((item, i) => {
        return (
          <ProductCard data={data[i]} key={Math.trunc(Math.random() * 1000)} />
        );
      })}
      <FeatureRow />
      <About />
    </main>
  );
}

export default Category;
