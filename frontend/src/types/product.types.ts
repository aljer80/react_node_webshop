export interface Product {
    id: number,
    name:string,
    weight: number,
    description: string,
    balance: string,
    type: string,
    price: number,
    material: string,
    shape: string,
    brand: string,
    [key: string]: any
  }


export interface ProductListProps{
    products: Product[]
}

export interface ProductCardProps{
    product: Product
}

export interface sort{
    field: string
    order: 'asc'|'desc'
}