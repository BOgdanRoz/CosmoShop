import type { MyOrdersPageProps, Order } from "../../types/order"

function MyOrdersPage ({ userName }: MyOrdersPageProps) {

    const ordersJSON = userName === null
        ? null
        : localStorage.getItem(`orders_${userName}`)

    const orders: Order[] = ordersJSON
        ? JSON.parse(ordersJSON)
        : []

    return (
        <main>
            <h2>My orders</h2>

        {(orders.length === 0 ? (
            <p>No orders yet</p>
        ) : (
            orders.map(order => (
                <div key={order.id}>
                    num of order: {new Date(order.createdAt).toLocaleString("ua-UA")}
                    sum od order: {order.total}
                </div>
            ))
        ))}

        </main>
    )
}

export default MyOrdersPage