/**
 * Interface representing a product used in the application.
 * @interface Product
 * @property {number} id - The unique identifier of the product.
 * @property {string} name - The name of the product.
 * @property {number} weight - The weight of the product.
 * @property {string} description - The description of the product.
 * @property {string} balance - The balance of the product.
 * @property {string} type - The type of the product.
 * @property {number} price - The price of the product.
 * @property {string} material - The material of the product.
 * @property {string} shape - The shape of the product.
 * @property {string} brand - The brand of the product.
 * @property {Object} [key] - Additional properties not defined in the interface.
 */
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

/**
 * Interface representing properties passed to the ProductList component.
 * @interface ProductListProps
 * @property {Product[]} products - An array of products to display.
 */
export interface ProductListProps{
    products: Product[]
}

/**
 * Interface representing properties passed to the ProductCard component.
 * @interface ProductCardProps
 * @property {Product} product - The product to display.
 */
export interface ProductCardProps{
    product: Product
}

/**
 * Interface representing sorting options.
 * @interface Sort
 * @property {string} field - The field to sort by.
 * @property {'asc'|'desc'} order - The order of sorting, either 'asc' or 'desc'.
 */
export interface sort{
    field: string
    order: 'asc'|'desc'
}