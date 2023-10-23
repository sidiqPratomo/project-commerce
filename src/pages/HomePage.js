import React from "react";
import Hero from "../component/Hero";
import ProductList from "../component/ProductList";
import { useLoaderData } from "react-router-dom";
import GridContent from "../component/GridContent";
import MainContent from "../component/MainContent";
import SignUp from "../component/SignUp";
import Footer from "../component/Footer";

const HomePage = () => {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }
  const itemsArray = Object.values(data.items);
  const keysId = Object.keys(data.items);

  return (
    <>
      <Hero />
      <ProductList products={itemsArray} keys={keysId} />
      <GridContent />
      <MainContent />
      <SignUp />
      <Footer />
    </>
  );
};

export default HomePage;
