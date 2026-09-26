import type { MyOrdersPageProps, Order } from "../../types/order"
import { Link } from "react-router-dom"
import { FaBoxOpen, FaCalendarAlt, FaShoppingBag } from "react-icons/fa"
import { getProductImage } from "../../utils/productImage"
import styles from "./MyOrdersPage.module.css"

function MyOrdersPage({ userName }: MyOrdersPageProps) {
    const ordersJSON = userName === null ? null : localStorage.getItem(`orders_${userName}`)
    const orders: Order[] = ordersJSON ? JSON.parse(ordersJSON) : []

    return (
        <main className={styles.page}>
            <header className={styles.heading}>
                <div>
                    <h1 className={styles.title}>My orders</h1>
                    <p className={styles.subtitle}>Your order history and details</p>
                </div>
            </header>

            {orders.length === 0 ? (
                <section className={styles.emptyState}>
                    <div className={styles.emptyIcon}>
                        <FaShoppingBag aria-hidden="true" />
                    </div>
                    <h2 className={styles.emptyTitle}>No orders yet</h2>
                    <p className={styles.emptyText}>
                        Once you place an order, it will appear here.
                    </p>
                    <Link className={styles.shopLink} to="/">
                        Explore the shop
                    </Link>
                </section>
            ) : (
                <section className={styles.orderList} aria-label="Order history">
                    {orders.map(order => {
                        const itemCount = order.items.reduce((count, item) => count + item.quantity, 0)

                        return (
                            <article className={styles.orderCard} key={order.id}>
                                <header className={styles.orderHeader}>
                                    <div>
                                        <span className={styles.orderLabel}>Order</span>
                                        <h2 className={styles.orderNumber}>#{order.id}</h2>
                                    </div>
                                    <div className={styles.orderDate}>
                                        <FaCalendarAlt aria-hidden="true" />
                                        <time dateTime={order.createdAt}>
                                            {new Date(order.createdAt).toLocaleString("en-US", {
                                                dateStyle: "medium", timeStyle: "short"
                                            })}
                                        </time>
                                    </div>
                                    <div className={styles.orderTotal}>
                                        <span className={styles.totalLabel}>Order total</span>
                                        <strong>${order.total.toLocaleString("en-US")}</strong>
                                    </div>
                                </header>
                                <div className={styles.orderItems}>
                                    <div className={styles.itemsHeading}>
                                        <FaBoxOpen aria-hidden="true" />
                                        <span>{itemCount} {itemCount === 1 ? "item" : "items"}</span>
                                    </div>
                                    <ul className={styles.itemList}>
                                        {order.items.map(item => (
                                            <li className={styles.orderItem} key={item.product.id}>
                                                <div className={styles.info}>
                                                    <img
                                                        className={styles.productImage}
                                                        src={getProductImage(item.product)}
                                                        alt=""
                                                    />
                                                    <div className={styles.productInfo}>
                                                    <span className={styles.productName}>{item.product.name}</span>
                                                    <span className={styles.quantity}>Qty: {item.quantity}</span>
                                                    </div>
                                                </div>
                                                <strong className={styles.itemPrice}>
                                                    ${(item.product.price * item.quantity).toLocaleString("en-US")}
                                                </strong>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        )
                    })}
                </section>
            )}
        </main>
    )
}

export default MyOrdersPage