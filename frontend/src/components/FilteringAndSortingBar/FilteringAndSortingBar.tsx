import { useState, useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import ProductList from "../ProductList/ProductList";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import { Product } from "../../types/product.types";

const FilteringAndSortingBar: React.FC = () => {    
  if(!ProductList){
    throw new Error("Missing dependency!");
  }

  const {
    inventory, 
    filterOptions, 
    sortingOptions, 
    isProductDetailModalOpen,
    handleFilterChange,
    handleSortingChange, 
    handleSearchButtonClick,
    handleResetButtonClick
  } = useProductContext();

  const [searchInput, setSearchInput] = useState<string>("");
  const getSuggestions = ():Product[] => {
    return inventory.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()));
  }

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const processFilterOptions = () => {
    const filteredArray: Product[] = inventory.filter(entry => {
      return filterOptions.every(option => {
        const [property, value] = option.split(":")
        return entry[property as keyof Product] === value;
      })
    })
    return filteredArray
  }

  useEffect(() => {
    const newFilteredProducts: Product[] = processFilterOptions();
    setFilteredProducts(newFilteredProducts);
  }, [filterOptions, sortingOptions, inventory]);


    return (
      <>
      <div>
        <select id="brand" onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="---"></option>
          <option value="Babolat">Babolat</option>
          <option value="DoPadel">DoPadel</option>
          <option value="Head">Head</option>
          <option value="Nox">Nox</option>
          <option value="Osaka">Osaka</option>
        </select>
        <select id="shape" onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="---"></option>
          <option value="">Runt</option>
          <option value="">Droppformat</option>
          <option value="">Diamantformat</option>
        </select>
        <select id="balance" onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="---"></option>
          <option value="">Låg balans</option>
          <option value="">Medel balans</option>
          <option value="">Hög balans</option>
        </select>
        <select id="sorting" onChange={(e) => handleSortingChange(e.target.value)}>
          <option value="---"></option>
          <option value=""></option>
          <option value=""></option>
        </select>
          <div>
              <input
                  type="text"
                  value={searchInput}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                  placeholder="Type to search..."
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
      {isProductDetailModalOpen ? <ProductDetailModal /> : <ProductList products = { filteredProducts } />}
      </>
    );
}

export default FilteringAndSortingBar;