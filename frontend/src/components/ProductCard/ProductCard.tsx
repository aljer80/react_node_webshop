import { useProductContext } from "../../context/ProductContext";
import { ProductCardProps } from "../../types/product.types";

/**
 * ProductCard component responsible for rendering an individual product card.
 * @param {ProductCardProps} props - Props containing the product information.
 * @returns {JSX.Element} JSX for the ProductCard component.
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const {
    handleProductCardClick
  } = useProductContext();

    return (
        <div key={product.id} id={`product-card-${product.id}`} className="product-card" role="group" onClick={() => { handleProductCardClick(product.id) }}>
          <img src={`/images/products/${product.brand}/${product.name}.jpg`} alt={`${product.brand}: ${product.name} @ ${product.price}`}/>
          <p className="productName">{product.name}</p>
          <p className="productDescription">{product.description}</p>
          <p className="productPrice">{product.price}</p>
        </div>
      );
}

export default ProductCard; 

//bilden ska heta produktnamn.jpg (product.name)