import React from "react";
import Carousel from "../../components/carousel/Carousel";
import CategoriesList from "../../components/categories/CategoriesList";
import Cardfilmlist from "../../components/cardfilmlist/Cardfilmlist";

function Home() {
  return (
    <div>
      <Carousel />
      <CategoriesList />
      <Cardfilmlist />
    </div>
  );
}

export default Home;
