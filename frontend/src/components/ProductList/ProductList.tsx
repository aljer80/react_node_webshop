import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../ProductCard/ProductCard";

const ProductList: React.FC = () => {

  return (
    <div className="productList">
      {inventory.map((product) => (
      <ProductCard key={products.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;