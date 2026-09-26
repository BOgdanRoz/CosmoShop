import { useParams } from "react-router-dom"
import { products } from "../../types/product"
import styles from "./ProductCardPage.module.css"
import type { ProductCardPageProps } from "../../types/product"
import { useState } from "react"
import { FaCartPlus, FaTag } from "react-icons/fa"

function ProductCardPage({ addToCart }: ProductCardPageProps) {

    const [notification, setNotification] = useState("")


    const { id } = useParams()

    const product = products.find(product => product.id === Number(id))

    if (!product) {
        return <p>Product not found</p>
    }

    return (
        <>
        {notification && (
            <div className={styles.notificationn}>
                {notification}
            </div>
        )}
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
                            <p><FaTag aria-hidden="true" /><span>Category: {product.category}</span></p>
                            <p>Rating: {product.rating} ★</p>
                        </div>
                    </div>
                    <div className={styles.buttonArea}>
                        <button
                            className={styles.button}
                            onClick={() => {
                                const addedProduct = addToCart(product)

                                if (addedProduct) {
                                    setNotification(`${product.name} added to cart!`)

                                    setTimeout(() => {
                                        setNotification("")
                                    }, 3000)
                                }  
                            }}
                            
                        >
                            <FaCartPlus aria-hidden="true" /><span>Add to cart</span></button>
                    </div>
                </div>
                
            </div>
        </main>
        </>
    )
}

export default ProductCardPage