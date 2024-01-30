import { useProductContext } from "../../contexts/ProductContext"
import { ProductCardProps } from "../../types/product.types"

/**
 * ProductCard component responsible for rendering individual product cards.
 * This component displays product details and handles click events to view more details.
 * @param {ProductCardProps} props - Props containing the product data.
 * @returns {JSX.Element} JSX for the ProductCard component.
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const {
        handleProductCardClick
    } = useProductContext();

    return (
        <div key={product.id} id={`product-card-${product.id}`} className="productCard" role="group" onClick={() => { handleProductCardClick(product.id) }}>
            <img src={`/images/products/${product.brand}/${product.name}.jpg`} alt={`${product.brand}: ${product.name} @ ${product.price}`} className="productPicture" />
            <p className="productName">{product.name}</p>
            <p className="productDescription">{product.description}</p>
            <p className="productPrice">{product.price}</p>
        </div>
    );
}

export default ProductCard

//bilden ska heta produktnamn.jpg (product.name)