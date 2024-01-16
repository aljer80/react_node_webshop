import Hero from "../Hero/Hero";
import FilteringAndSortingBar from "../FilteringAndSortingBar/FilteringAndSortingBar";
import { fetchAllProducts } from "../../utilities/ApInterface"; 


const Products = async () => {
  let inventory = [];
  
  function loadAllProducts() {
    return fetchAllProducts();
  }

  inventory = await loadAllProducts();

  const handleFilterChange = (filteredProducts) => {
    console.log("Filtered products:", filteredProducts);
  }

//testa så att det finns data i inventory || tom array  
  return (
    //kolla så att Hero och FilterAndSortingBar finns
    <>
      <Hero />
      <FilteringAndSortingBar 
        inventory={inventory} 
        onFilterChange={handleFilterChange}
      /> 
    </>
  )
}

export default Products;