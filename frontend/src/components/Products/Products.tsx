import Hero from "../Hero/Hero";
import FilterAndSortingBar from "../FilteringAndSortingBar/FilteringAndSortingBar";
import { fetchAllProducts } from "../../utilities/ApInterface"; 

const Products = async () => {
  let inventory = [];
  
  function loadAllProducts() {
    return fetchAllProducts();
  }

  inventory = await loadAllProducts();

//testa så att det finns data i inventory || tom array  
  return (
    //kolla så att Hero och FilterAndSortingBar finns
    <>
      <Hero />
      <FilterAndSortingBar { ...inventory}/> 
    </>
  )
}

export default Products;