import { ProductContextProvider } from "../../contexts/ProductContext";
import Hero from "../../components/ShopHero/Hero";
import FilteringAndSortingBar from "../../components/FilteringSortingBar/FilteringAndSortingBar";

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
        <article className="container-article" id="shop-page"> 
          <Hero />
          <FilteringAndSortingBar />
        </article>
      </ProductContextProvider>
  );
}

export default Products;

{/* <div className="container" id="productsComponent-div"></div> */}