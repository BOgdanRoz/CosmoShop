import type { CartPageProps } from "../../types/product"


function CartPage ({ cart }: CartPageProps) {
    return (
    <main>
        <h1>Cart</h1>

        {cart.map(item => (
            <div key={item.product.id}>
                <h2>{item.product.name}</h2>
                <p>Price: {item.product.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
        ))}
    </main>
    )
}

export default CartPage