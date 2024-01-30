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
    } = useOrderContext();

    return (
        <section id="order-modal">
            {response &&
            <div id="response-text" role="banner">{response}</div>}
            {selectedOrder &&
            <form id="update-order" onSubmit={handleUpdateOrderSubmit}>
                <input type="number" id="order-number" placeholder="Order #" value={selectedOrder.id}></input>
                <input type="text" id="order-customer-email" placeholder="Email" value={selectedOrder.email}></input>
                <input type="text" id="order-items" placeholder="Items" value={selectedOrder.items}></input>
                <button id="updateOrder" className="appButton" type="submit">Update</button>
            </form>}
            {orders ? <div id="order-list" role="list">
                {orders.map(order => (
                    <section id="order-item" key={order.id} role="listitem">
                        <div id="order-item-text" role="group" onClick={() => {handleOrderItemClick(JSON.stringify(order))}}>
                            <p>Kund: <span>{order.email}</span>Varor:</p><pre>{order.items}</pre>
                        </div>
                        <button type="button" id="delete-order-button"className="appButton" onClick={() => {handleDeleteButtonClick(order.id)}}>Delete</button>
                    </section>
                ))}
            </div> : <p>There is a void in the fabric of space!</p>}
        </section>
    );
}

export default OrderModal