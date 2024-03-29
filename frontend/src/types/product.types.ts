/**
 * Represents a product item.
 */
export interface product{
    id: number
    name: string
    brand: string
    weight: number
    shape: string
    balance: string
    price: number
    type: string
    description: string
    material: string
    [key: string]: any
}

export interface filter{
    brand: string
    shape: string
    balance: string
    weight: number | undefined
    price: number | undefined
}

/**
 * Props interface for a component that displays a list of products.
 */
export interface ProductListProps{
    products: product[] | null
}

/**
 * Props interface for a component that displays a single product card.
 */
export interface ProductCardProps{
    product: product
}

/**
 * Represents sorting criteria.
 */
export interface sort{
    field: string
    order: 'asc'|'desc'
}