import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CartItem } from "../types/cart.types";

export interface CartContextProps{
    cart: CartItem[]
    isCartModalOpen: boolean
    addToCart: (product: CartItem) => void
    removeFromCart: (itemId: number) => void
    removeProductFromCart: (itemId: number) => void
    handleAddToCartButtonClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    handleToggleCartModalClick: () => void
    toggleCartModal:() => void
    handleRemoveFromCartButtonClick: (e:React.MouseEvent<HTMLButtonElement>) => void
    handleRemoveProductFromCartButtonClick: (e:React.MouseEvent<HTMLButtonElement>) => void
}

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCartContext = (): CartContextProps => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error("Unable to load context!")
    }
    return context;
}

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

    function addToCart(product: CartItem){
        const existingProductIndex: number = cart.findIndex(item => item.id === product.id);
        if(existingProductIndex !== -1) { //om inte ingenting (om man hittar någonting)
            const updatedCart: CartItem[] = [...cart];
            updatedCart[existingProductIndex].count += 1;
            setCart(updatedCart)
        } else {
            setCart(prevCart => [...prevCart, { ...product, count: 1 }]);
        }
    }

    function removeFromCart(itemId: number) {
        const existingProductIndex: number = cart.findIndex(item => item.id === itemId);
        if(existingProductIndex !== -1) {
            const updatedCart: CartItem[] = [...cart];
            updatedCart[existingProductIndex].count -= 1;
            if(updatedCart[existingProductIndex].count <1) {
                removeProductFromCart(existingProductIndex)
            }
            setCart(updatedCart);
        }
    }

    function removeProductFromCart(itemId: number){
        setCart(cart.filter(item => item.id !== itemId))
    }

    function handleAddToCartButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        const json: string | undefined = e.currentTarget?.dataset.cartitem; 
        if(json) {
            const cartitem: CartItem = JSON.parse(json);
            addToCart(cartitem);
        }
    }

    function handleRemoveFromCartButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        const json: string | undefined = e.currentTarget?.dataset.cartitem; 
        if(json) {
            const cartitem: CartItem = JSON.parse(json);
            removeFromCart(cartitem.id);
        }
    }

    function handleRemoveProductFromCartButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
        const json: string | undefined = e.currentTarget?.dataset.cartitem; 
        if(json) {
            const cartitem: CartItem = JSON.parse(json);
            removeProductFromCart(cartitem.id);
        }
    }

    function handleToggleCartModalClick() {
        toggleCartModal();
    }

    function toggleCartModal() {
        if(isCartModalOpen === false) {
            setIsCartModalOpen(true);
        } else{
            setIsCartModalOpen(false);
        }
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
        handleAddToCartButtonClick,
        handleRemoveFromCartButtonClick, 
        handleRemoveProductFromCartButtonClick,
        handleToggleCartModalClick,
        toggleCartModal
    }}>
        { children }
    </CartContext.Provider>
  );
}

