export interface CartItemProps {
    callbacks: {
        addToCart: () => void;
        removeFromCart: () => void;
        removeProductFromCart: () => void;
    }
}