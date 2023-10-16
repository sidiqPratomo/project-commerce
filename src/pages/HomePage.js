import React from "react";
import Hero from "../component/Hero";
import ProductList from "../component/ProductList";
import { useLoaderData } from "react-router-dom";
import GridContent from "../component/GridContent";
import MainContent from "../component/MainContent";

const HomePage = () => {
  const data = useLoaderData();
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const items = data.items;
  return (
    <>
      <Hero />
      <ProductList products={items} />
      <GridContent />
      <MainContent />
    </>
  );
};

export default HomePage;
