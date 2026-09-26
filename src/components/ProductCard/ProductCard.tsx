import type { ProductCardProps } from "../../types/product"
import { Link } from "react-router-dom"
import { getProductImage } from "../../utils/productImage"
import styles from "./ProductCard.module.css"

function ProductCard({ product }: ProductCardProps) {
    return (
        <Link to={`/products/${product.id}`} className={styles.card}>
            <img className={styles.image} src={getProductImage(product)} alt={product.name} />

            <div className={styles.content}>
                <h2 className={styles.name}>{product.name}</h2>
                <div className={styles.meta}>
                    <span>{product.category}</span>
                    <span className={styles.rating}>{product.rating} ★</span>
                </div>
                <p className={styles.price}>${product.price.toLocaleString("en-Us")}</p>
            </div>
        </Link>
    )
}

export default ProductCard