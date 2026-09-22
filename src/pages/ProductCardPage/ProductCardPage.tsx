import { useParams } from "react-router-dom"
import { products } from "../../types/product"
import styles from "./ProductCardPage.module.css"
import type { ProductCardPageProps } from "../../types/product"

function ProductCardPage({ addToCart }: ProductCardPageProps) {

    const { id } = useParams()

    const product = products.find(product => product.id === Number(id))

    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <main className={styles.page}>
            <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.meta}>
                    <div className={styles.dataArea}>
                        <div>
                            <h2 className={styles.title}>{product.name}</h2>
                            <p className={styles.price}>Price: ${product.price.toLocaleString("en-Us")}</p>
                        </div>
                        <div className={styles.desc}>
                            {product.desc}
                        </div>
                        <div className={styles.info}>
                            <p>Category: {product.category}</p>
                            <p>Rating: {product.rating}</p>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <button
                            className={styles.button}
                            onClick={() => {
                                addToCart(product)
                                alert(`${product.name} added to cart!`)
                            }}
                            
                        >
                            Add to cart</button>
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default ProductCardPage