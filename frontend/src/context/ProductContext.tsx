import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { fetchAllProducts } from "../utilities/ApiUtilities";
import { Product, sort } from "../types/product.types";

export interface ProductContextProps {
  inventory: Product[] | undefined
  sortingOptions: sort | undefined
  filterOptions: string[] | undefined
  isProductDetailModalOpen: boolean
  selectedProductId: number | null
  loadAllProducts: () => void,
  handleFilterChange:(value: string | undefined) => void
  changeFilterState: (value: string | undefined) => void
  handleSortingChange:(value: string) => void
  changeSortingState:(value: string) => void
  handleResetButtonClick: (value: string) => void
  handleSearchButtonClick: (value: string) => void
  handleProductCardClick: (id: number) => void
  toggleProductDetailModal:(id: number) => void
  handleToggleProductDetailModalClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

//allt som är gemensamt för komponentträdet vi använder
export const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const useProductContext = () => {
  const context:ProductContextProps | undefined = useContext(ProductContext);
  if(!context){
      throw new Error("Unable to load context!")
  }
  return context
}

export const ProductContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [inventory, setInventory] = useState<Product[]>([])
  const [filterOptions, setFilterOptions] = useState<string[]>([])
  const [sortingOptions, setSortingOptions] = useState<sort>({field:"name", order:"asc"})
  const [isProductDetailModalOpen, setIsProductDetailModalOpen] = useState<boolean>(false)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null)

  const loadAllProducts = async () => {
    try {
      const fetchedProducts: Product[] | string = await fetchAllProducts();
      if(typeof fetchedProducts === "string") {
        const parsedData: Product[] = JSON.parse(fetchedProducts)
        setInventory(parsedData);
      } else {
        setInventory(fetchedProducts);
      }
    } catch(error) {
      throw error;
    }
  }
  
  //dropdowns och rangesliders
  const handleFilterChange = (value: string | undefined) => {
    changeFilterState(value);
  }

  const changeFilterState = (value: string | undefined) => {
    if(!value) {
      setFilterOptions([]);
    } else {
      setFilterOptions((prevFilterOptions) => [...prevFilterOptions, value]);
    }
  }

  const handleSortingChange = (value: string) => {
    changeSortingState(value);
  }

  const changeSortingState = (value: string) => {
    const [field, order] = value.split(":");
    if(order === "asc" || order === "desc") {
      setSortingOptions({ field, order});
    } else {
      throw new Error("Incorrect sort order!");
    }
  }

  const handleResetButtonClick = (value: string) => {
    changeFilterState(value);
  }

  const handleSearchButtonClick = (value: string) => {
    changeFilterState(value);
  }

  const handleProductCardClick = (id: number) => {
    toggleProductDetailModal(id);
  }

  const handleToggleProductDetailModalClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    const json: string | undefined = e.currentTarget?.dataset.cartitem; 
    if(json) {
        const item: Product = JSON.parse(json);
        toggleProductDetailModal(item.id);
    } 
  }

  function toggleProductDetailModal(id: number) {
    if(isProductDetailModalOpen === false) {
        setIsProductDetailModalOpen(true);
        setSelectedProductId(id);
    } else{
        setIsProductDetailModalOpen(false);
        setSelectedProductId(null);
    }
  }

  useEffect(() => {
    loadAllProducts();
  }, [])

  
  return (
    <ProductContext.Provider value={{
      inventory,
      filterOptions,
      sortingOptions,
      isProductDetailModalOpen,
      selectedProductId,
      loadAllProducts,
      handleFilterChange,
      changeFilterState,
      handleSortingChange,
      changeSortingState,
      handleResetButtonClick,
      handleSearchButtonClick,
      handleProductCardClick,
      handleToggleProductDetailModalClick,
      toggleProductDetailModal
    }}>
      {children}
    </ProductContext.Provider>
  );
}