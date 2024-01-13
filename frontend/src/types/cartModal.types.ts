import { Product } from "./product.types";
import { CartItem} from "../components/CartItem/CartItem";

//ev bygga ut och lägga till clearCart-funktion
export interface CartModal {
    cartItems: CartItem[];
    callbacks: {
      handleAddToCart: (product: Product) => void; 
      handleRemoveFromCart: (productId: string) => void; 
      handleRemoveProductFromCart: (itemId: string) => void; 
      handleCheckoutClick: () => void; 
      handleCloseModalClick: () => void; 
      
    }
  }

  //Eller:
  // export interface CartModal {
  //   cartItems: CartItem[];
  //   handleRemoveFromCart: (itemId: string) => void;
  //   handleRemoveProductFromCart: (itemId: string) => void;
  //   handleCheckoutClick: () => void;
  //   handleCloseModalClick: () => void;
  // }
  