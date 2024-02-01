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

    // Modify product name and brand for image source
    const modifiedProductName = product.name.toLowerCase().replace(/\s+/g, '-')
    const modifiedBrandName = product.brand.toLowerCase()

    return (
        <div key={product.id} id={`product-card-${product.id}`} className="productCard" role="group" onClick={() => { handleProductCardClick(product.id) }}>
            <img className="productPicture" src={`/images/products/${modifiedBrandName}/${modifiedProductName}.jpg`} alt={`${product.brand}: ${product.name} @ ${product.price}`} />
            <p className="productName">{product.name}</p>
            <p className="productPrice">Pris: {product.price} kr</p>
        </div>
    );
}

export default ProductCard