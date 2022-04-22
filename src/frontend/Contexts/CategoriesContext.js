import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const resp = await axios("/api/categories");
        setCategories(resp.data.categories);
      } catch (error) {
        console.log("Category Error: ", error);
      }
    })();
  }, []);
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};

const useCategories = () => useContext(CategoriesContext);

export { CategoriesProvider, useCategories };
