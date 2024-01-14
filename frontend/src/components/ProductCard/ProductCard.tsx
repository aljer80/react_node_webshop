//API kan hämta informationen
//interface hämtar från API (interface inte skapat än)
import { Product } from "../../types/product.types";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => { //behöver type
  //kolla product (att product finns)
  if (!product){
    return null;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  }

    return (
        <div className="productCard">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button className="buyButton" onClick={() => handleAddToCart(product.id)}>Lägg i varukorg</button> 
          {/* product.id eller product._id på buyButton? */}
        </div>
      );
}

export default ProductCard;


