export interface Order {
    id: string,
    email:string,
    items: OrderItem[],
}

export interface OrderItem {
    item: string;
}