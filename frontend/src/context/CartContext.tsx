import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem } from "../types/cart.types";

export interface CartContextProps{
    cart: CartItem[]
    isCartModalOpen: boolean
    addToCart: (product: CartItem) => void
    removeFromCart: (itemId: number) => void
    removeProductFromCart: (itemId: number) => void
    handleAddToCartButtonClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    handleCloseModalButtonClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    handleRemoveFromCartButtonClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    handleRemoveProductFromCartButtonClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCartContext= () => {
    const context: CartContextProps | undefined = useContext(CartContext);
    if(!context) {
        throw new Error("Unable to load context!")
    }
    return context;
}

export const CartProvider: React.FC<{ children: ReactNode }> = ( { children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

    function addToCart(product: CartItem){
        const existingProductIndex: number = cart.findIndex(item => item.id === product.id);
        if(existingProductIndex !== -1) {
            const updatedCart: CartItem[] = [...cart];
            updatedCart[existingProductIndex].count += 1;
            setCart(updatedCart)
        } else {
            setCart(prevCart => [...prevCart, { ...product, count: 1 }]);
        }
    }

    function removeFromCart(itemId: number) {
        const existingProductIndex: number = cart.findIndex(item => item.id === item.id);
        if(existingProductIndex !== -1) {
            const updatedCart: CartItem[] = [...cart];
            updatedCart[existingProductIndex].count -= 1;
            setCart(updatedCart)
        } else {
            setCart(cart.filter(item => item.id !== itemId));
        }
    }

    function removeProductFromCart(itemId: number){
        setCart(cart.filter(item => item.id !== itemId))
    }

    function handleAddToCartButtonClick(e:React.MouseEvent<HTMLButtonElement>) {
        const json: string | undefined = e.currentTarget?.dataset.cartitem; 
        if(json) {
            const cartitem: cartItem = JSON.parse(json);
            addToCart(cartitem.id);
        }
    }

    function handleRemoveFromCartButtonClick(e:React.MouseEvent<HTMLButtonElement>) {
        const json: string | undefined = e.currentTarget?.dataset.cartitem; 
        if(json) {
            const cartitem: cartItem = JSON.parse(json);
            removeFromCart(cartitem.id);
        }
    }

    function handleRemoveProductFromCartButtonClick(e:React.MouseEvent<HTMLButtonElement>) {
        const json: string | undefined = e.currentTarget?.dataset.cartitem; 
        if(json) {
            const cartitem: cartItem = JSON.parse(json);
            removeProductFromCart(cartitem.id);
        }
    }

    function handleCloseModalButtonClick() {
        setIsCartModalOpen(false);
    }

    useEffect(() => {
        console.log("Nisse");
    },[]);


  return (
    <CartContext.Provider value={{
        cart,
        isCartModalOpen, 
        addToCart,
        removeFromCart,
        removeProductFromCart,
        handleCloseModalButtonClick,
        handleAddToCartButtonClick,
        handleRemoveFromCartButtonClick, 
        handleRemoveProductFromCartButtonClick
    }}>
        {children}
    </CartContext.Provider>
  );
}

export default CartContext