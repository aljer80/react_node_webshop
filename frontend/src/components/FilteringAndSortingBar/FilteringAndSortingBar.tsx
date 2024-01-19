import { ProductContext } from "../../context/ProductContext";
import ProductList from "../ProductList/ProductList";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";

const FilteringAndSortingBar: React.FC = () => {    

  if(!ProductList){
    throw new Error("Unable to load productList");
  }

  const {
    handleProductFilterChange,
    handleNameFilterButtonClick,
    handleResetFilterButtonClick,
  } = useContext(ProductContext);

    return (
      <div>
        <div id="filtering-and-sorting-bar" role="toolbar">
          <select name="brand-filter" id="brand" title="raquet-brand" onChange={handleProductFilterChange}></select>
          <option value=""></option>
          <select name="shape-filter" id="shape" title="raquet-shape" onChange={handleProductFilterChange}></select>
          <option value=""></option>
          <select name="balance-filter" id="balance" title="raquet-balance" onChange={handleProductFilterChange}></select>
          <option value=""></option>
          <select name="sorting-filter" id="sorting" title="raquet-sorting" onChange={handleProductFilterChange}></select>
          <option value=""></option>

          <input type="text" name="name-filter" id="name" title="raquet-name" placeholder="raquet-name"/>
          <button type="button" name="name-filter-button" id="name-filter-button" title="name-filter-button" onClick={handleNameFilterButtonClick}>Sök</button>
          <input type="range" name="weight-filtering-range" id="weight-filtering-range" title="weight-filtering-range" onChange={handleProductFilterChange}/>
          <input type="range" name="price-filtering-range" id="price-filtering-range" title="price-filtering-range" onChange={handleProductFilterChange}/>
          <button type="button" name="reset-filter-button" id="reset-filter-button" title="reset-filter-button" onClick={handleResetFilterButtonClick}>Återställ filter</button>
        </div>
        <ProductList />
        <ProductCard />            
        
      </div>
    );
}

export default FilteringAndSortingBar;

// const filterOptions = [
//   { name: 'brand', title: 'raquet-brand' },
//   { name: 'shape', title: 'raquet-shape' },
//   { name: 'balance', title: 'raquet-balance' },
//   { name: 'sorting', title: 'raquet-sorting' },
// ];

// const FilterAndSortingBar: React.FC = () => {
//   const renderFilterOptions = () => {
//     return filterOptions.map((option) => (
//       <React.Fragment key={option.name}>
//         <select name={`${option.name}-filter`} id={option.name} title={option.title} onChange={handleProductFilterChange}>
//           <option value=""></option>
//         </select>
//         <option value=""></option>
//       </React.Fragment>
//     ));
//   };

//   return (
//     <div>
//       <div id="filtering-and-sorting-bar" role="toolbar">
//         {renderFilterOptions()}

//         {/* Name Filter */}
//         <input type="text" name="name-filter" id="name" title="raquet-name" placeholder="raquet-name" />
//         <button type="button" name="name-filter-button" id="name-filter-button" title="name-filter-button" onClick={handleNameFilterButtonClick}>
//           Sök
//         </button>

//         {/* Weight and Price Filters */}
//         <input type="range" name="weight-filtering-range" id="weight-filtering-range" title="weight-filtering-range" onChange={handleProductFilterChange} />
//         <input type="range" name="price-filtering-range" id="price-filtering-range" title="price-filtering-range" onChange={handleProductFilterChange} />

//         {/* Reset Filter Button */}
//         <button type="button" name="reset-filter-button" id="reset-filter-button" title="reset-filter-button" onClick={handleResetFilterButtonClick}>
//           Återställ filter
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FilterAndSortingBar;