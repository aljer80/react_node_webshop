import { ProductContext } from "../../context/ProductContext";

const ProductCard: React.FC = () => {

    return (
        <div className="productCard">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button className="buyButton" onClick={() => handleAddToCart()}>Lägg i varukorg</button> 
        </div>
      );
}

export default ProductCard; 