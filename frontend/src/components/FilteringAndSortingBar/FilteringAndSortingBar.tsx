import ProductList from "../ProductList/ProductList"


const FilteringAndSortingBar = ({ inventory }) => {  //vi behöver en type
  //kolla inventory
  //filtreringsfunktion
  //sorteringsfunktion

    return (
      //kolla att ProductList finns
        <>
           <ProductList { inventory }/>
        </>
      )
    
    
}

export default FilteringAndSortingBar;