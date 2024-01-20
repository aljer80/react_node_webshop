import ProductCard from "../ProductCard/ProductCard";
import { Product, ProductListProps } from "../../types/product.types";

/**
 * ProductList component for displaying a list of products using ProductCard.
 * @param {ProductListProps} props - Props for the ProductList component.
 * @returns {JSX.Element} JSX for the ProductList component.
 */
const ProductList: React.FC<ProductListProps> = ({products}) => {

  if(!ProductCard){
    throw new Error("Missing dependency");
  }
  if(!products){
    throw new Error("Missing products");
  }

  return (
    <div className="product-list">
      {products.map((product: Product) => (
      <ProductCard key={product.id} product={product} />
      ))};
    </div>
  );
}

export default ProductList;