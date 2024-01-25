export interface OrderItem {
    product: string,
    quantity: number,
    price: number,
}

export interface Order {
    id: string,
    email:string,
    items: OrderItem[], //eller orderItems istället?
}

export interface Order {
    customerDetails:  CustomerDetails[];
    cardDetails:  CardDetails[];
    orderDetails: OrderDetails[];
}

export interface OrderDetails {
    //behövs något här? Se orderDetails i Checkout.tsx
}

export interface CustomerDetails {
    firstName: string;
    lastName: string;
    email: string; 
    phone: string;
    address: {
        street: string; 
        zipcode: string;
        country: string;
    };
}

export interface CardDetails {
    number: number;
    expiration: number;
    cvc: number;
}

// export interface OrderWithKey extends Order {
//     key: string,
//     _id: string,
//     orderNumber: number,
//     customer: {
//       firstName: string
//       lastName: string
//       email: string
//     },
//     orderItems: OrderItem[],
//   }
