import { ProductContext } from "../../context/ProductContext";
import Hero from "../Hero/Hero";
import FilteringAndSortingBar from "../FilteringAndSortingBar/FilteringAndSortingBar";

const Products: React.FC = () => {
 
  if(!FilteringAndSortingBar){
    throw new Error("Unable to load FilteringAndSortingBar");
  }

  return (
    <ProductContext>
      <Hero />
      <FilteringAndSortingBar /> 
    </ProductContext>
  );
}

export default Products;