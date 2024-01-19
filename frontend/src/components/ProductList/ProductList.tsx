import ProductCard from "../ProductCard/ProductCard";
import { Product, ProductListProps } from "../../types/product.types";

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