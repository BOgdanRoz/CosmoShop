import { products } from "../../types/product"
import ProductCard from "../../components/ProductCard/ProductCard"
import styles from "./ProductsPage.module.css"

function ProductsPage() {
    return (
        <main className={styles.page}>
            <div className={styles.imageBanner}>
                <img src="./public/Banner.png" alt="" className={styles.img} />
            </div>
            <div className={styles.grid}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </main>
    )
}

export default ProductsPage