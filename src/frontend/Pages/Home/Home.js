import React from "react";
import "./Home.css";
import Categories from "../../Components/Categories/Categories";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useCategories } from "../../Contexts/CategoriesContext";

const Home = () => {
  const { categories } = useCategories();
  console.log(categories);
  return (
    <div className="pagewrap">
      <Header />
      <div className="categories space-around ">
        {categories &&
          categories.map((category) => <Categories category={category} />)}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
