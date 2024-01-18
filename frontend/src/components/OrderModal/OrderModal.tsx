import { useState, useEffect } from "react";
import { getAllOrders, getOrder, updateOrder, deleteOrder } from "../../utilities/ApiUtilities";
import { Order } from "../../types/order.types";

interface OrderModalProps{ }

const OrderModal: React.FC<OrderModalProps> = () => {

    const [orders, setOrders] = useState<Order[]>([])

    useEffect(() => {
        const populate = async () => {
            const orderList = await getAllOrders();
            setOrders(orderList)
        }
        populate();
    }, [])

    async function handleOrderOperation(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const operation = e.currentTarget["order-operation"].value;
        const id = e.currentTarget["id"].value;
        //const id = (e.currentTarget["id"] as HTMLInputElement).value;
        const email = e.currentTarget["email"].value;
        const item = e.currentTarget["item"].value;

        let data: Order | undefined;

        switch (operation) {
            case "GET":
                await getOrder(id)
                break;
                case "GET_ALL":
                    await getAllOrders()
                    break;
            case "PUT":
                data = { id, email, items:[{ item }] };
                await updateOrder(id, data)
                break;
            case "DELETE":
                await deleteOrder(id)
                break;
            default:
                throw new Error("Unhandled operation!");
        }
   }


  return (
    <div>
        <form onSubmit={handleOrderOperation}>
            <select id="order-operation">
                <option value="GET" selected>Find</option>
                <option value="PUT">Update</option>
                <option value="DELETE">Delete</option>
            </select>
            <input id="id" type="number" placeholder="id"></input>
            <input id="email" type="text" placeholder="email"></input>
            <input id="item" type="text" placeholder="item"></input>
            <button type="submit">Request</button>
            <button id="order-operation" value="GET_ALL"onClick={handleOrderOperation}>Get all</button>
        </form>
        <div id="order-list" role="list">
            <h2>Order List</h2>
            {orders.map((order) => (
                <li key={order.id}>
                    <strong>Order ID:</strong>{order.id}, 
                    <strong>Customer:</strong> {order.email}, 
                    <strong>Item:</strong> {order.items}
                    {/* {order.items[0].item} Assuming there's only one item in the array */}
                </li>
            ))}
        </div>
    </div>
  );
}

export default OrderModal