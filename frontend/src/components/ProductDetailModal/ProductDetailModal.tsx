import { PropsWithChildren, useEffect, useState } from "react"
import { useProductContext } from "../../contexts/ProductContext"
import { useCartContext } from "../../contexts/CartContext"
import { product } from "../../types/product.types"

/**
 * A modal component displaying details of a selected product.
 * Fetches product details from the product context based on the selectedProductId.
 * @returns JSX representing the product detail modal.
 */
const ProductDetailModal: React.FC<PropsWithChildren<{}>> = () => {
    const {
        inventory,
        selectedProductId,
        handleCloseProductDetailModalButtonClick,
    } = useProductContext()
    const cartContext = useCartContext()

    const [displayProduct, setDisplayProduct] = useState<product | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if(inventory){
            const loadProduct = async () => {
                try{
                    const newProduct: product | undefined = inventory.find(entry => entry.id === selectedProductId)
                    if(newProduct){
                        setDisplayProduct(newProduct)
                    }
                    else{
                        throw new Error("Product not found")
                    }
                }
                catch(error){
                    console.error(error)
                }
                finally {
                    setLoading(false)
                }
            }
            loadProduct()
        }
    }, [inventory, selectedProductId])
    if(loading){
        return <p>Not quite ready yet!</p>
    }
    if(!displayProduct){
        return <p>Your product is elsewhere!</p>
    }

    return (
        <div id="product-detail-modal" role="group">
            <button type="button" id="close-product-detail-modal" className="appButton" title="Close" onClick={handleCloseProductDetailModalButtonClick}>x</button>
            <aside id="product-display-panel">
                <img id="product-image" src={`/images/products/${displayProduct.brand}/${displayProduct.name}.jpg`}/>
                <p id="product-name" className="productName">Namn: {displayProduct.name}</p>
                <p id="product-price" className="productPrice">Pris: {displayProduct.price} kr</p>
                <p  id="product-description"className="productDescription">Beskrivning: {displayProduct.description}</p>
                <button type="button" id="product-name" className="appButton" title="Add to cart" onClick={() => cartContext.handleAddToCartButtonClick({
                    id: displayProduct.id,
                    name: displayProduct.name,
                    brand: displayProduct.brand,
                    price: displayProduct.price,
                    count: 0
                })}>Lägg i varukorgen</button>
            </aside>
            <aside id="product-facts-panel">
                <p id="product-brand" className="productFact">Märke: {displayProduct.brand}</p>
                <p id="product-type" className="productFact">{displayProduct.type}</p>
                <p id="product-weight" className="productFact">Vikt: {displayProduct.weight}</p>
                <p id="product-balance" className="productFact">Balans: {displayProduct.balance}</p>
                <p id="product-shape" className="productFact">Form: {displayProduct.shape}</p>
            </aside>
        </div>
    )
}

export default ProductDetailModal