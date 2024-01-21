import { useState, useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import ProductList from "../ProductList/ProductList";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import { Product } from "../../types/product.types";

/**
 * Component for displaying and managing filtering and sorting options for products.
 * @component
 * @returns {JSX.Element} - FilteringAndSortingBar component
 * @throws Will throw an error if the ProductList dependency is missing.
 */
const FilteringAndSortingBar: React.FC = () => {    
  if(!ProductList){
    throw new Error("Missing dependency!");
  }

  const {
    inventory, 
    filterOptions, 
    sortingOptions, 
    isProductDetailModalOpen,
      selectedProductId,
    handleFilterChange,
      changeFilterState,
      changeSortingState,
    handleSortingChange, 
    handleResetButtonClick,
    handleSearchButtonClick,
  } = useProductContext();

  const [searchInput, setSearchInput] = useState<string>("");
  const getSuggestions = ():Product[] => {
    return inventory.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()));
  }

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  /**
   * Process filter options and update the filtered products array.
   */
  const processFilterOptions = () => {
    const filteredArray: Product[] = inventory.filter(entry => {
      return filterOptions.every(option => {
        const [property, value] = option.split(":")
        return entry[property as keyof Product] === value;
      })
    })
    return filteredArray
  }

  /**
   * Process sorting options and update the sorted products array.
   */
  const processSortingOption = () => {
    let sortedArray: Product[] = []
    switch(sortingOptions.field){
        case "name":
            sortedArray = filteredProducts.slice().sort((a: Product, b: Product) => {
                const orderFactor: number = sortingOptions.order === 'asc' ? 1 : -1
                return orderFactor * a.name.localeCompare(b.name)
            })
            break
        case "price":
            sortedArray = filteredProducts.slice().sort((a: Product, b: Product) => {
                const orderFactor: number = sortingOptions.order === 'asc' ? 1 : -1
                return orderFactor * (a.price - b.price)
            })
            break
    }
    setSortedProducts(sortedArray)
}

  useEffect(() => {
    const newFilteredProducts: Product[] = processFilterOptions();
    setFilteredProducts(newFilteredProducts);
    processSortingOption();
  }, [filterOptions, sortingOptions, inventory]);


  return (
    <>
    <div className="container filteringAndSortingBar-div">
      <select id="brand" onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">---</option>
        <option value="Babolat">Babolat</option>
        <option value="DoPadel">DoPadel</option>
        <option value="Head">Head</option>
        <option value="Nox">Nox</option>
        <option value="Osaka">Osaka</option>
      </select>
      <select id="shape" onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">---</option>
        <option value="Rund">Rund</option>
        <option value="Dropp">Dropp</option>
        <option value="Diamant">Diamant</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select id="balance" onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="">---</option>
        <option value="Låg">Låg</option>
        <option value="Medel">Medel</option>
        <option value="Hög">Hög</option>
      </select>
      <select id="sorting" onChange={(e) => handleSortingChange(e.target.value)}>
        <option value="">---</option>
        <option value="price:asc">Pris: Stigande</option> {/* strängen splittas i field och sort order */}
        <option value="price:desc">Pris: Fallande</option>
        <option value="name:asc">Namn: A - Ö</option>
        <option value="name:desc">Namn: Ö - A</option>
      </select>
        <div className="">
          <input
            type="text"
            value={searchInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
            placeholder="Skriv för att söka..."
          />
          <ul>
              {getSuggestions().map((suggestion: Product, index) => (
                  <li key={index} onClick={() => handleSearchButtonClick(suggestion.name)}>
                      {suggestion.name}
                  </li>
              ))}
          </ul>
          <input type="button" onClick={() => handleSearchButtonClick(searchInput)}></input>
        </div>
        <input type="range" id="weight" onChange={(e) => handleFilterChange(e.target.value)}></input>
        <input type="range" id="price" onChange={(e) => handleFilterChange(e.target.value)}></input>
        <button type="button" id="reset-filter" onClick={() => handleResetButtonClick("")}></button>
    </div>
    {isProductDetailModalOpen ? <ProductDetailModal /> : <ProductList products = { sortedProducts } />}
    </>
  );
}

export default FilteringAndSortingBar;