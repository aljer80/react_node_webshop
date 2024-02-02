import { createContext, useContext, useState, useEffect, Dispatch, PropsWithChildren } from "react"
import { cartItem } from "../types/cart.types"
import { useNavigate } from "react-router-dom"

/**
 * Interface defining the shape of the cart context.
 */
export interface CartContextProps{
    cart: cartItem[]
    setCart: Dispatch<cartItem[]>
    isCartModalOpen: boolean
    setIsCartModalOpen: Dispatch<boolean>
    addToCart: (product: cartItem) => void
    removeFromCart: (itemId: number) => void
    removeProductFromCart: (itemId: number) => void
    handleCloseModalButtonClick: () => void
    handleAddToCartButtonClick: (item: cartItem) => void
    handleRemoveFromCartButtonClick: (item: number) => void
    handleRemoveProductFromCartButtonClick: (item: number) => void
}

/**
 * Context for managing cart-related state and actions.
 */
export const CartContext = createContext<CartContextProps | undefined>(undefined)

export const useCartContext = () => {
    try{
        const context = useContext(CartContext)
        if(!context){
            throw new Error("Error loading cartContext!")
        }

        return context
    }
    catch(error){
        console.log(error)
    }
}

/**
 * Provider component for the cart context.
 * Manages cart-related state and provides access to it.
 * @param {PropsWithChildren<{}>} children - The child elements.
 * @returns {JSX.Element} JSX for the CartContextProvider component.
 */
export const CartContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const [cart, setCart] = useState<cartItem[]>([])
    const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(true)
    const navigate = useNavigate()

    /**
     * Adds a product to the cart or increments its count if already present.
     * @param {cartItem} product - The product to add to the cart.
     */
    function addToCart(product: cartItem){
        const existingProductIndex: number = cart.findIndex(item => item.id === product.id);
        if(existingProductIndex !== -1){
            const updatedCart: cartItem[] = [...cart];
            updatedCart[existingProductIndex].count += 1
            setCart(updatedCart)
        }
        else{
            setCart(prevCart => [...prevCart, { ...product, count: 1 }])
        }
    }

    /**
     * Removes a product from the cart or decrements its count if multiple items.
     * @param {number} itemId - The ID of the item to remove from the cart.
     */
    function removeFromCart(itemId: number){
        const existingProductIndex = cart.findIndex(item => item.id === itemId);
        if(existingProductIndex !== -1){
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].count -= 1
            if(updatedCart[existingProductIndex].count < 1){
                // removeProductFromCart(existingProductIndex)
                updatedCart.splice(existingProductIndex, 1);
            }
            setCart(updatedCart)
        }
    }

    /**
     * Removes a product completely from the cart.
     * @param {number} itemId - The ID of the item to remove from the cart.
     */
    function removeProductFromCart(itemId: number){
        setCart(cart.filter(item => item.id !== itemId))
    }

    /**
     * Handler for the add to cart button click event.
     * Calls the addToCart function to add the specified item to the cart.
     * @param {cartItem} item - The item to add to the cart.
     */
    function handleAddToCartButtonClick(item: cartItem){
        addToCart(item)
    }

    /**
     * Handler for the remove from cart button click event.
     * Calls the removeFromCart function to remove the item with the specified ID from the cart.
     * @param {number} itemId - The ID of the item to remove from the cart.
     */
    function handleRemoveFromCartButtonClick(itemId: number){
        removeFromCart(itemId)
    }

    /**
     * Handler for the remove product from cart button click event.
     * Calls the removeProductFromCart function to remove the product with the specified ID from the cart.
     * @param {number} itemId - The ID of the product to remove from the cart.
     */
    function handleRemoveProductFromCartButtonClick(itemId: number){
        removeProductFromCart(itemId)
    }

    /**
     * Closes the cart modal.
     */
    function handleCloseModalButtonClick(){
        setIsCartModalOpen(false)
        navigate("/")
    }
    
    /**
     * Effect for logging that the cart context has been loaded.
     * @effect
     */  
    useEffect(() => {
        console.log("context loaded")
    }, [])

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            isCartModalOpen,
            setIsCartModalOpen,
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