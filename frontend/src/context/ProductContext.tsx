import { PropsWithChildren, createContext, useState, useEffect } from "react";

export interface Product {
  id: string, //eller _id?
  name:string,
  weight: string,
  description: string,
  balance: string,
  type: string,
  material: string,
  shape: string,
  brand: string,
  price: number,
  //image: string,
}

interface ProductContext {
  products: Product[]  
  loadAllProducts: () => void,
  //onAddToCart: (product: Product) => void; 
  onAddToCart: (productId: string) => void; //behöver både med och utan id. Id ska vara valbart
  handleAddToCart: (productId) => void;
  onFilterChange:() => void,
  handleProductFilterChange:() => void,
  processFilterChange:() => void, 
}


//allt som är gemensamt för komponentträdet vi använder
//visa produkt/er
export const ProductContext = createContext<ProductContext>(null as any);

export function ProductProvider({ children }: PropsWithChildren) {


  //functions and useEffects go here
  const [productFilteringOptions, setProductFilteringOptions] = useState<Filter[]>([]);
  const [productSortingOptions,setProductSortingOptions] = useState<Sort>();

  //dropdowns och rangesliders
  const handleProductFilterChange = () => {
    processProductFilterChange();
  }
  //dropdowns
  const processProductFilterChange = () => {
    
  }
  //dropdowns
  const handleSortingOptionChange = () => {
    processSortingOptionChange();
  }
  //dropdowns
  const processSortingOptionChange = () => {
    
  }

  //buttons
  const handleNameFilterButtonClick = () => {
    processProductFilterChange(); 
  }

  const handleResetFilterButtonClick = () => {
    processProductFilterChange();
  }

  

  const [products, setProducts] = useState<Product[]>([]);

  const loadAllProducts = async () => {
      try {
        const res = await fetch(
          "https://localhost:8080/api/v1/products"
        );
        const productData = await res.json()
        setProducts(productData);

      } catch (error) {
        console.log(error);
      }
    }

    //kolla om products finns JOBBA IN DETTA I loadAllProducts
          if(!inventory || inventory.length === 0) {
            return <p>Inga produkter tillgängliga</p>; 
          }
          if (!product){
            return null;
          }



  return (
    <ProductContext.Provider value={{
        products, 
        loadAllProducts
        }}>
      {children}
    </ProductContext.Provider>
  );

}