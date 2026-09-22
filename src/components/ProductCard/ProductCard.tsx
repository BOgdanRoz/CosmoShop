import type { ProductCardProps } from "../../types/product"
import { Link } from "react-router-dom"
import styles from "./ProductCard.module.css"

function ProductCard({ product }: ProductCardProps) {
    return (
        <Link to={`/products/${product.id}`} className={styles.card}>
            <div className={styles.image} aria-label="Product preview" />

            <div className={styles.content}>
                <h2 className={styles.name}>{product.name}</h2>
                <div className={styles.meta}>
                    <span>{product.category}</span>
                    <span>{product.rating} ★</span>
                </div>
                <p className={styles.price}>{product.price.toLocaleString("en-Us")}</p>
            </div>
        </Link>
    )
}

export default ProductCard