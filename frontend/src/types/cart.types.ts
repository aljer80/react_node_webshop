export interface CartItem {
  id: number
  name: string
  brand: string
  price: number
  count: number
  [key: string]: any
}

export interface CartItemProps {
  item: CartItem
}


