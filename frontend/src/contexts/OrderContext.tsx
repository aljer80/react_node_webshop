import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { createOrder, fetchAllOrders, changeOrder, removeOrder } from "../utilities/ApiUtility"
import { order } from "../types/order.types"

export interface OrderContextProps{
    orders: order[]
    selectedOrder: order | null
    response: string
    handleOrderItemClick: (json: string) => void
    handleDeleteButtonClick: (id: number) => void
    handleUpdateOrderSubmit: (e: React.FormEvent) => void
    handlePaymentSuccess: (customerDetails: string, orderDetails: string) => void
}

export const OrderContext = createContext<OrderContextProps | undefined>(undefined)

export const useOrderContext = (): OrderContextProps => {
    const context = useContext(OrderContext)
    if(!context){
        throw new Error("Unable to load context!")
    }

    return context
}

export const OrderContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<order[]>([])
    const [selectedOrder, setSelectedOrder] = useState<order | null>(null)
    const [response, setResponse] = useState<string>('')

    const loadAllOrders = async () => {
        try{
            const fetchedOrders: order[] = await fetchAllOrders()
            console.log("loading orders" + fetchedOrders)
            if(typeof fetchedOrders !== 'string'){
                setOrders(fetchedOrders)
            }
            else{
                setOrders([
                    {
                        id: 1,
                        email: "{emailaddress}",
                        items: "{[Product1, Product2]}",
                    }
                ])
            console.log("Failed to fetch orders!")
            }
        }
        catch(error){
            console.error("Error loading orders:", error)
        }
    }

    const handlePaymentSuccess = (customerDetails:string , orderDetails: string) => {
        newOrder(customerDetails, orderDetails)
    }

    const newOrder = async (customerDetails: string, orderDetails: string) => {
        const data = {
            customerDetails: customerDetails,
            orderDetails: orderDetails
        }
        const operationStatus: string | object = createOrder(data)
        if(typeof operationStatus === 'string'){
            setResponse(operationStatus)
        }
    }

    const handleOrderItemClick = (json: string) => {
        const parsedOrder: order = JSON.parse(json)

        setSelectedOrder(parsedOrder)
    }

    const handleDeleteButtonClick = (id: number) => {
        deleteOrder(id)
    }

    const handleUpdateOrderSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const orderId: number = parseInt(formData.get('order-number') as string)
        const customerDetails: string = formData.get('order-customer-details') as string
        const orderItems: string = formData.get('order-items') as string
        updateOrder(orderId, [customerDetails, orderItems])
        setSelectedOrder(null)
    }

    const updateOrder = async (orderId: number, data: string[]) => {
        const operationStatus: string | object = await changeOrder(orderId, data)
        if(typeof operationStatus === 'string'){
            setResponse(operationStatus)
        }
    }

    const deleteOrder = async (id: number) => {
        if(selectedOrder){
            const operationStatus: string | object = await removeOrder(id)
            if(typeof operationStatus === 'string'){
                setResponse(operationStatus)
                setOrders(orders.filter(order => order.id !== id))
            }
        }
    }

    useEffect(() => {
        console.log("mounting ordercontext")
        loadAllOrders()
    }, []);

    return (
        <OrderContext.Provider
        value={{
            orders,
            response,
            selectedOrder,
            handleOrderItemClick,
            handleDeleteButtonClick,
            handleUpdateOrderSubmit,
            handlePaymentSuccess
        }}>
            {children}
        </OrderContext.Provider>
    )
}