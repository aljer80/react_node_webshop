import { useState, useEffect } from "react";
import { fetchAllOrders, changeOrder, removeOrder } from "../../utilities/ApiUtilities";
import { Order } from "../../types/order.types";

/**
 * OrderModal component for handling operations on orders.
 * @returns {JSX.Element} JSX for the OrderModal component.
 */

const OrderModal: React.FC = () => {

    const [orders, setOrders] = useState<Order[] | undefined>(undefined);
    const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(undefined);
    const [response, setResponse] = useState<string | undefined>(undefined);

    const handleOrderItemClick = (json: string) => {
        const parsedOrder: Order = JSON.parse(json)
        setSelectedOrder(parsedOrder)
    }

    const handleDeleteButtonClick = (id: number) => {
        deleteOrder(id)
    }

    const handleUpdateOrderSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const orderId: number = form["order-number"].value
        const orderEmail: string = form["order-customer-email"].value
        const orderItems: string = form["order-items"].value
        const response: string = await changeOrder(orderId, {orderEmail, orderItems})
        setResponse(response)
    }

    const deleteOrder = async (id: number) => {
        const response: string = await removeOrder(id)
        setResponse(response)
    }

    useEffect(() => {
        const populate = async () => {
            const orderList: Order[] = await fetchAllOrders()
            setOrders(orderList)
        }
        populate()
        },[])

    return (
        <>
            {response && <div>{response}</div>}
            {selectedOrder &&
            <form id="update-order" onSubmit={handleUpdateOrderSubmit}>
                <input type="number" id="order-number" placeholder="Order #"></input>
                <input type="text" id="order-customer-email" placeholder="Email"></input>
                <input type="text" id="order-items" placeholder="Items"></input>
                <button id="updateOrder" type="submit">Update</button>
            </form>}
            {orders ? <div id="order-list" role="list">
                {orders.map(order => (
                    <div key={order.id} role="list" onClick={() => {handleOrderItemClick(JSON.stringify(order))}}>
                        <p>Customer: <span>{order.email}</span>Items:<pre>{order.items}</pre></p>
                        <button type="button" id="delete-order-button"className="appButton" onClick={() => {handleDeleteButtonClick(order.id)}}>D</button>
                    </div>
                ))}
            </div> : <p>There is a void in the fabric of space!</p>}
        </>
    )
}

export default OrderModal