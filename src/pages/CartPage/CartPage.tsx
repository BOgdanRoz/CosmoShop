import type { CartPageProps } from "../../types/product"
import styles from "./CartPage.module.css"


function CartPage ({ cart, increaseQuantity, decreaseQuantity }: CartPageProps) {

    const total = cart.reduce((sum, item) => {
        return sum + item.product.price * item.quantity
    }, 0)

    return (
    <main className={styles.page}>
        <div className={styles.heading}>
            <h1 className={styles.title}>Cart</h1>
            <p className={styles.subtitle}>Review your selected products</p>
        </div>

        <div className={styles.layout}>
            <section className={styles.items} aria-label="Cart items">
                {cart.map(item => (
                    <article className={styles.item} key={item.product.id}>
                        <div className={styles.image} aria-label="Product preview" />

                        <div className={styles.details}>
                            <h2 className={styles.name}>{item.product.name}</h2>
                            <p className={styles.price}>
                                {item.product.price.toLocaleString("en-Us")}
                            </p>
                        </div>

                        <div className={styles.quantity}>
                            <span className={styles.quantityLabel}>Quantity</span>
                            <div className={styles.quantityControls}>
                                <button
                                    className={styles.quantityButton}
                                    onClick={() => decreaseQuantity(item.product.id)}
                                    aria-label={`Decrease ${item.product.name} quantity`}
                                >
                                    -
                                </button>
                                <span className={styles.quantityValue}>{item.quantity}</span>
                                <button
                                    className={styles.quantityButton}
                                    onClick={() => increaseQuantity(item.product.id)}
                                    aria-label={`Increase ${item.product.name} quantity`}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

            <aside className={styles.summary}>
                <h2 className={styles.summaryTitle}>Order summary</h2>
                <div className={styles.summaryRow}>
                    <span>Products</span>
                    <span>{total.toLocaleString("en-Us")}</span>
                </div>
                <div className={styles.summaryDivider} />
                <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                    <span>Total</span>
                    <strong>{total.toLocaleString("en-Us")}</strong>
                </div>
                <button className={styles.checkoutButton} type="button">
                    Checkout
                </button>
            </aside>
        </div>
    </main>
    )
}

export default CartPage