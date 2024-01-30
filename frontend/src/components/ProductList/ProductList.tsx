import ProductCard from "../ProductCard/ProductCard"
import { product, ProductListProps } from "../../types/product.types"

/**
 * A component that renders a list of products using ProductCard component.
 * @param props - The props passed to the component.
 * @param props.products - An array of product objects to render.
 * @returns JSX representing the product list.
 * @example
 * // Example usage of ProductList component
 * <ProductList products={[{ id: 1, name: 'Product A', price: 20.99, image: 'product-a.jpg' }, { id: 2, name: 'Product B', price: 15.99, image: 'product-b.jpg' }]} />
 */
const ProductList: React.FC<ProductListProps> = ({ products }) => {

    return (
        <section id="product-grid">
        {products.length > 0 ? (
            products.map((product: product) => (
                <ProductCard key={product.id} product={ product } />
            ))
        ) : (
            <p className="appMessage">There are no products!</p>
        )}
        </section>
    )
}

export default ProductList