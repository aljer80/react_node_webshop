import { useEffect, useState } from "react";
import { Product, useProductContext } from "../../context/ProductContext";

const ProductDetailModal = () => {

  const {
    inventory,
    selectedProductId,
    handleAddToCartClick,
    handleModalButtonClick
  } = useProductContext();

  const [displayProduct, setDisplayProduct] = useState<Product>();

  useEffect(() => {
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
        <div className="product-detail-modal">
          <button onClick={handleModalButtonClick}>x</button>
          <img src={`/images/products/${displayProduct.brand}/${displayProduct.name}.jpg`} />
          <aside id="productFacts-panel">
            <p className="productFact">{displayProduct.brand}</p>
            <p className="productFact">{displayProduct.name</p>
            <p className="productFact">{displayProduct.weight}</p>
            <p className="productFact">{displayProduct.balance}</p>
            <p className="productFact">{displayProduct.shape}</p>
          </aside>
          <p className="productDescription">{displayProduct.description}</p>
          <p className="productPrice">{displayProduct.price}</p>
          <button type="button" className="appButton" title="Add to cart" onClick={handleAddToCartClick}>Lägg i varukorgen</button>
        </div>
      );
    
}

export default ProductDetailModal