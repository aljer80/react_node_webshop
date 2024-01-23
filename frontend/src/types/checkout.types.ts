export interface CustomerDetails {
    firstName: string;
      lastName: string;
      email: string; 
      phone: string;
      address: {
        street: string; 
        zipCode: string;
        country: string;
    };
}

export interface CardDetails {
    number: string;
    expirations: string;
    cvc: string;
}

export interface OrderDetails {
    //behövs något här? Se orderDetails i Checkout.tsx
}

export interface Order {
    customerDetails:  CustomerDetails;
    //cardDetails:  CardDetails;
    orderDetails: OrderDetails;
}
