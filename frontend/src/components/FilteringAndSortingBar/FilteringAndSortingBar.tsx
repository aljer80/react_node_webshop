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

//spara filtrering i state så att sidan ser ut som den gjorde när man går tillbaka till den från cart 