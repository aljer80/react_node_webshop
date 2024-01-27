/**
 * Represents an item in the shopping cart.
 */
export interface cartItem{
  id: number
  name: string
  brand: string
  price: number
  count: number
  [key: string]: any
}
/**
 * Props for the component rendering a single item in the shopping cart.
 */
export interface CartItemCardProps{
  item: cartItem
}


