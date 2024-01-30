import { orderDetails, customerDetails, cardDetails } from "./checkout.types"

export interface order{
    id: number
    email: string
    items: string
}

export interface orderEntry{
    customerDetails: customerDetails
    orderDetails: orderDetails
    cardDetails: cardDetails
}