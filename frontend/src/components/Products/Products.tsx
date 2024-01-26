import { ProductContextProvider } from "../../contexts/ProductContext";
import Hero from "../Hero/Hero";
import FilteringAndSortingBar from "../FilteringAndSortingBar/FilteringAndSortingBar";

/**
 * Products component responsible for rendering the Hero and FilteringAndSortingBar components.
 * @returns {JSX.Element} JSX for the Products component.
 */
const Products: React.FC = () => {

  if(!FilteringAndSortingBar){
    throw new Error("Unable to load dependency!");
  }

  return (
      <ProductContextProvider>
        <Hero />
        <FilteringAndSortingBar />
      </ProductContextProvider>
  );
}

export default Products;