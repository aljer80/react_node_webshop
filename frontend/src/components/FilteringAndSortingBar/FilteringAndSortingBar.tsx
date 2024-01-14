import { useEffect, useMemo } from "react";
import { Product } from "../../types/product.types";
import ProductList from "../ProductList/ProductList";
import FilteringBar from "../FilteringBar/FilteringBar";
import SortByPrice from "../SortByPrice/SortByPrice";

interface FilteringAndSortingBarProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

const FilteringAndSortingBar: React.FC<FilteringAndSortingBarProps> = ({ products, onFilterChange }) => {    

    const filteredProducts = useMemo(() => {
      if (sortOrder === "ascending") {
          return [...filteredProducts].sort((a, b) => a.price - b.price);
      } else if (sortOrder === "descending") {
          return [...filteredProducts].sort((a, b) => b.price - a.price);
      }
      return filteredProducts;
    }, [filteredProducts, sortOrder]);

    useEffect(() => {
      onFilterChange(filteredProducts);
    }, [filteredProducts, onFilterChange]);

    return (
      //kolla att ProductList finns
        <div>
           <ProductList {inventory} {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            />
           <FilteringBar />
           <SortByPrice />
        </div>
      );
}

export default FilteringAndSortingBar;

//spara filtrering i state så att sidan ser ut som den gjorde när man går tillbaka till den från cart 