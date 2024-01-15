import { useState, useEffect, useMemo } from "react";
import { Product } from "../../types/product.types";
import { FilteringState } from "../../types/filteringState.types";
import ProductCard from "../ProductCard/ProductCard";
import ProductList from "../ProductList/ProductList";
import FilteringBar from "../FilteringBar/FilteringBar";
import SortByPrice from "../SortByPrice/SortByPrice";

interface FilteringAndSortingBarProps {
  inventory: Product[];
}

const FilteringAndSortingBar: React.FC<FilteringAndSortingBarProps> = ({ inventory, onFilterChange }) => {    

  const [sortOrder, setSortOrder] = useState<"ascending" | "descending">("ascending");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(inventory);
  const [filteringState, setFilteringState] = useState<FilteringState>({
    brand: "",
    shape: "",
    balance: "",
    weightRange: [0, 0],
  });

  const handleFilterChange = (filteredProducts: Product[], newFilteringState: FilteringState) => {
    setFilteredProducts(filteredProducts);
    setFilteringState(newFilteringState);
  }

  useEffect(() => {
    sessionStorage.setItem("filteringState", JSON.stringify(filteringState));
  }, [filteringState]);

  const sortedProducts = useMemo(() => {
    if (sortOrder === "ascending") {
        return [...inventory].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "descending") {
        return [...inventory].sort((a, b) => b.price - a.price);
    }
    return filteredProducts;
  }, [filteredProducts, sortOrder]);

    return (
      //kolla att ProductList finns
        <div>
           <ProductList 
            products={sortedProducts}
            render={(product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            )}
          />
           <FilteringBar 
            products={inventory} 
            onFilterChange={onFilterChange} 
            filteringState={filteringState}
          />
           <SortByPrice sortOrder={sortOrder} setSortOrder={setSortOrder} />
        </div>
    );
}

export default FilteringAndSortingBar;

//spara filtrering i state så att sidan ser ut som den gjorde när man går tillbaka till den från cart 