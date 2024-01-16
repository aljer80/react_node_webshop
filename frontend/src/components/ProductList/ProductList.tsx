import ProductCard from "../ProductCard/ProductCard";
import BrandBar from "../BrandBar/BrandBar";
import { Product } from "../../types/product.types";

interface ProductListProps {
  inventory: Product[];
  onAddToCart: (product: Product) => void; 
}

const ProductList: React.FC<ProductListProps> = ({ inventory, onAddToCart }) => {   //behöver typ
  //kolla om products finns
  if(!inventory || inventory.length === 0) {
    return <p>Inga produkter tillgängliga</p>; 
  }

    return (
        //kolla om ProductCard finns
        <div>
          <BrandBar />
          <div className="productList">
            {inventory.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      );
}

export default ProductList;