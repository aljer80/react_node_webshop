import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import { Product } from "../../types/product.types";

/**
 * ProductDetailModal component for displaying detailed information about a selected product.
 * @returns {JSX.Element} JSX for the ProductDetailModal component.
 */
const ProductDetailModal = () => {

  const {
    inventory,
    selectedProductId,
    handleAddToCartClick,
    handleModalButtonClick
  } = useProductContext();

  const [displayProduct, setDisplayProduct] = useState<Product>();

  useEffect(() => {
    /**
     * Loads the selected product information into the displayProduct state.
     */
    const loadProduct = async () => {
      const newProduct: Product = inventory.filter(entry => {
        entry.id !== selectedProductId
        return entry
      })
      setDisplayProduct(newProduct);
    }
    loadProduct();
  },[selectedProductId])

  
    return (
        <div className="container productDetail-modal">
          <button onClick={handleModalButtonClick}>x</button>
          <img src={`/images/products/${displayProduct.brand}/${displayProduct.name}.jpg`} />
          <div className="productDetail-content">
            <aside id="productFacts-panel">
              <p className="productFact">{displayProduct.brand}</p>
              <p className="productFact">{displayProduct.name}</p>
              <p className="productFact">{displayProduct.weight}</p>
              <p className="productFact">{displayProduct.balance}</p>
              <p className="productFact">{displayProduct.shape}</p>
            </aside>
            <p className="productDescription">{displayProduct.description}</p>
            <p className="productPrice">{displayProduct.price}</p>
            <button type="button" className="appButton" title="Add to cart" onClick={handleAddToCartClick}>Lägg i varukorgen</button>
          </div>
        </div>
      );
}

export default ProductDetailModal