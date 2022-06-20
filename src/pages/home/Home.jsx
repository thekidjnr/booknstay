import React from "react";
import Explore from "../../components/home/explore/Explore";
import Filter from "../../components/home/filter/Filter";
import Hero from "../../components/home/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Filter />
      <Explore />
    </>
  );
};

export default Home;
