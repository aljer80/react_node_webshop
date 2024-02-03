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
        handleResetButtonClick,
        handleRangeChange
    } = useProductContext()

    const [searchInput, setSearchInput] = useState<string>("");
    const [suggestionList, setSuggestionList] = useState<product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<product[]>([])
    const [sortedProducts, setSortedProducts] = useState<product[]>([])

    const getSuggestions = (): product[] | undefined => {
        if(!inventory || typeof inventory === "string"){
            return []
        }

        return inventory.filter(product => product.name.toLowerCase().match('^' + searchInput.toLowerCase()))
    }
    
    const processFilterOptions = () => {
        try{
            if(filterOptions && inventory !== null){
                let filteredArray: product[] = inventory
    
                if(Object.values(filterOptions).some(option => !!option)) {
                    filteredArray = inventory.filter(entry => {
                        return Object.entries(filterOptions).every(([property, value]) => {
                            if(!value){
                                return true
                            }
                            if(!entry.hasOwnProperty(property)){
                                throw new Error(`Property ${property} does not exist in the product entry.`)
                            }
                            const entryValue = entry[property as keyof product]?.toString().toLowerCase()
                            if(property === 'price' || property === 'weight'){
                                return entryValue <= parseInt(value)
                            }

                            return entryValue === value.toLowerCase()
                        })
                    })
                }
    
                console.log("Before filters: ", inventory)
                console.log("After filters: ", filteredArray)
                setFilteredProducts(filteredArray)
            }
        } catch (error) {
            console.error("Error processing filter options:", error)
        }
    }

    const updateSearch = (input: string) => {
        setSearchInput(input)
    }

    const processSortingOption = () => {
        if(sortingOptions && filteredProducts){
            console.log("Before sorting: ", filteredProducts)
            let sortedArray: product[] = []
            switch(sortingOptions.field){
                case "name":
                    sortedArray = filteredProducts.slice().sort((a: product, b: product) => {
                        const orderFactor: number = sortingOptions.order === 'asc' ? 1 : -1
                        const nameA = a.name || ''
                        const nameB = b.name || ''
                        return orderFactor * nameA.localeCompare(nameB)
                    })
                    break
                case "price":
                    sortedArray = filteredProducts.slice().sort((a: product, b: product) => {
                        const orderFactor: number = sortingOptions.order === 'asc' ? 1 : -1
                        return orderFactor * (a.price - b.price)
                    })
                    break
            }         
            console.log("After sorting: ", sortedArray)
        setSortedProducts(sortedArray)
        }
    }

    useEffect(() => {
        const newList: product[] | undefined = getSuggestions()
        if(newList){
            setSuggestionList(newList)
        }
    }, [searchInput])

    useEffect(() => {
        console.log("component update")
        processFilterOptions()
        processSortingOption()
        console.log("filtering: ", JSON.stringify(filterOptions), JSON.stringify(sortingOptions))
    }, [filterOptions, sortingOptions, inventory])

    return (
        <section id="product-grid-area">
            <div id="filtering-and-sorting-bar" role="toolbar">
                <select
                    id="brand"
                    className="filterSelect"
                    value={`brand:${filterOptions.brand}`}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFilterChange(e.target.value)}
                >
                    <option value="brand:">---</option>
                    <option value="brand:babolat">Babolat</option>
                    <option value="brand:dopadel">DoPadel</option>
                    <option value="brand:head">Head</option>
                    <option value="brand:nox">Nox</option>
                    <option value="brand:osaka">Osaka</option>
                </select>
                <select
                    id="shape"
                    className="filterSelect"
                    value={`shape:${filterOptions.shape}`}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFilterChange(e.target.value)}
                >
                    <option value="shape:">---</option>
                    <option value="shape:rund">Rund</option>
                    <option value="shape:dropp">Dropp</option>
                    <option value="shape:diamant">Diamant</option>
                    <option value="shape:hybrid">Hybrid</option>
                </select>
                <select
                    id="balannce"
                    className="filterSelect"
                    value={`balance:${filterOptions.balance}`}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleFilterChange(e.target.value)}
                >
                    <option value="balance:">---</option>
                    <option value="balance:låg">Låg</option>
                    <option value="balance:medel">Medel</option>
                    <option value="balance:hög">Hög</option>
                </select>
                <select
                    id="sorting"
                    className="filterSelect"
                    value={`${sortingOptions.field}:${sortingOptions.order}`}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSortingChange(e.target.value)}
                >
                    <option value="">---</option>
                    <option value="price:asc">Pris: Stigande</option>
                    <option value="price:desc">Pris: Fallande</option>
                    <option value="name:asc">Name: A - Ö</option>
                    <option value="name:desc">Name: Ö - A</option>
                </select>
                <div>
                    <input
                        type="text"
                        className="filter-text"
                        value={searchInput}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateSearch(e.target.value)}
                        placeholder="Type to search..."
                    />
                    {suggestionList &&
                        <ul className="dropdownUl">
                            {searchInput && suggestionList.map((suggestion: product) => (
                            <li key={suggestion.name} className="dropdownLi" onClick={() => handleSearchButtonClick(suggestion.name)}>
                                {suggestion.name}
                            </li>
                            ))}
                        </ul>
                    }
                    <button type="button" id="search-button" className="filterButton" onClick={() => handleSearchButtonClick(searchInput)}>Filter</button>
                </div>
                <label id="weight-label" htmlFor="weight">Vikt</label>
                <input
                    type="range"
                    id="weight"
                    className="filter-slide"
                    min="200"
                    max="500"
                    step="25"
                    value={filterOptions.weight}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRangeChange(e.currentTarget.id, e.currentTarget.value)}
                ></input>
                <label id="price-label" htmlFor="price">Pris</label>
                <input
                    type="range"
                    id="price"
                    className="filter-slide"
                    min="1000"
                    max="5000"
                    step="250"
                    value={filterOptions.price}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleRangeChange(e.currentTarget.id, e.currentTarget.value)}
                ></input>
                <button type="button" id="reset-filter" className="filterButton" onClick={() => handleResetButtonClick('reset')}>Återställ filter</button>
            </div>
            {isProductDetailModalOpen && <ProductDetailModal />}
            {filterOptions ? <p>filtered</p> : <p>unfiltered</p>}
            <ProductList products={filterOptions ? sortedProducts : inventory} />
        </section>
    )
}

export default FilteringSortingBar