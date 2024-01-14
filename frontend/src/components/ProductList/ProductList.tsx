import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products, onAddToCart }) => {   //behöver typ
  //kolla om products finns
  if(!products || products.length === 0) {
    return <p>Inga produkter tillgängliga</p>; 
  }

    return (
        //kolla om ProductCard finns
        <div className="productList">
          {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}/>
          ))}
        </div>
      );
}

export default ProductList;