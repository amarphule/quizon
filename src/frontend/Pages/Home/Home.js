import React from "react";
import "./Home.css";
import { Categories, Header, Footer } from "../../Components";
import { useCategories } from "../../Contexts";

const Home = () => {
  const { categories } = useCategories();
  return (
    <div className="pagewrap">
      <Header />
      <div className="mt-5 space-around ">
        {categories &&
          categories.map((category) => (
            <Categories category={category} key={category._id} />
          ))}
      </div>
      <Footer />
    </div>
  );
};

export { Home };
