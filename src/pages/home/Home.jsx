import React from "react";
import Explore from "../../components/home/explore/Explore";
import Filter from "../../components/home/filter/Filter";
import Hero from "../../components/home/hero/Hero";
import List from "../../components/home/list/List";
import Properties from "../../components/home/properties/Properties";
import Tour from "../../components/home/tour/Tour";
import Reviews from "../../components/home/reviews/Reviews";
import Newsletters from "../../components/home/newsletters/Newsletters";
import Footer from "../../components/home/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Filter />
      <Explore />
      <Tour />
      <Properties />
      <List />
      <Reviews />
      <Newsletters />
      <Footer />
    </>
  );
};

export default Home;
