import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { createOrder, fetchAllOrders, fetchOrder, changeOrder, removeOrder } from "../utilities/ApiUtilities"
import { order } from "../types/order.types"

export interface OrderContextProps{
}

export const OrderContext = createContext<OrderContextProps | undefined>(undefined)

export const useOrderContext = (): OrderContextProps => {
    const context = useContext(OrderContext);
    if(!context){
        throw new Error("Unable to load context!")
    }

    return context
}
export const OrderContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<order[]>(new Array())

    useEffect(() => {
        const loadAllOrders = async () => {
            try{
                const fetchedOrders: order[] = await fetchAllOrders()
                fetchedOrders.length > 0 ? setOrders(fetchedOrders) : setOrders([
                    {
                        id: 1,
                        customerDetails: "{Full Name, emailaddress, address}",
                        orderDetails: "{[Product1, Product2]}"
                    }
                ])
            }
            catch(error){
                throw error
            }
        }
            loadAllOrders()
    }, [orders]);

    return (
        <OrderContext.Provider
        value={{
        }}>
            {children}
        </OrderContext.Provider>
    )
}