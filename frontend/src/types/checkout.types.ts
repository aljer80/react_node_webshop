import { cartItem } from "./cart.types"

export interface PaymentData {
    paymentMethodId: string
    currency: string
    amount: number
}

export interface paymentdetailsform{
    legal_name: string
    family_name: string
    email_address: string
    phone_number: number
    address_line_1: string
    address_line_2: string
    address_line_3: string
    card_number: number
    cvv_number: number
    card_expiration: string
    cart: cartItem[]
}

export interface customerDetails {
    firstName: string
    lastName: string
    email: string
    phone: number
    address: string[]
}

export interface orderDetails{
    items: cartItem[]
}

export interface cardDetails{
    number: number
    cvv: number
    expiration: string
}
