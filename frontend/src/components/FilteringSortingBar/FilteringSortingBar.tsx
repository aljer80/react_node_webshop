import { useState, useEffect, PropsWithChildren } from "react"
import { useProductContext } from "../../contexts/ProductContext"
import ProductList from "../ProductList/ProductList"
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal"
import { product } from "../../types/product.types"

/**
 * FilteringSortingBar component responsible for handling filtering and sorting of products.
 * This component renders various UI elements for filtering and sorting products and displays
 * either a list of filtered/sorted products or a product detail modal based on user interactions.
 * @returns {JSX.Element} JSX for the FilteringSortingBar component.
 */
const FilteringSortingBar: React.FC<PropsWithChildren<{}>> = () => {
    const {
        filterOptions,
        sortingOptions,
        inventory,
        isProductDetailModalOpen,
        handleFilterChange,
        handleSortingChange,
        handleSearchButtonClick,
        handleResetButtonClick
    } = useProductContext()

    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<product[]>([])
    const [sortedProducts, setSortedProducts] = useState<product[]>([])

    const getSuggestions = (): product[] | undefined => {
        if(!inventory || !Array.isArray(inventory)){
            return []
        }
        return inventory.filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()))
    }
    
    const processFilterOptions = () => {
        if(filterOptions && inventory !== null){
            let filteredArray: product[] = inventory.filter(entry => {
                return filterOptions.every(option => {
                    const [property, value] = option.split(':')
                    return entry[property as keyof product] === value
                })
            })
 
            setFilteredProducts(filteredArray)
        }
    }

    const processSortingOption = () => {
        if(sortingOptions){
            let sortedArray: product[] = []
            switch(sortingOptions.field){
                case "name":
                    sortedArray = filteredProducts.slice().sort((a: product, b: product) => {
                        const orderFactor: number = sortingOptions.order === 'asc' ? 1 : -1
                        return orderFactor * a.name.localeCompare(b.name)
                    })
                    break
                case "price":
                    sortedArray = filteredProducts.slice().sort((a: product, b: product) => {
                        const orderFactor: number = sortingOptions.order === 'asc' ? 1 : -1
                        return orderFactor * (a.price - b.price)
                    })
                    break
            }

            setSortedProducts(sortedArray)
        }
    }

    useEffect(() => {
        processFilterOptions()
        processSortingOption()
    }, [filterOptions, sortingOptions, inventory])

    return (
        <section id="product-grid-area">
            <div id="filtering-and-sorting-bar" role="toolbar">
                <select id="brand" className="filterSelect" defaultValue="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFilterChange(e.target.value)}>
                    <option value="">---</option>
                    <option value="brand:Babolat">Babolat</option>
                    <option value="brand:DoPadel">DoPadel</option>
                    <option value="brand:Head">Head</option>
                    <option value="brand:Nox">Nox</option>
                    <option value="brand:Osaka">Osaka</option>
                </select>
                <select id="shape" className="filterSelect" defaultValue="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFilterChange(e.target.value)}>
                    <option value="">---</option>
                    <option value="shape:Round">Rund</option>
                    <option value="shape:Drop">Dropp</option>
                    <option value="shape:Diamond">Diamant</option>
                    <option value="shape:Hybrid">Hybrid</option>
                </select>
                <select id="balance" className="filterSelect" defaultValue="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFilterChange(e.target.value)}>
                    <option value="">---</option>
                    <option value="balance:Bottom">Låg</option>
                    <option value="balance:Center">Medel</option>
                    <option value="balance:Top">Hög</option>
                </select>
                <select id="sorting" className="filterSelect" defaultValue="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSortingChange(e.target.value)}>
                    <option value="">---</option>
                    <option value="price:asc">Pris: stigande</option>
                    <option value="price:desc">Pris: fallande</option>
                    <option value="name:asc">Namn: A - Ö</option>
                    <option value="name:desc">Namn: Ö - A</option>
                </select>
                <div>
                    <input
                        type="text"
                        className="filter-text"
                        value={searchInput}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                        placeholder="Type to search..."
                    />
                    <ul className="dropdownUl">
                        {getSuggestions().map((suggestion: product) => (
                        <li key={suggestion.name} className="dropdownLi" onClick={() => handleSearchButtonClick(suggestion.name)}>
                            {suggestion.name}
                        </li>
                        ))}
                    </ul>
                    <button type="button" id="search-button" className="filterButton" onClick={() => handleSearchButtonClick(searchInput)}>Filter</button>
                </div>
                <label id="weight-label" className="filter-slide" htmlFor="weight">Vikt</label>
                <input type="range" id="weight" min="0" max="500" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e.target.value)}></input>
                <label id="price-label" htmlFor="price">Pris</label>
                <input type="range" id="price" className="filter-slide" min="0" max="3000" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFilterChange(e.target.value)}></input>
                <button type="button" id="reset-filter" className="filterButton" onClick={() => handleResetButtonClick("")}>Återställ filter</button>
            </div>
            {isProductDetailModalOpen &&
                <ProductDetailModal />
            }
            <ProductList products = { filterOptions ? sortedProducts : inventory } />
        </section>
    )
}

export default FilteringSortingBar