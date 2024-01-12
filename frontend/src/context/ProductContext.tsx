import { PropsWithChildren, createContext, useState, useEffect } from "react";

export interface Product {
  _id: string,
  title: string,
  price: number,
  description: string,
  //image: string,
}

interface ProductContext {
    loadAllProducts: () => void,
    products: Product[]
}

export const ProductContext = createContext<ProductContext>(null as any);

export function ProductProvider({ children }: PropsWithChildren) {
//functions and useEffects go here

const [products, setProducts] = useState<Product[]>([]);

const loadAllProducts = async () => {
    try {
      const res = await fetch(
        "https://localhost:8080/api/v1/products"
      );
      const productData = await res.json()
      setProducts(productData);

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <ProductContext.Provider value={{
        products, 
        loadAllProducts
        }}>
      {children}
    </ProductContext.Provider>
  );

}