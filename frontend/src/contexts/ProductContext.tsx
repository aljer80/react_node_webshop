import { createContext, useContext, useState, useEffect, PropsWithChildren } from "react"
import { fetchAllProducts } from "../utilities/ApiUtility"
import { product, sort, filter } from "../types/product.types"

/**
 * Interface defining the shape of the product context.
 */
export interface ProductContextProps{
    inventory: product[] | null
    filterOptions: filter
    sortingOptions: sort | undefined
    isProductDetailModalOpen: boolean
    selectedProductId: number | null
    loadAllProducts: () => void
    handleFilterChange: (value: string | undefined) => void
    changeFilterState: (value: string | undefined) => void
    handleSortingChange: (value: string) => void
    handleRangeChange: (category: string, value: string) => void
    changeSortingState: (value: string) => void
    handleResetButtonClick: (value: string) => void
    handleSearchButtonClick: (value: string) => void
    handleProductCardClick: (id: number) => void
    openProductDetailModal: (id: number) => void
    handleCloseProductDetailModalButtonClick: () => void
    closeProductDetailModal: () => void
}

/**
 * Context for managing product-related state and actions.
 */
export const ProductContext = createContext<ProductContextProps | undefined>(undefined)

/**
 * Hook to access the product context.
 * @returns Product context object.
 * @throws Error if product context is not found.
 */
export const useProductContext = (): ProductContextProps => {
    const context = useContext(ProductContext)
    if(!context){
        throw new Error("Unable to load context!")
    }

    return context
}

/**
 * Provider component for the product context.
 * Manages product-related state and provides access to it.
 */
export const ProductContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [inventory, setInventory] = useState<product[] | null >(null)
    const [filterOptions, setFilterOptions] = useState<filter>({
        brand: '',
        shape: '',
        balance: '',
        weight: undefined,
        price: undefined,
    })
    const [sortingOptions, setSortingOptions] = useState<sort>({field:"name", order:"asc"})
    const [isProductDetailModalOpen, setIsProductDetailModalOpen] = useState<boolean>(false)
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null)

    /**
     * Loads all products from the API.
     */
    const loadAllProducts = async () => {
        try{
            const fetchedProducts: product[] = await fetchAllProducts()
 
            if(typeof fetchedProducts !== 'string'){
                console.log("Received from backend", fetchedProducts)
                setInventory(fetchedProducts)
            }
            else{
                setInventory([
                    {
                        id: 1,
                        name: "Testname",
                        brand: "TestBrand",
                        weight: 300,
                        shape: "diamond",
                        balance: "top",
                        price: 500,
                        type: "Pro",
                        description: "Testing",
                        material: "carbon"
                    }
                ])
            console.log("Failed to fetch products!")
            }
        }
        catch(error){
            console.error("Error loading products:", error)
        }
    }

    /**
     * Handles changes in filter options.
     * @param value - New filter value.
     */
    const handleFilterChange = (value: string | undefined) => {
        changeFilterState(value)
    }
    
    /**
     * Handles changes in filter options.
     * @param value - New filter value.
     */
    const changeFilterState = (value: string | undefined) => {
        if(value === 'reset'){
            setFilterOptions({
                brand: '',
                shape: '',
                balance: '',
                weight: 0,
                price: 0,
            })
        }
        else if(value){
            const [category, option] = value.split(':')

            setFilterOptions(
                prevFilterOptions => ({
                    ...prevFilterOptions,
                    [category]:option || ''
                })
            )
        }
    }

    /**
     * Handles changes in sorting options.
     * @param value - New sorting value.
     */
    const handleSortingChange = (value: string) => {
        changeSortingState(value)
    }

    /**
     * Handles changes in range options.
     * @param value - New range value.
     */
    const handleRangeChange = (category:string, value: string) => {
        changeFilterState(`${category}:${value}`)
    }

    /**
     * Handles changes in sorting options.
     * @param value - New sorting value.
     */
    const changeSortingState = (value: string) => {
        const [field, order] = value.split(':')
        if(order === "asc" || order === "desc"){
            setSortingOptions({ field, order })
        }
        else{
            throw new Error("Incorrect sort order!")
        }
    }
    
    /**
     * Handles the click event on the reset filter button.
     * @param {string} value - The value to reset the filter.
     */
    const handleResetButtonClick = (value: string) => {
        changeFilterState(value)
    }
    
    /**
     * Handles the click event on the search button.
     * @param {string} value - The value to search.
     */
    const handleSearchButtonClick = (value: string) => {
        changeFilterState(`name:${value}`)
    }

    /**
     * Handles the click event on a product card.
     * @param {number} id - The ID of the product card clicked.
     */
    const handleProductCardClick = (id: number) => {
        openProductDetailModal(id)
    }

    /**
     * Opens the product detail modal.
     * @param {number} id - The ID of the product to show in the detail modal.
     */
    const openProductDetailModal = (id: number) => {
        setSelectedProductId(id)
        setIsProductDetailModalOpen(true)
    }

    /**
     * Handles the click event to close the product detail modal.
     */
    const handleCloseProductDetailModalButtonClick = () => {
        closeProductDetailModal()
    }

    /**
     * Closes the product detail modal.
     */
    const closeProductDetailModal = () => {
        setSelectedProductId(null)
        setIsProductDetailModalOpen(false)
    }

    useEffect(() => {
        console.log("starting productContext")
        loadAllProducts()
    }, [filterOptions, sortingOptions]);

    return (
        <ProductContext.Provider
        value={{
            inventory,
            filterOptions,
            sortingOptions,
            isProductDetailModalOpen,
            selectedProductId,
            loadAllProducts,
            handleFilterChange,
            changeFilterState,
            handleSortingChange,
            handleRangeChange,
            changeSortingState,
            handleResetButtonClick,
            handleSearchButtonClick,
            handleProductCardClick,
            openProductDetailModal,
            handleCloseProductDetailModalButtonClick,
            closeProductDetailModal
        }}>
            {children}
        </ProductContext.Provider>
    )
}