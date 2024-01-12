import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ ...products }) => {   //behöver typ
  {/* kolla products */} 
  {/* returnera ett produktkort per produkt */}
    return (
        //kolla om ProductCard finns
        <>
          <ProductCard { ...products }/>
        </>
      )
    
}

export default ProductList;