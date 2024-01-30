import { ProductContextProvider } from "../../contexts/ProductContext"
import ShopHero from "../../components/ShopHero/ShopHero"
import FilteringSortingBar from "../../components/FilteringSortingBar/FilteringSortingBar"
import { PropsWithChildren } from "react"

/**
 * Shop component responsible for rendering the shop page.
 * This component provides the context for product data and renders
 * the shop hero section along with the filtering and sorting bar.
 * @returns {JSX.Element} JSX for the Shop component.
 */
const Shop: React.FC<PropsWithChildren<{}>> = () => {
    return (
        <ProductContextProvider>
            <main>
                <ShopHero />
                <FilteringSortingBar />
            </main>
        </ProductContextProvider>
    )
}

export default Shop