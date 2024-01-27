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
    } = useProductContext();

    const {
        handleAddToCartButtonClick
    } = useCartContext();

    const [displayProduct, setDisplayProduct] = useState<product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(inventory){
            const loadProduct = async () => {
                try{
                    const newProduct: product | undefined = inventory.find(entry => entry.id === selectedProductId);
                    if(newProduct){
                        setDisplayProduct(newProduct);
                    }
                    else{
                        throw new Error("Product not found");
                    }
                }
                catch(error){
                    console.error(error);
                }
                finally {
                    setLoading(false);
                }
            }
            loadProduct();
        }
    }, [inventory, selectedProductId]);
    if(loading){
        return <p>Not quite ready yet!</p>
    }
    if(!displayProduct){
        return <p>Your product is elsewhere!</p>
    }

    return (
        <div id="product-detail-modal" role="group">
            <button type="button" className="appButton" title="Close" onClick={handleCloseProductDetailModalButtonClick}>x</button>
            <img src={`/images/products/${displayProduct.brand}/${displayProduct.name}.jpg`}/>
            <p className="productName">{displayProduct.name}</p>
            <p className="productPrice">{displayProduct.price}</p>
            <aside id="product-facts-panel">
                <p className="productFact">{displayProduct.brand}</p>
                <p className="productFact">{displayProduct.type}</p>
                <p className="productFact">{displayProduct.weight}</p>
                <p className="productFact">{displayProduct.balance}</p>
                <p className="productFact">{displayProduct.shape}</p>
            </aside>
            <p className="productDescription">{displayProduct.description}</p>
            <button type="button" className="appButton" title="Add to cart" onClick={handleAddToCartButtonClick}>Add to cart</button>
        </div>
    );
}

export default ProductDetailModal