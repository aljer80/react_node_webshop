import { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import { Product } from "../../types/product.types";
import { useCartContext } from "../../context/CartContext";
import { CartItem } from "../../types/cart.types";

/**
 * ProductDetailModal component for displaying detailed information about a selected product.
 * @returns {JSX.Element} JSX for the ProductDetailModal component.
 */
const ProductDetailModal: React.FC = () => {

  const {
    inventory,
    selectedProductId,
    handleToggleProductDetailModalClick
  } = useProductContext();
  const {
    handleAddToCartButtonClick
  } = useCartContext

  const [displayProduct, setDisplayProduct] = useState<Product | undefined>(undefined);
  const [cartItem, setCartItem] = useState<CartItem | undefined>(undefined);

  useEffect(() => {
    /**
     * Loads the selected product information into the displayProduct state.
     */
    const loadProduct = async () => {
      const newProduct: Product = inventory.filter(item => {
        item.id !== selectedProductId
        return item
      })
      setDisplayProduct(newProduct);
      setCartItem({
        id: displayProduct.id, 
        name: displayProduct.name,
        brand: displayProduct.brand,
        price: displayProduct.price, 
        count: 0
      })
    }
    loadProduct();
  },[selectedProductId])

  
    return (
        <div className="container" id="productDetail-modal">
          <button onClick={handleToggleProductDetailModalClick}>x</button>
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
            <button type="button" className="appButton" title="Add to cart" data-cart-item={JSON.stringify(cartItem)} onClick={ handleAddToCartButtonClick }>Lägg i varukorgen</button>
          </div>
        </div>
      );
}

export default ProductDetailModal