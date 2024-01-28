import { PropsWithChildren } from "react"
import { useOrderContext } from "../../contexts/OrderContext"

const OrderModal: React.FC<PropsWithChildren<{}>> = () => {
    const {
        orders,
        response,
        selectedOrder,
        handleUpdateOrderSubmit,
        handleOrderItemClick,
        handleDeleteButtonClick
    } = useOrderContext()

    return (
        <>
            {response &&
            <div>{response}</div>}
            {selectedOrder &&
            <form id="update-order" onSubmit={handleUpdateOrderSubmit}>
                <input type="number" id="order-number" placeholder="Order #"></input>
                <input type="text" id="order-customer-email" placeholder="Email"></input>
                <input type="text" id="order-items" placeholder="Items"></input>
                <button id="updateOrder" type="submit">Update</button>
            </form>}
            {orders ? <div id="order-list" role="list">
                {orders.map(order => (<div id="order-item">
                    <div key={order.id} role="list" onClick={() => {handleOrderItemClick(JSON.stringify(order))}}>
                        <p>Customer: <span>{order.email}</span>Items:</p><pre>{order.items}</pre>
                        </div>
                        <button type="button" id="delete-order-button"className="appButton" onClick={() => {handleDeleteButtonClick(order.id)}}>D</button>
                    </div>
                ))}
            </div> : <p>There is a void in the fabric of space!</p>}
        </>
    )
}

export default OrderModal